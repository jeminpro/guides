# Home Fitness guide

Fourteen A4 sheets for a no-gym fitness plan (Home Athlete on-sheet brand): contents/goals, weekly routine, three strength workouts, cardio/running plan, four-page exercise library, flexibility, calisthenics milestones, nutrition, habits & tracking.

## Layout

- Route: `src/pages/home-fitness/index.astro`
- Meta: `meta.ts` (page list, guide id/title)
- Shell: `GuidePageShell.astro` (brand header, footer `n / 14`)
- Sheets: `Sheets.astro` imports `pages/Page01.astro` … `Page14.astro`
- Body markup: `pages/page-NN-body.html` loaded via `?raw` into each page component (edit the HTML fragment to change content)
- Styles: `styles/guide.css`

## Content model

- Pages 3–5 (workouts) list exercises with a `→ p.N` cross-reference into the exercise library (pages 7–10). Keep those page numbers in sync if pages move.
- Exercise library uses `.ex-card` blocks: muscles/equipment chips, numbered steps, do/avoid cues, easier/harder progressions.
- Sets, reps and progressions are the programme's source of truth — keep workout pages and library cards consistent with each other.

## Constraints

- Keep fourteen pages; update `PAGE_COUNT` / footer total if that ever changes.
- Page-specific squeeze classes (`f1`…`f14`) on `.page` control density.
- Do not import other guides' files.
- Verify: `npm run check:layout -- --guide=home-fitness`
