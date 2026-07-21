const upstream = "https://watts-owned-financial-snapshot.pages.dev";

const successPanel = `
<div class="snapshot-success" data-snapshot-success hidden role="region" aria-labelledby="snapshot-success-title">
  <p class="eyebrow">Snapshot received</p>
  <h3 id="snapshot-success-title">Choose a time to review your next step.</h3>
  <p>Your information is secure. Schedule a focused conversation when you are ready.</p>
  <a href="https://wattsunified.com/schedule/solutions?source=financial-snapshot" data-schedule-review>Schedule My Review <span aria-hidden="true">→</span></a>
</div>`;

const appEnhancements = `
const contactForm = document.querySelector("[data-owned-form]");
const successPanel = document.querySelector("[data-snapshot-success]");
const scheduleLink = document.querySelector("[data-schedule-review]");
const snapshotParams = new URLSearchParams(location.search);
const snapshotSessionId = snapshotParams.get("wid") || crypto.randomUUID();
const snapshotSource = snapshotParams.get("source") || "direct";
function trackConversion(event, label, destination = "") {
  const payload = JSON.stringify({ event, label, destination, page: location.pathname, sessionId: snapshotSessionId, source: snapshotSource, referrer: document.referrer });
  if (navigator.sendBeacon) navigator.sendBeacon("https://wattsunified.com/conversion-event", new Blob([payload], { type: "application/json" }));
  else fetch("https://wattsunified.com/conversion-event", { method: "POST", headers: { "content-type": "application/json" }, body: payload, keepalive: true, mode: "cors" }).catch(() => {});
}
trackConversion("snapshot_view", "Financial Snapshot viewed");
if (contactForm && successPanel) {
  let tracked = false;
  let started = false;
  contactForm.addEventListener("input", () => { if (!started) { trackConversion("snapshot_start", "Financial Snapshot started"); started = true; } }, { passive: true });
  const observer = new MutationObserver(() => {
    const status = contactForm.querySelector("[data-owned-status]");
    if (!status?.textContent?.startsWith("Thank you")) return;
    successPanel.hidden = false;
    successPanel.scrollIntoView({ behavior: "smooth", block: "center" });
    if (!tracked) { trackConversion("snapshot_complete", "Financial Snapshot submitted"); tracked = true; }
  });
  observer.observe(contactForm, { childList: true, subtree: true, characterData: true });
}
scheduleLink?.addEventListener("click", () => trackConversion("snapshot_schedule_click", "Schedule My Review", scheduleLink.href));
document.querySelectorAll("footer p, footer small").forEach((item) => { if (item.textContent.includes("©")) item.textContent = "© 2026 Watts Unified Solutions. All rights reserved."; });
`;

const styleEnhancements = `
.snapshot-success{grid-column:1/-1;padding:clamp(24px,4vw,38px);border:1px solid #d8bd68;border-left:5px solid var(--gold);border-radius:12px;background:#fffaf0}
.snapshot-success[hidden]{display:none}
.snapshot-success h3{margin:8px 0;color:var(--navy);font-size:clamp(1.4rem,3vw,2rem)}
.snapshot-success p{max-width:680px}
.snapshot-success a{display:inline-flex;align-items:center;justify-content:center;gap:10px;margin-top:8px;padding:13px 18px;border:2px solid var(--gold);border-radius:8px;background:var(--gold);color:#111;font-weight:900;letter-spacing:.04em;text-decoration:none;text-transform:uppercase}
.snapshot-success a:hover,.snapshot-success a:focus-visible{background:#fff;outline:3px solid rgba(212,175,55,.28);outline-offset:3px}
`;

function withHeaders(response, contentType) {
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.delete("content-encoding");
  headers.set("content-type", contentType);
  headers.set("cache-control", "public,max-age=300,must-revalidate");
  headers.set("x-content-type-options", "nosniff");
  headers.set("x-watts-snapshot", "conversion-handoff-v1");
  return headers;
}

export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    const target = new URL(incoming.pathname + incoming.search, upstream);
    const response = await fetch(new Request(target, request));

    if (incoming.pathname === "/" || incoming.pathname === "/index.html") {
      const transformed = new HTMLRewriter()
        .on("form[data-owned-form]", { element(element) { element.after(successPanel, { html: true }); } })
        .transform(response);
      return new Response(transformed.body, { status: transformed.status, headers: withHeaders(transformed, "text/html;charset=UTF-8") });
    }

    if (incoming.pathname === "/app.js") {
      return new Response((await response.text()) + "\n" + appEnhancements, { status: response.status, headers: withHeaders(response, "text/javascript;charset=UTF-8") });
    }

    if (incoming.pathname === "/resource-tool-theme-v5.css") {
      return new Response((await response.text()) + "\n" + styleEnhancements, { status: response.status, headers: withHeaders(response, "text/css;charset=UTF-8") });
    }

    return response;
  },
};
