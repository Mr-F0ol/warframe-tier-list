import { type NextRequest } from "next/server";
import { flattenWeapons, getTierListData } from "@/lib/tier-data";
import { apiJson, pickAllowedParam, sanitizeSearchParam } from "@/lib/api-security";

export const runtime = "nodejs";
const allowedTiers = ["all", "S", "A", "B", "C", "D", "U"] as const;
const allowedCategories = ["all", "primary", "secondary", "melee"] as const;

export async function GET(request: NextRequest) {
  const data = await getTierListData();
  const items = filterItems(flattenWeapons(data), request.nextUrl.searchParams);
  return apiJson(items);
}

function filterItems<T extends { tier?: string; name: string; note?: string; category?: string; categoryTitle?: string }>(
  items: T[],
  params: URLSearchParams
) {
  const tier = pickAllowedParam(params.get("tier"), allowedTiers, "all");
  const category = pickAllowedParam(params.get("category"), allowedCategories, "all");
  const q = sanitizeSearchParam(params.get("q")).toLowerCase();

  return items.filter(item => {
    const matchesTier = !tier || tier === "all" || item.tier === tier;
    const matchesCategory = !category || category === "all" || item.category === category;
    const haystack = `${item.name} ${item.categoryTitle || ""} ${item.note || ""}`.toLowerCase();
    const matchesQuery = !q || haystack.includes(q);
    return matchesTier && matchesCategory && matchesQuery;
  });
}
