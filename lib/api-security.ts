import { type NextRequest, NextResponse } from "next/server";
import { parseBoundedJson } from "@/lib/local-storage-security";

const defaultMaxJsonBytes = 16 * 1024;

export class ApiInputError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "ApiInputError";
    this.status = status;
  }
}

export async function readJsonBody<T>(request: NextRequest, maxBytes = defaultMaxJsonBytes): Promise<T> {
  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    throw new ApiInputError("Envie os dados em JSON.", 415);
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (Number.isFinite(contentLength) && contentLength > maxBytes) {
    throw new ApiInputError("Dados muito grandes para salvar.", 413);
  }

  const raw = await request.text();
  const parsed = parseBoundedJson<T>(raw, {
    maxBytes,
    label: "JSON da requisição"
  });
  if (!parsed.ok) throw new ApiInputError(parsed.error, parsed.error.includes("grande demais") ? 413 : 400);
  return parsed.data;
}

export function apiJson(data: unknown, init?: ResponseInit) {
  const headers = new Headers(init?.headers);
  if (!headers.has("Cache-Control")) {
    headers.set("Cache-Control", "no-store");
  }

  return NextResponse.json(data, {
    ...init,
    headers
  });
}

export function apiError(error: unknown) {
  if (error instanceof ApiInputError) {
    return apiJson({ error: error.message }, { status: error.status });
  }

  return apiJson({ error: "Não foi possível processar a solicitação." }, { status: 500 });
}

export function sanitizeSearchParam(value: string | null, maxLength = 80) {
  return String(value || "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function pickAllowedParam<T extends string>(value: string | null, allowed: readonly T[], fallback: T) {
  return allowed.includes(value as T) ? (value as T) : fallback;
}

export function assertSafeIdentifier(value: string) {
  if (!/^[a-zA-Z0-9_-]{1,80}$/.test(value)) {
    throw new ApiInputError("Identificador inválido.");
  }
}
