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
- Homepage navigation Worker deployment: `e936450ca71f40fd8991dd06d33933bd`
- Resources Worker deployment: `ed024d71445543b5adb1e4d98f401d10`
- Financial Snapshot enhancement deployment: `4b22c1fd21ef465aa5bca5ca9fe2d49c`
- Financial Professional opportunity deployment: `648670cb559b4b43a4f6240d6a6fbc6f`
- About page deployment: `0919efa9913f4412b92fe17c263e1a30`
- Growth Opportunity booking deployment: `488e47ca0eb1403ea262aea474fa1d7b`
- Financial Strategy Session deployment: `b96d6d47374a4d25a4ac79a11cc3696b`
- Veteran Strategy Session deployment: `798d71b2eee8463c9aea18cdc918f99b`
- Marketing Strategy Session deployment: `335c89ac1c60414283725a46c2e884f6`
- The shared `/alignable-icon.png` route serves Alignable's official purple interlocking mark (`alignable-official-v3`) at a uniform 18×18 size across every managed footer.
- Do not add `wattsunified.com/*` or `www.wattsunified.com/*` to the homepage Worker. Those wildcard routes were removed because they intercepted legacy `/assets/` image files and returned HTML instead of images.
- Eight legacy image paths on both apex and `www` are pinned to deployment-owned replacements: Veteran imagery, Solutions imagery, Unified System hero, domain, email, tools, and Opportunity paths.
- Opportunity page release `20260721-solutions-nav20` preserves the original image-led hero, partner-benefits strip, audience strip, and exact Professional Paths artwork. The Professional Paths image is embedded in the Worker as an optimized 1901×577 WebP, served from `/assets/opportunity-paths.png` with immutable browser caching, and retains both original destination links. The FAQ uses a compact responsive two-column layout, lightweight native accordions, one `/schedule/solutions` conversion CTA, and matching FAQPage structured data. Both Opportunity appointment CTAs link directly to the dedicated `/growth` Growth & Opportunity booking page. Internal links on shared legacy-app pages now use current-document navigation so the old SPA cannot reuse an outdated route after an update. HTML, application JavaScript, and the repair script send browser and CDN no-store directives; visitors no longer need a hard refresh to receive the current page build. The closing section remains a compact responsive fit-conversation layout with a short reassurance line. The root Opportunity footer uses the approved light off-white site treatment with navy text, trust copy, shared links, social icons, the standard brand lockup, and the uniform © 2026 copyright.
- LegalShield Independent Associate imagery is restored from the exact original HighLevel build. The optimized 1408×768 WebP hero and professional images are stored in deployment-owned KV namespace `watts-legalshield-opportunity-assets` (`9a2ff1847b7a49c6beb883c6c09df225`) and served through the original first-party paths with immutable caching. Stable width, height, loading, and decoding attributes prevent layout shifts, and the light shared footer uses the official Alignable mark.
- Financial Professional release `648670cb559b4b43a4f6240d6a6fbc6f` keeps the complete original HighLevel composition and copy at `/opportunity/financial-professional`: the image-led hero, centered opening statement, three image-led service cards, split Why Partner section, original image-backed five-value Freedom Framework, improved two-column FAQ, and the original S. Alex closing section. The page now uses the approved shared light off-white footer with the standard brand lockup, navy and gray type, trust copy, links, official social icons, and © 2026 copyright. Seven optimized WebP images are stored in deployment-owned KV namespace `watts-financial-professional-assets` (`1aa16e9230a54778bd8830493ba30095`) and served through immutable first-party URLs under `/assets/financial-professional/`; tests cover every image route. Page HTML remains no-store so updates do not remain stuck behind a stale page.
- The About page reuses the approved 800×800 Financial Professional portrait from `/assets/financial-professional/alex.webp`. The deployment-owned WebP is used consistently in the visible hero, preload, Open Graph metadata, and Person structured data; the established About layout, navigation, and footer remain unchanged.
- The `/growth` schedule landing page is rebuilt from the original HighLevel reference with the premium boardroom hero, the live Growth & Opportunity Google Calendar, a responsive conversion layout, the shared non-sticky navigation/footer, social icons, and © 2026 copyright. Its optimized 1408×768 hero is stored in deployment-owned KV namespace `watts-schedule-page-assets` (`b302eb806da84e34a5c91479f8c658cf`) and served from `/assets/growth-opportunity-hero.webp` with immutable caching. Page HTML is no-store so the placeholder build cannot remain stuck behind a stale CDN response.
- The `/financial-strategy-session` landing page preserves the original HighLevel office hero and live 60-minute Financial Strategy Session Google Calendar, then adds a concise three-point expectation strip, one primary booking action, private-session reassurance, accessible responsive behavior, and the uniform non-sticky navigation/light footer. Its optimized 1408×768 WebP is stored in the shared deployment-owned schedule KV namespace under `financial-strategy-session-hero.webp` and served from `/assets/financial-strategy-session-hero.webp` with immutable caching. Page HTML remains no-store.
- The `/veteran-strategy-session` landing page preserves the original HighLevel Mission Briefing identity, exact veteran-strategy boardroom hero, and live 60-minute Google appointment calendar. It adds a concise veteran-and-federal expectation strip, one primary booking action, private-session reassurance, an explicit government non-affiliation disclaimer, responsive behavior, and the uniform non-sticky navigation/light footer. Its optimized 1024×1024 WebP is stored in the shared deployment-owned schedule KV namespace under `veteran-strategy-session-hero.webp` and served from `/assets/veteran-strategy-session-hero.webp` with immutable caching. Page HTML remains no-store.
- The `/schedule/marketing` landing page preserves the original HighLevel “Audit Your Digital Foundation” positioning and exact 60-minute Business Systems Strategy Google Calendar. The rebuild replaces the dark empty hero and oversized fallback form with a premium image-led opening featuring Black business leaders, a concise systems-audit conversion section, three clear expectations, one primary booking action, a lightweight alternate contact link, analytics events, responsive behavior, and the uniform non-sticky navigation/light footer. Its optimized 1408×768 WebP is stored in the shared deployment-owned schedule KV namespace under `marketing-strategy-session-hero.webp` and served from `/assets/marketing-strategy-session-hero.webp` with immutable caching. Page HTML remains no-store.
- Schedule hero repair `20260721-hero2` applies to `/growth`, `/financial-strategy-session`, `/veteran-strategy-session`, and `/schedule/marketing`. Every visible hero and preload now uses a versioned first-party URL so a previously cached failed request cannot leave a blank hero. The three overlaid heroes use explicit foreground image stacking (`z-index: 0`) with content above them instead of negative image layers, improving consistency across browsers. The Let’s Connect page and all four Google Calendar URLs were left unchanged.
- `/schedule/opportunity` and `/schedule/opportunity/` are specific aliases of the completed `/growth` booking build. Opportunity-page CTAs therefore receive the same image-led Growth page and Growth & Opportunity calendar instead of the older generic schedule shell; the canonical remains `/growth` to prevent duplicate indexing.
- Homepage Solutions links force a full document navigation to release 33 so the legacy SPA route cannot render.
- Homepage canonical, social metadata, structured data, and hero preload apply to direct homepage visits.

## Live Worker source map

| Cloudflare Worker | Repository source |
| --- | --- |
| `watts-solutions-stable-20260721` | `workers/solutions-page-proxy.js` |
| `watts-core-navigation` | `workers/core-navigation-homepage.js` |
| `watts-resources-stable-20260721` | `workers/resources-page.js` |
| `watts-financial-snapshot-enhancements` | `workers/financial-snapshot-enhancements.js` |
| `watts-financial-professional` | `workers/live/financial-professional.js` |
| `watts-about-page` | `workers/live/about-page.js` |
| `watts-growth-page` | `workers/live/growth-page.js` |
| `watts-financial-strategy-session` | `workers/live/financial-strategy-session.js` |
| `watts-veteran-strategy-session` | `workers/live/veteran-strategy-session.js` |
| `watts-marketing-strategy-session` | `workers/live/marketing-strategy-session.js` |
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
- 23 automated tests passed.
- 17 sitemap pages checked.
- 71 server-rendered image placements (33 unique images) checked across all 17 indexed pages.
- 0 image failures.
- Footer copyright: `© 2026 Watts Unified Solutions. All rights reserved.`
