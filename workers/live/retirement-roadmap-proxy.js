const published = "https://watts-retirement-wealth.salexw.chatgpt.site";
const assetPrefix = "/solutions-app";
const localAssets = ["retirement-roadmap-hero-v2.webp", "watts-logo.png", "watts-falcon.png", "favicon.ico"];
function upstreamRequest(request, target) {
  const headers = new Headers(request.headers);
  headers.delete("host"); headers.delete("cookie"); headers.delete("authorization");
  return new Request(target, { method: request.method, headers, redirect: "follow" });
}
function rewriteHtml(html) {
  html = html.replace(/<link rel="preload" as="image" imageSrcSet="[^"]*"[^>]*>/g, "");
  html = html.replace(/\s+srcSet="[^"]*"/g, "").replace(/\s+imageSrcSet="[^"]*"/g, "");
  for (const asset of localAssets) html = html.replaceAll("/" + asset, assetPrefix + "/" + asset);
  html = html.replace(/src="\/_vinext\/image\?url=%2F([^&"]+)[^"]*"/g, function(_, asset) { return 'src="' + assetPrefix + "/" + asset + '"'; });
  html = html.replaceAll("/_vinext/", assetPrefix + "/_vinext/");
  html = html.replaceAll("/assets/", assetPrefix + "/assets/");
  html = html.replace("</head>", '<link rel="preload" as="image" href="' + assetPrefix + '/retirement-roadmap-hero-v2.webp" fetchpriority="high" /></head>');
  html = html.replaceAll("© 2025–2026 Watts Unified Solutions. All rights reserved.", "© 2026 Watts Unified Solutions. All rights reserved.");
  html = html.replaceAll("© 2025 Watts Unified Solutions. All rights reserved.", "© 2026 Watts Unified Solutions. All rights reserved.");
  return html;
}
addEventListener("fetch", event => {
  event.respondWith((async () => {
    const request = event.request;
    const incoming = new URL(request.url);
    if (incoming.pathname !== "/retirement-roadmap" && incoming.pathname !== "/retirement-roadmap/") {
      return Response.redirect("https://wattsunified.com/retirement-roadmap", 302);
    }
    const target = new URL("/retirement-roadmap" + incoming.search, published);
    const response = await fetch(upstreamRequest(request, target));
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return response;
    const headers = new Headers(response.headers);
    headers.delete("content-length"); headers.delete("content-encoding");
    headers.set("content-type", "text/html;charset=UTF-8");
    headers.set("cache-control", "public,max-age=0,must-revalidate");
    headers.set("x-content-type-options", "nosniff");
    headers.set("x-watts-retirement-roadmap", "published-v2");
    return new Response(rewriteHtml(await response.text()), { status: response.status, headers });
  })());
});
