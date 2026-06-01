import { accountItemMap } from "@/data/accountItems";
import {
  isRecord,
  parseBoundedJson,
  readJsonFromLocalStorage,
  removeLocalStorageItem,
  sanitizePlainText,
  writeJsonToLocalStorage
} from "@/lib/local-storage-security";

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
  const result = readJsonFromLocalStorage<unknown>(accountStorageKey, {
    maxBytes: maxAccountProgressBytes,
    label: "Progresso salvo"
  });

  if (!result.ok) {
    return {
      progress: createEmptyAccountProgress(),
      error: result.error
    };
  }

  if (!result.data) return { progress: createEmptyAccountProgress() };
  return validateParsedAccountProgress(result.data);
}

export function saveAccountProgress(progress: AccountProgress) {
  const result = writeJsonToLocalStorage(accountStorageKey, sanitizeProgress(progress));
  if (result.ok) {
    notifyAccountProgressChanged();
    return { ok: true };
  }

  return result;
}

export function resetAccountProgress() {
  const result = removeLocalStorageItem(accountStorageKey);
  if (result.ok) {
    notifyAccountProgressChanged();
    return { ok: true };
  }

  return result;
}

export function parseAccountProgress(raw: string): AccountStorageResult {
  const result = parseBoundedJson<unknown>(raw, {
    maxBytes: maxAccountProgressBytes,
    label: "Arquivo de progresso"
  });

  if (!result.ok) {
    return {
      progress: createEmptyAccountProgress(),
      error: result.error
    };
  }

  return validateParsedAccountProgress(result.data);
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

function validateParsedAccountProgress(value: unknown): AccountStorageResult {
  const result = validateProgress(value);
  if (!result.progress) {
    return {
      progress: createEmptyAccountProgress(),
      error: result.error || "O progresso importado não tem um formato válido."
    };
  }
  return { progress: result.progress };
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
  const notes = sanitizePlainText(value.notes, 240);

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

function notifyAccountProgressChanged() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("warframe-fool-account-progress-changed"));
}
