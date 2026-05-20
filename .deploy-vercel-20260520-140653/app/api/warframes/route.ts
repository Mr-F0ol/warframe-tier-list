import { type NextRequest, NextResponse } from "next/server";
import { flattenWarframes, getTierListData } from "@/lib/tier-data";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const data = await getTierListData();
  const items = filterItems(flattenWarframes(data), request.nextUrl.searchParams);
  return NextResponse.json(items);
}

function filterItems<T extends { tier?: string; name: string; note?: string; category?: string; categoryTitle?: string }>(
  items: T[],
  params: URLSearchParams
) {
  const tier = params.get("tier");
  const category = params.get("category");
  const q = String(params.get("q") || "").trim().toLowerCase();

  return items.filter(item => {
    const matchesTier = !tier || tier === "all" || item.tier === tier;
    const matchesCategory = !category || category === "all" || item.category === category;
    const haystack = `${item.name} ${item.categoryTitle || ""} ${item.note || ""}`.toLowerCase();
    const matchesQuery = !q || haystack.includes(q);
    return matchesTier && matchesCategory && matchesQuery;
  });
}
