"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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

export function LoadoutsPanel({ tierList }: LoadoutsPanelProps) {
  const [form, setForm] = useState<LoadoutInput>(emptyForm);
  const [loadouts, setLoadouts] = useState<Loadout[]>([]);
  const [status, setStatus] = useState("Backend: verificando...");

  const choices = useMemo(() => {
    return {
      warframes: tierList.warframes.flatMap(row => row.items.map(item => item.name)),
      primary: namesForWeaponCategory(tierList, "primary"),
      secondary: namesForWeaponCategory(tierList, "secondary"),
      melee: namesForWeaponCategory(tierList, "melee")
    };
  }, [tierList]);

  async function loadSavedLoadouts() {
    try {
      const response = await fetch("/api/loadouts", { cache: "no-store" });
      if (!response.ok) throw new Error("Backend offline");
      const data = (await response.json()) as Loadout[];
      setLoadouts(data);
      setStatus("Backend: online");
    } catch {
      setStatus("Backend: offline ou sem DATABASE_URL");
      setLoadouts([]);
    }
  }

  useEffect(() => {
    void loadSavedLoadouts();
  }, []);

  async function submitLoadout(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const response = await fetch("/api/loadouts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Erro ao salvar loadout.");
      setForm(emptyForm);
      await loadSavedLoadouts();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao salvar loadout.");
    }
  }

  async function deleteLoadout(id: string) {
    try {
      const response = await fetch(`/api/loadouts/${id}`, { method: "DELETE" });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Erro ao remover loadout.");
      await loadSavedLoadouts();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Erro ao remover loadout.");
    }
  }

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-black">
        Meus Loadouts
        <span className="mt-1 block text-sm font-normal text-muted-foreground">
          Agora em API Next.js com PostgreSQL. Sem DATABASE_URL, o app usa fallback local para facilitar teste.
        </span>
      </h2>
      <div className="mt-3 grid gap-3 lg:grid-cols-[380px_1fr]">
        <Card className="p-4">
          <form className="grid gap-3" onSubmit={submitLoadout}>
            <Field label="Nome do loadout">
              <Input value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} required placeholder="Ex: Steel Path seguro" />
            </Field>
            <Field label="Objetivo">
              <Select value={form.objective} onChange={event => setForm({ ...form, objective: event.target.value })}>
                <option value="">Sem objetivo fixo</option>
                <option value="Steel Path">Steel Path</option>
                <option value="Farm">Farm</option>
                <option value="Boss">Boss</option>
                <option value="Missões rápidas">Missões rápidas</option>
                <option value="Missões longas">Missões longas</option>
                <option value="Iniciante">Iniciante</option>
              </Select>
            </Field>
            <Field label="Warframe">
              <Select value={form.warframe} onChange={event => setForm({ ...form, warframe: event.target.value })} required>
                <option value="">Escolha um Warframe</option>
                {choices.warframes.map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Primária">
              <Select value={form.primary} onChange={event => setForm({ ...form, primary: event.target.value })}>
                <option value="">Sem primária</option>
                {choices.primary.map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Secundária">
              <Select value={form.secondary} onChange={event => setForm({ ...form, secondary: event.target.value })}>
                <option value="">Sem secundária</option>
                {choices.secondary.map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Melee">
              <Select value={form.melee} onChange={event => setForm({ ...form, melee: event.target.value })}>
                <option value="">Sem melee</option>
                {choices.melee.map(name => (
                  <option key={name} value={name}>
                    {name}
                  </option>
                ))}
              </Select>
            </Field>
            <Field label="Notas">
              <Textarea value={form.notes} onChange={event => setForm({ ...form, notes: event.target.value })} placeholder="Ex: Usar para Steel Path, Arconte ou farm longo" />
            </Field>
            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit">Salvar loadout</Button>
              <span className="text-sm text-muted-foreground">{status}</span>
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
                    <Button type="button" size="sm" variant="destructive" onClick={() => void deleteLoadout(loadout.id)}>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function namesForWeaponCategory(tierList: TierListData, categoryId: string) {
  const category = tierList.weapons.find(item => item.id === categoryId);
  return category?.rows.flatMap(row => row.items.map(item => item.name)) || [];
}
