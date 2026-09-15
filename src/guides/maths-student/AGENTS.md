# Maths Guide - Student

Ten A4 cheat sheets for kids (Maths Racer on-sheet brand). Condensed Primary & 11+ rules — one method and one example each. The tutor booklet stays the deep reference.

## Layout

- Route: `src/pages/maths-student/index.astro`
- Meta: `meta.ts` (page list, guide id/title)
- Shell: `GuidePageShell.astro` (brand header, footer `n / 10`)
- Sheets: `Sheets.astro` imports `pages/Page01.astro` … `Page10.astro`
- Body markup: `pages/page-NN-body.html` loaded via `?raw` into each page component
- Styles: `styles/guide.css` (tutor widgets, no tutor squeeze classes)

## Constraints

- Keep ten pages; update `PAGE_COUNT` / footer total if that ever changes.
- Larger type than the tutor booklet — do not shrink text to fix overflow.
- Do not import other guides’ files.
- Verify: `npm run check:layout -- --guide=maths-student`
