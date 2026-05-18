import { NextResponse } from "next/server";
import { getTierListData } from "@/lib/tier-data";

export const runtime = "nodejs";

export async function GET() {
  const tierList = await getTierListData();
  return NextResponse.json({
    ok: true,
    service: "warframe-tier-list",
    stack: "next-react-typescript-tailwind-shadcn-postgresql",
    updatedAt: tierList.updatedAt,
    database: {
      configured: Boolean(process.env.DATABASE_URL),
      provider: process.env.DATABASE_URL ? "postgresql" : "not-configured"
    }
  });
}
