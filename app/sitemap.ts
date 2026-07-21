import type { MetadataRoute } from "next";

const base = "https://wattsunified.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    ["/", 1, "weekly"],
    ["/solutions/", 0.9, "weekly"],
    ["/solutions/life-insurance", 0.9, "monthly"],
    ["/solutions/retirement-wealth/", 0.9, "monthly"],
    ["/solutions/protection-legacy/", 0.9, "monthly"],
    ["/solutions/business", 0.9, "monthly"],
    ["/million-dollar-baby", 0.8, "monthly"],
    ["/retirement-roadmap", 0.8, "monthly"],
    ["/protected-growth", 0.8, "monthly"],
    ["/tax-free-retirement", 0.8, "monthly"],
    ["/solutions/programs/veterans", 0.8, "monthly"],
    ["/resources", 0.8, "weekly"],
    ["/interactive-briefings", 0.7, "monthly"],
    ["/build-wealth-legacy", 0.7, "monthly"],
    ["/system", 0.6, "monthly"],
    ["/opportunity", 0.6, "monthly"],
    ["/about", 0.6, "monthly"],
  ] as const;

  return routes.map(([path, priority, changeFrequency]) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
