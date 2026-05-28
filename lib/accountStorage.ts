import { accountItemMap } from "@/data/accountItems";

export const accountStorageKey = "warframe-fool-account-progress";
export const accountProgressVersion = 1;
const maxAccountProgressBytes = 200 * 1024;
const maxAccountProgressItems = 500;

export interface AccountItemState {
  owned?: boolean;
  wanted?: boolean;
  building?: boolean;
  formaInvested?: number;
  catalystInstalled?: boolean;
  favorite?: boolean;
  notes?: string;
  updatedAt?: string;
}

export interface AccountProgress {
  version: 1;
  items: Record<string, AccountItemState>;
  createdAt: string;
  updatedAt: string;
}

export interface AccountStorageResult {
  progress: AccountProgress;
  error?: string;
}

export function createEmptyAccountProgress(now = new Date().toISOString()): AccountProgress {
  return {
    version: accountProgressVersion,
    items: {},
    createdAt: now,
    updatedAt: now
  };
}

export function loadAccountProgress(): AccountStorageResult {
  const storage = getLocalStorage();
  if (!storage) {
    return {
      progress: createEmptyAccountProgress(),
      error: "O navegador bloqueou o armazenamento local. Você ainda pode usar a página, mas os dados podem não ficar salvos."
    };
  }

  try {
    const raw = storage.getItem(accountStorageKey);
    if (!raw) return { progress: createEmptyAccountProgress() };
    return parseAccountProgress(raw);
  } catch {
    return {
      progress: createEmptyAccountProgress(),
      error: "Não foi possível ler os dados salvos neste navegador."
    };
  }
}

export function saveAccountProgress(progress: AccountProgress) {
  const storage = getLocalStorage();
  if (!storage) return { ok: false, error: "O navegador bloqueou o armazenamento local." };

  try {
    storage.setItem(accountStorageKey, JSON.stringify(sanitizeProgress(progress)));
    notifyAccountProgressChanged();
    return { ok: true };
  } catch {
    return { ok: false, error: "Não foi possível salvar os dados neste navegador." };
  }
}

export function resetAccountProgress() {
  const storage = getLocalStorage();
  if (!storage) return { ok: false, error: "O navegador bloqueou o armazenamento local." };

  try {
    storage.removeItem(accountStorageKey);
    notifyAccountProgressChanged();
    return { ok: true };
  } catch {
    return { ok: false, error: "Não foi possível limpar os dados salvos." };
  }
}

export function parseAccountProgress(raw: string): AccountStorageResult {
  if (raw.length > maxAccountProgressBytes) {
    return {
      progress: createEmptyAccountProgress(),
      error: "O arquivo informado é grande demais para importar com segurança."
    };
  }

  try {
    const parsed = JSON.parse(raw) as unknown;
    const result = validateProgress(parsed);
    if (!result.progress) {
      return {
        progress: createEmptyAccountProgress(),
        error: result.error || "O progresso importado não tem um formato válido."
      };
    }
    return { progress: result.progress };
  } catch {
    return {
      progress: createEmptyAccountProgress(),
      error: "O JSON informado não é válido."
    };
  }
}

export function exportAccountProgress(progress: AccountProgress) {
  return JSON.stringify(sanitizeProgress(progress), null, 2);
}

export function updateAccountItemState(
  progress: AccountProgress,
  itemId: string,
  patch: Partial<AccountItemState>
): AccountProgress {
  const now = new Date().toISOString();
  const previous = progress.items[itemId] || {};
  const nextState = sanitizeItemState({
    ...previous,
    ...patch,
    updatedAt: now
  });
  const nextItems = { ...progress.items };

  if (isEmptyState(nextState)) {
    delete nextItems[itemId];
  } else {
    nextItems[itemId] = nextState;
  }

  return {
    ...progress,
    items: nextItems,
    updatedAt: now
  };
}

export function hasAnyAccountStatus(state?: AccountItemState) {
  return Boolean(state?.owned || state?.wanted || state?.building || state?.favorite);
}

function validateProgress(value: unknown): { progress?: AccountProgress; error?: string } {
  if (!isRecord(value)) return { error: "O arquivo importado não parece ser um progresso do Warframe Fool." };
  if (value.version !== accountProgressVersion) {
    return { error: "Versão de progresso incompatível. Exporte os dados novamente pela versão atual do site." };
  }
  if (!isRecord(value.items)) return { error: "O arquivo importado não contém itens válidos." };

  return { progress: sanitizeProgress(value as unknown as AccountProgress) };
}

function sanitizeProgress(progress: AccountProgress): AccountProgress {
  const now = new Date().toISOString();
  const items: Record<string, AccountItemState> = {};

  Object.entries(progress.items || {}).slice(0, maxAccountProgressItems).forEach(([itemId, state]) => {
    if (!accountItemMap.has(itemId) || !isRecord(state)) return;
    const sanitized = sanitizeItemState(state);
    if (!isEmptyState(sanitized)) items[itemId] = sanitized;
  });

  return {
    version: accountProgressVersion,
    items,
    createdAt: typeof progress.createdAt === "string" ? progress.createdAt : now,
    updatedAt: typeof progress.updatedAt === "string" ? progress.updatedAt : now
  };
}

function sanitizeItemState(value: unknown): AccountItemState {
  if (!isRecord(value)) return {};
  const formaValue = Number(value.formaInvested || 0);
  const notes = typeof value.notes === "string"
    ? value.notes.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, 240)
    : "";

  return {
    owned: Boolean(value.owned),
    wanted: Boolean(value.wanted),
    building: Boolean(value.building),
    formaInvested: Number.isFinite(formaValue) && formaValue > 0 ? Math.min(Math.round(formaValue), 99) : 0,
    catalystInstalled: Boolean(value.catalystInstalled),
    favorite: Boolean(value.favorite),
    notes,
    updatedAt: typeof value.updatedAt === "string" ? value.updatedAt : new Date().toISOString()
  };
}

function isEmptyState(state: AccountItemState) {
  return !state.owned && !state.wanted && !state.building && !state.favorite && !state.catalystInstalled && !state.formaInvested && !state.notes;
}

function getLocalStorage() {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function notifyAccountProgressChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("warframe-fool-account-progress-changed"));
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}
