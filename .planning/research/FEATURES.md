# Feature Landscape

**Domain:** Personal front-end developer portfolio (single-page, static, recruiter-facing)
**Researched:** 2026-10-19
**Confidence:** HIGH (established domain with well-documented recruiter behavior patterns)

---

## Table Stakes

Features recruiters and hiring managers expect. Missing any of these = portfolio feels incomplete or untrustworthy. These cause bounce.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Hero / intro section | First thing seen — must communicate "front-end dev" in under 3 seconds. No hero = recruiter has no anchor. | Low | Name, role label ("Desenvolvedor Front-End"), one-line pitch. No walls of text. |
| Project showcase (3–5 cards) | Recruiters come to see work. No projects = no signal. Each card needs title, short description, tech stack tags, and at least one link (code or live demo). | Medium | Cards are the core value. If only one link is possible, prefer live demo > GitHub link. |
| Live demo links on projects | Recruiters rarely clone repos. A deployed URL they can click immediately is what converts skeptics into interested parties. | Low | GitHub Pages, Netlify, or Vercel previews work fine. |
| GitHub link on projects | Technical hiring managers verify code quality before interviews. Missing repo links raise doubts. | Low | Each card should link its own repo, not just a GitHub profile. |
| "Sobre mim" / About section | Recruiters need to humanize the candidate. Skills list, brief background, what you're looking for. | Low | Keep it concise — two short paragraphs max + a skills tag list. |
| Contact path (email + social) | If a recruiter can't contact you in two clicks, the portfolio failed its primary job. | Low | Email (mailto: or visible address), LinkedIn minimum. WhatsApp link acceptable for Brazilian market. |
| Responsive design (mobile-first) | Recruiters open links on phones. A broken mobile layout signals that the dev doesn't know CSS. For a front-end dev this is a credibility killer. | Medium | Test at 375px, 768px, 1280px minimally. |
| Accessible color contrast | Broken contrast on dark themes is a common mistake. For a front-end dev it signals lack of attention to quality. WCAG AA is the bar. | Low | Dark/neutral theme needs extra care — verify contrast ratios on text over dark backgrounds. |
| Top navigation with section anchors | Single-page sites without nav anchors force users to scroll blindly. Nav links to Hero, Projects, About/Contact are the minimum. | Low | Smooth-scroll to sections. Sticky or fixed nav is expected on single-page layouts. |
| Page title and meta description | Recruiters share links. An empty `<title>` or missing OG tags look broken in Slack/WhatsApp previews. Also affects Google indexing for name searches. | Low | `<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:image`. 30-minute task. |

---

## Differentiators

Features that set the portfolio apart. Not universally expected, but signal craft and intentionality. These convert "interesting" into "let's interview."

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Subtle micro-interactions on project cards | Hover effects (card lift, border glow, image zoom) signal that the dev cares about UX detail — exactly what front-end roles test for in interviews. | Low–Medium | CSS transitions only; no JS library needed. Keep duration 150–250ms. Over-engineering this is a pitfall (see PITFALLS.md). |
| Smooth section transitions / scroll behavior | `scroll-behavior: smooth` + subtle fade-in on scroll for sections creates a polished feel that separates hand-crafted portfolios from templates. | Low | CSS scroll-behavior + Intersection Observer for fade-ins. No heavy animation library needed. |
| Tech stack tags on project cards | Shows command of the tools without requiring recruiters to open code. Tags like "React", "CSS Grid", "TypeScript" are quick scannable signals. | Low | Styled chips/badges. Color-code by category (language vs framework vs tooling) for extra polish. |
| CV/resume download link | Brazilian recruiting process often requires a CV. A prominent download button (PDF) in the About/Contact section removes friction. | Low | Static PDF linked directly. Update it before deploying. |
| Dark mode (fixed, not toggle) | The reference (mattjinn.com) is dark. A fixed dark theme is a design choice, not a toggle. Executing a dark theme well demonstrates CSS mastery (contrast, shadows, glassmorphism if tasteful). | Low | Fixed dark theme is simpler than a toggle (no JS state needed). Don't add a toggle for v1. |
| Project screenshots / preview images | Visual thumbnail in each card lets recruiters recognize project type instantly (dashboard, landing page, app) before reading. | Low | Static images or GIF demos. OG image doubles as card thumbnail. |
| LinkedIn / GitHub profile links in nav or footer | Recruiter secondary action after seeing projects is to check LinkedIn. Making this one-click (not buried) reduces drop-off. | Low | Icon links with accessible labels in nav or persistent footer. |
| Keyboard navigation support | Recruiters who are also developers will Tab through the site. A portfolio that traps focus or skips interactive elements signals poor accessibility awareness. | Low | `focus-visible` styles, logical tab order, skip-to-content link. |

---

## Anti-Features

Features to explicitly NOT build in v1. Each represents scope creep with low ROI for the stated goal (land a job, not win a design award).

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| Blog / articles section | Requires content creation commitment the author hasn't signed up for. An empty blog is worse than no blog — it signals incompleteness. | Out of scope per PROJECT.md. If desired later, add as a separate route after v1 ships. |
| Contact form with server-side handling | Requires a backend, environment variables, spam filtering, and maintenance. Adds infrastructure complexity to a static site. | Use a mailto: link or a free form service (Formspree, Web3Forms) if a form is wanted later. |
| Dark/light mode toggle | Doubles CSS complexity (CSS variables + JS state + localStorage persistence). For a fixed-theme portfolio it adds complexity with no UX gain. The reference site is dark — commit to it. | Fixed dark theme. No toggle. |
| Blog CMS (Contentful, Sanity, etc.) | Overkill for a static portfolio. Adds build complexity, API keys, and cost. | Static HTML/JSON files are sufficient. |
| Loading screen / splash page | Adds perceived latency. Recruiters time-out on slow sites. A loading animation before content is an anti-pattern unless the site genuinely takes time to hydrate. | Optimize for fast first paint instead. |
| Parallax scrolling effects | Heavy parallax causes jank on mobile and accessibility issues (vestibular motion disorders). Signals "CSS tricks" rather than "production quality." | Use subtle fade-in on scroll via Intersection Observer instead. |
| Multiple pages / complex routing | Breaks the single-page concept. Adds navigation complexity and hurts the anchor-based nav model. | Single-page with section anchors. |
| Internationalization (PT/EN toggle) | Doubles content maintenance. Target audience is Brazilian recruiters (PT). Add EN only if targeting international roles. | Content in Portuguese for v1. |
| Fancy cursor replacements | Annoying to users, blocks default browser UX, signals poor UX judgment. | Leave the cursor alone. |
| Auto-playing background video or music | Violates browser autoplay policies, creates accessibility nightmares, and loads bandwidth. | Static background with CSS gradient or subtle texture. |

---

## Feature Dependencies

```
Top nav (anchors) → Hero section (anchor target)
Top nav (anchors) → Project showcase (anchor target)
Top nav (anchors) → Sobre mim / Contact (anchor target)

Project cards → Live demo links (each project must be deployed)
Project cards → GitHub repo links (each project must have a public repo)
Project cards → Tech stack tags (copywriting work, not dev work)
Project cards → Screenshot/preview image (asset creation work)

Sobre mim section → CV/resume PDF (static file must be prepared)
Sobre mim section → Contact links (email, LinkedIn, WhatsApp)

Responsive design → All sections (must be tested per section)
Accessible contrast → Dark theme color palette (define palette first, then verify contrast)
Meta tags → OG image (og:image requires a 1200x630px static asset)
```

---

## MVP Recommendation

Prioritize in this order for v1:

1. **Hero section** — name, role, one-line pitch. Deployed and readable in < 3 seconds.
2. **Project cards (3 minimum)** — title, description, tech tags, demo link, GitHub link, screenshot.
3. **Sobre mim + contact** — two paragraphs, skills tags, email, LinkedIn, WhatsApp, CV download.
4. **Top nav** — anchors to the three sections above, smooth scroll, sticky.
5. **Responsive layout** — test at 375px, 768px, 1280px.
6. **Meta tags** — title, description, og:title, og:description, og:image. 30 minutes max.
7. **Micro-interactions on cards** — hover lift/glow, CSS only.

**Defer to v2:**
- CV download: Prepare the PDF first; link is trivial but the asset must exist.
- Keyboard navigation / focus-visible polish: Build in but fully audit after visual pass is done.
- Project preview GIFs: Replace static screenshots with GIFs only if projects have meaningful interactivity to show.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Table stakes | HIGH | Well-established by recruiter behavior studies and community consensus (dev.to, CSS-Tricks, LinkedIn hiring manager posts) |
| Differentiators | HIGH | Consistent across portfolio teardowns and front-end job prep communities |
| Anti-features | HIGH | Learned from common portfolio mistakes documented across the community |
| Brazilian market specifics | MEDIUM | WhatsApp and PT-only content are reasonable assumptions; LinkedIn is universal |

---

## Sources

- Domain knowledge synthesized from established front-end community resources (CSS-Tricks, Smashing Magazine, dev.to portfolio teardown articles)
- PROJECT.md constraints and scope decisions by the author
- Reference site analysis: mattjinn.com (visual/UX benchmark)
- Brazilian tech recruiting conventions (LinkedIn Brazil, Programadores Brasil community norms)
