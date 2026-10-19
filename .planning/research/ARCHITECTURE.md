# Architecture Patterns

**Domain:** Static single-page developer front-end portfolio
**Researched:** 2026-10-19
**Confidence:** HIGH (stable, well-established domain; patterns are consistent across hundreds of real-world examples)

---

## Recommended Architecture

A single HTML document split into named `<section>` landmarks, rendered entirely client-side with no server or build step required (plain HTML/CSS/JS). If a lightweight framework is adopted (e.g., React via Vite), the output is still a pre-built static bundle — the runtime model is identical. Navigation is in-page anchor scrolling, not client-side routing.

```
index.html
├── <header>          → Navbar (fixed top, logo/name + anchor links)
├── <main>
│   ├── #hero         → Hero / apresentação
│   ├── #projetos     → Project showcase (card grid)
│   └── #sobre        → About me + contact links
└── <footer>          → Minimal footer (copyright, repeat social links)
```

All styles live in one stylesheet (or scoped component files if using a component framework). All project data lives in a single source of truth — either a JS/JSON data file imported at the top of the script, or directly in component props, never scattered inline across markup.

---

## Component Boundaries

| Component | Responsibility | Communicates With |
|-----------|---------------|-------------------|
| `Navbar` | Fixed-top navigation; smooth-scroll anchors to each section; active-section highlighting on scroll | Reads scroll position via `IntersectionObserver` or `scroll` event |
| `Hero` | First viewport: name, role title ("Desenvolvedor Front-end"), one-liner tagline, CTA button pointing to `#projetos` | None — purely presentational |
| `ProjectCard` | Renders one project: thumbnail/screenshot, title, short description, tech tags, GitHub link, live demo link | Receives one project object from `projects` data source |
| `ProjectGrid` | Lays out 3–5 `ProjectCard` instances in a responsive grid | Iterates over `projects[]` data array |
| `About` | Author bio paragraph, skills list or tag cloud, contact links (email, GitHub, LinkedIn) — doubles as the "Sobre mim" section | Reads `author` object from data source |
| `Footer` | Copyright line, repeated social icon links | None — purely presentational |

**Section = Component boundary.** Each `<section id="...">` maps one-to-one to a top-level component (or a clearly isolated block of markup). This ensures each section can be built and styled independently.

---

## Data Flow

All content originates in a **single data file**. Nothing is duplicated across components.

```
data/projects.js  (or projects.json)
  └─► ProjectGrid → ProjectCard × N

data/author.js    (or same file as projects.js)
  └─► Hero (name, title, tagline)
  └─► About (bio, skills, contact links)
  └─► Navbar (site title / logo text)
```

### Data file structure (recommended: one JS module or JSON file)

```js
// data/content.js  — single source of truth
export const author = {
  name: "Leonardo ...",
  title: "Desenvolvedor Front-end",
  tagline: "...",
  bio: "...",
  email: "...",
  github: "https://github.com/...",
  linkedin: "https://linkedin.com/in/..."
};

export const projects = [
  {
    id: "projeto-1",
    title: "Nome do Projeto",
    description: "Descrição curta em 1–2 frases.",
    tags: ["React", "CSS", "API"],
    image: "assets/images/projeto-1.webp",   // local path
    github: "https://github.com/...",
    demo: "https://..."                        // null if no live demo
  },
  // ... up to 5 entries
];
```

**Why a JS/JSON data file, not hardcoded markup:** When the author adds a project later, they edit one object in one file. With hardcoded HTML, they must find and copy/paste a card block, risking broken markup. A data file also makes the project grid self-building — mapping over `projects[]` renders all cards automatically.

**Why not Markdown frontmatter (e.g., MDX):** Markdown files are the right choice when each project needs a long-form write-up page. For 3–5 cards with a title + 2 sentences + links, a JSON/JS array is simpler and has zero parsing overhead. MDX adds a build-pipeline dependency (remark/rehype) that isn't justified at this scale.

### Asset flow

```
assets/
  images/
    projeto-1.webp      ← screenshot, manually added by author
    projeto-2.webp
    og-preview.png      ← Open Graph image for link previews
  icons/                ← SVG icons (optional, or use an icon font)
  fonts/                ← Self-hosted webfonts (optional)
```

- **Images:** Author takes a screenshot, crops to ~16:9, converts to `.webp` (best quality/size ratio), drops in `assets/images/`. The `image` field in the data file references this path. No CMS, no upload step.
- **Sizing:** Cap project screenshots at 1200px wide, ~100–150 KB after compression. Browsers handle the rest via `max-width: 100%` on the `<img>`.
- **Lazy loading:** `<img loading="lazy">` on all project card images — native browser feature, zero JS required.
- **Open Graph:** One `og-preview.png` (1200×630 px) in `assets/images/`, referenced in `<head>` meta tags for social link previews.

---

## Patterns to Follow

### Pattern 1: Section-as-scroll-target with IntersectionObserver

**What:** Each `<section>` has a stable `id`. The Navbar highlights the current section by observing which section is in the viewport.

**When:** Always — this is the standard SPA navigation pattern for single-document sites.

```js
const sections = document.querySelectorAll("section[id]");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = document.querySelector(`a[href="#${entry.target.id}"]`);
      link?.classList.toggle("active", entry.isIntersecting);
    });
  },
  { threshold: 0.5 }
);
sections.forEach((s) => observer.observe(s));
```

**Why:** No scroll event polling, good performance, works without a framework.

---

### Pattern 2: Single data file, render-from-array

**What:** `projects[]` array is the single source of truth. The grid component maps over it.

**When:** Always — even if plain HTML/JS is chosen (use a template literal loop in `main.js`).

```js
// plain JS example
document.getElementById("project-grid").innerHTML = projects
  .map(
    (p) => `
  <article class="card">
    <img src="${p.image}" alt="${p.title}" loading="lazy">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="tags">${p.tags.map((t) => `<span>${t}</span>`).join("")}</div>
    <a href="${p.github}">GitHub</a>
    ${p.demo ? `<a href="${p.demo}">Demo</a>` : ""}
  </article>`
  )
  .join("");
```

---

### Pattern 3: CSS custom properties for theming

**What:** All colors, spacing scale, and typography scale defined as `--var` on `:root`. Dark theme is the default; no toggle needed in v1.

**When:** Always — makes future theme tweaks a one-file change.

```css
:root {
  --bg: #0d0d0d;
  --surface: #1a1a1a;
  --accent: #e0e0e0;
  --text: #c8c8c8;
  --text-muted: #666;
  --radius: 8px;
  --space-md: 1.5rem;
}
```

---

### Pattern 4: Deploy-on-push with zero config

**What:** Push `main` → platform builds (or just serves) → live in < 60 seconds.

**When:** Always — static hosting on Netlify/Vercel/GitHub Pages.

- Plain HTML/JS: no build step; platform serves `index.html` directly.
- Vite/React: `npm run build` → `dist/` → configure platform to serve `dist/`.

---

## Anti-Patterns to Avoid

### Anti-Pattern 1: Hardcoded project cards in HTML

**What:** Writing `<article class="card">...</article>` markup inline for each project in `index.html`.

**Why bad:** Adding project 4 means copying 20 lines of markup, adjusting paths, risking a missing closing tag. Content and structure become coupled.

**Instead:** Data file + render loop (Pattern 2 above).

---

### Anti-Pattern 2: Multiple CSS files without a clear loading order

**What:** `base.css`, `navbar.css`, `cards.css`, `about.css` loaded via separate `<link>` tags with no cascade discipline.

**Why bad:** Specificity conflicts accumulate quickly; debugging "why is this text the wrong color" becomes a cascade hunt.

**Instead:** One main stylesheet with clearly named sections, or (if using a component framework) scoped styles per component file. Either way, custom properties on `:root` are the shared design token layer.

---

### Anti-Pattern 3: Loading an icon library (Font Awesome, Material Icons) via CDN for 5–6 icons

**What:** `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/.../font-awesome.min.css">` for a few social icons.

**Why bad:** Fetches 300+ KB of icon font for 5 glyphs; adds an external DNS dependency; blocks render.

**Instead:** Inline SVG for the 5–6 icons actually used (GitHub, LinkedIn, email envelope, external link). Copy the SVG path from Heroicons or Feather Icons — it's 3 lines per icon.

---

### Anti-Pattern 4: Client-side routing for a single-document site

**What:** Using React Router or similar to navigate between "pages" that are really just scroll positions.

**Why bad:** Introduces route configuration, a 404 fallback concern on static hosts, and complexity that serves no purpose when the entire site is one document.

**Instead:** Anchor links + smooth scroll CSS (`scroll-behavior: smooth` on `html`).

---

## Scalability Considerations

| Concern | Now (v1, 3–5 projects) | If projects grow (10–20) | If blog added later |
|---------|------------------------|--------------------------|---------------------|
| Data management | Single JS/JSON file, trivial | Still fine as flat array | Migrate to Markdown files + static site generator (Astro, Eleventy) |
| Bundle size | Near zero (no framework) or ~50 KB (React+Vite) | No change | SSG adds build step but output stays static |
| Image storage | `/assets/images/` in repo | Git LFS or move to Cloudinary | Cloudinary or similar CDN |
| Deployment | GitHub Pages / Netlify free tier | No change | No change |

---

## Build Order (Phase Dependency Map)

This is the critical output for roadmap phase sequencing:

```
Phase 1 — Foundation & Layout
  ├── index.html shell (doctype, head meta, section stubs, a11y landmarks)
  ├── CSS custom properties + reset + typography scale
  └── Navbar (fixed top, anchor links, responsive hamburger if needed)
         ↓ (everything else needs the layout shell)

Phase 2 — Content Sections
  ├── data/content.js — author + projects data file (must exist before rendering)
  ├── Hero section (reads author.name, author.title, author.tagline)
  ├── ProjectGrid + ProjectCard (reads projects[])
  └── About + Contact (reads author.bio, author.email, author.github, author.linkedin)
         ↓ (polish layer is applied on top of working content)

Phase 3 — Polish & Interactions
  ├── Micro-interactions: hover states on cards, button transitions
  ├── Scroll-active navbar highlighting (IntersectionObserver)
  ├── Scroll-reveal animations (CSS @keyframes or tiny JS, nothing heavy)
  └── Responsive audit (mobile, tablet, desktop breakpoints)
         ↓ (deploy only after the site looks correct at all sizes)

Phase 4 — Deploy & Meta
  ├── Open Graph meta tags (og:title, og:description, og:image)
  ├── Favicon set (favicon.ico + apple-touch-icon)
  ├── Deploy config (netlify.toml or vercel.json if needed, or zero-config)
  └── Custom domain (optional)
```

**Why this order:**
- The HTML shell and CSS custom properties are the substrate everything else paints on. Building a card without the layout results in throwaway work when the layout shifts.
- The data file must exist before any content section is written, or the author is forced to refactor markup into a render loop mid-phase.
- Polish and interactions are applied last because animation bugs on broken layout are impossible to isolate; polish on correct layout takes minutes.
- Deploy is last because `<meta>` tags and favicon only matter in production context; validating them locally wastes time.

---

## Sources

- Patterns synthesized from domain knowledge of static portfolio sites (plain HTML, React+Vite, Astro variants) — no single authoritative spec exists; this reflects the dominant conventions as of 2025.
- Reference site: mattjinn.com (cited in PROJECT.md) — fixed top navbar, dark aesthetic, card grid, anchor-scroll navigation.
- Confidence: HIGH. This domain is stable and the patterns are consistent across years of community practice.
