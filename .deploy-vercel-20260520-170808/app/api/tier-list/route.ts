import { NextResponse } from "next/server";
import { getTierListData } from "@/lib/tier-data";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(await getTierListData());
}
