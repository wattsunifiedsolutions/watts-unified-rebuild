# Watts Unified Solutions

Portable React/Vite rebuild of wattsunified.com, prepared for Cloudflare Pages.

## Local preview

```sh
npm install
npm run dev
```

## Production build

```sh
npm run build
```

The static output is written to `dist/`. Cloudflare Pages settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: current LTS

## Contact form

The Pages Function at `functions/api/contact.js` sends form submissions to the secret environment variable `GHL_WEBHOOK_URL`. Add that secret in the Cloudflare Pages project under Settings → Variables and Secrets before switching the primary domain.

## Domain cutover

Test on the generated `pages.dev` address first. Only after the site and form pass review should `wattsunified.com` and `www.wattsunified.com` be assigned to the project.
