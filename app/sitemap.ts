import type { MetadataRoute } from "next";
import { buildGuides } from "@/data/builds";
import { siteMeta } from "@/data/siteMeta";

const staticRoutes = [
  { path: "", priority: 1 },
  { path: "/tier-list", priority: 0.95 },
  { path: "/comece-aqui", priority: 0.9 },
  { path: "/progressao", priority: 0.88 },
  { path: "/planejador", priority: 0.9 },
  { path: "/comparar", priority: 0.86 },
  { path: "/ferramentas", priority: 0.82 },
  { path: "/builds", priority: 0.9 },
  { path: "/incarnon", priority: 0.85 },
  { path: "/melhores-incarnon", priority: 0.85 },
  { path: "/meta-atual", priority: 0.85 },
  { path: "/farm", priority: 0.85 },
  { path: "/melhores-warframes", priority: 0.85 },
  { path: "/melhores-armas-primarias", priority: 0.85 },
  { path: "/melhores-armas-secundarias", priority: 0.85 },
  { path: "/melhores-melee", priority: 0.85 },
  { path: "/melee", priority: 0.85 },
  { path: "/steel-path", priority: 0.85 },
  { path: "/farm-creditos", priority: 0.85 },
  { path: "/farm-endo", priority: 0.8 },
  { path: "/farm-kuva", priority: 0.8 },
  { path: "/farm-oxio", priority: 0.8 },
  { path: "/farm-criotico", priority: 0.8 },
  { path: "/farm-telurio", priority: 0.8 },
  { path: "/farm-foco-warframe", priority: 0.85 },
  { path: "/melhor-escola-warframe", priority: 0.85 },
  { path: "/melhor-amp-operador-warframe", priority: 0.85 },
  { path: "/guia-eidolon-warframe", priority: 0.85 },
  { path: "/void-angels-warframe", priority: 0.85 },
  { path: "/arcanes-amp-warframe", priority: 0.85 },
  { path: "/melhores-warframes-farm-foco", priority: 0.85 },
  { path: "/loadouts", priority: 0.6 },
  { path: "/sobre", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(siteMeta.lastUpdatedISO);

  return [
    ...staticRoutes.map(route => ({
      url: `${siteMeta.siteUrl}${route.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: route.priority
    })),
    ...buildGuides.map(build => ({
      url: `${siteMeta.siteUrl}/builds/${build.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
