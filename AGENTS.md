# Guides agent guide

Astro + TypeScript print-first site. Each topic is an isolated guide with typed metadata, local page components/styles, and a home-page registry entry.

## Commands

```powershell
npm run dev
npm run check
npm run build
npm run check:layout
npm run check:layout -- --guide=maths-guide
npm run watch:layout -- --guide=maths-guide
```

- `npm run check` — TypeScript/Astro diagnostics only.
- `npm run check:layout -- --guide=<id>` — browser A4 layout check for one guide. Prefer this while editing a topic.
- Full `npm run check:layout` — required after shared component/layout edits, or before finishing a multi-guide change.

## Project map

- `src/pages/index.astro` — home picker.
- `src/guides/registry.ts` — guide cards on the home page.
- `src/guides/<id>/` — topic pages, styles, and `AGENTS.md`.
- `src/pages/<id>/index.astro` — guide route (stacks all A4 sheets).
- `src/components/` and `src/layouts/` — shared site shell, guide viewer toolbar, Notes/Auth.
- `src/pages/notes/` — Notes mosaic (localStorage + optional Firebase sync).
- `scripts/check-layout.mjs` — Playwright A4 checks against the Astro server.

## Add a guide

1. Copy `src/guides/maths-guide/` to `src/guides/<id>/` and adapt meta/pages/styles.
2. Add `src/pages/<id>/index.astro` that imports that guide’s sheets and CSS.
3. Register metadata in `src/guides/registry.ts`.
4. Write `src/guides/<id>/AGENTS.md`.
5. Run `npm run check` and `npm run check:layout -- --guide=<id>`.

## Ownership boundary

- Edit shared files only when changing the A4 viewer contract or site chrome. Shared edits require a full layout check.
- Keep guide styles inside that guide’s folder. Do not import another guide’s components.
- Avoid `:global()` for guide-specific rules outside the guide’s own CSS.
- Prefer typed `meta.ts` plus small data modules for lookup tables; keep dense page markup in `pages/PageNN.astro` + `page-NN-body.html` (or inline Astro) so LLMs can edit one sheet at a time.

## A4 invariants

- `.page` remains exactly `210mm × 297mm`.
- `@page` remains `size: A4` with `margin: 0`.
- Guide sheets use the Maths-Racer flex page shell (header / body / footer), not the old worksheet four-row grid.
- Do not shrink text to fix overflow — tighten spacing or content instead.
- Viewer chrome and Notes UI must not print.
- On screen, `.page-frame` may scale sheets to fit the viewport width; print and layout checks stay unscaled A4.

## Notes

- Storage key is `guides-notes` (separate from parent worksheets app on the same origin).
- Note ids are guide ids from the registry, plus reserved `general`.
