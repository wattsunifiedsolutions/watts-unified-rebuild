# Watts Unified production source

Last verified: 2026-07-21

## Source branches

- Current live update: `codex/footer-2025-2026`
- Protected rollback baseline: `codex/production-stable-2026-07-21`
- Do not overwrite or force-push the protected rollback branch.

When opening the repository in Cursor, fetch the remote branches and check out `codex/footer-2025-2026` before making changes.

## Shared site deployment

- Sites project: `appgprj_6a5d817b479c8191975d29e666dcbc6e`
- Live Sites version: 33
- Version ID: `appgprj_6a5d817b479c8191975d29e666dcbc6e~appgver_e3c41a607cbc8191a073be56941143a6`
- Deployment ID: `appgdep_6a5fb0e4620081918c5df70adf233a88`
- Shared source commit: `c8f4e417b074b79d1b7f09395d6f35970d248212`
- Solutions edge release: `20260721-v33`
- Solutions Worker deployment: `28a2bdf9-ee68-4bee-85c7-713e2de51383`
- Homepage navigation Worker deployment: `41bfe08e-0b1b-42a4-8e64-f1f2cf74d33b`
- Homepage Solutions links force a full document navigation to release 33 so the legacy SPA route cannot render.

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

The `workers/live/` files were downloaded from the deployed Cloudflare Workers after the footer update. They are the exact standalone Worker sources to use for future Cursor edits.

## Required checks before a future deployment

1. Run `npm test`.
2. Confirm the shared header and footer remain uniform.
3. Verify all sitemap pages and image URLs.
4. Preview changed pages before deploying.
5. Keep the protected rollback branch unchanged.

## Current verification

- Production build passed.
- 13 automated tests passed.
- 17 sitemap pages checked.
- 71 image placements checked.
- 33 unique images checked.
- 0 image failures.
- Footer copyright: `© 2025–2026 Watts Unified Solutions. All rights reserved.`
