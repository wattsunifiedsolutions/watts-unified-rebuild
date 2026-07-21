import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the concise solutions acquisition page", async () => {
  const response = await render("/solutions");
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Solutions Built Around Your Life/);
  assert.match(html, /Protect what matters\. Build wealth\. Secure your legacy\./);
  assert.match(html, /Find My Solution/);
  assert.match(html, /Protect Your Family/);
  assert.match(html, /Prepare for Retirement/);
  assert.match(html, /Secure Your Legacy/);
  assert.match(html, /Protect Your Business/);
  assert.match(html, /Veteran &amp; Federal/);
  assert.match(html, /Million Dollar Baby/);
  assert.match(html, /Financial Snapshot/);
  assert.match(html, /Looking for a Business Opportunity/);
  assert.match(html, /data-analytics-event="solution_card_click"/);
  assert.match(html, /data-analytics-event="primary_cta_click"/);
  assert.match(html, /https:\/\/wattsunified\.com\/solutions\/life-insurance/);
  assert.match(html, /https:\/\/wattsunified\.com\/solutions\/retirement-wealth\//);
  assert.match(html, /https:\/\/wattsunified\.com\/solutions\/protection-legacy\//);
  assert.match(html, /https:\/\/wattsunified\.com\/solutions\/business/);
  assert.match(html, /https:\/\/blueprint\.wattsunified\.com\/veteran-roadmap/);
  assert.match(html, /https:\/\/wattsunified\.com\/million-dollar-baby/);
  assert.match(html, /https:\/\/financialsnapshot\.wattsunified\.com\//);
  assert.match(html, /rel="canonical" href="https:\/\/wattsunified\.com\/solutions\/"/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /width="1445" height="1088"/);
  assert.doesNotMatch(html, /What Happens Next|A clear, private path forward|Choose Your Focus/);
  assert.doesNotMatch(html, /calendar|iframe/i);
});

test("server-renders the conversion-focused retirement page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Retirement &amp; Wealth Strategy \| Watts Unified Solutions<\/title>/i);
  assert.match(html, /Retirement &amp; Wealth Architecture/);
  assert.match(html, /Traditional Retirement Model Is Broken/);
  assert.match(html, /Three Pillars of Wealth/);
  assert.match(html, /Schedule a Strategy Session/);
  assert.match(html, /Explore Tax Buckets/);
  assert.match(html, /Unified System/);
  assert.match(html, /Let(?:&#x27;|')s Connect/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /<section class="hero"[^>]*><img class="hero-image"/);
  assert.doesNotMatch(html, /hero-overlay|hero-content/);
  assert.match(html, /https:\/\/wattsunified\.com\/schedule\/solutions/);
  assert.match(html, /https:\/\/taxbuckets\.wattsunified\.com/);
  assert.match(html, /rel="canonical" href="https:\/\/wattsunified\.com\/solutions\/retirement-wealth\/"/);
  assert.match(html, /property="og:image" content="https:\/\/wattsunified\.com\/solutions-app\/og-family-v2\.jpg"/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("server-renders the Million Dollar Baby conversion page", async () => {
  const response = await render("/million-dollar-baby");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Million Dollar Baby/);
  assert.match(html, /The Power of Starting Early/);
  assert.match(html, /Fund College or Ventures/);
  assert.match(html, /Preserve Future Options/);
  assert.match(html, /Generational Wealth Transfer/);
  assert.match(html, /The Free Blueprint/);
  assert.match(html, /Request My Blueprint/);
  assert.match(html, /Explore All Solutions/);
  assert.match(html, /lite-video-trigger/);
  assert.doesNotMatch(html, /<iframe/i);
  assert.match(html, /https:\/\/financialsnapshot\.wattsunified\.com\/\?source=million-dollar-baby-blueprint/);
  assert.match(html, /rel="canonical" href="https:\/\/wattsunified\.com\/million-dollar-baby"/);
  assert.match(html, /https:\/\/wattsunified\.com\/solutions-app\/family-protection-social\.webp/);
  assert.match(html, /family-protection-social\.webp/);
  assert.match(html, /family-blueprint-guide\.webp/);
  assert.match(html, /What happens next/i);
  assert.match(html, /data-analytics-event="primary_cta_click"/);
  assert.match(html, /data-analytics-event="education_solutions_click"/);
  assert.match(html, /© 2025 Watts Unified Solutions/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /carrier/i);
});

test("server-renders the complete Retirement Roadmap page", async () => {
  const response = await render("/retirement-roadmap");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Retirement Roadmap \| Watts Unified Solutions<\/title>/);
  assert.match(html, /Retirement Roadmap/);
  assert.match(html, /Transitioning with Confidence/);
  assert.match(html, /Income Planning/);
  assert.match(html, /Risk Mitigation/);
  assert.match(html, /Legacy Alignment/);
  assert.match(html, /lite-video-trigger/);
  assert.doesNotMatch(html, /<iframe/i);
  assert.match(html, /rel="canonical" href="https:\/\/wattsunified\.com\/retirement-roadmap"/);
  assert.match(html, /retirement-roadmap-hero-v2\.webp/);
  assert.match(html, /data-analytics-event="primary_cta_click"/);
  assert.match(html, /Explore All Solutions/);
  assert.match(html, /data-analytics-event="education_solutions_click"/);
  assert.match(html, /© 2025 Watts Unified Solutions/);
  assert.match(html, /application\/ld\+json/);
});

test("server-renders the complete Protected Growth page", async () => {
  const response = await render("/protected-growth");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Protected Growth Strategy \| Watts Unified Solutions<\/title>/);
  assert.match(html, /Protected Growth/);
  assert.match(html, /Zero Is Your Hero/);
  assert.match(html, /Principal Protection/);
  assert.match(html, /Upside Potential/);
  assert.match(html, /Peace of Mind/);
  assert.match(html, /lite-video-trigger/);
  assert.doesNotMatch(html, /<iframe/i);
  assert.match(html, /https:\/\/financialsnapshot\.wattsunified\.com\/\?source=protected-growth/);
  assert.match(html, /rel="canonical" href="https:\/\/wattsunified\.com\/protected-growth"/);
  assert.match(html, /protected-growth-hero-v1\.webp/);
  assert.match(html, /data-analytics-event="primary_cta_click"/);
  assert.match(html, /Explore All Solutions/);
  assert.match(html, /data-analytics-event="education_solutions_click"/);
  assert.match(html, /© 2025 Watts Unified Solutions/);
  assert.match(html, /application\/ld\+json/);
});

test("server-renders the complete Tax-Free Retirement page", async () => {
  const response = await render("/tax-free-retirement");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Tax-Free Retirement Strategy \| Watts Unified Solutions<\/title>/);
  assert.match(html, /Tax-Free Retirement/);
  assert.match(html, /Keep More of What You Build\./);
  assert.match(html, /Explore My Tax Strategy/);
  assert.match(html, /Why Tax-Free Planning Matters/);
  assert.match(html, /Protect Against Rising Taxes/);
  assert.match(html, /Uninterrupted Compound Growth/);
  assert.match(html, /Tax-Advantaged Access/);
  assert.match(html, /lite-video-trigger/);
  assert.doesNotMatch(html, /<iframe/i);
  assert.match(html, /https:\/\/financialsnapshot\.wattsunified\.com\/\?source=tax-free-retirement/);
  assert.match(html, /rel="canonical" href="https:\/\/wattsunified\.com\/tax-free-retirement"/);
  assert.match(html, /tax-free-retirement-hero-v2\.webp/);
  assert.match(html, /data-analytics-event="primary_cta_click"/);
  assert.match(html, /Explore All Solutions/);
  assert.match(html, /data-analytics-event="education_solutions_click"/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /Instagram/);
  assert.match(html, /Alignable/);
  assert.match(html, /© 2025 Watts Unified Solutions/);
  assert.match(html, /application\/ld\+json/);
});

test("ships optimized local brand and hero assets", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    access(new URL("../public/retirement-family-v2.webp", import.meta.url)),
    access(new URL("../public/watts-logo.png", import.meta.url)),
    access(new URL("../public/watts-falcon.png", import.meta.url)),
    access(new URL("../public/favicon.ico", import.meta.url)),
    access(new URL("../public/og-family-v2.jpg", import.meta.url)),
    access(new URL("../public/solutions-hero.webp", import.meta.url)),
    access(new URL("../public/solutions-protection.jpg", import.meta.url)),
    access(new URL("../public/solutions-retirement.webp", import.meta.url)),
    access(new URL("../public/solutions-legacy.webp", import.meta.url)),
    access(new URL("../public/solutions-business.webp", import.meta.url)),
    access(new URL("../public/solutions-veteran.webp", import.meta.url)),
    access(new URL("../public/legacy-center-hero.webp", import.meta.url)),
    access(new URL("../public/resources-calculators.webp", import.meta.url)),
    access(new URL("../public/resources-family.webp", import.meta.url)),
    access(new URL("../public/family-protection-social.webp", import.meta.url)),
    access(new URL("../public/family-blueprint-guide.webp", import.meta.url)),
    access(new URL("../public/tax-free-retirement-hero-v2.webp", import.meta.url)),
  ]);

  assert.match(page, /src="\/retirement-family-v2\.webp"/);
  assert.match(page, /fetchPriority="high"/);
  assert.match(page, /application\/ld\+json/);
  assert.match(layout, /https:\/\/wattsunified\.com/);
  assert.doesNotMatch(layout, /rel="preload"/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app\/_sites-preview\/SkeletonPreview.tsx", import.meta.url)));
});

test("keeps Resources imagery deployment-owned and removes category labels", async () => {
  const source = await readFile(new URL("../workers/resources-page.js", import.meta.url), "utf8");
  assert.match(source, /\/solutions-app\/legacy-center-hero\.webp/);
  assert.match(source, /\/solutions-app\/resources-calculators\.webp/);
  assert.match(source, /\/solutions-app\/resources-family\.webp/);
  assert.match(source, /\/solutions-app\/solutions-business\.webp/);
  assert.doesNotMatch(source, /Category 0[123]|vibe\.filesafe|data:image/);
  assert.doesNotMatch(source, /replaceAll\('loading="lazy"','loading="eager"'\)/);
});

test("ships indexable SEO discovery files for every rebuilt route", async () => {
  const sitemapResponse = await render("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200);
  assert.match(sitemapResponse.headers.get("content-type") ?? "", /application\/xml/);
  const sitemap = await sitemapResponse.text();
  for (const route of ["/solutions/", "/million-dollar-baby", "/retirement-roadmap", "/protected-growth", "/tax-free-retirement"]) {
    assert.match(sitemap, new RegExp(`https://wattsunified\\.com${route.replaceAll("/", "\\/")}`));
  }

  const robotsResponse = await render("/robots.txt");
  assert.equal(robotsResponse.status, 200);
  const robots = await robotsResponse.text();
  assert.match(robots, /Allow: \//);
  assert.match(robots, /https:\/\/wattsunified\.com\/sitemap\.xml/);
});

test("keeps the shared header, footer, and conversion tracking uniform", async () => {
  for (const route of ["/", "/solutions", "/million-dollar-baby", "/retirement-roadmap", "/protected-growth", "/tax-free-retirement"]) {
    const response = await render(route);
    const html = await response.text();
    assert.match(html, /Watts Unified Solutions home/);
    assert.match(html, /Let(?:&#x27;|')s Connect/);
    assert.match(html, /LinkedIn/);
    assert.match(html, /Instagram/);
    assert.match(html, /Alignable/);
    assert.match(html, /© 2025 Watts Unified Solutions/);
    assert.match(html, /watts-logo\.png/);
  }
});

test("keeps the Solutions edge route pinned to the approved build", async () => {
  const worker = await readFile(new URL("../workers/solutions-page-proxy.js", import.meta.url), "utf8");
  const config = await readFile(new URL("../workers/wrangler.solutions-page.jsonc", import.meta.url), "utf8");

  assert.match(worker, /stable-approved-v3/);
  assert.match(worker, /stable-image-bypass-v3/);
  assert.match(worker, /solutions-trust/);
  assert.doesNotMatch(worker, /North American Company Partner|Retirement Readiness Checklist|wus-trust-bar|injectEnhancements/);
  assert.match(config, /wattsunified\.com\/solutions\*/);
  assert.match(config, /www\.wattsunified\.com\/solutions\*/);
});
