import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://warframefool.vercel.app",
      lastModified: new Date("2026-05-18"),
      changeFrequency: "weekly",
      priority: 1
    }
  ];
}
