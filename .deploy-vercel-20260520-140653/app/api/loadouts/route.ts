import { type NextRequest, NextResponse } from "next/server";
import { createLoadout, listLoadouts } from "@/lib/loadout-store";
import type { LoadoutInput } from "@/lib/types";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(await listLoadouts());
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LoadoutInput;
    const loadout = await createLoadout(body);
    return NextResponse.json(loadout, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "JSON inválido." },
      { status: 400 }
    );
  }
}
