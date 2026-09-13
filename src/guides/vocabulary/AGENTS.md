# Vocabulary guide

A4 word-study sheets (Wordsmith on-sheet brand). Each page is one set: ten words with meaning, synonyms, antonyms, an example sentence, plus a short passage that uses every word. The header shows the brand only — no set pill.

## Layout

- Route: `src/pages/vocabulary/index.astro`
- Meta: `meta.ts` (page list, guide id/title)
- Shell: `GuidePageShell.astro` (brand header, footer `n / N`)
- Sheets: `Sheets.astro` imports `pages/PageNN.astro`
- Renderer: `VocabSheet.astro` reads a typed set from `data/`
- Styles: `styles/guide.css`

## Content model

- Word lists live in `data/set-NN.ts` as a `VocabSet` (see `data/types.ts`).
- Do not hand-write card markup — add a set, a thin `PageNN.astro`, and bump `PAGE_COUNT`.
- Keep ten words per sheet so the card grid plus passage still fit one A4 page.

## Constraints

- Update `PAGE_COUNT` / footer total when adding sheets.
- Page-specific squeeze classes (`v1`, …) on `.page` control density.
- Do not import other guides' files.
- Verify: `npm run check:layout -- --guide=vocabulary`
