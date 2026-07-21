const published = "https://watts-retirement-wealth.salexw.chatgpt.site";
const assetPrefix = "/solutions-app";
const localAssets = [
  "solutions-protection.jpg",
  "million-dollar-baby-social-v1.png",
  "watts-falcon.png",
  "favicon.ico",
];

function upstreamRequest(request, target) {
  const headers = new Headers(request.headers);
  headers.delete("host");
  headers.delete("cookie");
  headers.delete("authorization");
  return new Request(target, { method: request.method, headers, redirect: "follow" });
}

function rewriteHtml(html) {
  html = html.replace(/<link rel="preload" as="image" imageSrcSet="[^"]*"[^>]*>/g, "");
  html = html.replace(/\s+srcSet="[^"]*"/g, "").replace(/\s+imageSrcSet="[^"]*"/g, "");
  for (const asset of localAssets) html = html.replaceAll("/" + asset, assetPrefix + "/" + asset);
  html = html.replace(/src="\/_vinext\/image\?url=%2F([^&"]+)[^"]*"/g, (_, asset) => `src="${assetPrefix}/${asset}"`);
  html = html.replaceAll("/_vinext/", assetPrefix + "/_vinext/");
  html = html.replaceAll("/assets/", assetPrefix + "/assets/");
  html = html.replaceAll(assetPrefix + "/million-dollar-baby-blueprint.png", "/million-dollar-baby-blueprint.png");
  html = html.replace("</head>", `<link rel="preload" as="image" href="${assetPrefix}/million-dollar-baby-social-v1.png" fetchpriority="high" /></head>`);
  return html;
}

export default {
  async fetch(request) {
    const incoming = new URL(request.url);
    if (incoming.pathname === "/million-dollar-baby-blueprint.png") {
      const asset = await fetch(upstreamRequest(request, new URL(incoming.pathname + incoming.search, published)));
      const headers = new Headers(asset.headers);
      headers.set("cache-control", "public,max-age=3600");
      headers.set("x-content-type-options", "nosniff");
      return new Response(asset.body, { status: asset.status, headers });
    }
    if (incoming.pathname !== "/million-dollar-baby" && incoming.pathname !== "/million-dollar-baby/") {
      return Response.redirect("https://wattsunified.com/million-dollar-baby", 302);
    }

    const target = new URL("/million-dollar-baby" + incoming.search, published);
    const response = await fetch(upstreamRequest(request, target));
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("text/html")) return response;

    const headers = new Headers(response.headers);
    headers.delete("content-length");
    headers.delete("content-encoding");
    headers.set("content-type", "text/html;charset=UTF-8");
    headers.set("cache-control", "public,max-age=0,must-revalidate");
    headers.set("x-content-type-options", "nosniff");
    headers.set("x-watts-million-dollar-baby", "published-v5");
    return new Response(rewriteHtml(await response.text()), { status: response.status, headers });
  },
};
