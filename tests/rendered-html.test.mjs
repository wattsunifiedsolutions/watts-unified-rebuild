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

test("keeps the live retirement wealth page on the premium conversion system", async () => {
  const { default: worker } = await import("../workers/live/retirement-wealth.js");
  const response = await worker.fetch(new Request("https://wattsunified.com/solutions/retirement-wealth/"));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /retirement-wealth-hero-light/);
  assert.match(html, /\.site-header\{background:#fff/);
  assert.match(html, /rgba\(251,248,242,\.95\)/);
  assert.match(html, /Build Income That Lasts\. Protect the Wealth You Built\./);
  assert.match(html, /\/assets\/retirement-wealth-hero-v2\.jpg/);
  assert.match(html, /Schedule a Strategy Session/);
  assert.match(html, /Take the Financial Snapshot/);
  assert.match(html, /class="global-footer"/);
  assert.match(html, /data-wu-footer-nap="footer1"/);
  assert.doesNotMatch(html, /solutions\/_assets\/logo\.png/);

  await access(new URL("../public/assets/retirement-wealth-hero-v2.jpg", import.meta.url));
  await access(new URL("../public/assets/logo.png", import.meta.url));
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
  assert.match(html, /© 2026 Watts Unified Solutions/);
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
  assert.match(html, /© 2026 Watts Unified Solutions/);
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
  assert.match(html, /© 2026 Watts Unified Solutions/);
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
  assert.match(html, /© 2026 Watts Unified Solutions/);
  assert.match(html, /application\/ld\+json/);
});

test("renders the complete Financial Professional opportunity page", async () => {
  const { default: worker } = await import("../workers/live/financial-professional.js");
  const response = await worker.fetch(new Request("https://wattsunified.com/opportunity/financial-professional"));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  assert.match(response.headers.get("cloudflare-cdn-cache-control") ?? "", /no-store/);

  const html = await response.text();
  assert.match(html, /Financial Professional Opportunity \| Watts Unified Solutions/);
  assert.match(html, /Build Your Financial Business\./);
  assert.match(html, /Serve families with flexibility, mentorship, and proven systems\./);
  assert.doesNotMatch(html, /On Your Terms|Join the financial industry|support-lines/);
  assert.match(html, /class="hero-message"/);
  assert.match(html, /Freedom to Build/);
  assert.match(html, /class="hero-link" href="#partnership-fit"[^>]*>Let's Connect<\/a>/);
  assert.equal((html.match(/href="#partnership-fit"/g) || []).length, 1);
  assert.match(html, /Ready to Build With Purpose and Freedom\?/);
  assert.doesNotMatch(html, /Explore Business Ownership With S\. Alex Watts|Your Next Step/);
  assert.match(html, /Start a Partnership Conversation/);
  assert.equal((html.match(/href="\/schedule\/opportunity"/g) || []).length, 1);
  assert.doesNotMatch(html, /Explore the Ownership Path|Financial professional FAQ/);
  assert.match(html, /Independent financial services opportunity&mdash;not employment\.<\/small>/);
  assert.doesNotMatch(html, /Licensing required; commission-based compensation and results vary\./);
  assert.doesNotMatch(html, /Apply to Partner With S\. Alex/i);
  assert.match(html, /What You Will <em>Actually Do\.<\/em>/);
  assert.match(html, /Retirement Planning/);
  assert.match(html, /Financial Education/);
  assert.match(html, /Generational Legacy/);
  assert.match(html, /Why Watts Unified Solutions/);
  assert.doesNotMatch(html, /Watts Unified(?! Solutions)/);
  assert.match(html, /Support to Build With Confidence\./);
  assert.match(html, /class="compact-benefits"/);
  assert.match(html, /class="value-strip" aria-label="The Freedom Framework values"/);
  assert.match(html, /<span>Faith<\/span><span>Family<\/span><span>Freedom<\/span><span>Fitness<\/span><span>Fun<\/span>/);
  assert.doesNotMatch(html, /<section class="framework">|Black mentor guiding a new financial professional/);
  assert.match(html, /class="wrap faq-layout"><div class="faq-list">/);
  assert.doesNotMatch(html, /Partnership FAQ|See Whether This Partnership Fits|Get clear answers about licensing|Common Questions|Know what you are exploring|Review the essentials about licensing|class="faq-side"/);
  assert.match(html, /Real success isn't measured only by income/);
  assert.match(html, /\/schedule\/opportunity/);
  assert.match(html, /independent financial services opportunity&mdash;not employment&mdash;with commission-based compensation/i);
  assert.match(html, /no income is guaranteed/i);
  assert.doesNotMatch(html, /ownership model|True Ownership|business ownership opportunity|Ownership Conversation|Independent Business Ownership|brokerage|\bGFI\b|1099 contractor relationship/i);
  assert.match(html, /rel="canonical" href="https:\/\/wattsunified\.com\/opportunity\/financial-professional"/);
  assert.match(html, /FAQPage/);
  assert.match(html, /data-analytics-event="primary_cta_click"/);
  assert.match(html, /\/assets\/financial-professional\/hero\.webp/);
  assert.match(html, /width="1408" height="768" fetchpriority="high"/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /Instagram/);
  assert.match(html, /Alignable/);
  assert.match(html, /(?:©|&copy;) 2026 Watts Unified Solutions/);
  assert.match(html, /\.global-footer\{[^}]*background:#f6f8fa[^}]*color:#667085/);
  assert.doesNotMatch(html, /\.global-footer\{[^}]*background:var\(--navy\)/);
  assert.match(html, /Watts Unified Solutions home/);
  assert.match(html, /Let's Connect/);
  assert.doesNotMatch(html, /filesafe\.space|\/growth|carrier logo/i);
});

test("serves immutable Financial Professional deployment-owned images", async () => {
  const { default: worker } = await import("../workers/live/financial-professional.js");
  const assets = [
    ["hero.webp", "FIN_HERO"],
    ["retirement.webp", "FIN_RETIREMENT"],
    ["education.webp", "FIN_EDUCATION"],
    ["legacy.webp", "FIN_LEGACY"],
    ["mentor.webp", "FIN_MENTOR"],
    ["freedom.webp", "FIN_FREEDOM"],
    ["alex.webp", "FIN_ALEX"],
  ];
  for (const [file, binding] of assets) {
    const response = await worker.fetch(
      new Request(`https://wattsunified.com/assets/financial-professional/${file}`),
      { [binding]: new Uint8Array([82, 73, 70, 70]) },
    );
    assert.equal(response.status, 200, file);
    assert.equal(response.headers.get("content-type"), "image/webp", file);
    assert.match(response.headers.get("cache-control") ?? "", /immutable/, file);
    assert.equal(response.headers.get("x-watts-financial-professional"), "complete-images-light-footer-v1", file);
  }
});

test("uses the approved Financial Professional portrait on the About page", async () => {
  const { default: worker } = await import("../workers/live/about-page.js");
  const response = await worker.fetch(new Request("https://wattsunified.com/about"));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  assert.equal(response.headers.get("cloudflare-cdn-cache-control"), "no-store");
  assert.equal(response.headers.get("cdn-cache-control"), "no-store");
  assert.equal(response.headers.get("x-watts-about"), "direct-no-refresh-v1");
  const html = await response.text();
  assert.match(html, /https:\/\/wattsunified\.com\/assets\/financial-professional\/alex\.webp/);
  assert.match(html, /width="800" height="800" fetchpriority="high" decoding="async"/);
  assert.match(html, /<meta property="og:image" content="https:\/\/wattsunified\.com\/assets\/financial-professional\/alex\.webp">/);
  assert.match(html, /"image":"https:\/\/wattsunified\.com\/assets\/financial-professional\/alex\.webp"/);
  assert.doesNotMatch(html, /about-s-alex-original\.png/);
});

test("serves a bodyless About response for cache-safe HEAD requests", async () => {
  const { default: worker } = await import("../workers/live/about-page.js");
  const response = await worker.fetch(new Request("https://wattsunified.com/about", { method: "HEAD" }));
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("cache-control"), "no-store, max-age=0");
  assert.equal(response.headers.get("x-watts-about"), "direct-no-refresh-v1");
  assert.equal(await response.text(), "");
});

test("rebuilds the Growth Opportunity booking page from the HighLevel reference", async () => {
  const { default: worker } = await import("../workers/live/growth-page.js");
  const response = await worker.fetch(new Request("https://wattsunified.com/growth"));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  assert.equal(response.headers.get("x-watts-growth"), "highlevel-rebuild-v1");
  const html = await response.text();
  assert.match(html, /Explore a Growth Opportunity/);
  assert.match(html, /Schedule Growth &amp; Opportunity Session/);
  assert.match(html, /calendar\.google\.com\/calendar\/appointments\/schedules\/AcZssZ3ftaGinVKd21W8W3fKh1bv2LsLqiaoDuujeE2eFynNsyyzSF8R0n8AO4AywNeGbn5JdvYQKQrs\?gv=true/);
  assert.match(html, /\/assets\/growth-opportunity-hero\.webp/);
  assert.match(html, /growth-opportunity-hero\.webp\?v=20260721-hero2/);
  assert.match(html, /width="1408" height="768" fetchpriority="high" decoding="async"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/wattsunified\.com\/growth">/);
  assert.match(html, /Let&#39;s Connect/);
  assert.match(html, /© 2026 Watts Unified Solutions/);
  assert.doesNotMatch(html, /filesafe\.space|A Clearer Path Starts Here/);

  const image = await worker.fetch(
    new Request("https://wattsunified.com/assets/growth-opportunity-hero.webp"),
    { GROWTH_ASSETS: { get: async () => new Uint8Array([82, 73, 70, 70]) } },
  );
  assert.equal(image.status, 200);
  assert.equal(image.headers.get("content-type"), "image/webp");
  assert.match(image.headers.get("cache-control") ?? "", /immutable/);
  await access(new URL("../public/growth-opportunity-hero.webp", import.meta.url));

  const opportunityAlias = await worker.fetch(new Request("https://wattsunified.com/schedule/opportunity"));
  assert.equal(opportunityAlias.status, 200);
  const opportunityHtml = await opportunityAlias.text();
  assert.match(opportunityHtml, /Explore a Growth Opportunity/);
  assert.match(opportunityHtml, /growth-opportunity-hero\.webp\?v=20260721-hero2/);
  assert.match(opportunityHtml, /Schedule Growth &amp; Opportunity Session/);
});

test("rebuilds the Financial Strategy Session page for focused conversion", async () => {
  const { default: worker } = await import("../workers/live/financial-strategy-session.js");
  const response = await worker.fetch(new Request("https://wattsunified.com/financial-strategy-session"));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  assert.equal(response.headers.get("x-watts-financial-strategy"), "highlevel-conversion-v1");
  const html = await response.text();
  assert.match(html, /Financial Strategy Session/);
  assert.match(html, /Choose a Time That Works for You/);
  assert.match(html, /Schedule Financial Strategy Session/);
  assert.match(html, /calendar\.google\.com\/calendar\/appointments\/schedules\/AcZssZ0lseR7Aby6nJ6CKEqfSD-Dl9-9ZhzjpupzdIBN5iTWWYTBzFuPCvE9a7R4nRQs2DpgdEyoN8o4\?gv=true/);
  assert.match(html, /\/assets\/financial-strategy-session-hero\.webp/);
  assert.match(html, /financial-strategy-session-hero\.webp\?v=20260721-hero2/);
  assert.match(html, /width="1408" height="768" fetchpriority="high" decoding="async"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/wattsunified\.com\/financial-strategy-session">/);
  assert.match(html, /Clear Priorities/);
  assert.match(html, /60 Minutes/);
  assert.match(html, /Private &amp; Confidential/);
  assert.match(html, /Let&#39;s Connect/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /Instagram/);
  assert.match(html, /Alignable/);
  assert.match(html, /&copy; 2026 Watts Unified Solutions/);
  assert.doesNotMatch(html, /filesafe\.space|Unified System<\/a><\/nav>/);

  const image = await worker.fetch(
    new Request("https://wattsunified.com/assets/financial-strategy-session-hero.webp"),
    { SCHEDULE_ASSETS: { get: async () => new Uint8Array([82, 73, 70, 70]) } },
  );
  assert.equal(image.status, 200);
  assert.equal(image.headers.get("content-type"), "image/webp");
  assert.match(image.headers.get("cache-control") ?? "", /immutable/);
  assert.equal(image.headers.get("x-watts-financial-strategy"), "highlevel-conversion-v1");
  await access(new URL("../public/financial-strategy-session-hero.webp", import.meta.url));
});

test("rebuilds the Veteran Strategy Session page from the HighLevel mission briefing", async () => {
  const { default: worker } = await import("../workers/live/veteran-strategy-session.js");
  const response = await worker.fetch(new Request("https://wattsunified.com/veteran-strategy-session"));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  assert.equal(response.headers.get("x-watts-veteran-strategy"), "highlevel-conversion-v1");
  const html = await response.text();
  assert.match(html, /Mission Briefing/);
  assert.match(html, /Veteran &amp; Federal Focus/);
  assert.match(html, /Reserve Your Mission Briefing/);
  assert.match(html, /Schedule Mission Briefing/);
  assert.match(html, /calendar\.google\.com\/calendar\/appointments\/schedules\/AcZssZ0gtBbKISi03dplcfFfJEQqRCocuYZBrbUJYiuavFzCB9yXUZ-_sc3J0h-pXY9pMTV55ClCaLob\?gv=true/);
  assert.match(html, /\/assets\/veteran-strategy-session-hero\.webp/);
  assert.match(html, /veteran-strategy-session-hero\.webp\?v=20260721-hero2/);
  assert.match(html, /width="1024" height="1024" fetchpriority="high" decoding="async"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/wattsunified\.com\/veteran-strategy-session">/);
  assert.match(html, /not affiliated with or endorsed by the U\.S\. Government/);
  assert.match(html, /Let&#39;s Connect/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /Instagram/);
  assert.match(html, /Alignable/);
  assert.match(html, /&copy; 2026 Watts Unified Solutions/);
  assert.doesNotMatch(html, /filesafe\.space|Unified System<\/a><\/nav>/);

  const image = await worker.fetch(
    new Request("https://wattsunified.com/assets/veteran-strategy-session-hero.webp"),
    { SCHEDULE_ASSETS: { get: async () => new Uint8Array([82, 73, 70, 70]) } },
  );
  assert.equal(image.status, 200);
  assert.equal(image.headers.get("content-type"), "image/webp");
  assert.match(image.headers.get("cache-control") ?? "", /immutable/);
  assert.equal(image.headers.get("x-watts-veteran-strategy"), "highlevel-conversion-v1");
  await access(new URL("../public/veteran-strategy-session-hero.webp", import.meta.url));
});

test("rebuilds the Marketing Strategy Session page around the original systems audit", async () => {
  const { default: worker } = await import("../workers/live/marketing-strategy-session.js");
  const response = await worker.fetch(new Request("https://wattsunified.com/schedule/marketing"));
  assert.equal(response.status, 200);
  assert.match(response.headers.get("cache-control") ?? "", /no-store/);
  assert.equal(response.headers.get("x-watts-marketing-strategy"), "highlevel-conversion-v1");
  const html = await response.text();
  assert.match(html, /Audit Your Digital Foundation/);
  assert.match(html, /Systems &amp; Infrastructure/);
  assert.match(html, /Reserve Your Business Systems Strategy Session/);
  assert.match(html, /Schedule Marketing Audit/);
  assert.match(html, /calendar\.google\.com\/calendar\/appointments\/schedules\/AcZssZ1gxff_vnvbL_Xrb8CT2bEncJcdBy-_EY-Wa_gYbGqKdf2nKCbVkcgvXMIDtCKqjp83elVSXgTh\?gv=true/);
  assert.match(html, /\/assets\/marketing-strategy-session-hero\.webp/);
  assert.match(html, /marketing-strategy-session-hero\.webp\?v=20260721-hero2/);
  assert.match(html, /width="1408" height="768" fetchpriority="high" decoding="async"/);
  assert.match(html, /<link rel="canonical" href="https:\/\/wattsunified\.com\/schedule\/marketing">/);
  assert.match(html, /60-Minute Strategy Session/);
  assert.match(html, /Clear Action Priorities/);
  assert.match(html, /data-watts-event="marketing_primary_cta"/);
  assert.match(html, /Let&#39;s Connect/);
  assert.match(html, /LinkedIn/);
  assert.match(html, /Instagram/);
  assert.match(html, /Alignable/);
  assert.match(html, /&copy; 2026 Watts Unified Solutions/);
  assert.doesNotMatch(html, /filesafe\.space|Unified System<\/a><\/nav>|Not ready to lock in a time\?<\/h2>/);

  const systemAlias = await worker.fetch(new Request("https://wattsunified.com/schedule/system"));
  assert.equal(systemAlias.status, 200);
  const systemHtml = await systemAlias.text();
  assert.match(systemHtml, /Audit Your Digital Foundation/);
  assert.match(systemHtml, /marketing-strategy-session-hero\.webp\?v=20260721-hero2/);
  assert.match(systemHtml, /Schedule Marketing Audit/);
  assert.match(systemHtml, /<link rel="canonical" href="https:\/\/wattsunified\.com\/schedule\/marketing">/);
  const marketingConfig = await readFile(new URL("../workers/wrangler.marketing-strategy-session.jsonc", import.meta.url), "utf8");
  assert.match(marketingConfig, /wattsunified\.com\/schedule\/system\*/);
  assert.match(marketingConfig, /www\.wattsunified\.com\/schedule\/system\*/);

  const image = await worker.fetch(
    new Request("https://wattsunified.com/assets/marketing-strategy-session-hero.webp"),
    { SCHEDULE_ASSETS: { get: async () => new Uint8Array([82, 73, 70, 70]) } },
  );
  assert.equal(image.status, 200);
  assert.equal(image.headers.get("content-type"), "image/webp");
  assert.match(image.headers.get("cache-control") ?? "", /immutable/);
  assert.equal(image.headers.get("x-watts-marketing-strategy"), "highlevel-conversion-v1");
  await access(new URL("../public/marketing-strategy-session-hero.webp", import.meta.url));
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
    access(new URL("../public/financial-professional-hero.webp", import.meta.url)),
    access(new URL("../public/financial-professional-retirement.webp", import.meta.url)),
    access(new URL("../public/financial-professional-education.webp", import.meta.url)),
    access(new URL("../public/financial-professional-legacy.webp", import.meta.url)),
    access(new URL("../public/financial-professional-mentor.webp", import.meta.url)),
    access(new URL("../public/financial-professional-freedom.webp", import.meta.url)),
    access(new URL("../public/financial-professional-alex.webp", import.meta.url)),
    access(new URL("../public/lets-connect-hero-original-v1.webp", import.meta.url)),
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
  const config = await readFile(new URL("../workers/wrangler.resources-page.jsonc", import.meta.url), "utf8");
  assert.match(source, /20260721-resources-stable3/);
  assert.match(source, /versioned\('\/solutions-app\/legacy-center-hero\.webp'\)/);
  assert.match(source, /cloudflare-cdn-cache-control':'no-store'/);
  assert.match(source, /COPYRIGHT_YEAR='2026'/);
  assert.doesNotMatch(source, /2025–/);
  assert.match(source, /\/solutions-app\/legacy-center-hero\.webp/);
  assert.match(source, /\/solutions-app\/resources-calculators\.webp/);
  assert.match(source, /\/solutions-app\/resources-family\.webp/);
  assert.match(source, /\/solutions-app\/solutions-business\.webp/);
  assert.doesNotMatch(source, /Category 0[123]|vibe\.filesafe|data:image/);
  assert.doesNotMatch(source, /replaceAll\('loading="lazy"','loading="eager"'\)/);
  assert.match(config, /watts-resources-stable-20260721/);
});

test("keeps the Financial Snapshot copyright year current", async () => {
  const source = await readFile(new URL("../workers/financial-snapshot-enhancements.js", import.meta.url), "utf8");
  assert.match(source, /© 2026 Watts Unified Solutions/);
  assert.doesNotMatch(source, /2025–/);
  assert.match(source, /All rights reserved/);
});

test("keeps the standalone Sites proxies on the current footer year", async () => {
  for (const file of [
    "million-dollar-baby-proxy.js",
    "retirement-roadmap-proxy.js",
    "protected-growth-proxy.js",
    "tax-free-retirement-proxy.js",
  ]) {
    const source = await readFile(new URL(`../workers/live/${file}`, import.meta.url), "utf8");
    assert.match(source, /© 2026 Watts Unified Solutions/);
    assert.match(source, /replaceAll\("© 2025–2026 Watts Unified Solutions/);
  }
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
    assert.match(html, /class="header-cta" href="https:\/\/wattsunified\.com\/schedule"/);
    assert.doesNotMatch(html, /class="header-cta" href="https:\/\/wattsunified\.com\/schedule\/solutions"/);
    assert.match(html, /LinkedIn/);
    assert.match(html, /Instagram/);
    assert.match(html, /Alignable/);
    assert.match(html, /© 2026 Watts Unified Solutions/);
    assert.match(html, /watts-logo\.png/);
  }
});

test("keeps every standalone top Let's Connect button on the dedicated page", async () => {
  const standaloneWorkers = [
    "about-page.js",
    "business-legalshield.js",
    "business-page.js",
    "financial-professional.js",
    "financial-strategy-session.js",
    "growth-page.js",
    "interactive-briefings.js",
    "legacy-playbook.js",
    "life-insurance.js",
    "marketing-strategy-session.js",
    "protection-legacy.js",
    "retirement-wealth.js",
    "veteran-strategy-session.js",
  ];
  for (const file of standaloneWorkers) {
    const source = await readFile(new URL(`../workers/live/${file}`, import.meta.url), "utf8");
    assert.doesNotMatch(source, /class=\\?"(?:header-cta|nav-cta)\\?" href=\\?"[^\\?"]*\/schedule\/solutions/, file);
    assert.match(source, /class=\\?"(?:header-cta|nav-cta)\\?" href=\\?"[^\\?"]*\/schedule\\?"/, file);
  }

  for (const file of ["million-dollar-baby-proxy.js", "retirement-roadmap-proxy.js", "protected-growth-proxy.js", "tax-free-retirement-proxy.js"]) {
    const source = await readFile(new URL(`../workers/live/${file}`, import.meta.url), "utf8");
    assert.match(source, /wu-lets-connect-route/, file);
    assert.match(source, /header a\.header-cta,header a\.nav-cta/, file);
  }
});

test("keeps the Solutions edge route pinned to the approved build", async () => {
  const worker = await readFile(new URL("../workers/solutions-page-proxy.js", import.meta.url), "utf8");
  const config = await readFile(new URL("../workers/wrangler.solutions-page.jsonc", import.meta.url), "utf8");

  assert.match(worker, /stable-approved-v3/);
  assert.match(worker, /stable-image-bypass-v4/);
  assert.match(worker, /solutions-trust/);
  assert.match(worker, /normalizeOptimizerSource/);
  assert.match(worker, /pathname\.startsWith\("\/_vinext\/image"\)/);
  assert.match(worker, /wu-solutions-runtime-repair/);
  assert.match(worker, /header a\.header-cta, header a\.nav-cta/);
  assert.match(worker, /https:\/\/wattsunified\.com\/schedule/);
  assert.match(worker, /20260721-optimizer4/);
  assert.match(worker, /SOLUTIONS_SITE_RELEASE = "20260721-v33"/);
  assert.match(worker, /stable-footer-asset-v1/);
  assert.match(worker, /searchParams\.set\("wu-release", SOLUTIONS_SITE_RELEASE\)/);
  assert.match(worker, /url\.searchParams\.set\("wu", version\)/);
  assert.match(worker, /img\[src\^="\/solutions-app\/"\]/);
  assert.match(worker, /cloudflare-cdn-cache-control", "no-store"/);
  assert.match(worker, /© 2026 Watts Unified Solutions/);
  assert.match(worker, /cache: "no-store"/);
  assert.doesNotMatch(worker, /North American Company Partner|Retirement Readiness Checklist|wus-trust-bar|injectEnhancements/);
  assert.match(config, /wattsunified\.com\/solutions\*/);
  assert.match(config, /www\.wattsunified\.com\/solutions\*/);
  assert.match(config, /watts-solutions-stable-20260721/);
  assert.match(config, /wattsunified\.com\/_vinext\/image\*/);
  assert.match(config, /www\.wattsunified\.com\/_vinext\/image\*/);
});

test("keeps homepage program imagery stable and routes the Solutions card correctly", async () => {
  const worker = await readFile(new URL("../workers/core-navigation-homepage.js", import.meta.url), "utf8");
  const config = await readFile(new URL("../workers/wrangler.core-navigation-homepage.jsonc", import.meta.url), "utf8");

  assert.match(worker, /Retirement & Legacy Solutions/);
  assert.match(worker, /Watts Unified Solutions/);
  assert.match(worker, /\/assets\/veterans\.webp/);
  assert.match(worker, /\/solutions-veteran\.webp/);
  assert.match(worker, /\/assets\/solutions\.webp/);
  assert.match(worker, /\/solutions-hero\.webp/);
  assert.match(worker, /\/assets\/veterans-live-hero\.webp/);
  assert.match(worker, /\/assets\/system-live-hero\.png/);
  assert.match(worker, /\/assets\/domain\.png/);
  assert.match(worker, /\/assets\/email\.png/);
  assert.match(worker, /\/assets\/tools\.png/);
  assert.match(worker, /\/assets\/opportunity-paths\.png/);
  assert.match(worker, /homepage-images-v1\.js/);
  assert.match(worker, /20260721-connect-hero4/);
  assert.match(worker, /wu-opportunity-path-enhancements/);
  assert.match(worker, /opportunity-paths\.png/);
  assert.match(worker, /opportunity-paths-original-v1/);
  assert.match(worker, /"1901"/);
  assert.match(worker, /"577"/);
  assert.match(worker, /image\/webp/);
  assert.match(worker, /max-age=31536000, immutable/);
  assert.match(worker, /Financial Services Partner/);
  assert.match(worker, /Legal Services Partner/);
  assert.match(worker, /\/opportunity\/financial-professional/);
  assert.match(worker, /\/opportunity\/legalshield-independent-associate/);
  assert.match(worker, /OPPORTUNITY_FAQ_SCHEMA/);
  assert.match(worker, /FAQPage/);
  assert.match(worker, /data-wu-faq/);
  assert.match(worker, /conversion-v2/);
  assert.match(worker, /content-visibility:auto/);
  assert.match(worker, /opportunity_faq_connect/);
  assert.match(worker, /Talk With S\. Alex/);
  assert.match(worker, /href:`\/schedule`,children:`Let's Connect`/);
  assert.match(worker, /\/schedule\/solutions/);
  assert.match(worker, /item\.setAttribute\("name", "opportunity-faq"\)/);
  assert.match(worker, /data-wu-next-step/);
  assert.match(worker, /Book a Fit Conversation/);
  assert.match(worker, /No pressure\. Clear answers\. The right next step\./);
  assert.match(worker, /href=\"\/growth\"/);
  assert.match(worker, /data-wu-route=\"growth-opportunity\"/);
  assert.match(worker, /forceCurrentDocumentNavigation/);
  assert.match(worker, /destination\.origin !== location\.origin/);
  assert.match(worker, /site-fresh-navigation-v1/);
  assert.match(worker, /opportunityFooter\.classList\.add\("global-footer"\)/);
  assert.doesNotMatch(worker, /footer\[data-wu-footer="navy-v1"\]/);
  assert.match(worker, /footerLogo\.setAttribute\("src", "\/solutions-app\/watts-brand-lockup\.png"\)/);
  assert.doesNotMatch(worker, /standaloneSection\.remove\(\)/);
  assert.doesNotMatch(worker, /wu-opportunity-path-card/);
  assert.doesNotMatch(worker, /__OPPORTUNITY_PATHS_IMAGE_BASE64__/);
  assert.doesNotMatch(worker, /forceSolutionsDocumentNavigation/);
  assert.match(worker, /location\.assign\(destination\.href\)/);
  assert.match(worker, /installVersionedRepairScript/);
  assert.match(worker, /patchHomepageHtml/);
  assert.match(worker, /isManagedHtmlPath/);
  assert.match(worker, /pathname\.startsWith\("\/opportunity"\)/);
  assert.match(worker, /wu-homepage-schema/);
  assert.match(worker, /rel=\"preload\" as=\"image\" href=\"\/assets\/hero\.webp\"/);
  assert.match(worker, /hero\.setAttribute\(\"fetchpriority\", \"high\"\)/);
  assert.match(worker, /heading\.textContent = "Watts Unified Solutions"/);
  assert.match(worker, /link\.setAttribute\("href", "\/solutions"\)/);
  assert.match(worker, /© 2026 Watts Unified Solutions/);
  assert.match(worker, /footer small, footer p/);
  assert.match(worker, /currentText\.includes\("Watts Unified Solutions"\)/);
  assert.match(worker, /characterData: true/);
  assert.match(worker, /\[250, 750, 2000\]\.forEach/);
  assert.match(worker, /new Request\(originRequest, \{ cache: "no-store" \}\)/);
  assert.match(worker, /"cache-control": "no-store"/);
  assert.match(worker, /"cloudflare-cdn-cache-control": "no-store"/);
  assert.match(worker, /"cdn-cache-control": "no-store"/);
  assert.match(worker, /headers\.set\("cache-control", "no-cache"\)/);
  assert.match(worker, /alignable-icon\.png/);
  assert.match(worker, /image\/svg\+xml/);
  assert.match(worker, /alignable-official-v3/);
  assert.match(worker, /#6C33D8/);
  assert.match(worker, /M34\.1 14\.865/);
  assert.match(worker, /LEGALSHIELD_IMAGE_KEYS/);
  assert.match(worker, /legalshield-live-hero\.png/);
  assert.match(worker, /legalshield-professional\.png/);
  assert.match(worker, /LEGALSHIELD_ASSETS\.get/);
  assert.match(worker, /legalshield-original-v1/);
  assert.match(worker, /fetchpriority/);
  assert.match(worker, /alignable-icon\.png\?v=20260721-v3/);
  assert.match(config, /wattsunified\.com\/assets\/veterans\.webp\*/);
  assert.match(config, /wattsunified\.com\/assets\/solutions\.webp\*/);
  assert.match(config, /www\.wattsunified\.com\/assets\/veterans\.webp\*/);
  assert.match(config, /www\.wattsunified\.com\/assets\/solutions\.webp\*/);
  assert.match(config, /wattsunified\.com\/homepage-images-v1\.js\*/);
  assert.match(config, /www\.wattsunified\.com\/homepage-images-v1\.js\*/);
  assert.doesNotMatch(config, /"pattern": "wattsunified\.com\/\*"/);
  assert.doesNotMatch(config, /"pattern": "www\.wattsunified\.com\/\*"/);
  assert.match(config, /wattsunified\.com\/assets\/veterans-live-hero\.webp\*/);
  assert.match(config, /wattsunified\.com\/assets\/system-live-hero\.png\*/);
  assert.match(config, /wattsunified\.com\/assets\/domain\.png\*/);
  assert.match(config, /wattsunified\.com\/assets\/email\.png\*/);
  assert.match(config, /wattsunified\.com\/assets\/tools\.png\*/);
  assert.match(config, /wattsunified\.com\/assets\/opportunity-paths\.png\*/);
  assert.match(config, /wattsunified\.com\/assets\/lets-connect-hero-original-v1\.webp\*/);
  assert.match(config, /www\.wattsunified\.com\/assets\/lets-connect-hero-original-v1\.webp\*/);
  assert.match(config, /wattsunified\.com\/assets\/legalshield-live-hero\.png\*/);
  assert.match(config, /www\.wattsunified\.com\/assets\/legalshield-live-hero\.png\*/);
  assert.match(config, /wattsunified\.com\/assets\/legalshield-professional\.png\*/);
  assert.match(config, /www\.wattsunified\.com\/assets\/legalshield-professional\.png\*/);
  assert.match(config, /LEGALSHIELD_ASSETS/);
  assert.match(config, /9a2ff1847b7a49c6beb883c6c09df225/);
  assert.match(config, /wattsunified\.com\/alignable-icon\.png\*/);
  assert.match(config, /www\.wattsunified\.com\/alignable-icon\.png\*/);
});

test("adds homepage discovery metadata and one versioned repair script", async () => {
  const { default: homepageWorker, patchHomepageHtml } = await import("../workers/core-navigation-homepage.js");
  const source = `<!doctype html><html><head><title>Retirement & Legacy Specialist | Watts Unified Solutions</title></head><body><div id="root"></div><script type="module" src="/assets/index-CQRwdLu0.js"></script><script src="/homepage-images-v1.js"></script></body></html>`;
  const html = patchHomepageHtml(source, true);

  assert.match(html, /rel="canonical" href="https:\/\/wattsunified\.com\/"/);
  assert.match(html, /name="robots" content="index, follow, max-image-preview:large"/);
  assert.match(html, /property="og:image" content="https:\/\/wattsunified\.com\/assets\/hero\.webp"/);
  assert.match(html, /rel="preload" as="image" href="\/assets\/hero\.webp"[^>]*fetchpriority="high"/);
  assert.match(html, /id="wu-homepage-schema" type="application\/ld\+json"/);
  assert.match(html, /\/assets\/index-CQRwdLu0\.js\?v=20260721-connect-hero4/);
  assert.equal((html.match(/homepage-images-v1\.js/g) || []).length, 1);
  assert.match(html, /homepage-images-v1\.js\?v=20260721-connect-hero4/);

  const internalPage = patchHomepageHtml(source, false);
  assert.doesNotMatch(internalPage, /rel="canonical" href="https:\/\/wattsunified\.com\/"/);
  assert.doesNotMatch(internalPage, /id="wu-homepage-schema"/);
  assert.match(internalPage, /homepage-images-v1\.js\?v=20260721-connect-hero4/);

  const letsConnectPage = patchHomepageHtml(source, false, "/schedule");
  assert.match(letsConnectPage, /id="wu-lets-connect-hero"/);
  assert.match(letsConnectPage, /rel="preload" as="image" href="\/assets\/lets-connect-hero-original-v1\.webp\?v=20260721-connect-hero4"/);
  assert.match(letsConnectPage, /background-image:url\("\/assets\/lets-connect-hero-original-v1\.webp\?v=20260721-connect-hero4"\)/);
  assert.match(letsConnectPage, /aspect-ratio:16\/9/);
  assert.match(letsConnectPage, /height:clamp\(360px,35vw,440px\)/);
  assert.match(letsConnectPage, /text-align:center/);
  assert.doesNotMatch(letsConnectPage, /linear-gradient/);

  const opportunityPage = patchHomepageHtml(source, false, "/opportunity");
  assert.match(opportunityPage, /wu-opportunity-path-enhancements/);
  assert.match(opportunityPage, /opportunity-paths\.png/);
  assert.match(opportunityPage, /aspect-ratio:1901\/577/);
  assert.match(opportunityPage, /id="wu-opportunity-faq-schema"/);
  assert.match(opportunityPage, /"@type":"FAQPage"/);
  assert.match(opportunityPage, /conversion-v2/);
  assert.match(opportunityPage, /wu-next-step-inner/);
  assert.doesNotMatch(opportunityPage, /footer\[data-wu-footer="navy-v1"\]/);

  const repairResponse = await homepageWorker.fetch(
    new Request("https://wattsunified.com/homepage-images-v1.js"),
  );
  const repairScript = await repairResponse.text();
  assert.equal(repairResponse.headers.get("cache-control"), "no-store");
  assert.equal(repairResponse.headers.get("cloudflare-cdn-cache-control"), "no-store");
  assert.equal(repairResponse.headers.get("cdn-cache-control"), "no-store");
  assert.match(repairScript, /forceCurrentDocumentNavigation/);
  assert.match(repairScript, /destination\.origin !== location\.origin/);
  assert.doesNotThrow(() => new Function(repairScript));
});

test("serves deployment-owned LegalShield opportunity images", async () => {
  const { default: homepageWorker } = await import("../workers/core-navigation-homepage.js");
  const expectedBytes = new Uint8Array([82, 73, 70, 70, 87, 69, 66, 80]);
  const requestedKeys = [];
  const env = {
    LEGALSHIELD_ASSETS: {
      async get(key, type) {
        requestedKeys.push([key, type]);
        return expectedBytes.buffer;
      },
    },
  };

  for (const [pathname, key] of [
    ["/assets/legalshield-live-hero.png", "legalshield-live-hero.webp"],
    ["/assets/legalshield-professional.png", "legalshield-professional.webp"],
  ]) {
    const response = await homepageWorker.fetch(new Request(`https://wattsunified.com${pathname}`), env);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("content-type"), "image/webp");
    assert.match(response.headers.get("cache-control") ?? "", /immutable/);
    assert.equal(response.headers.get("x-watts-opportunity-image"), "legalshield-original-v1");
    assert.deepEqual(new Uint8Array(await response.arrayBuffer()), expectedBytes);
    assert.deepEqual(requestedKeys.at(-1), [key, "arrayBuffer"]);
  }
});

test("serves the deployment-owned Let’s Connect hero", async () => {
  const { default: homepageWorker } = await import("../workers/core-navigation-homepage.js");
  const expectedBytes = new Uint8Array([82, 73, 70, 70, 87, 69, 66, 80]);
  const requestedKeys = [];
  const env = {
    LEGALSHIELD_ASSETS: {
      async get(key, type) {
        requestedKeys.push([key, type]);
        return expectedBytes.buffer;
      },
    },
  };

  const response = await homepageWorker.fetch(
    new Request("https://wattsunified.com/assets/lets-connect-hero-original-v1.webp"),
    env,
  );
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "image/webp");
  assert.match(response.headers.get("cache-control") ?? "", /immutable/);
  assert.equal(response.headers.get("x-watts-core-image"), "lets-connect-hero-original-v1");
  assert.deepEqual(new Uint8Array(await response.arrayBuffer()), expectedBytes);
  assert.deepEqual(requestedKeys, [["lets-connect-hero-original-v1.webp", "arrayBuffer"]]);
});
