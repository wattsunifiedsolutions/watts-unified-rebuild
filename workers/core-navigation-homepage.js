const ORIGIN = "https://watts-unified-rebuild.pages.dev";
const STABLE_SITE = "https://watts-retirement-wealth.salexw.chatgpt.site";
const APP_ASSET = "/assets/index-CQRwdLu0.js";
const APP_VERSION = "20260721-solutions-nav3";
const HOMEPAGE_REPAIR_SCRIPT = "/homepage-images-v1.js";
const ALIGNABLE_ICON_PATH = "/alignable-icon.png";

const ALIGNABLE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Alignable"><rect width="64" height="64" rx="12" fill="#1769aa"/><text x="32" y="44" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-size="44" font-weight="700" text-anchor="middle">a</text></svg>`;

const HOMEPAGE_IMAGE_REPLACEMENTS = new Map([
  ["/assets/veterans.webp", "/solutions-veteran.webp"],
  ["/assets/solutions.webp", "/solutions-hero.webp"],
]);

function patchAppBundle(source) {
  const oldNavigation = "ke=[[`Home`,`/`],[`Solutions`,`/solutions`],[`Unified System`,`/system`],[`Veteran Summit`,`/solutions/programs/veterans`],[`Opportunity`,`/opportunity`],[`Resources`,`/resources`],[`About`,`/about`]]";
  const newNavigation = "ke=[[`Home`,`/`],[`Solutions`,`/solutions`],[`Veteran Summit`,`/solutions/programs/veterans`],[`Opportunity`,`/opportunity`],[`Resources`,`/resources`],[`About`,`/about`]]";
  const oldHeaderCta = "(0,k.jsx)(A,{href:`/schedule`,children:`Connect With S. Alex`})";
  const newHeaderCta = "(0,k.jsx)(A,{href:`/schedule/solutions`,children:`Let's Connect`})";
  const oldFooterLinks = "ke.slice(1).map(([e,t])=>(0,k.jsx)(`a`,{href:t,onClick:Ae(t),children:e},t))";
  const newFooterLinks = "[[`Solutions`,`/solutions`],[`Unified System`,`/system`],[`Veteran Summit`,`/solutions/programs/veterans`],[`Opportunity`,`/opportunity`],[`Resources`,`/resources`],[`About`,`/about`]].map(([e,t])=>(0,k.jsx)(`a`,{href:t,onClick:Ae(t),children:e},t))";
  return source
    .replace(oldNavigation, newNavigation)
    .replace(oldHeaderCta, newHeaderCta)
    .replace(oldFooterLinks, newFooterLinks)
    .replaceAll("Retirement & Legacy Solutions", "Watts Unified Solutions")
    .replaceAll("© 2025 Watts Unified Solutions. All rights reserved.", "© 2025–2026 Watts Unified Solutions. All rights reserved.");
}

function upstreamRequest(request, target) {
  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("cookie");
  headers.delete("authorization");
  return new Request(target, {
    method: request.method,
    headers,
    redirect: "follow",
    cache: "no-store",
  });
}

export default {
  async fetch(request) {
    const incoming = new URL(request.url);

    if (incoming.pathname === "/carrier-network" || incoming.pathname === "/carrier-network/") {
      return Response.redirect(new URL("/solutions", incoming), 302);
    }

    if (incoming.pathname === HOMEPAGE_REPAIR_SCRIPT) {
      const script = `(() => {
  const solutionsRelease = "20260721-v33";
  const forceSolutionsDocumentNavigation = (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest?.("a[href]");
    if (!link) return;
    const destination = new URL(link.href, location.href);
    if (destination.pathname.replace(/\\/+$/, "") !== "/solutions") return;
    event.preventDefault();
    event.stopImmediatePropagation();
    destination.pathname = "/solutions/";
    destination.searchParams.set("wu-nav", solutionsRelease);
    location.assign(destination.href);
  };
  const repairHomepage = () => {
    document.querySelectorAll("article h3").forEach((heading) => {
      if (heading.textContent.trim() !== "Retirement & Legacy Solutions") return;
      heading.textContent = "Watts Unified Solutions";
      const card = heading.closest("article");
      if (!card) return;
      const image = card.querySelector("img");
      if (image) image.alt = "Watts Unified Solutions";
      const link = card.querySelector("a");
      if (link) link.setAttribute("href", "/solutions");
    });
  };
  document.addEventListener("click", forceSolutionsDocumentNavigation, true);
  repairHomepage();
  new MutationObserver(repairHomepage).observe(document.documentElement, { childList: true, subtree: true });
})();`;
      return new Response(script, {
        headers: {
          "content-type": "application/javascript; charset=UTF-8",
          "cache-control": "no-store",
          "x-watts-homepage-repair": "homepage-card-v1",
          "x-content-type-options": "nosniff",
        },
      });
    }

    if (incoming.pathname === ALIGNABLE_ICON_PATH) {
      return new Response(ALIGNABLE_ICON, {
        headers: {
          "content-type": "image/svg+xml; charset=UTF-8",
          "cache-control": "no-store",
          "x-watts-social-icon": "alignable-stable-v1",
          "x-content-type-options": "nosniff",
        },
      });
    }

    const stableImage = HOMEPAGE_IMAGE_REPLACEMENTS.get(incoming.pathname);
    if (stableImage) {
      const response = await fetch(upstreamRequest(request, `${STABLE_SITE}${stableImage}`));
      const headers = new Headers(response.headers);
      headers.set("content-type", "image/webp");
      headers.set("cache-control", "no-cache");
      headers.set("x-watts-home-image", "stable-homepage-image-v1");
      headers.set("x-content-type-options", "nosniff");
      headers.delete("content-length");
      return new Response(response.body, { status: response.status, headers });
    }

    const originUrl = new URL(incoming.pathname + incoming.search, ORIGIN);
    const originRequest = new Request(originUrl, request);
    const originResponse = await fetch(new Request(originRequest, { cache: "no-store" }));

    if (incoming.pathname === APP_ASSET) {
      const source = patchAppBundle(await originResponse.text());
      return new Response(source, {
        status: originResponse.status,
        headers: {
          "content-type": "application/javascript;charset=UTF-8",
          "cache-control": "no-store",
          "x-content-type-options": "nosniff",
        },
      });
    }

    const contentType = originResponse.headers.get("content-type") || "";
    if (contentType.includes("text/html")) {
      let html = await originResponse.text();
      html = html.replace(APP_ASSET, `${APP_ASSET}?v=${APP_VERSION}`);
      html = html.replace("</head>", '<style id="wu-nonsticky-header">header{position:relative!important;top:auto!important}</style></head>');
      html = html.replace("</body>", `<script src="${HOMEPAGE_REPAIR_SCRIPT}?v=${APP_VERSION}" defer></script></body>`);
      return new Response(html, {
        status: originResponse.status,
        headers: {
          "content-type": "text/html;charset=UTF-8",
          "cache-control": "no-store",
          "x-content-type-options": "nosniff",
        },
      });
    }

    return originResponse;
  },
};
