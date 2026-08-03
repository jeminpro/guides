# Guides

Print-first maths guides built with Astro and TypeScript. Pick a guide on the home page, browse A4 cheat sheets, and print. Notes sync optionally via Firebase.

## Features

- **Printable A4 sheets** — exact `210mm × 297mm` pages
- **Maths Tutor** — Primary & 11+ reference booklet (Maths Racer branding on-sheet)
- **Notes** — per-guide sticky notes with export/import and optional cloud sync
- **Multi-guide** — add more guides via the registry pattern

## Commands

```powershell
npm install
npm run dev
npm run check
npm run build
npm run check:layout -- --guide=maths-tutor
```

Site base path is `/guides` → deployed at `https://jeminpro.com/guides`.

## Project layout

```
src/
  pages/
    index.astro              # guide picker
    notes/                   # notes mosaic
    <id>/index.astro         # stacked A4 viewer
  guides/
    registry.ts
    <id>/                    # pages, styles, meta, AGENTS.md
  components/                # GuideToolbar, AuthControl
  layouts/                   # SiteLayout, GuideLayout
  lib/                       # notes, firebase, withBase
```

## Add a guide

See root `AGENTS.md` and copy the `maths-tutor` folder pattern.

## Deploy

GitHub Actions (`.github/workflows/deploy.yml`) builds with Astro and publishes to GitHub Pages. Set `PUBLIC_FIREBASE_*` secrets for Notes sync.
