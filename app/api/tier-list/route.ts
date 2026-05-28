import { getTierListData } from "@/lib/tier-data";
import { apiJson } from "@/lib/api-security";

export const runtime = "nodejs";

export async function GET() {
  return apiJson(await getTierListData(), {
    headers: {
      "Cache-Control": "public, max-age=60, stale-while-revalidate=300"
    }
  });
}
