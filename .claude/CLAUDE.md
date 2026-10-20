<!-- GSD:project-start source:PROJECT.md -->

## Project

**Portfólio Dev**

Um portfólio pessoal de desenvolvedor front-end: um site (página única) que apresenta quem o autor é e exibe seus projetos em destaque, com um caminho de contato claro. O público-alvo são recrutadores e empresas — é uma ferramenta para conseguir vagas e trabalho na área de dev.

**Core Value:** Fazer um recrutador olhar os projetos e conseguir entrar em contato com o autor em poucos segundos. Se tudo o mais falhar, essas duas coisas — ver os projetos e falar com o autor — precisam funcionar.

### Constraints

- **Tech stack**: Front-end — projeto de portfólio de um dev front-end; a escolha entre HTML/CSS/JS puro ou um framework (ex.: React) fica para a fase de planejamento, priorizando algo simples de hospedar como site estático.
- **Hosting**: Deve poder ser publicado como site estático (ex.: GitHub Pages, Netlify, Vercel) — barato/gratuito e simples de manter.
- **Design**: Estética definida pela referência mattjinn.com — moderno, escuro/neutro, minimalista.
- **Idioma**: Interface e conteúdo em português.

<!-- GSD:project-end -->

<!-- GSD:stack-start source:research/STACK.md -->

## Technology Stack

## Recommendation: Vite + React + TypeScript

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

### Animation / Micro-interactions

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Framer Motion | 11.x (current: 11.3) | Card hover effects, section fade-ins, smooth transitions | The gold standard for React animation. Declarative API (`whileHover`, `initial`/`animate`/`exit`, `viewport` triggers) maps exactly to the micro-interactions in the reference (mattjinn.com): card lifts, subtle entrance animations, smooth nav transitions. Adds ~40 KB gzipped to bundle — acceptable for the payoff. |

### Icons

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| lucide-react | 0.4xx (current: 0.427) | UI icons (GitHub, LinkedIn, email, external link, menu) | Tree-shakeable SVG icons as React components; zero unused icon weight; clean, minimal icon style that matches the aesthetic; actively maintained (replaces the abandoned react-feather) |

### Fonts

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Fontsource (self-hosted) | 5.x | Typography | Self-host fonts via npm packages instead of loading from Google Fonts CDN — avoids the GDPR/privacy request and the external DNS lookup on first load; `@fontsource/inter` or `@fontsource/geist` are the go-to choices for clean, technical portfolio typography |

### Deployment

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Vercel | — | Hosting | Zero-config deployment for Vite projects: `vite build` output detected automatically; free Hobby plan covers all needs; custom domain support; preview deployments on push; global CDN; `HTTPS` automatic. Best-in-class DX for a Vite+React project. |

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

## Installation

# Scaffold project

# Navigate into project

# Install production dependencies

# Install Tailwind CSS and PostCSS (dev deps)

# Initialize Tailwind config

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

## Sources

- Vite official docs: https://vitejs.dev/
- React 18 release notes: https://react.dev/blog/2022/03/29/react-v18
- Tailwind CSS v3 docs: https://tailwindcss.com/docs
- Framer Motion docs: https://www.framer.com/motion/
- lucide-react GitHub: https://github.com/lucide-icons/lucide
- Fontsource: https://fontsource.org/
- Vercel Vite deployment guide: https://vercel.com/docs/frameworks/vite
- Visual reference: https://mattjinn.com/

<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->

## Conventions

Conventions not yet established. Will populate as patterns emerge during development.
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->

## Architecture

Architecture not yet mapped. Follow existing patterns found in the codebase.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->

## Project Skills

No project skills found. Add skills to any of: `.claude/skills/`, `.agents/skills/`, `.cursor/skills/`, `.github/skills/`, or `.codex/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->

## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-fast` for a trivial task inline, with no subagents and no PLAN.md
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->

<!-- GSD:profile-start -->

## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
