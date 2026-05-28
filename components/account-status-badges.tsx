"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { accountItemMap, findAccountItemByName } from "@/data/accountItems";
import { loadAccountProgress, type AccountItemState, type AccountProgress } from "@/lib/accountStorage";

interface AccountStatusBadgesProps {
  itemId?: string;
  itemName?: string;
  compact?: boolean;
  className?: string;
}

export function AccountStatusBadges({ itemId, itemName, compact = false, className }: AccountStatusBadgesProps) {
  const [progress, setProgress] = useState<AccountProgress | null>(null);

  useEffect(() => {
    let mounted = true;
    const refresh = () => {
      const result = loadAccountProgress();
      window.requestAnimationFrame(() => {
        if (mounted) setProgress(result.progress);
      });
    };
    refresh();
    window.addEventListener("warframe-fool-account-progress-changed", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      mounted = false;
      window.removeEventListener("warframe-fool-account-progress-changed", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const state = useMemo(() => {
    if (!progress) return undefined;
    const resolvedId = resolveAccountItemId(itemId, itemName);
    return resolvedId ? progress.items[resolvedId] : undefined;
  }, [itemId, itemName, progress]);

  if (!state) return null;
  const labels = statusLabels(state);
  if (!labels.length) return null;

  return (
    <span className={`flex flex-wrap gap-1 ${className || ""}`} aria-label={`Status em Minha Conta para ${itemName || itemId}`}>
      {labels.map(label => (
        <Badge key={label} variant={label === "Tenho" ? "cyan" : label === "Buildando" ? "meta" : "outline"} className={compact ? "px-1.5 py-0 text-[10px]" : undefined}>
          {label}
        </Badge>
      ))}
    </span>
  );
}

export function resolveAccountItemId(itemId?: string, itemName?: string) {
  if (itemId && accountItemMap.has(itemId)) return itemId;
  if (itemName) return findAccountItemByName(itemName)?.id;
  return undefined;
}

function statusLabels(state: AccountItemState) {
  const labels: string[] = [];
  if (state.owned) labels.push("Tenho");
  if (state.wanted) labels.push("Quero");
  if (state.building) labels.push("Buildando");
  if (state.favorite) labels.push("Favorito");
  return labels;
}
