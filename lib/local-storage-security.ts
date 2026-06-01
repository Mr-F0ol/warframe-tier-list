const dangerousJsonKeys = new Set(["__proto__", "prototype", "constructor"]);
const maxJsonDepth = 24;

export type SafeJsonResult<T = unknown> =
  | { ok: true; data: T }
  | { ok: false; error: string };

export interface SafeJsonOptions {
  maxBytes: number;
  label?: string;
  rejectDangerousKeys?: boolean;
}

export function parseBoundedJson<T = unknown>(raw: string, options: SafeJsonOptions): SafeJsonResult<T> {
  const label = options.label || "JSON";
  if (byteLength(raw) > options.maxBytes) {
    return { ok: false, error: `${label} grande demais para importar com segurança.` };
  }

  try {
    const data = JSON.parse(raw) as T;
    if (options.rejectDangerousKeys !== false && hasDangerousJsonKey(data)) {
      return { ok: false, error: `${label} contém campos não permitidos.` };
    }
    return { ok: true, data };
  } catch {
    return { ok: false, error: `${label} inválido.` };
  }
}

export function readJsonFromLocalStorage<T = unknown>(
  key: string,
  options: SafeJsonOptions
): SafeJsonResult<T | null> {
  const storage = getBrowserLocalStorage();
  if (!storage) return { ok: false, error: "O navegador bloqueou o armazenamento local." };

  try {
    const raw = storage.getItem(key);
    if (!raw) return { ok: true, data: null };
    return parseBoundedJson<T>(raw, options);
  } catch {
    return { ok: false, error: "Não foi possível ler os dados salvos neste navegador." };
  }
}

export function writeJsonToLocalStorage(key: string, value: unknown): { ok: boolean; error?: string } {
  const storage = getBrowserLocalStorage();
  if (!storage) return { ok: false, error: "O navegador bloqueou o armazenamento local." };

  try {
    storage.setItem(key, JSON.stringify(value));
    return { ok: true };
  } catch {
    return { ok: false, error: "Não foi possível salvar os dados neste navegador." };
  }
}

export function removeLocalStorageItem(key: string): { ok: boolean; error?: string } {
  const storage = getBrowserLocalStorage();
  if (!storage) return { ok: false, error: "O navegador bloqueou o armazenamento local." };

  try {
    storage.removeItem(key);
    return { ok: true };
  } catch {
    return { ok: false, error: "Não foi possível limpar os dados salvos." };
  }
}

export function getBrowserLocalStorage(): Storage | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

export function hasDangerousJsonKey(value: unknown, depth = 0): boolean {
  if (!isRecord(value) && !Array.isArray(value)) return false;
  if (depth > maxJsonDepth) return true;

  if (Array.isArray(value)) {
    return value.some(item => hasDangerousJsonKey(item, depth + 1));
  }

  return Object.entries(value).some(([key, child]) => {
    return dangerousJsonKeys.has(key) || hasDangerousJsonKey(child, depth + 1);
  });
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

export function sanitizePlainText(value: unknown, maxLength: number) {
  return String(value ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function byteLength(value: string) {
  if (typeof TextEncoder !== "undefined") {
    return new TextEncoder().encode(value).byteLength;
  }
  return value.length;
}
