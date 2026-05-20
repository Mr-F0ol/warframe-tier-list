import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: "https://warframefool.vercel.app/sitemap.xml",
    host: "https://warframefool.vercel.app"
  };
}
