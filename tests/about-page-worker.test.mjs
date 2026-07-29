import test from "node:test";
import assert from "node:assert/strict";
import worker from "../workers/about-page.js";

async function render(path = "/about") {
  const response = await worker.fetch(new Request(`https://wattsunified.com${path}`));
  return { response, html: await response.text() };
}

test("About Worker serves the approved page and deployment marker", async () => {
  const { response, html } = await render();

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html/);
  assert.equal(response.headers.get("x-watts-about-build"), "20260728-about-testimonial-slider1");
  assert.match(html, /Meet S\. Alex Watts/);
  assert.match(html, /Service Shaped the Mission\./);
  assert.match(html, /The Values Behind Watts Unified Solutions/);
  assert.match(html, /Faith <span aria-hidden="true">\+<\/span> Family <span aria-hidden="true">\+<\/span> Finance <span aria-hidden="true">\+<\/span> Fitness <span aria-hidden="true">\+<\/span> Fun <strong><span aria-hidden="true">=<\/span> Freedom<\/strong>/);
  assert.match(html, /Bring the Pieces Together\./);
  assert.match(html, /\.about-cta\{[^}]*background:#f8f6f0;[^}]*border-top:1px solid #dedbd2/);
  assert.doesNotMatch(html, /\.about-cta\{[^}]*linear-gradient/);
});

test("About Worker preserves the approved testimonial set", async () => {
  const { html } = await render();

  for (const name of ["Michael Fieger", "Alicia Law", "Michael Lien", "Richard Tracy"]) {
    assert.match(html, new RegExp(name));
  }

  for (const removed of [
    "Keesha Winters",
    "Renae Davis-Plummer",
    "Forging disciplined, independent wealth preservation and family stewardship frameworks rooted in military precision and fiscal expertise."
  ]) {
    assert.ok(!html.includes(removed), `${removed} must remain hidden`);
  }

  assert.equal((html.match(/<article class="rec"/g) ?? []).length, 4);
  assert.match(html, /class="recs-carousel" role="region" aria-roledescription="carousel"/);
  assert.match(html, /class="recs-track" aria-live="off"/);
  assert.match(html, /data-recs-prev/);
  assert.match(html, /data-recs-next/);
  assert.match(html, /data-recs-toggle/);
  assert.match(html, /setInterval\(\(\)=>render\(active\+1\),9000\)/);
  assert.match(html, /prefers-reduced-motion: reduce/);
  assert.match(html, /\.recs-track\{[^}]*transition:transform \.65s/);
  assert.doesNotMatch(html, /\.recs-list\{/);
});

test("About Worker renders the approved primary navigation and CTAs", async () => {
  const { html } = await render();

  const nav = html.match(/<nav class="nav"[^>]*>([\s\S]*?)<\/nav>/)?.[1] ?? "";
  for (const label of ["Home", "Solutions", "Veterans", "Resources", "About", "Start My Snapshot"]) {
    assert.match(nav, new RegExp(`>${label}(?:<|\\s)`));
  }
  for (const removed of ["Veteran Summit", "Opportunity", "Let’s Connect"]) {
    assert.doesNotMatch(nav, new RegExp(removed));
  }

  assert.match(
    html,
    /<a class="mobile-cta" href="https:\/\/wattsunified\.com\/schedule\/solutions">Start My Private Conversation/
  );
  assert.match(
    html,
    /<a class="button" href="https:\/\/wattsunified\.com\/schedule\/solutions">Start My Private Conversation<\/a>/
  );
  assert.doesNotMatch(html, />Schedule a Meeting</);
});
