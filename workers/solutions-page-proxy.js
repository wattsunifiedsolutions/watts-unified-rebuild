const PUBLISHED_SITE = "https://watts-retirement-wealth.salexw.chatgpt.site";
const ASSET_PREFIX = "/solutions-app";
const SOLUTIONS_REPAIR_VERSION = "20260721-optimizer4";
const SOLUTIONS_SITE_RELEASE = "20260721-v33";
const PAGE_ASSETS = new Set([
  "watts-logo.png",
  "watts-brand-lockup.png",
  "solutions-hero.webp",
  "solutions-protection.jpg",
  "solutions-retirement.webp",
  "solutions-legacy.webp",
  "solutions-business.webp",
  "solutions-veteran.webp",
]);

function upstreamRequest(request, target) {
  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("cookie");
  headers.delete("authorization");
  headers.set("cache-control", "no-cache, no-store, max-age=0");
  headers.set("pragma", "no-cache");
  return new Request(target, {
    method: request.method,
    headers,
    redirect: "follow",
    cache: "no-store",
  });
}

function contentTypeFor(pathname) {
  const extension = pathname.split("?")[0].split(".").pop()?.toLowerCase();
  return {
    webp: "image/webp",
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    svg: "image/svg+xml",
    gif: "image/gif",
    avif: "image/avif",
    ico: "image/x-icon",
    css: "text/css; charset=utf-8",
    js: "text/javascript; charset=utf-8",
    woff2: "font/woff2",
    woff: "font/woff",
  }[extension];
}

function stableResponse(response, tag, assetPath = "") {
  const headers = new Headers(response.headers);
  const type = contentTypeFor(assetPath);
  if (type) headers.set("content-type", type);
  headers.set("x-watts-solutions-worker", tag);
  headers.set("x-content-type-options", "nosniff");
  headers.delete("content-length");
  return new Response(response.body, { status: response.status, headers });
}

function rewritePublishedHtml(html) {
  return html
    .replaceAll("/_vinext/", `${ASSET_PREFIX}/_vinext/`)
    .replaceAll("/assets/", `${ASSET_PREFIX}/assets/`)
    .replace(
      /(?<!\/solutions-app)\/(watts-logo\.png|solutions-protection\.jpg|solutions-(?:hero|retirement|legacy|business|veteran)\.webp)/g,
      `${ASSET_PREFIX}/$1`,
    )
    .replace(/<section class="solutions-trust"[\s\S]*?<\/section>/, "")
    .replace(
      "</body>",
      `<script id="wu-solutions-runtime-repair">(() => {
  const version = "${SOLUTIONS_REPAIR_VERSION}";
  const repair = () => {
    document.querySelectorAll('img[src^="/_vinext/image"], img[src^="/solutions-app/"], img[src^="https://wattsunified.com/solutions-app/"], img[src^="https://www.wattsunified.com/solutions-app/"]').forEach((image) => {
      const source = image.getAttribute("src");
      if (!source) return;
      const url = new URL(source, location.origin);
      if (url.searchParams.get("wu") === version) return;
      url.searchParams.set("wu", version);
      image.src = url.pathname + url.search;
    });
    document.querySelectorAll("main section").forEach((section) => {
      if (section.textContent.includes("What Happens Next")) section.remove();
    });
  };
  repair();
  new MutationObserver(repair).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src"],
  });
})();</script></body>`,
    );
}

function normalizeOptimizerSource(sourcePath) {
  if (sourcePath.startsWith(`${ASSET_PREFIX}/`)) {
    return sourcePath.slice(ASSET_PREFIX.length);
  }
  return sourcePath;
}

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    }

    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname.startsWith(`${ASSET_PREFIX}/_vinext/image`) || pathname.startsWith("/_vinext/image")) {
      const sourcePath = url.searchParams.get("url");
      if (!sourcePath || !sourcePath.startsWith("/") || sourcePath.startsWith("//")) {
        return new Response("Invalid image path", { status: 400 });
      }
      const normalizedSource = normalizeOptimizerSource(sourcePath);
      const response = await fetch(upstreamRequest(request, `${PUBLISHED_SITE}${normalizedSource}`));
      const served = stableResponse(response, "stable-image-bypass-v4", normalizedSource);
      const headers = new Headers(served.headers);
      headers.set("cache-control", "public, max-age=86400, stale-while-revalidate=604800");
      return new Response(served.body, { status: served.status, headers });
    }

    if (pathname.startsWith(`${ASSET_PREFIX}/`)) {
      const assetPath = pathname.slice(ASSET_PREFIX.length);
      const response = await fetch(upstreamRequest(request, `${PUBLISHED_SITE}${assetPath}${url.search}`));
      return stableResponse(response, "stable-asset-v3", assetPath);
    }

    const filename = pathname.split("/").pop() || "";
    if (PAGE_ASSETS.has(filename)) {
      const response = await fetch(upstreamRequest(request, `${PUBLISHED_SITE}/${filename}`));
      return stableResponse(response, "stable-page-asset-v3", filename);
    }

    const publishedUrl = new URL(`${PUBLISHED_SITE}/solutions`);
    publishedUrl.search = url.search;
    publishedUrl.searchParams.set("wu-release", SOLUTIONS_SITE_RELEASE);
    const response = await fetch(upstreamRequest(request, publishedUrl));
    const contentType = response.headers.get("content-type") || "";
    if (!response.ok || !contentType.includes("text/html")) {
      return stableResponse(response, "stable-passthrough-v3");
    }

    const html = rewritePublishedHtml(await response.text());
    const headers = new Headers(response.headers);
    headers.set("content-type", "text/html; charset=utf-8");
    headers.set("cache-control", "no-store, no-cache, must-revalidate, max-age=0");
    headers.set("cdn-cache-control", "no-store");
    headers.set("cloudflare-cdn-cache-control", "no-store");
    headers.set("pragma", "no-cache");
    headers.set("expires", "0");
    headers.set("x-watts-solutions-worker", "stable-approved-v3");
    headers.set("x-watts-solutions-release", SOLUTIONS_SITE_RELEASE);
    headers.set("x-content-type-options", "nosniff");
    headers.delete("content-length");
    return new Response(html, { status: response.status, headers });
  },
};
