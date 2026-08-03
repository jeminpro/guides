import { chromium } from "playwright";
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import astroConfig from "../astro.config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const A4 = {
  widthPx: (210 * 96) / 25.4,
  heightPx: (297 * 96) / 25.4
};
const TOLERANCE_PX = 1;
const ORIGIN = "http://127.0.0.1:4321";
// The dev/preview server serves pages under the configured `base`.
const basePath = (astroConfig.base ?? "").replace(/^\/|\/$/g, "");
const BASE_URL = basePath ? `${ORIGIN}/${basePath}` : ORIGIN;

function parseArgs(argv) {
  let guide = null;
  let watch = false;
  let preview = false;

  for (const arg of argv) {
    if (arg === "--watch") watch = true;
    else if (arg === "--preview") preview = true;
    else if (arg.startsWith("--guide=")) guide = arg.slice("--guide=".length);
    // Back-compat alias
    else if (arg.startsWith("--workbook=")) guide = arg.slice("--workbook=".length);
  }

  return { guide, watch, preview };
}

function discoverGuides() {
  const guidesDir = path.join(root, "src", "guides");
  return fs
    .readdirSync(guidesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((id) =>
      fs.existsSync(path.join(root, "src", "pages", id, "index.astro"))
    )
    .sort()
    .map((id) => ({
      id,
      path: `/${id}/`,
      sharedPaths: [
        path.join("src", "components"),
        path.join("src", "layouts")
      ],
      localPaths: [
        path.join("src", "guides", id),
        path.join("src", "pages", id)
      ]
    }));
}

async function waitForServer(url, timeoutMs = 60000) {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // retry
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Timed out waiting for ${url}`);
}

function startAstro(mode) {
  const astroCli = path.join(root, "node_modules", "astro", "bin", "astro.mjs");
  const args =
    mode === "preview"
      ? [astroCli, "preview", "--host", "127.0.0.1", "--port", "4321"]
      : [astroCli, "dev", "--host", "127.0.0.1", "--port", "4321"];

  const child = spawn(process.execPath, args, {
    cwd: root,
    stdio: ["ignore", "pipe", "pipe"],
    env: { ...process.env, BROWSER: "none" }
  });

  let output = "";
  child.stdout.on("data", (chunk) => {
    output += chunk.toString();
  });
  child.stderr.on("data", (chunk) => {
    output += chunk.toString();
  });

  child.on("exit", (code) => {
    if (code && code !== 0) {
      console.error(output);
    }
  });

  return child;
}

async function inspectGuide(browser, guide) {
  const page = await browser.newPage({
    viewport: {
      width: Math.round(A4.widthPx),
      height: Math.round(A4.heightPx)
    }
  });

  await page.emulateMedia({ media: "print" });
  await page.goto(`${BASE_URL}${guide.path}`, { waitUntil: "networkidle" });

  const expectedPages = await page.evaluate(() => {
    const main = document.getElementById("pages");
    return Number(main?.dataset.expectedPages || 0);
  });

  if (!expectedPages) {
    await page.close();
    return {
      pageCount: 0,
      sizes: [],
      failures: ["missing data-expected-pages on #pages"]
    };
  }

  await page.waitForFunction(
    (expected) => document.querySelectorAll(".page").length === expected,
    expectedPages
  );
  await page.evaluate(() => document.fonts.ready);

  const result = await page.evaluate(
    ({ a4, tolerance, expected }) => {
      const round = (value) => Math.round(value * 100) / 100;
      const pages = [...document.querySelectorAll(".page")];
      const failures = [];

      if (document.documentElement.scrollWidth > Math.ceil(a4.widthPx)) {
        failures.push(
          `document horizontal overflow: ${document.documentElement.scrollWidth}px`
        );
      }

      const firstPageTop = pages.length ? pages[0].getBoundingClientRect().top : 0;
      if (Math.abs(firstPageTop) > tolerance) {
        const chrome = [...document.body.children]
          .filter((element) => {
            if (element.contains(pages[0])) return false;
            const rect = element.getBoundingClientRect();
            return rect.height > 0;
          })
          .map((element) => {
            const name = element.className
              ? `${element.tagName.toLowerCase()}.${String(element.className)
                  .trim()
                  .replace(/\s+/g, ".")}`
              : element.tagName.toLowerCase();
            return `${name} (${round(element.getBoundingClientRect().height)}px)`;
          });
        failures.push(
          `page 1 offset by ${round(firstPageTop)}px in print: ` +
            `${chrome.join(", ") || "unknown element"} must be hidden`
        );
      }

      pages.forEach((pageElement, pageIndex) => {
        const rect = pageElement.getBoundingClientRect();
        const widthError = Math.abs(rect.width - a4.widthPx);
        const heightError = Math.abs(rect.height - a4.heightPx);

        if (widthError > tolerance || heightError > tolerance) {
          failures.push(
            `page ${pageIndex + 1} wrong size: ${round(rect.width)} × ${round(rect.height)}px`
          );
        }

        if (
          pageElement.scrollWidth > pageElement.clientWidth + tolerance ||
          pageElement.scrollHeight > pageElement.clientHeight + tolerance
        ) {
          failures.push(
            `page ${pageIndex + 1} overflow: scroll ${pageElement.scrollWidth} × ` +
              `${pageElement.scrollHeight}px, client ${pageElement.clientWidth} × ` +
              `${pageElement.clientHeight}px`
          );
        }

        const pageRect = pageElement.getBoundingClientRect();
        const clipped = [...pageElement.querySelectorAll("*")].filter((element) => {
          const childRect = element.getBoundingClientRect();
          if (childRect.width === 0 && childRect.height === 0) return false;
          return (
            childRect.left < pageRect.left - tolerance ||
            childRect.right > pageRect.right + tolerance ||
            childRect.top < pageRect.top - tolerance ||
            childRect.bottom > pageRect.bottom + tolerance
          );
        });

        if (clipped.length) {
          const examples = clipped.slice(0, 3).map((element) => {
            const name = element.className
              ? `${element.tagName.toLowerCase()}.${String(element.className)
                  .trim()
                  .replace(/\s+/g, ".")}`
              : element.tagName.toLowerCase();
            return name;
          });
          failures.push(
            `page ${pageIndex + 1} clipping: ${clipped.length} element(s) ` +
              `outside page bounds (${examples.join(", ")})`
          );
        }
      });

      if (pages.length !== expected) {
        failures.push(`wrong page count: expected ${expected}, found ${pages.length}`);
      }

      return {
        pageCount: pages.length,
        sizes: pages.map((element) => {
          const rect = element.getBoundingClientRect();
          return `${round(rect.width)} × ${round(rect.height)}px`;
        }),
        failures
      };
    },
    { a4: A4, tolerance: TOLERANCE_PX, expected: expectedPages }
  );

  await page.close();
  return result;
}

async function runChecks(browser, guides) {
  const startedAt = Date.now();
  let failureCount = 0;

  console.log("A4 print layout check");
  console.log(
    `Target: ${A4.widthPx.toFixed(2)} × ${A4.heightPx.toFixed(2)}px at 96 CSS px/in`
  );
  console.log(`Guides: ${guides.map((guide) => guide.id).join(", ")}`);

  const results = await Promise.all(
    guides.map((guide) => inspectGuide(browser, guide))
  );

  results.forEach((result, index) => {
    console.log(`\n${guides[index].id} (${guides[index].path})`);
    console.log(`  pages: ${result.pageCount}`);
    console.log(`  sizes: ${result.sizes.join(", ") || "(none)"}`);

    if (result.failures.length === 0) {
      console.log("  clipping: PASS");
      console.log("  overflow: PASS");
    } else {
      failureCount += result.failures.length;
      result.failures.forEach((failure) => console.log(`  FAIL: ${failure}`));
    }
  });

  console.log(
    failureCount === 0
      ? "\nPASS: every guide page is exact A4 with no clipping or overflow."
      : `\nFAIL: ${failureCount} layout issue(s) found.`
  );
  console.log(`Checked in ${Date.now() - startedAt}ms`);
  return failureCount;
}

function pathAffectsGuide(changedPath, guide) {
  const normalised = changedPath.split(path.sep).join("/");
  const sharedHit = guide.sharedPaths.some((prefix) =>
    normalised.startsWith(prefix.split(path.sep).join("/"))
  );
  if (sharedHit) return "shared";

  const localHit = guide.localPaths.some((prefix) =>
    normalised.startsWith(prefix.split(path.sep).join("/"))
  );
  return localHit ? "local" : null;
}

function watchSources(browser, allGuides, selectedIds) {
  let running = false;
  let queued = null;
  let debounce = null;

  async function rerun(reason, ids) {
    if (running) {
      queued = { reason, ids };
      return;
    }
    running = true;
    const targets = allGuides.filter((guide) => ids.has(guide.id));
    console.log(`\n--- ${reason} at ${new Date().toLocaleTimeString()} ---`);
    await runChecks(browser, targets);
    running = false;

    if (queued) {
      const next = queued;
      queued = null;
      await rerun(next.reason, next.ids);
    }
  }

  const watchRoots = [
    path.join(root, "src", "components"),
    path.join(root, "src", "layouts"),
    path.join(root, "src", "guides"),
    path.join(root, "src", "pages")
  ];

  for (const watchRoot of watchRoots) {
    if (!fs.existsSync(watchRoot)) continue;
    fs.watch(watchRoot, { recursive: true }, (_eventType, filename) => {
      if (!filename || !/\.(astro|css|ts|js|mjs|html)$/i.test(filename)) return;
      const changedPath = path.relative(root, path.join(watchRoot, filename));
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const ids = new Set();
        let sharedChange = false;

        for (const guide of allGuides) {
          if (selectedIds && !selectedIds.has(guide.id)) continue;
          const hit = pathAffectsGuide(changedPath, guide);
          if (hit === "shared") sharedChange = true;
          if (hit === "local") ids.add(guide.id);
        }

        if (sharedChange) {
          for (const guide of allGuides) {
            if (!selectedIds || selectedIds.has(guide.id)) ids.add(guide.id);
          }
        }

        if (ids.size === 0) return;
        rerun(`${changedPath} changed`, ids);
      }, 150);
    });
  }

  console.log("\nWatching guide sources. Press Ctrl+C to stop.");
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  const allGuides = discoverGuides();
  const selected = args.guide
    ? allGuides.filter((guide) => guide.id === args.guide)
    : allGuides;

  if (args.guide && selected.length === 0) {
    console.error(`Unknown guide: ${args.guide}`);
    console.error(`Available: ${allGuides.map((guide) => guide.id).join(", ")}`);
    process.exitCode = 1;
    return;
  }

  if (args.preview) {
    const astroCli = path.join(root, "node_modules", "astro", "bin", "astro.mjs");
    const build = spawn(process.execPath, [astroCli, "build"], {
      cwd: root,
      stdio: "inherit"
    });
    await new Promise((resolve, reject) => {
      build.on("exit", (code) =>
        code === 0 ? resolve() : reject(new Error("astro build failed"))
      );
    });
  }

  const server = startAstro(args.preview ? "preview" : "dev");
  try {
    await waitForServer(`${BASE_URL}/`);
    const browser = await chromium.launch({ headless: true });
    const failureCount = await runChecks(browser, selected);

    if (args.watch) {
      const selectedIds = args.guide ? new Set([args.guide]) : null;
      watchSources(browser, allGuides, selectedIds);
      process.on("SIGINT", async () => {
        await browser.close();
        server.kill();
        process.exit(0);
      });
      return;
    }

    await browser.close();
    process.exitCode = failureCount === 0 ? 0 : 1;
  } finally {
    if (!args.watch) {
      server.kill();
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
