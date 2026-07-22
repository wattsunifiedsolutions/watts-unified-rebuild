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
- Solutions Worker deployment: `7a98a9eb124c46b89d633332f421fddb`
- Homepage navigation Worker deployment: `83582b2883244904b4314eff521059aa`
- Resources Worker deployment: `63378b4372fb42a3998f764ec945e5f0`
- Financial Snapshot enhancement deployment: `4b22c1fd21ef465aa5bca5ca9fe2d49c`
- Financial Professional opportunity deployment: `8442b50c6c6c48cf847b7ffcf214fe25`
- About page deployment: `3e547e7ff5f047c4865e7d51e2fa41b4`
- Growth Opportunity booking deployment: `9cdefc5b316a4be1bb315f4108a58ba4`
- Financial Strategy Session deployment: `9ec1c7bfd1b548fab2540c50959a2e59`
- Veteran Strategy Session deployment: `c824f444a1b14906a73c98a399c8f23c`
- Marketing Strategy Session deployment: `174488e3d05e470b8a65317530f3f1ae`
- Business LegalShield deployment: `87774ea9af614f41bcf2cd21338998b2`
- Business Solutions deployment: `827e3395241b4bbe97dd87104730ae18`
- Interactive Briefings deployment: `37b6afc6e26a4707bcc4d4af9035bb0f`
- Legacy Playbook deployment: `eb81cbab382f4e5d81f80a58c4ea83e1`
- Life Insurance deployment: `0d796a7cd74a4648872304d31c0fcf1e`
- Protection & Legacy deployment: `d224337f41ec4eb8a4c31c103f5131fe`
- Retirement & Wealth deployment: `dc00e312529a4962b90adfe0ae5a65a8`
- Million Dollar Baby deployment: `dacaa9db5fc24f809e588965f94509a5`
- Retirement Roadmap deployment: `8880381ad49843489f5731af84a3481b`
- Protected Growth deployment: `3632e5de30864f3188b22a7fc878f6b5`
- Tax-Free Retirement deployment: `dfaf60f408fc4bcaa8165abdf525ae80`
- The shared `/alignable-icon.png` route serves Alignable's official purple interlocking mark (`alignable-official-v3`) at a uniform 18×18 size across every managed footer.
- Do not add `wattsunified.com/*` or `www.wattsunified.com/*` to the homepage Worker. Those wildcard routes were removed because they intercepted legacy `/assets/` image files and returned HTML instead of images.
- Eight legacy image paths on both apex and `www` are pinned to deployment-owned replacements: Veteran imagery, Solutions imagery, Unified System hero, domain, email, tools, and Opportunity paths.
- Opportunity page release `20260721-solutions-nav20` preserves the original image-led hero, partner-benefits strip, audience strip, and exact Professional Paths artwork. The Professional Paths image is embedded in the Worker as an optimized 1901×577 WebP, served from `/assets/opportunity-paths.png` with immutable browser caching, and retains both original destination links. The FAQ uses a compact responsive two-column layout, lightweight native accordions, one `/schedule/solutions` conversion CTA, and matching FAQPage structured data. Both Opportunity appointment CTAs link directly to the dedicated `/growth` Growth & Opportunity booking page. Internal links on shared legacy-app pages now use current-document navigation so the old SPA cannot reuse an outdated route after an update. HTML, application JavaScript, and the repair script send browser and CDN no-store directives; visitors no longer need a hard refresh to receive the current page build. The closing section remains a compact responsive fit-conversation layout with a short reassurance line. The root Opportunity footer uses the approved light off-white site treatment with navy text, trust copy, shared links, social icons, the standard brand lockup, and the uniform © 2026 copyright.
- LegalShield Independent Associate imagery is restored from the exact original HighLevel build. The optimized 1408×768 WebP hero and professional images are stored in deployment-owned KV namespace `watts-legalshield-opportunity-assets` (`9a2ff1847b7a49c6beb883c6c09df225`) and served through the original first-party paths with immutable caching. Stable width, height, loading, and decoding attributes prevent layout shifts, and the light shared footer uses the official Alignable mark.
- Financial Professional release `8442b50c6c6c48cf847b7ffcf214fe25` keeps the complete original HighLevel composition at `/opportunity/financial-professional`: the image-led hero, centered opening statement, three image-led service cards, split Why Partner section, original image-backed five-value Freedom Framework, improved two-column FAQ, and the S. Alex closing section. The natural hero image now includes a compact “Independent Business Ownership / Let’s Connect” action positioned directly on the image without a full-image overlay, fade, box, or color distortion. That hero action replaces the button formerly placed below the image and scrolls to the focused closing decision section. The page retains only one actual ownership-conversation booking link, and the Freedom Framework and FAQ do not interrupt the journey with additional schedule buttons. The final CTA says “Start an Ownership Conversation,” and its concise qualification copy identifies the expected commitment to serving families, completing licensing, and building an independent financial business. The disclosure clearly identifies an independent business ownership opportunity—not employment—and retains the accurate 1099 contractor, licensing, commission-based compensation, variable-results, and no-income-guarantee language. The page uses the approved shared light off-white footer with the standard brand lockup, navy and gray type, trust copy, links, official social icons, and © 2026 copyright. Seven optimized WebP images are stored in deployment-owned KV namespace `watts-financial-professional-assets` (`1aa16e9230a54778bd8830493ba30095`) and served through immutable first-party URLs under `/assets/financial-professional/`; tests cover every image route. Page HTML remains no-store so updates do not remain stuck behind a stale page.
- The About page reuses the approved 800×800 Financial Professional portrait from `/assets/financial-professional/alex.webp`. The deployment-owned WebP is used consistently in the visible hero, preload, Open Graph metadata, and Person structured data; the established About layout, navigation, and footer remain unchanged. Its HTML now sends strict browser and CDN no-store directives so an older cached About build cannot reappear on first navigation.
- The `/growth` schedule landing page is rebuilt from the original HighLevel reference with the premium boardroom hero, the live Growth & Opportunity Google Calendar, a responsive conversion layout, the shared non-sticky navigation/footer, social icons, and © 2026 copyright. Its optimized 1408×768 hero is stored in deployment-owned KV namespace `watts-schedule-page-assets` (`b302eb806da84e34a5c91479f8c658cf`) and served from `/assets/growth-opportunity-hero.webp` with immutable caching. Page HTML is no-store so the placeholder build cannot remain stuck behind a stale CDN response.
- The `/financial-strategy-session` landing page preserves the original HighLevel office hero and live 60-minute Financial Strategy Session Google Calendar, then adds a concise three-point expectation strip, one primary booking action, private-session reassurance, accessible responsive behavior, and the uniform non-sticky navigation/light footer. Its optimized 1408×768 WebP is stored in the shared deployment-owned schedule KV namespace under `financial-strategy-session-hero.webp` and served from `/assets/financial-strategy-session-hero.webp` with immutable caching. Page HTML remains no-store.
- The `/veteran-strategy-session` landing page preserves the original HighLevel Mission Briefing identity, exact veteran-strategy boardroom hero, and live 60-minute Google appointment calendar. It adds a concise veteran-and-federal expectation strip, one primary booking action, private-session reassurance, an explicit government non-affiliation disclaimer, responsive behavior, and the uniform non-sticky navigation/light footer. Its optimized 1024×1024 WebP is stored in the shared deployment-owned schedule KV namespace under `veteran-strategy-session-hero.webp` and served from `/assets/veteran-strategy-session-hero.webp` with immutable caching. Page HTML remains no-store.
- The `/schedule/marketing` landing page preserves the original HighLevel “Audit Your Digital Foundation” positioning and exact 60-minute Business Systems Strategy Google Calendar. `/schedule/system` and its trailing-slash form are direct aliases of that completed dedicated page, while `/schedule/marketing` remains canonical to prevent duplicate indexing. The rebuild replaces the dark empty hero and oversized fallback form with a premium image-led opening featuring Black business leaders, a concise systems-audit conversion section, three clear expectations, one primary booking action, a lightweight alternate contact link, analytics events, responsive behavior, and the uniform non-sticky navigation/light footer. Its optimized 1408×768 WebP is stored in the shared deployment-owned schedule KV namespace under `marketing-strategy-session-hero.webp` and served from `/assets/marketing-strategy-session-hero.webp` with immutable caching. Page HTML remains no-store.
- Schedule hero repair `20260721-hero2` applies to `/growth`, `/financial-strategy-session`, `/veteran-strategy-session`, and `/schedule/marketing`. Every visible hero and preload now uses a versioned first-party URL so a previously cached failed request cannot leave a blank hero. The three overlaid heroes use explicit foreground image stacking (`z-index: 0`) with content above them instead of negative image layers, improving consistency across browsers. All four Google Calendar URLs remain unchanged.
- The main `/schedule` Let’s Connect page uses conversion hero release `20260721-connect-hero4`, restoring the exact bright executive-office image from the original HighLevel build. The 1408×768 WebP is 74 KB, stored in deployment-owned KV under `lets-connect-hero-original-v1.webp`, served through a versioned immutable first-party URL, and preloaded for LCP. The natural image stands on its own without an overlay, gradient, or text collision; the conversion headline and supporting copy sit in a centered white section immediately beneath it. Mobile displays the image at a stable 16:9 ratio above the copy, with no horizontal overflow; the message form, schedule switcher, header, footer, and calendar behavior remain unchanged.
- `/schedule/opportunity` and `/schedule/opportunity/` are specific aliases of the completed `/growth` booking build. Opportunity-page CTAs therefore receive the same image-led Growth page and Growth & Opportunity calendar instead of the older generic schedule shell; the canonical remains `/growth` to prevent duplicate indexing.
- Every top navigation “Let’s Connect” button routes to the dedicated `/schedule` Let’s Connect page. Service-specific Financial Strategy, Veteran Strategy, Growth Opportunity, and Marketing appointments retain their separate destination pages.
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
- 26 automated tests passed.
- 17 sitemap pages checked.
- 71 server-rendered image placements (33 unique images) checked across all 17 indexed pages.
- 0 image failures.
- Footer copyright: `© 2026 Watts Unified Solutions. All rights reserved.`
