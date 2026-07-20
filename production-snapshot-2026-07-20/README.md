# Watts Unified production recovery snapshot

Checkpoint date: 2026-07-20

This directory preserves the completed Cloudflare production rebuild. It is intended as a recovery point before the next round of website edits.

## Page sources

- `workers/solutions-index.js` — Solutions page
- `workers/business.js` — Business solutions and LegalShield routing
- `workers/life-insurance.js` — Life insurance conversion page
- `workers/retirement-wealth.js` — Retirement & Wealth conversion page
- `workers/protection-legacy.js` — Protection & Legacy conversion page
- `workers/legacy-playbook.js` — Legacy Playbook page
- `workers/resources.js` — Resources page
- `workers/interactive-briefings.js` — Interactive Briefings page
- `veteran-roadmap/` — Veteran Roadmap static site

## Recovery notes

The Worker files are the deployable versions used for the live rebuild. The Veteran Roadmap directory includes its HTML, CSS, JavaScript, routing files, and optimized production images.

Cloudflare credentials, local Wrangler state, preview captures, raw downloads, and superseded image drafts are intentionally excluded. Secrets must remain configured in Cloudflare and must never be committed to GitHub.
