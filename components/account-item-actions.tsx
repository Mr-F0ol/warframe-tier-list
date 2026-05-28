"use client";

import Link from "next/link";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { resolveAccountItemId } from "@/components/account-status-badges";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { accountItemMap } from "@/data/accountItems";
import {
  createEmptyAccountProgress,
  loadAccountProgress,
  saveAccountProgress,
  updateAccountItemState,
  type AccountProgress
} from "@/lib/accountStorage";

interface AccountItemActionsProps {
  itemId?: string;
  itemName: string;
}

export function AccountItemActions({ itemId, itemName }: AccountItemActionsProps) {
  const resolvedId = resolveAccountItemId(itemId, itemName);
  const item = resolvedId ? accountItemMap.get(resolvedId) : undefined;
  const [progress, setProgress] = useState<AccountProgress>(() => createEmptyAccountProgress());
  const [message, setMessage] = useState("");

  useEffect(() => {
    let mounted = true;
    const result = loadAccountProgress();
    window.requestAnimationFrame(() => {
      if (!mounted) return;
      setProgress(result.progress);
      if (result.error) setMessage(result.error);
    });
    return () => {
      mounted = false;
    };
  }, []);

  if (!item || !resolvedId) {
    return (
      <Card className="p-4">
        <h2 className="text-lg font-black text-yellow-100">Status na Minha Conta</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Este item ainda não está no inventário local. Use Minha Conta para marcar prioridades gerais.
        </p>
        <Button asChild size="sm" variant="outline" className="mt-4">
          <Link href="/minha-conta">Abrir Minha Conta</Link>
        </Button>
      </Card>
    );
  }

  const accountItemId = resolvedId;
  const state = progress.items[resolvedId] || {};

  function toggle(key: "owned" | "wanted" | "building" | "favorite") {
    const next = updateAccountItemState(progress, accountItemId, { [key]: !state[key] });
    const result = saveAccountProgress(next);
    setProgress(next);
    setMessage(result.ok ? "Status salvo neste navegador." : result.error || "Não foi possível salvar.");
  }

  return (
    <Card className="p-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-black text-yellow-100">Status na Minha Conta</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Marque esta build para o site lembrar suas prioridades neste navegador.
          </p>
        </div>
        <StatusPills state={state} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" size="sm" variant={state.owned ? "secondary" : "outline"} onClick={() => toggle("owned")}>
          Marcar como tenho
        </Button>
        <Button type="button" size="sm" variant={state.wanted ? "secondary" : "outline"} onClick={() => toggle("wanted")}>
          Quero pegar
        </Button>
        <Button type="button" size="sm" variant={state.building ? "secondary" : "outline"} onClick={() => toggle("building")}>
          Buildando
        </Button>
        <Button type="button" size="sm" variant={state.favorite ? "secondary" : "outline"} onClick={() => toggle("favorite")}>
          <Star className="h-4 w-4" aria-hidden="true" />
          Favoritar
        </Button>
        <Button asChild size="sm" variant="ghost">
          <Link href="/minha-conta">Abrir Minha Conta</Link>
        </Button>
      </div>

      {message ? <p className="mt-3 text-sm leading-6 text-muted-foreground">{message}</p> : null}
    </Card>
  );
}

function StatusPills({ state }: { state: { owned?: boolean; wanted?: boolean; building?: boolean; favorite?: boolean } }) {
  const labels = [
    state.owned ? "Tenho" : "",
    state.wanted ? "Quero" : "",
    state.building ? "Buildando" : "",
    state.favorite ? "Favorito" : ""
  ].filter(Boolean);

  if (!labels.length) return null;
  return (
    <span className="flex flex-wrap gap-1" aria-label="Status local desta build">
      {labels.map(label => (
        <Badge key={label} variant={label === "Tenho" ? "cyan" : label === "Buildando" ? "meta" : "outline"}>
          {label}
        </Badge>
      ))}
    </span>
  );
}
