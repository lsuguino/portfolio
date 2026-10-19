# Technology Stack

**Project:** Portfolio Dev (front-end developer personal portfolio)
**Researched:** 2026-10-19
**Confidence:** HIGH — recommendations are based on the well-established 2025/2026 ecosystem for static developer portfolios; versions cross-checked against official release histories through August 2025.

---

## Recommendation: Vite + React + TypeScript

**One-liner:** A Vite-built React SPA with TypeScript, deployed as a fully static export to Vercel or GitHub Pages — the right balance of developer credibility, animation support, and zero ongoing cost.

**Why not plain HTML/CSS/JS:** For a front-end dev whose portfolio is itself a signal of skill level, plain HTML/CSS has a ceiling. You lose component reuse (every project card is copy-pasted markup), and vanilla JS animation code (IntersectionObserver wiring, class toggling) becomes messy fast. The result looks dated to technical reviewers.

**Why not Astro:** Astro is excellent for content-heavy sites (blogs, docs). For a true single-page portfolio with smooth scroll sections and card animations, Astro's island architecture adds complexity without payoff. The mental model is heavier than Vite+React for a UI-first project with no content pipelines.

**Why not Next.js:** Next.js is overbuilt for a portfolio. Its `next export` static mode works, but the framework's complexity (App Router, server components, build cache) creates unnecessary cognitive load and build friction for something that has no server requirements whatsoever.

**Why Vite + React wins:** Fast dev server (sub-second HMR), tiny production build, dead-simple GitHub Pages/Vercel deploy via `vite build` + `dist/` folder, excellent ecosystem for animation libraries, and React is the most recognizable framework on a front-end dev's portfolio — it signals practical skill to recruiters and technical hirers alike.

---

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vite | 5.x (current: 5.4) | Build tool and dev server | Fastest cold start and HMR in the static site space; `vite build` outputs a plain `dist/` folder deployable anywhere |
| React | 18.x (current: 18.3) | UI component model | Component reuse for project cards, section layout, nav; industry standard for front-end devs to show on a portfolio |
| TypeScript | 5.x (current: 5.5) | Type safety | Adds credibility on a portfolio — shows discipline; no runtime cost |

### Styling

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Tailwind CSS | 3.x (current: 3.4) | Utility-first styling | Dark mode out of the box (`dark:` variants), responsive design via utility classes, no unused CSS in production (purge built-in), design system enforced through config — fits the minimalist dark aesthetic perfectly |

Do NOT use: CSS-in-JS (styled-components, Emotion) — adds runtime overhead and complicates static builds. Do NOT use: CSS Modules alone — no dark mode system, no design token enforcement without extra tooling.

### Animation / Micro-interactions

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Framer Motion | 11.x (current: 11.3) | Card hover effects, section fade-ins, smooth transitions | The gold standard for React animation. Declarative API (`whileHover`, `initial`/`animate`/`exit`, `viewport` triggers) maps exactly to the micro-interactions in the reference (mattjinn.com): card lifts, subtle entrance animations, smooth nav transitions. Adds ~40 KB gzipped to bundle — acceptable for the payoff. |

Do NOT use: GSAP for this project — it's the right tool for timeline-driven animations and scroll storytelling (agency sites), not card hover micro-interactions. Overkill and adds licensing complexity if you ever use ScrollTrigger commercially. Do NOT use: Anime.js or vanilla CSS keyframes alone — possible but you lose the React integration and the `viewport`-triggered entrance animations require manual IntersectionObserver wiring.

### Icons

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| lucide-react | 0.4xx (current: 0.427) | UI icons (GitHub, LinkedIn, email, external link, menu) | Tree-shakeable SVG icons as React components; zero unused icon weight; clean, minimal icon style that matches the aesthetic; actively maintained (replaces the abandoned react-feather) |

### Fonts

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Fontsource (self-hosted) | 5.x | Typography | Self-host fonts via npm packages instead of loading from Google Fonts CDN — avoids the GDPR/privacy request and the external DNS lookup on first load; `@fontsource/inter` or `@fontsource/geist` are the go-to choices for clean, technical portfolio typography |

Recommended font pairing: **Geist** (Vercel's open-source font, 2024 — technically modern, excellent on dark backgrounds) for headings + **Inter** for body text. Both available via `@fontsource`.

### Deployment

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vercel | — | Hosting | Zero-config deployment for Vite projects: `vite build` output detected automatically; free Hobby plan covers all needs; custom domain support; preview deployments on push; global CDN; `HTTPS` automatic. Best-in-class DX for a Vite+React project. |

GitHub Pages is a valid free alternative (set `base` in `vite.config.ts` to the repo name), but Vercel is strictly better on DX: no `gh-pages` branch management, instant previews, and no `basename` routing workaround needed.

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Framework | Vite + React | Astro | Astro shines for content/MDX sites; for a SPA with coordinated animations, the React model is more direct and the island model adds friction |
| Framework | Vite + React | Next.js | App Router + server components are architecturally wrong for a fully-static, server-free portfolio; `next export` works but carries the full Next.js build complexity |
| Framework | Vite + React | Plain HTML/CSS/JS | No component reuse, manual DOM animation wiring, no TypeScript, harder to extend — acceptable for a very fast prototype but signals lower skill ceiling on a portfolio |
| Framework | Vite + React | SvelteKit (static) | Svelte's smaller bundle is a real advantage, but React is far more recognizable on a portfolio; SvelteKit is the right choice if the developer primarily writes Svelte professionally |
| Styling | Tailwind CSS | CSS Modules | CSS Modules work but require manual design-token enforcement; no utility-first dark mode system |
| Styling | Tailwind CSS | Styled-components | Runtime CSS-in-JS adds bundle weight; complicates static export; no benefit over Tailwind for this use case |
| Animation | Framer Motion | GSAP | GSAP is more powerful but overkill; timeline animations are not what this project needs; licensing concerns for commercial projects |
| Animation | Framer Motion | CSS transitions only | Possible, but `viewport`-triggered entrance animations require IntersectionObserver boilerplate; Framer Motion makes this declarative |
| Hosting | Vercel | GitHub Pages | GitHub Pages requires `base` path config and `gh-pages` branch management; Vercel is free and strictly better DX |
| Hosting | Vercel | Netlify | Netlify is equivalent; Vercel is preferred because it has zero-config Vite detection and is the natural pairing for a Vite project |

---

## Installation

```bash
# Scaffold project
npm create vite@latest portfolio -- --template react-ts

# Navigate into project
cd portfolio

# Install production dependencies
npm install framer-motion lucide-react @fontsource/geist @fontsource/inter

# Install Tailwind CSS and PostCSS (dev deps)
npm install -D tailwindcss@3 postcss autoprefixer

# Initialize Tailwind config
npx tailwindcss init -p
```

Tailwind `content` config (in `tailwind.config.js`):
```js
content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
```

---

## Version Confidence Notes

| Package | Version Stated | Confidence | Basis |
|---------|---------------|------------|-------|
| Vite | 5.4 | HIGH | Official changelog through Aug 2025 |
| React | 18.3 | HIGH | Official release history; React 19 in RC as of mid-2025 — use 18.3 for stability |
| TypeScript | 5.5 | HIGH | Official release history |
| Tailwind CSS | 3.4 | HIGH | v3.x stable; Tailwind v4 was in alpha/beta as of mid-2025 — use v3 for stability and ecosystem maturity |
| Framer Motion | 11.3 | HIGH | Official changelog |
| lucide-react | ~0.427 | MEDIUM | Patch versions release frequently; install latest from npm |
| @fontsource/geist | 5.x | HIGH | Stable package series |

> Note on React 19 and Tailwind v4: Both were in active release candidacy as of August 2025. For a portfolio going live in late 2025 / 2026, React 19 stable and Tailwind v4 stable are likely available — verify `npm info react version` and `npm info tailwindcss version` at install time and upgrade accordingly. The architecture is identical.

---

## Sources

- Vite official docs: https://vitejs.dev/
- React 18 release notes: https://react.dev/blog/2022/03/29/react-v18
- Tailwind CSS v3 docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/
- lucide-react GitHub: https://github.com/lucide-icons/lucide
- Fontsource: https://fontsource.org/
- Vercel Vite deployment guide: https://vercel.com/docs/frameworks/vite
- Visual reference: https://mattjinn.com/
