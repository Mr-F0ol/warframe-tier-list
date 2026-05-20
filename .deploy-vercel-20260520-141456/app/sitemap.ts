import type { MetadataRoute } from "next";
import { buildGuides } from "@/data/builds";

const siteUrl = "https://warframefool.vercel.app";
const staticRoutes = [
  { path: "", priority: 1 },
  { path: "/tier-list", priority: 0.95 },
  { path: "/melhores-warframes", priority: 0.9 },
  { path: "/melhores-armas-primarias", priority: 0.88 },
  { path: "/melhores-armas-secundarias", priority: 0.88 },
  { path: "/melhores-secundarias", priority: 0.82 },
  { path: "/melhores-melee", priority: 0.88 },
  { path: "/melee", priority: 0.84 },
  { path: "/incarnon", priority: 0.86 },
  { path: "/builds", priority: 0.84 },
  { path: "/farm", priority: 0.82 },
  { path: "/farm-creditos", priority: 0.78 },
  { path: "/farm-foco-warframe", priority: 0.82 },
  { path: "/melhor-escola-warframe", priority: 0.82 },
  { path: "/melhor-amp-operador-warframe", priority: 0.82 },
  { path: "/guia-eidolon-warframe", priority: 0.8 },
  { path: "/void-angels-warframe", priority: 0.8 },
  { path: "/arcanes-amp-warframe", priority: 0.78 },
  { path: "/melhores-warframes-farm-foco", priority: 0.78 },
  { path: "/steel-path", priority: 0.82 },
  { path: "/loadouts", priority: 0.72 },
  { path: "/sobre", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-20");

  return [
    ...staticRoutes.map(route => ({
      url: `${siteUrl}${route.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route.priority
    })),
    ...buildGuides.map(build => ({
      url: `${siteUrl}/builds/${build.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
