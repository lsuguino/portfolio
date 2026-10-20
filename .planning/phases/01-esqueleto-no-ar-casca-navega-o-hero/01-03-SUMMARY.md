---
phase: 01-esqueleto-no-ar-casca-navega-o-hero
plan: 03
subsystem: ui
tags: [open-graph, meta-tags, seo, favicon, twitter-card]

requires:
  - phase: 01-01
    provides: index.html, content.ts (name/role/pitch/email)
provides:
  - Open Graph + Twitter-card meta tags in index.html
  - Placeholder 1200x630 og-image.png + source og-image.svg
  - favicon.svg (LS monogram)
affects: [phase-03-sobre-contato]

actuals:
  tokens: 2600
  tasks: 1
  commits: 1

tech-stack:
  added: []
  patterns:
    - "OG/meta text mirrors src/data/content.ts strings so the shared preview matches the page"
    - "public/ assets (og-image.png, favicon.svg) copied verbatim into dist/ by Vite"

key-files:
  created:
    - public/og-image.png
    - public/og-image.svg
    - public/favicon.svg
  modified:
    - index.html
  removed:
    - public/vite.svg

key-decisions:
  - "og-image.png rasterized from an authored SVG (name + role + pitch) via sharp as a one-off; sharp then uninstalled — the PNG ships as a static asset, no runtime dependency added"
  - "og:url and og:image left as relative placeholders ('/', '/og-image.png') with an index.html comment + README note to swap in the absolute deploy origin post-deploy (D-10 allows refining OG art/URL after this phase)"

patterns-established:
  - "Single source of truth: OG/meta copy echoes content.ts identity strings (D-06/07/08)"

requirements-completed: [META-01, HERO-01]

coverage:
  - id: D1
    description: "index.html carries <title>, meta description, OG (type/locale/title/description/image/url) and Twitter-card tags; built dist/index.html retains them"
    requirement: "META-01"
    verification:
      - kind: other
        ref: "grep og:image/og:title/name=description in dist/index.html (1/1/1); npm run build exit 0"
        status: pass
    human_judgment: false
  - id: D2
    description: "Non-blank 1200x630 og-image.png and favicon.svg ship in dist/"
    requirement: "META-01"
    verification:
      - kind: other
        ref: "test -f dist/og-image.png (54007 bytes, 1200x630) && test -f dist/favicon.svg"
        status: pass
    human_judgment: false
  - id: D3
    description: "Shared-link preview actually unfurls (title + description + image) on a real inspector/messaging app, and og:url/og:image point at the absolute deployed origin"
    requirement: "META-01"
    verification: []
    human_judgment: true
    rationale: "A real unfurl can only be confirmed against the live deployed URL via an OG inspector; also requires swapping the relative placeholders for the absolute origin post-deploy — end-of-phase human UAT."

duration: 5min
completed: 2026-10-20
status: complete
---

# Phase 01 / Plan 03: Link preview + favicon Summary

**Open Graph/Twitter meta tags plus a 1200x630 placeholder OG image and an LS favicon — a shared link now previews with title, description, and image instead of a blank card.**

## Performance

- **Duration:** ~5 min
- **Tasks:** 1 automated (Task 2 unfurl test deferred to end-of-phase human UAT)
- **Files modified:** 4 (3 created, 1 modified, 1 removed)

## Accomplishments
- `index.html` head: `<title>`, meta description, `author`, Open Graph (`og:type`, `og:locale`, `og:title`, `og:description`, `og:image`, `og:url`) and Twitter summary-large-image card tags; OG copy mirrors the hero strings from `content.ts` (D-06/07/08)
- `public/og-image.png` — real 1200×630 preview (name + "DESENVOLVEDOR FRONT-END" + pitch on the graphite/cyan theme), rasterized from `public/og-image.svg`
- `public/favicon.svg` — LS monogram so the tab is not the default blank icon (replaces the Vite default; `public/vite.svg` removed)

## Task Commits

1. **Task 1: OG/meta tags + favicon + placeholder OG image** — `6668b1f` (feat)

## Files Created/Modified
- `index.html` — title, description, OG + Twitter tags, favicon link, author meta
- `public/og-image.png` — 1200×630 placeholder social preview
- `public/og-image.svg` — source for the OG image
- `public/favicon.svg` — LS monogram favicon
- removed `public/vite.svg` (unused default)

## Decisions Made
- Rasterized the OG PNG from an authored SVG using `sharp` as a one-off tool, then uninstalled it — no runtime/dev dependency is left in `package.json`; the PNG is a committed static asset.
- OG `og:url`/`og:image` are relative placeholders pending the deploy origin (documented in an `index.html` comment and to be finalized in the end-of-phase deploy/unfurl UAT).

## Deviations from Plan
None functionally — followed the plan; the only addition was committing the SVG source alongside the PNG for future regeneration.

## Issues Encountered
Same Wave-2 permission denial as 01-02; executed inline by the orchestrator with atomic commits.

## Next Phase Readiness
- Link-preview infrastructure is in place; final absolute URLs + a real unfurl check are part of the end-of-phase UAT (together with deploy).

---
*Phase: 01-esqueleto-no-ar-casca-navega-o-hero*
*Completed: 2026-10-20*
