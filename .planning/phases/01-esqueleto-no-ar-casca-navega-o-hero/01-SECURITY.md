---
phase: 01-esqueleto-no-ar-casca-navega-o-hero
status: secured
asvs_level: 1
threats_total: 8
threats_open: 0
reviewed: 2026-10-21
---

# Phase 1 Security Review — Esqueleto no Ar

**Verdict: SECURED (ASVS L1) — 0 open threats.**

Static, backend-less site (Vite + React → static `dist/`, deployed on Vercel). No server, no database, no user input processed, no secrets. Contact is a public `mailto:`/link. The attack surface is minimal and the threat registers authored in the phase plans are all dispositioned.

## Trust Boundaries

| Boundary | Description |
|----------|-------------|
| static host (Vercel) → visitor browser | Read-only static markup served to untrusted visitors; no server logic. |
| static host → social scraper | OG tags + og:image fetched by third-party unfurl bots (LinkedIn/WhatsApp); public, read-only. |
| published email → scrapers | Contact email in markup/meta is harvestable. |

## STRIDE Threat Register (aggregated from plan threat models)

| Threat ID | Category | Component | Severity | Disposition | Mitigation / Rationale |
|-----------|----------|-----------|----------|-------------|------------------------|
| T-1-SC | Supply chain | npm dependencies | medium | mitigated | Locked, first-party, high-reputation packages (vite, react, tailwind, framer-motion, lucide-react) pinned via `package-lock.json`; `npm ci` in CI. No typo-squat variants. |
| T-1-01 | Tampering | build output | low | mitigated | `npm run build` is deterministic; Vercel builds from the pinned lockfile. |
| T-1-02 | Info disclosure | bundle contents | low | accept | Only public portfolio content ships; no secrets in the repo or bundle. |
| T-1-10 | Tampering | Navbar/section rendering | low | mitigated | All labels/copy are static literals; React escapes by default; no `dangerouslySetInnerHTML`. |
| T-1-11 | Denial of Service | smooth-scroll / fixed nav | low | accept | Native browser anchor behavior; no JS loop; no DoS surface on a static page. |
| T-1-20 | Info disclosure | contact email in meta/markup | low | accept | `leonardosuguino@gmail.com` is intentionally public for recruiter contact; harvesting risk accepted for a portfolio. |
| T-1-21 | Spoofing | og:url / og:image | low | mitigated | og:url and og:image point at the site's own absolute Vercel origin (same-origin asset). |
| T-1-22 | Tampering | index.html meta content | low | mitigated | All meta values are static literals matching `content.ts`; no dynamic/user-supplied head content. |

## Notes

- No `high`/`critical` threats (block threshold is `high`).
- HTTPS is provided by Vercel by default.
- Future phases that add any dynamic content, forms, or third-party embeds must re-run `/gsd-secure-phase`.

---
*Reviewed: 2026-10-21 — lightweight review (static site, UAT-passed, live).*
