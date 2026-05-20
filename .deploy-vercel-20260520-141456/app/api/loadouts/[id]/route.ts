import { type NextRequest, NextResponse } from "next/server";
import { deleteLoadout } from "@/lib/loadout-store";

export const runtime = "nodejs";

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const deleted = await deleteLoadout(id);

  if (!deleted) {
    return NextResponse.json({ error: "Loadout não encontrado." }, { status: 404 });
  }

  return NextResponse.json({ ok: true });
}
