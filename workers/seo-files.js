const SITEMAP = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://wattsunified.com/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://wattsunified.com/solutions/</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://wattsunified.com/solutions/life-insurance</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://wattsunified.com/solutions/retirement-wealth/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://wattsunified.com/solutions/protection-legacy/</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://wattsunified.com/solutions/business</loc><changefreq>monthly</changefreq><priority>0.9</priority></url>
  <url><loc>https://wattsunified.com/million-dollar-baby</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://wattsunified.com/retirement-roadmap</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://wattsunified.com/protected-growth</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://wattsunified.com/tax-free-retirement</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://wattsunified.com/solutions/programs/veterans</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://wattsunified.com/resources</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://wattsunified.com/interactive-briefings</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://wattsunified.com/build-wealth-legacy</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://wattsunified.com/system</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://wattsunified.com/opportunity</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
  <url><loc>https://wattsunified.com/about</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>
</urlset>
`;

const ROBOTS = `User-agent: *
Allow: /

Sitemap: https://wattsunified.com/sitemap.xml
`;

export default {
  async fetch(request) {
    const path = new URL(request.url).pathname;

    if (path === "/sitemap.xml") {
      return new Response(SITEMAP, {
        headers: {
          "Content-Type": "application/xml;charset=UTF-8",
          "Cache-Control": "public,max-age=3600",
        },
      });
    }

    if (path === "/robots.txt") {
      return new Response(ROBOTS, {
        headers: {
          "Content-Type": "text/plain;charset=UTF-8",
          "Cache-Control": "public,max-age=3600",
        },
      });
    }

    return new Response("Not found", { status: 404 });
  },
};
