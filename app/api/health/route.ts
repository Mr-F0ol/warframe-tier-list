import { getTierListData } from "@/lib/tier-data";
import { apiJson } from "@/lib/api-security";

export const runtime = "nodejs";

export async function GET() {
  const tierList = await getTierListData();
  return apiJson({
    ok: true,
    updatedAt: tierList.updatedAt
  });
}
