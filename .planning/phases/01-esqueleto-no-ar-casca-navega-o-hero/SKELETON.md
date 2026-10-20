# Walking Skeleton — Portfólio Dev

**Phase:** 1
**Generated:** 2026-10-20

## Capability Proven End-to-End

> One sentence: the smallest user-visible capability that exercises the full stack.

A visitor opens a public static URL and, without scrolling, reads the name "Leonardo Suguino", the label "Desenvolvedor Front-End", and the pitch sentence — served from a production `vite build` output deployed to a public host.

This is the whole-application tracer: scaffold → build → render a real hero → deploy a real static page. Every later vertical slice (projects, about/contact, polish) paints onto this skeleton without changing its architectural decisions.

## Architectural Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Framework | Vite 5.x + React 18.x + TypeScript 5.x (`react-ts` template) | Locked by CONTEXT D-01/D-02. Static `dist/` output, no server. Vite gives the simplest static deploy and fastest DX. React is the recognizable signal on a front-end portfolio. |
| Styling | Tailwind CSS 3.x (utility-first, dark theme via config tokens) | Locked by D-01. Design tokens live in `tailwind.config.js` `theme.extend` so a theme tweak is a one-file change. Tailwind v3 chosen for ecosystem maturity (STACK.md). |
| Animation | Framer Motion 11.x | Locked by D-01. Installed in Phase 1 so later phases (nav transitions, card hover in Phase 4) have it ready; Phase 1 uses it only for a single subtle hero entrance (transform/opacity only, respects `prefers-reduced-motion`). |
| Theme | Fixed dark/graphite, mono-neutral + one accent (electric cyan) | D-03. No dark/light toggle (REQUIREMENTS out-of-scope). Accent is Claude's discretion → electric cyan verified WCAG AA on near-black. |
| Icons | lucide-react | STACK.md. Tree-shakeable SVG icons for nav/contact. |
| Content source | Single `src/data/content.ts` module (`author` object) | ARCHITECTURE.md Pattern 2 — single source of truth. Hero, nav, meta, and future sections all read from it; no duplicated strings. |
| Deployment target | **User choice — recommend Vercel (zero-config Vite) or GitHub Pages** | D-05 deferred. Plan makes the deploy step concrete for both; the exact host is confirmed by the developer at the deploy checkpoint. GitHub Pages requires `base` in `vite.config.ts`; Vercel needs none. |
| Directory layout | `src/components/` for UI, `src/components/sections/` for section blocks, `src/data/` for content, `src/theme` tokens in `tailwind.config.js` | Section = component boundary (ARCHITECTURE.md). Each `<section id>` maps to one component so Phases 2–3 fill them independently. |

## Stack Touched in Phase 1

- [x] Project scaffold (Vite + React + TS, Tailwind, Framer Motion, lucide-react, ESLint from template)
- [x] Routing — single document, in-page anchor scroll (no client-side router, by design)
- [x] "Data" layer — `src/data/content.ts` single source of truth read by the UI (the static-site analogue of a DB read)
- [x] UI — hero renders real content above the fold; fixed nav with smooth-scroll anchors wired to placeholder sections
- [x] Deployment — production `vite build` → `dist/` deployed to a public static URL that opens without errors

## Out of Scope (Deferred to Later Slices)

> Explicit so later phases do not re-litigate Phase 1's minimalism.

- Real project cards content and links — **Phase 2** (PROJ-01/02/03). Phase 1 ships only a `#projetos` placeholder section with the correct anchor ID (D-05).
- Real "Sobre mim" bio, skills, and full contact block — **Phase 3** (ABOUT-01/02, CONTACT-01). Phase 1 ships only a `#sobre` placeholder section with the correct anchor ID (D-05).
- Card hover micro-interactions, scroll-reveal animations, `prefers-reduced-motion` audit across the whole page — **Phase 4** (POLISH-01). Phase 1 only establishes the motion budget (one subtle hero entrance) and that Framer Motion is installed.
- Favicon set beyond a minimal placeholder, custom domain, Lighthouse perf tuning, real OG art — refined later; Phase 1 ships a working (placeholder) `og:image` so the preview is not blank, per D-10.
- CV/PDF download, keyboard-nav audit, project screenshots — v2 (REQUIREMENTS.md).

## Subsequent Slice Plan

Each later phase adds one vertical slice on top of this skeleton without altering its architectural decisions:

- **Phase 2 — Vitrine de Projetos:** fill the `#projetos` section with 3–5 real cards (title, description, stack tags, working code/demo links) reading from `content.ts`.
- **Phase 3 — Sobre mim + Contato:** fill the `#sobre` section with bio, skills, and the real contact block (email `leonardosuguino@gmail.com` + LinkedIn/WhatsApp); ensure a contact path is always reachable from the nav/footer.
- **Phase 4 — Polimento e Micro-interações:** card hover lift + smooth transitions (transform/opacity, 150–250ms), `prefers-reduced-motion` honored site-wide.
