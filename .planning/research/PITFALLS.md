# Domain Pitfalls

**Domain:** Personal front-end developer portfolio (single-page, static, job-hunting goal)
**Researched:** 2026-10-19
**Confidence:** HIGH (well-documented domain; patterns consistent across recruiter feedback, hiring manager posts, Lighthouse/web.dev docs, and community post-mortems)

---

## Critical Pitfalls

Mistakes that actively kill job opportunities or cause rewrites.

---

### Pitfall 1: No Live Demo or Broken Live Demo

**What goes wrong:** Projects are shown with only a GitHub link, or the live demo link leads to a 404 / blank page / localhost placeholder.

**Why it happens:** The dev deploys once, forgets about it, and the free-tier hosting spins down or expires. Or they never deploy at all because "recruiters will look at the code."

**Consequences:** Recruiters do not clone and run code. If there is no working URL to click, the project does not exist in their mental model. This is the single highest-impact mistake on a frontend portfolio.

**Prevention:**
- Every project card must have a working live URL before launch.
- Deploy to Netlify, Vercel, or GitHub Pages — all have permanent free tiers that do not spin down static sites.
- Before publishing the portfolio, manually click every demo link.
- Add a "check links" step in the UAT checklist for each phase that touches project cards.

**Detection (warning signs):**
- Project cards exist but only have a repo link.
- Any link in the card section returns a non-200 HTTP status.
- Demo URLs contain `localhost`, `127.0.0.1`, or a `#` placeholder.

**Phase:** Project Cards / Content phase. Add a link-validation step to the UAT criteria.

---

### Pitfall 2: Weak or Missing Project Descriptions

**What goes wrong:** Project cards say "A weather app built with React" and nothing else. The recruiter has no idea what problem was solved, what the dev's role was, or what was technically interesting.

**Why it happens:** Developers describe what the project is (the noun) instead of what they did and why (the verb + impact). They also underestimate that recruiters scan — a one-liner gets ignored.

**Consequences:** Projects look like tutorials. The candidate looks like a tutorial-follower, not a problem-solver.

**Prevention:** Each project card must answer three questions:
1. What is this? (one sentence)
2. What did you specifically build or solve? (technical contribution)
3. What is one thing worth knowing? (a decision, a challenge overcome, or a metric)

The description fits in 2–3 short sentences. This is a content constraint to enforce at the design/content phase, not just at launch.

**Detection:**
- Card body is one generic sentence.
- No mention of any technology decision, challenge, or outcome.
- Every card description starts with "A [noun] built with [framework]."

**Phase:** Content definition phase (before any component is built). Write the actual copy for all 3–5 projects before wiring up the cards.

---

### Pitfall 3: No Clear Signal of Contact Path

**What goes wrong:** The contact options are buried at the bottom of a long page, require scrolling past heavy animations, or are only present in the footer in 10px grey text.

**Why it happens:** The designer-brain treats contact as secondary; the recruiter-brain treats it as the only exit. The site forgets its own conversion goal.

**Consequences:** Recruiter is interested but cannot easily act. Drop-off happens. The Core Value of this specific project ("ver projetos e falar com o autor em poucos segundos") is violated.

**Prevention:**
- Contact links must be reachable from the navigation without scrolling.
- The nav itself (persistent at top) should include a visible contact anchor or CTA.
- The "Sobre mim" section must have the e-mail and at least one social link rendered as a real `<a href>` — not just displayed as text.
- Test on mobile: can a recruiter tap to email in under 3 seconds from first load?

**Detection:**
- No contact link visible above the fold on desktop and mobile.
- Email is displayed as text but not a `mailto:` link.
- Social links open to profile pages that don't have a clear way to message.

**Phase:** Navigation and Hero phase; also "Sobre mim" section phase.

---

### Pitfall 4: Mobile Layout Broken or Degraded

**What goes wrong:** The portfolio looks great at 1440px and breaks on 375px. Cards overflow horizontally, text is unreadable, the nav hamburger menu doesn't work, or touch targets are too small.

**Why it happens:** Developer tests only on desktop during build. Responsive work is added as an afterthought with a handful of `@media` rules rather than being designed mobile-first.

**Consequences:** A recruiter reviewing on their phone (common) gets a broken experience and moves on. Also signals to tech-savvy reviewers that the candidate does not know responsive fundamentals — a fatal signal for a front-end role.

**Prevention:**
- Design and test at 375px, 768px, and 1280px from the first commit.
- Use CSS Grid or Flexbox with fluid sizing rather than fixed pixel widths for layout containers.
- Test every interactive element (nav links, card hover states, contact links) on an actual mobile device or Chrome DevTools mobile emulator before each phase sign-off.
- The single-page layout and minimal nav described in PROJECT.md are naturally mobile-friendly — do not add complexity that breaks this.

**Detection:**
- Horizontal scroll appears at any viewport under 768px.
- Text smaller than 14px base on mobile.
- Navigation items or card content clipped or overlapping on mobile.

**Phase:** Foundation/Layout phase. Mobile-first CSS is a phase-0 constraint, not a phase-N fix.

---

### Pitfall 5: Slow Initial Load — Unoptimized Images and Heavy JS Bundle

**What goes wrong:** Hero or project card images are exported at full resolution (3–5 MB per image). Or a JavaScript framework is loaded with all its dependencies for what is essentially a static HTML page.

**Why it happens:** Images are grabbed from a design tool or phone at native resolution without processing. Framework choice is made for resume-padding reasons ("shows I know React") without weighing the cost.

**Consequences:** LCP (Largest Contentful Paint) exceeds 4s on mobile or slow connections. Recruiters on mobile data do not wait. Google PageSpeed score tanks. The portfolio itself demonstrates poor front-end judgment — a direct negative signal.

**Prevention:**
- All images must go through compression before deploy: use WebP format, max 200KB per image at display size.
- For a single-page static portfolio with minimal interaction, plain HTML/CSS/JS is the correct default. If a framework is used, ensure it can be built to a static bundle under 100KB gzipped.
- Use `loading="lazy"` on all images below the fold.
- Run Lighthouse on the deployed URL (not localhost) before calling any phase complete. LCP target: under 2.5s on simulated mobile.

**Detection:**
- Any image file in the project larger than 400KB before optimization.
- Lighthouse Performance score below 90 on mobile simulation.
- Network tab shows JS bundle over 200KB uncompressed for a portfolio with no app logic.

**Phase:** Tech stack decision (framework choice); Asset handling (image optimization). Lighthouse gate must be in the UAT for the final phase.

---

### Pitfall 6: Over-Engineering the Build

**What goes wrong:** The developer sets up a full React app with TypeScript, Redux, React Router, Styled Components, Storybook, and a CI/CD pipeline — for a single static page with 5 sections and no state management needs.

**Why it happens:** The portfolio becomes a playground to learn tools rather than a tool to get jobs. The build time doubles, the complexity triples, and the site never ships.

**Consequences:** The portfolio is not live when job applications start. A half-built over-engineered portfolio is worse than a simple shipped one. Time-to-launch is the critical metric.

**Prevention:**
- Match stack complexity to actual requirements. This project is: single page, static, no server, no user accounts, no complex state. Plain HTML/CSS/JS or a minimal Vite setup is appropriate.
- Every tool added to the stack must answer: "what does this let me do that I cannot do without it?"
- The PROJECT.md constraint "must host as static site" is the forcing function — use it.

**Detection:**
- Build config has more lines than the actual app code.
- `node_modules` is multiple GB for a portfolio.
- The developer cannot explain in one sentence why a given dependency is present.

**Phase:** Tech stack decision phase. Lock the stack before writing any component.

---

### Pitfall 7: No Context on the Developer's Role in Projects

**What goes wrong:** A group project or bootcamp project is shown without clarifying what the developer personally built. "I worked on a team to build a marketplace" says nothing.

**Why it happens:** Developers are modest, or they don't realize recruiters are specifically evaluating individual contribution, not team outcomes.

**Consequences:** The recruiter cannot assess skill level. If the project looks too polished for an entry-level candidate and the candidate doesn't explain their part, it raises suspicion rather than confidence.

**Prevention:**
- If any displayed project was a group project, the description must use "I built / I implemented / my responsibility was" language.
- Solo projects should still state the key decisions the developer made ("chose [X] because [Y]").
- This is a content rule, not a UI rule.

**Detection:**
- Card description uses "we" with no follow-up on individual contribution.
- Project looks significantly more complex than other solo projects but has no explanation.

**Phase:** Content definition phase (same as Pitfall 2 — both are content problems).

---

### Pitfall 8: Animation Jank and Overuse of Transitions

**What goes wrong:** The "subtle micro-interactions" requirement is interpreted as: fade every element on scroll, add parallax to the hero, animate every card entrance, add a typing cursor to every text block, and play a loading animation before the content appears.

**Why it happens:** Motion feels impressive during development. The developer cannot unsee the animations because they built them.

**Consequences:** On low-end devices (common in the Brazilian market), janky scroll animations tank the experience. On fast devices, overdone animations feel amateurish and slow the user down. Recruiters do not find motion impressive — they find content impressive.

**Prevention:**
- Animations must follow a "one reason to exist" rule: does this guide attention to something important, or confirm an interaction? If no, cut it.
- All transitions must use CSS `transform` and `opacity` only — never animate `height`, `width`, `top`, `left`, or `margin` (these trigger layout recalculation and cause jank).
- Use `prefers-reduced-motion` media query to disable animations for users who have it set.
- The reference site mattjinn.com uses minimal, purposeful motion — match that, do not exceed it.
- No loading screen. Content must render immediately.

**Detection:**
- Scroll performance drops below 60fps in DevTools Performance panel.
- Animations use properties other than `transform` or `opacity`.
- More than 3 distinct animation types exist on the page.
- Content is hidden behind a loading/intro animation.

**Phase:** UI implementation phase. Establish a motion budget (max 2–3 animation types) before building.

---

## Moderate Pitfalls

---

### Pitfall 9: Accessibility Ignored

**What goes wrong:** The dark color scheme chosen (dark/neutral per PROJECT.md) results in text-to-background contrast ratios below 4.5:1. Interactive elements have no focus styles. Images have no `alt` text.

**Why it happens:** Accessibility is treated as a compliance checkbox rather than built in from the start. Dark themes are particularly risky for contrast.

**Prevention:**
- Use a contrast checker (e.g., WebAIM) during the design phase for every text/background color pair.
- Never remove the browser default focus outline without replacing it with a custom visible one.
- Every `<img>` must have an `alt` attribute; decorative images get `alt=""`.
- Run aXe or Lighthouse Accessibility audit before each phase sign-off. Target score: 95+.

**Phase:** Design/visual system phase; then verify in each component phase.

---

### Pitfall 10: Missing or Incorrect Meta Tags (SEO/Social Sharing)

**What goes wrong:** The page has no `<title>`, no `<meta name="description">`, no Open Graph tags. When shared on LinkedIn or WhatsApp, the link preview shows a blank card.

**Why it happens:** Static HTML meta tags feel like boring plumbing and are often left until "later," which never comes.

**Consequences:** When the developer shares their portfolio link in a LinkedIn message or job application, the unfurled preview looks broken or blank — a first impression failure before the recruiter even visits.

**Prevention:**
- Add `<title>`, `<meta name="description">`, `og:title`, `og:description`, `og:image`, and `og:url` during the HTML scaffolding phase, before any visible work.
- Test the Open Graph preview using the LinkedIn Post Inspector or a tool like opengraph.xyz before launch.

**Phase:** HTML scaffold phase (do it first, not last).

---

### Pitfall 11: GitHub Repository is a Mess

**What goes wrong:** The portfolio's source code repo has no README, commit messages like "fix" / "asd" / "final2", or a half-committed mess of commented-out code.

**Why it happens:** The portfolio was built in a hurry, or the developer didn't realize the repo is also reviewed.

**Consequences:** Recruiters and technical screeners who click the GitHub link (and many do) see the code quality directly. A messy repo contradicts the polished portfolio.

**Prevention:**
- Write a clear README for the portfolio repo: what it is, how to run it locally, tech used.
- Commit messages should be imperative and descriptive: "add project card component", not "stuff".
- Clean up commented-out code before going live.

**Phase:** Final phase / launch preparation.

---

### Pitfall 12: Hero Section Fails to Communicate Role Immediately

**What goes wrong:** The hero says "Welcome" or the developer's name with no immediate context. The visitor must scroll to understand what this person does.

**Why it happens:** Designers focus on visual impact; the copy is a placeholder that never gets updated.

**Consequences:** Recruiters who bounce within 5 seconds — before scrolling — never learn what the person does.

**Prevention:**
- Hero headline must contain the role explicitly: "Desenvolvedor Front-End" must be visible without scrolling on any device.
- Test: show the site to someone unfamiliar with it for 5 seconds, then ask "what does this person do?"

**Phase:** Hero/content phase.

---

## Minor Pitfalls

---

### Pitfall 13: Favicon Not Set

**What goes wrong:** Browser tab shows the default blank favicon icon.

**Prevention:** Create a simple favicon (initials or a minimal mark). Can be generated from any icon tool. A missing favicon is a small but visible sign of incompleteness to technical reviewers.

**Phase:** HTML scaffold phase.

---

### Pitfall 14: Contact Email Not a Real Address

**What goes wrong:** Developer links to a dummy email or a placeholder like `yourname@email.com` that was never updated.

**Prevention:** Include a real, monitored email address. Include a note (even in a comment) in the HTML or content file marking it as "must update before launch."

**Phase:** Content phase; verify at launch.

---

### Pitfall 15: No Deployment Checklist Before Going Live

**What goes wrong:** The site goes live with broken links, placeholder text (Lorem ipsum), or console errors visible in DevTools.

**Prevention:** Create an explicit launch checklist covering: all links work, no placeholder copy, no console errors, Lighthouse score checked, mobile tested, meta tags present, favicon present, real email in contact section.

**Phase:** Final launch phase — this checklist is the UAT gate for the milestone.

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|---|---|---|
| Tech stack decision | Over-engineering (Pitfall 6); heavy JS bundle (Pitfall 5) | Lock to simplest stack that meets requirements; justify every dependency |
| HTML scaffold | Missing meta/OG tags (Pitfall 10); missing favicon (Pitfall 13) | Do meta tags and favicon in the same commit as the first HTML file |
| Visual / design system | Low contrast on dark theme (Pitfall 9); animation overuse (Pitfall 8) | Check contrast ratios before any component work; define motion budget upfront |
| Layout / responsive | Mobile layout broken (Pitfall 4) | Mobile-first CSS from first layout commit; test at 375px before shipping any section |
| Project cards / content | No live demo (Pitfall 1); weak descriptions (Pitfall 2); no role context (Pitfall 7) | Content (copy + links) must be written and verified before building the card component |
| Hero section | Hero fails to communicate role (Pitfall 12) | "Desenvolvedor Front-End" must be in the H1 or first visible text |
| Navigation / contact | Contact path unclear (Pitfall 3) | Nav must include a contact anchor; test on mobile: contact reachable in 3 taps |
| Animation / interactions | Jank and overuse (Pitfall 8) | CSS transform/opacity only; `prefers-reduced-motion` support; no loading screen |
| Asset handling | Slow load from images (Pitfall 5) | All images WebP, max 200KB; `loading="lazy"` below fold; Lighthouse gate |
| Launch / deploy | Missing deploy checklist (Pitfall 15); messy repo (Pitfall 11) | Explicit launch checklist as UAT; clean up commit history and add README |

---

## Sources

Synthesized from training knowledge across the following source categories (web search unavailable during this research session):

- Recruiter and hiring manager post patterns on LinkedIn, Reddit (r/webdev, r/cscareerquestions), and Hacker News "Ask HN: Why did my portfolio not get callbacks?"
- Google web.dev documentation on Core Web Vitals (LCP, CLS, FID/INP) and best practices
- MDN Web Docs on accessibility, responsive design, and meta tags
- Community post-mortems and "portfolio review" threads on Dev.to and Hashnode
- Direct application of project goals from PROJECT.md (Core Value: "ver projetos e falar com o autor em poucos segundos")

**Confidence note:** The pitfalls related to recruiter behavior (Pitfalls 1–3, 7, 12) are HIGH confidence — these patterns appear consistently across hundreds of hiring manager accounts. Technical pitfalls (4, 5, 6, 8–10) are HIGH confidence — they are grounded in documented browser performance mechanics, not opinion.
