# Watts Unified production source

Last verified: 2026-07-21

## Source branches

- Current live update: `codex/site-enhancements-2026-07-21`
- Protected rollback baseline: `codex/production-stable-2026-07-21`
- Do not overwrite or force-push the protected rollback branch.

When opening the repository in Cursor, fetch the remote branches and check out `codex/site-enhancements-2026-07-21` before making changes.

## Shared site deployment

- Sites project: `appgprj_6a5d817b479c8191975d29e666dcbc6e`
- Live Sites version: 33
- Version ID: `appgprj_6a5d817b479c8191975d29e666dcbc6e~appgver_e3c41a607cbc8191a073be56941143a6`
- Deployment ID: `appgdep_6a5fb0e4620081918c5df70adf233a88`
- Shared source commit: `c8f4e417b074b79d1b7f09395d6f35970d248212`
- Solutions edge release: `20260721-v33`
- Solutions Worker deployment: `ba22546f8b6748aa9fa9fb86e056bcb2`
- Homepage navigation Worker deployment: `a69ebddc6cfd40abb5aa812799022285`
- Resources Worker deployment: `ed024d71445543b5adb1e4d98f401d10`
- Financial Snapshot enhancement deployment: `4b22c1fd21ef465aa5bca5ca9fe2d49c`
- The shared `/alignable-icon.png` route serves Alignable's official purple interlocking mark (`alignable-official-v2`) across every footer.
- Do not add `wattsunified.com/*` or `www.wattsunified.com/*` to the homepage Worker. Those wildcard routes were removed because they intercepted legacy `/assets/` image files and returned HTML instead of images.
- Eight legacy image paths on both apex and `www` are pinned to deployment-owned replacements: Veteran imagery, Solutions imagery, Unified System hero, domain, email, tools, and Opportunity paths.
- Opportunity page release `20260721-solutions-nav10` preserves the original image-led hero, partner-benefits strip, audience strip, final CTA, and exact Professional Paths artwork. The Professional Paths image is embedded in the Worker as an optimized 1901×577 WebP, served from `/assets/opportunity-paths.png` with immutable browser caching, and retains both original destination links. The FAQ now uses a compact responsive two-column layout, lightweight native accordions, one `/schedule/solutions` conversion CTA, and matching FAQPage structured data. The shared footer repair remains idempotent to prevent repeated DOM work.
- Homepage Solutions links force a full document navigation to release 33 so the legacy SPA route cannot render.
- Homepage canonical, social metadata, structured data, and hero preload apply to direct homepage visits.

## Live Worker source map

| Cloudflare Worker | Repository source |
| --- | --- |
| `watts-solutions-stable-20260721` | `workers/solutions-page-proxy.js` |
| `watts-core-navigation` | `workers/core-navigation-homepage.js` |
| `watts-resources-stable-20260721` | `workers/resources-page.js` |
| `watts-financial-snapshot-enhancements` | `workers/financial-snapshot-enhancements.js` |
| `watts-about-page` | `workers/live/about-page.js` |
| `watts-business-legalshield` | `workers/live/business-legalshield.js` |
| `watts-business-page` | `workers/live/business-page.js` |
| `watts-interactive-briefings` | `workers/live/interactive-briefings.js` |
| `watts-legacy-playbook` | `workers/live/legacy-playbook.js` |
| `watts-life-insurance` | `workers/live/life-insurance.js` |
| `watts-protection-legacy` | `workers/live/protection-legacy.js` |
| `watts-retirement-wealth` | `workers/live/retirement-wealth.js` |
| `watts-million-dollar-baby` | `workers/live/million-dollar-baby-proxy.js` |
| `watts-retirement-roadmap` | `workers/live/retirement-roadmap-proxy.js` |
| `watts-protected-growth` | `workers/live/protected-growth-proxy.js` |
| `watts-tax-free-retirement` | `workers/live/tax-free-retirement-proxy.js` |

The `workers/live/` files were downloaded from the deployed Cloudflare Workers after the footer update. They are the exact standalone Worker and edge-proxy sources to use for future Cursor edits.

## Required checks before a future deployment

1. Run `npm test`.
2. Confirm the shared header and footer remain uniform.
3. Verify all sitemap pages and image URLs.
4. Preview changed pages before deploying.
5. Keep the protected rollback branch unchanged.

## Current verification

- Production build passed.
- 15 automated tests passed.
- 17 sitemap pages checked.
- 71 server-rendered image placements (33 unique images) checked across all 17 indexed pages.
- 0 image failures.
- Footer copyright: `© 2026 Watts Unified Solutions. All rights reserved.`
