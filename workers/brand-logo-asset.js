const BRAND_ASSET = "https://watts-retirement-wealth.salexw.chatgpt.site/watts-brand-lockup.png";

export default {
  async fetch(request) {
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: { Allow: "GET, HEAD" },
      });
    }

    const upstream = await fetch(BRAND_ASSET, {
      method: request.method,
      headers: {
        Accept: "image/png,image/*;q=0.8,*/*;q=0.5",
        "User-Agent": "WattsUnifiedAssetProxy/1.0",
      },
    });

    if (!upstream.ok || !upstream.headers.get("content-type")?.startsWith("image/")) {
      return new Response("Brand asset unavailable", {
        status: 502,
        headers: {
          "X-Upstream-Status": String(upstream.status),
          "X-Upstream-Type": upstream.headers.get("content-type") || "missing",
        },
      });
    }

    const headers = new Headers(upstream.headers);
    headers.set("Cache-Control", "public, max-age=86400, stale-while-revalidate=604800");
    headers.set("X-Content-Type-Options", "nosniff");
    headers.set("X-Watts-Asset-Route", "brand-logo-v1");
    return new Response(upstream.body, { status: 200, headers });
  },
};
