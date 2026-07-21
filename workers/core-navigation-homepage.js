const ORIGIN = "https://watts-unified-rebuild.pages.dev";
const STABLE_SITE = "https://watts-retirement-wealth.salexw.chatgpt.site";
const APP_ASSET = "/assets/index-CQRwdLu0.js";
const APP_VERSION = "20260721-solutions-nav6";
const HOMEPAGE_REPAIR_SCRIPT = "/homepage-images-v1.js";
const ALIGNABLE_ICON_PATH = "/alignable-icon.png";

const HOMEPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://wattsunified.com/#organization",
      name: "Watts Unified Solutions",
      url: "https://wattsunified.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://wattsunified.com/assets/logo.png",
        width: 545,
        height: 113,
      },
      sameAs: [
        "https://www.linkedin.com/in/s-alex-watts",
        "https://www.instagram.com/watts_unifiedsolutions",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://wattsunified.com/#website",
      url: "https://wattsunified.com/",
      name: "Watts Unified Solutions",
      publisher: { "@id": "https://wattsunified.com/#organization" },
      inLanguage: "en-US",
    },
  ],
};

const ALIGNABLE_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 47" role="img" aria-label="Alignable"><path fill="#6C33D8" fill-rule="evenodd" d="M34.1 14.865C31.728 7.968 25.198 3 17.528 3a17.34 17.34 0 0 0-5.75.978l.265.82c.431 1.328.88 2.714 1.35 4.095.276.81.56 1.613.85 2.404.922 2.507 1.915 4.85 2.993 6.61.474.774.967 1.421 1.474 1.932.734.738 1.503 1.18 2.31 1.18 1.18 0 2.277-.912 3.302-2.381.877 1.763 1.773 4.055 2.55 6.23-1.642 1.415-3.55 2.267-5.85 2.267h-.003c-1.746 0-3.263-.5-4.615-1.348a10.72 10.72 0 0 1-1.82-1.427c-1.618-1.59-2.959-3.773-4.137-6.275a48.728 48.728 0 0 1-1.183-2.735c-1.05-2.628-1.985-5.473-2.904-8.307A17.502 17.502 0 0 0 4.614 8.71 17.545 17.545 0 0 0 0 20.585c0 3.995 1.338 7.683 3.585 10.64a17.6 17.6 0 0 0 1.66 1.889 218.651 218.651 0 0 0 1.79-5.384c.752-2.328 1.513-4.667 2.335-6.898 1.249 2.337 2.694 4.342 4.434 5.82a359.435 359.435 0 0 0-.968 2.963c-.768 2.38-1.544 4.776-2.386 7.051.66.294 1.341.55 2.04.762 1.597.48 3.289.742 5.038.742 4.71 0 8.987-1.876 12.14-4.918a17.695 17.695 0 0 0 1.677-1.864c-.195-.595-.387-1.19-.58-1.785a260.15 260.15 0 0 0-1.348-4.087c-.277-.811-.56-1.615-.85-2.407-.92-2.504-1.912-4.85-2.99-6.61-.473-.775-.967-1.422-1.474-1.933a5.78 5.78 0 0 0-.556-.495c-.563-.436-1.144-.684-1.75-.684-1.18 0-2.28.911-3.306 2.382-.879-1.765-1.772-4.055-2.551-6.23.205-.177.414-.345.628-.505 1.5-1.113 3.212-1.763 5.227-1.763h.006c1.742 0 3.256.499 4.608 1.347.643.402 1.251.868 1.821 1.425 1.618 1.59 2.957 3.775 4.135 6.278.413.877.806 1.79 1.184 2.736a86.59 86.59 0 0 1 1.369 3.706c.088-.715.14-1.44.14-2.178 0-2.003-.34-3.926-.958-5.72Z" clip-rule="evenodd"/></svg>`;

const HOMEPAGE_IMAGE_REPLACEMENTS = new Map([
  ["/assets/veterans.webp", "/solutions-veteran.webp"],
  ["/assets/solutions.webp", "/solutions-hero.webp"],
  ["/assets/veterans-live-hero.webp", "/solutions-veteran.webp"],
  ["/assets/system-live-hero.png", "/solutions-business.webp"],
  ["/assets/domain.png", "/resources-calculators.webp"],
  ["/assets/email.png", "/solutions-legacy.webp"],
  ["/assets/tools.png", "/solutions-hero.webp"],
  ["/assets/opportunity-paths.png", "/solutions-business.webp"],
]);

function isManagedHtmlPath(pathname) {
  return pathname === "/"
    || pathname.startsWith("/schedule")
    || pathname.startsWith("/system")
    || pathname.startsWith("/opportunity")
    || pathname.startsWith("/solutions/programs/veterans");
}

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
    .replaceAll("© 2025–2026 Watts Unified Solutions. All rights reserved.", "© 2026 Watts Unified Solutions. All rights reserved.")
    .replaceAll("© 2025 Watts Unified Solutions. All rights reserved.", "© 2026 Watts Unified Solutions. All rights reserved.");
}

function installVersionedRepairScript(html) {
  const versionedSource = `${HOMEPAGE_REPAIR_SCRIPT}?v=${APP_VERSION}`;
  const scriptPattern = /<script\b[^>]*\bsrc=(["'])\/homepage-images-v1\.js(?:\?[^"']*)?\1[^>]*><\/script>/gi;
  let installed = false;

  html = html.replace(scriptPattern, () => {
    if (installed) return "";
    installed = true;
    return `<script src="${versionedSource}" defer></script>`;
  });

  if (!installed) {
    html = html.replace("</body>", `<script src="${versionedSource}" defer></script></body>`);
  }

  return html;
}

export function patchHomepageHtml(html, isHomepage = false, pathname = "") {
  const homepageSeo = `<link rel="canonical" href="https://wattsunified.com/">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Watts Unified Solutions">
<meta property="og:title" content="Retirement &amp; Legacy Specialist | Watts Unified Solutions">
<meta property="og:description" content="Retirement, protection, and legacy planning with U.S. Army veteran S. Alex Watts. Build a coordinated financial strategy for your family's future.">
<meta property="og:url" content="https://wattsunified.com/">
<meta property="og:image" content="https://wattsunified.com/assets/hero.webp">
<meta property="og:image:width" content="1672">
<meta property="og:image:height" content="941">
<meta property="og:image:alt" content="Sherman A. Watts, retirement and legacy specialist and U.S. Army veteran">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Retirement &amp; Legacy Specialist | Watts Unified Solutions">
<meta name="twitter:description" content="Retirement, protection, and legacy planning built around your family's future.">
<meta name="twitter:image" content="https://wattsunified.com/assets/hero.webp">
<link rel="preload" as="image" href="/assets/hero.webp" type="image/webp" fetchpriority="high">
<script id="wu-homepage-schema" type="application/ld+json">${JSON.stringify(HOMEPAGE_SCHEMA).replaceAll("<", "\\u003c")}</script>`;

  html = html.replace(APP_ASSET, `${APP_ASSET}?v=${APP_VERSION}`);
  const homepageMetadata = isHomepage ? homepageSeo : "";
  const opportunityImageRemoval = pathname.startsWith("/opportunity")
    ? `<style id="wu-opportunity-image-removal">section:has(>img[src*="/assets/opportunity-paths.png"]),img[src*="/assets/opportunity-paths.png"]{display:none!important}</style>`
    : "";
  html = html.replace(
    "</head>",
    `${homepageMetadata}${opportunityImageRemoval}<style id="wu-nonsticky-header">header{position:relative!important;top:auto!important}</style></head>`,
  );
  return installVersionedRepairScript(html);
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
    const hero = document.querySelector('img[src="/assets/hero.webp"], img[src$="/assets/hero.webp"]');
    if (hero) {
      hero.setAttribute("width", "1672");
      hero.setAttribute("height", "941");
      hero.setAttribute("loading", "eager");
      hero.setAttribute("fetchpriority", "high");
      hero.setAttribute("decoding", "async");
    }
    document.querySelectorAll('img[src="/assets/logo.png"], img[src$="/assets/logo.png"]').forEach((logo) => {
      logo.setAttribute("width", "545");
      logo.setAttribute("height", "113");
      logo.setAttribute("decoding", "async");
    });
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
    document.querySelectorAll("footer small, footer p").forEach((item) => {
      if (item.textContent.trim().startsWith("©")) item.textContent = "© 2026 Watts Unified Solutions. All rights reserved.";
    });
    if (location.pathname.startsWith("/opportunity")) {
      document.querySelectorAll('img[src*="/assets/opportunity-paths.png"]').forEach((image) => {
        const standaloneSection = image.closest("section");
        if (standaloneSection && standaloneSection.children.length === 1) standaloneSection.remove();
        else image.remove();
      });
    }
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
          "x-watts-social-icon": "alignable-official-v2",
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
      headers.set("x-watts-home-image", "stable-site-image-v2");
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
    if (contentType.includes("text/html") && isManagedHtmlPath(incoming.pathname)) {
      const html = patchHomepageHtml(await originResponse.text(), incoming.pathname === "/", incoming.pathname);
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
