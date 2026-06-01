import assert from "node:assert/strict";
import test from "node:test";
import {
  hasDangerousJsonKey,
  parseBoundedJson,
  readJsonFromLocalStorage,
  removeLocalStorageItem,
  sanitizePlainText,
  writeJsonToLocalStorage
} from "../lib/local-storage-security.ts";

test("aceita JSON válido dentro do limite", () => {
  const result = parseBoundedJson<{ ok: boolean }>(`{"ok":true}`, {
    maxBytes: 1024,
    label: "Teste"
  });

  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.data.ok, true);
});

test("rejeita JSON inválido", () => {
  const result = parseBoundedJson("{", {
    maxBytes: 1024,
    label: "Teste"
  });

  assert.equal(result.ok, false);
});

test("rejeita arquivo acima do limite", () => {
  const result = parseBoundedJson(`{"data":"${"x".repeat(128)}"}`, {
    maxBytes: 32,
    label: "Teste"
  });

  assert.equal(result.ok, false);
  if (!result.ok) assert.match(result.error, /grande demais/);
});

test("rejeita campos perigosos de prototype pollution", () => {
  const result = parseBoundedJson(`{"items":{"felarx":{"__proto__":{"polluted":true}}}}`, {
    maxBytes: 1024,
    label: "Teste"
  });

  assert.equal(result.ok, false);
  assert.equal(hasDangerousJsonKey({ safe: [{ constructor: "bad" }] }), true);
});

test("mantém campos inesperados como dados comuns para o schema descartar depois", () => {
  const result = parseBoundedJson<Record<string, unknown>>(`{"known":true,"unexpected":"remove-me"}`, {
    maxBytes: 1024,
    label: "Teste"
  });

  assert.equal(result.ok, true);
  if (result.ok) assert.equal(result.data.unexpected, "remove-me");
});

test("higieniza texto livre sem interpretar HTML", () => {
  const result = sanitizePlainText("<img src=x onerror=alert(1)>\ntexto", 18);
  assert.equal(result, "<img src=x onerror");
});

test("trata storage indisponível sem quebrar", () => {
  const globals = globalThis as unknown as { window?: unknown };
  const previousWindow = globals.window;
  Reflect.deleteProperty(globals, "window");

  const result = readJsonFromLocalStorage("missing", {
    maxBytes: 1024,
    label: "Teste"
  });

  assert.equal(result.ok, false);
  globals.window = previousWindow;
});

test("lê, escreve e remove JSON de storage local simulado", () => {
  const memory = new Map<string, string>();
  const globals = globalThis as unknown as { window?: unknown };
  const previousWindow = globals.window;
  globals.window = {
    localStorage: {
      getItem: (key: string) => memory.get(key) ?? null,
      setItem: (key: string, value: string) => {
        memory.set(key, value);
      },
      removeItem: (key: string) => {
        memory.delete(key);
      }
    }
  };

  assert.equal(writeJsonToLocalStorage("safe", { ok: true }).ok, true);
  const read = readJsonFromLocalStorage<{ ok: boolean }>("safe", {
    maxBytes: 1024,
    label: "Teste"
  });
  assert.equal(read.ok, true);
  if (read.ok && read.data) assert.equal(read.data.ok, true);
  assert.equal(removeLocalStorageItem("safe").ok, true);
  assert.equal(memory.has("safe"), false);

  globals.window = previousWindow;
});
