const published = "https://watts-retirement-wealth.salexw.chatgpt.site";
const assetPrefix = "/solutions-app";
const localAssets = ["tax-free-retirement-hero-v2.webp", "watts-logo.png", "watts-falcon.png", "favicon.ico"];

function upstreamRequest(request, target) {
  const headers = new Headers(request.headers);
  headers.set("host", new URL(published).host);
  headers.set("x-forwarded-host", new URL(request.url).host);
  return new Request(target, {
    method: request.method,
    headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
    redirect: "follow"
  });
}

function rewriteHtml(html) {
  html = html.replace(/<link rel="preload" as="image" imageSrcSet="[^"]*"[^>]*>/g, "");
  html = html.replace(/\s+srcSet="[^"]*"/g, "").replace(/\s+imageSrcSet="[^"]*"/g, "");
  for (const asset of localAssets) html = html.replaceAll("/" + asset, assetPrefix + "/" + asset);
  html = html.replace(/src="\/_vinext\/image\?url=%2F([^&"]+)[^"]*"/g, function (_, asset) {
    return 'src="' + assetPrefix + "/" + asset + '"';
  });
  html = html.replaceAll("/_vinext/", assetPrefix + "/_vinext/");
  html = html.replaceAll("/assets/", assetPrefix + "/assets/");
  html = html.replace("</head>", '<link rel="preload" as="image" href="' + assetPrefix + '/tax-free-retirement-hero-v2.webp" fetchpriority="high" /></head>');
  html = html.replaceAll("© 2025–2026 Watts Unified Solutions. All rights reserved.", "© 2026 Watts Unified Solutions. All rights reserved.");
  html = html.replaceAll("© 2025 Watts Unified Solutions. All rights reserved.", "© 2026 Watts Unified Solutions. All rights reserved.");
  return html;
}

addEventListener("fetch", event => {
  event.respondWith((async () => {
    const incoming = new URL(event.request.url);
    const target = published + "/tax-free-retirement" + incoming.search;
    const response = await fetch(upstreamRequest(event.request, target));
    const headers = new Headers(response.headers);
    headers.set("x-watts-tax-free-retirement", "published-v3");
    headers.set("cache-control", "no-cache, must-revalidate");
    if ((headers.get("content-type") || "").includes("text/html")) {
      const html = rewriteHtml(await response.text());
      headers.delete("content-length");
      return new Response(html, { status: response.status, statusText: response.statusText, headers });
    }
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  })());
});
