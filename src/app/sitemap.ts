import type { MetadataRoute } from "next";
import { works } from "@/data/works";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl || "https://example.com";
  const staticPaths = ["", "/works", "/about", "/privacy"];

  const staticEntries = staticPaths.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
  }));

  const workEntries = works.map((w) => ({
    url: `${base}/works/${w.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...workEntries];
}
