"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SearchableSelect } from "@/components/searchable-select";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import type { Loadout, LoadoutInput, TierListData } from "@/lib/types";

interface LoadoutsPanelProps {
  tierList: TierListData;
}

const emptyForm: LoadoutInput = {
  name: "",
  objective: "",
  warframe: "",
  primary: "",
  secondary: "",
  melee: "",
  notes: ""
};

const storageKey = "warframefool-loadouts";

export function LoadoutsPanel({ tierList }: LoadoutsPanelProps) {
  const [form, setForm] = useState<LoadoutInput>(emptyForm);
  const [loadouts, setLoadouts] = useState<Loadout[]>([]);
  const [status, setStatus] = useState("Pronto para salvar");

  const choices = useMemo(() => {
    return {
      warframes: tierList.warframes.flatMap(row => row.items.map(item => item.name)),
      primary: namesForWeaponCategory(tierList, "primary"),
      secondary: namesForWeaponCategory(tierList, "secondary"),
      melee: namesForWeaponCategory(tierList, "melee")
    };
  }, [tierList]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setLoadouts(readStoredLoadouts());
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  function submitLoadout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const loadout: Loadout = {
      id: createId(),
      name: form.name.trim(),
      objective: form.objective?.trim() || "",
      warframe: form.warframe.trim(),
      primary: form.primary?.trim() || "",
      secondary: form.secondary?.trim() || "",
      melee: form.melee?.trim() || "",
      notes: form.notes?.trim() || "",
      createdAt: new Date().toISOString()
    };
    const nextLoadouts = [loadout, ...loadouts];
    setLoadouts(nextLoadouts);
    writeStoredLoadouts(nextLoadouts);
    setForm(emptyForm);
    setStatus("Loadout salvo com sucesso.");
  }

  function deleteLoadout(id: string) {
    const nextLoadouts = loadouts.filter(loadout => loadout.id !== id);
    setLoadouts(nextLoadouts);
    writeStoredLoadouts(nextLoadouts);
    setStatus("Loadout removido.");
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-black">
        Meus Loadouts
        <span className="mt-1 block text-sm font-normal text-muted-foreground">
          Organize combinações de Warframe, armas e notas por objetivo. Os loadouts ficam salvos neste navegador.
        </span>
      </h2>
      <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,420px)_1fr]">
        <Card className="p-4">
          <form className="grid gap-3" onSubmit={submitLoadout}>
            <Field id="loadout-name" label="Nome do loadout">
              <Input id="loadout-name" value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} required placeholder="Ex: Steel Path seguro" />
            </Field>
            <Field id="loadout-objective" label="Objetivo">
              <Select id="loadout-objective" value={form.objective} onChange={event => setForm({ ...form, objective: event.target.value })}>
                <option value="">Sem objetivo fixo</option>
                <option value="Steel Path">Steel Path</option>
                <option value="Farm">Farm</option>
                <option value="Boss">Boss</option>
                <option value="Missões rápidas">Missões rápidas</option>
                <option value="Missões longas">Missões longas</option>
                <option value="Iniciante">Iniciante</option>
              </Select>
            </Field>
            <Field id="loadout-warframe" label="Warframe">
              <SearchableSelect
                id="loadout-warframe"
                label="Warframe"
                value={form.warframe}
                options={choices.warframes}
                onChange={warframe => setForm({ ...form, warframe })}
                placeholder="Buscar Warframe..."
                required
              />
            </Field>
            <Field id="loadout-primary" label="Primária">
              <SearchableSelect
                id="loadout-primary"
                label="Primária"
                value={form.primary || ""}
                options={choices.primary}
                onChange={primary => setForm({ ...form, primary })}
                placeholder="Buscar arma primária..."
              />
            </Field>
            <Field id="loadout-secondary" label="Secundária">
              <SearchableSelect
                id="loadout-secondary"
                label="Secundária"
                value={form.secondary || ""}
                options={choices.secondary}
                onChange={secondary => setForm({ ...form, secondary })}
                placeholder="Buscar arma secundária..."
              />
            </Field>
            <Field id="loadout-melee" label="Melee">
              <SearchableSelect
                id="loadout-melee"
                label="Melee"
                value={form.melee || ""}
                options={choices.melee}
                onChange={melee => setForm({ ...form, melee })}
                placeholder="Buscar melee..."
              />
            </Field>
            <Field id="loadout-notes" label="Notas">
              <Textarea id="loadout-notes" value={form.notes} onChange={event => setForm({ ...form, notes: event.target.value })} placeholder="Ex: usar para Steel Path, boss semanal ou farm longo" />
            </Field>
            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit">Salvar combinação</Button>
              <Badge variant={status.includes("salvo") ? "cyan" : "outline"} aria-live="polite">{status}</Badge>
            </div>
          </form>
        </Card>
        <Card className="p-4">
          <strong>Loadouts salvos</strong>
          <div className="mt-3 grid gap-3">
            {loadouts.length ? (
              loadouts.map(loadout => (
                <article key={loadout.id} className="rounded-md border border-border bg-background/50 p-3">
                  <header className="flex items-start justify-between gap-3">
                    <h3 className="font-bold text-foreground">{loadout.name}</h3>
                    <Button type="button" size="sm" variant="destructive" aria-label={`Remover loadout ${loadout.name}`} onClick={() => deleteLoadout(loadout.id)}>
                      Remover
                    </Button>
                  </header>
                  {loadout.objective ? <p className="mt-2 text-sm text-muted-foreground"><b>Objetivo:</b> {loadout.objective}</p> : null}
                  <p className="mt-2 text-sm text-muted-foreground"><b>Warframe:</b> {loadout.warframe}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <b>Armas:</b> {[loadout.primary, loadout.secondary, loadout.melee].filter(Boolean).join(" | ") || "Sem armas definidas"}
                  </p>
                  {loadout.notes ? <p className="mt-2 text-sm text-muted-foreground"><b>Notas:</b> {loadout.notes}</p> : null}
                </article>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">Nenhum loadout salvo ainda.</p>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function namesForWeaponCategory(tierList: TierListData, categoryId: string) {
  const category = tierList.weapons.find(item => item.id === categoryId);
  return category?.rows.flatMap(row => row.items.map(item => item.name)) || [];
}

function readStoredLoadouts() {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(storageKey);
    return raw ? (JSON.parse(raw) as Loadout[]) : [];
  } catch {
    return [];
  }
}

function writeStoredLoadouts(loadouts: Loadout[]) {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(loadouts));
  } catch {
    return;
  }
}

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}
