import { type NextRequest } from "next/server";
import { deleteLoadout } from "@/lib/loadout-store";
import { apiError, apiJson, assertSafeIdentifier } from "@/lib/api-security";

export const runtime = "nodejs";

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    assertSafeIdentifier(id);
    const deleted = await deleteLoadout(id);

    if (!deleted) {
      return apiJson({ error: "Loadout não encontrado." }, { status: 404 });
    }

    return apiJson({ ok: true });
  } catch (error) {
    return apiError(error);
  }
}
