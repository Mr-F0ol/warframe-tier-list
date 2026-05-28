import { type NextRequest } from "next/server";
import { createLoadout, listLoadouts } from "@/lib/loadout-store";
import type { LoadoutInput } from "@/lib/types";
import { apiError, apiJson, readJsonBody } from "@/lib/api-security";

export const runtime = "nodejs";

export async function GET() {
  return apiJson(await listLoadouts());
}

export async function POST(request: NextRequest) {
  try {
    const body = await readJsonBody<LoadoutInput>(request);
    const loadout = await createLoadout(body);
    return apiJson(loadout, { status: 201 });
  } catch (error) {
    return apiError(error);
  }
}
