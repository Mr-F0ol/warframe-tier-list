import { NextResponse } from "next/server";
import { hasCloudPersistence } from "@/lib/db";
import { getTierListData } from "@/lib/tier-data";

export const runtime = "nodejs";

export async function GET() {
  const tierList = await getTierListData();
  return NextResponse.json({
    ok: true,
    service: "warframe-tier-list",
    stack: "next-react-typescript-tailwind",
    updatedAt: tierList.updatedAt,
    storage: {
      cloudReady: hasCloudPersistence(),
      mode: hasCloudPersistence() ? "cloud-ready" : "local-ready"
    }
  });
}
