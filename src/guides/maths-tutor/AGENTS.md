# Maths Guide - Tutor

Twenty A4 cheat sheets for Primary & 11+ maths (Maths Racer on-sheet brand). Covers place value through word problems and Venns.

## Layout

- Route: `src/pages/maths-tutor/index.astro`
- Meta: `meta.ts` (page list, guide id/title)
- Shell: `GuidePageShell.astro` (brand header, footer `n / 20`)
- Sheets: `Sheets.astro` imports `pages/Page01.astro` … `Page20.astro`
- Body markup: `pages/page-NN-body.html` loaded via `?raw` into each page component (edit the HTML fragment to change content)
- Styles: `styles/guide.css`

## Constraints

- Keep twenty pages; update `PAGE_COUNT` / footer total if that ever changes.
- Preserve A4 density — page-specific classes (`p1`…`p14`, `audit-15`…`audit-20`) on `.page` control squeeze.
- Do not import other guides’ files.
- Verify: `npm run check:layout -- --guide=maths-tutor`
