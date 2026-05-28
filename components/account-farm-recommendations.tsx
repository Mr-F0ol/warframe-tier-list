"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { accountItemMap, accountItems } from "@/data/accountItems";
import { loadAccountProgress, type AccountProgress } from "@/lib/accountStorage";

export function AccountFarmRecommendations() {
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

  const recommendations = useMemo(() => {
    if (!progress) return [];
    const activeItems = Object.entries(progress.items)
      .filter(([, state]) => state.wanted || state.building)
      .map(([itemId]) => accountItemMap.get(itemId))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));

    const links = new Map<string, { href: string; label: string; sources: string[] }>();
    activeItems.forEach(item => {
      item.relatedFarms.forEach(href => {
        if (!href) return;
        const label = labelForFarm(href);
        const current = links.get(href);
        if (current) current.sources.push(item.name);
        else links.set(href, { href, label, sources: [item.name] });
      });
    });

    return Array.from(links.values()).slice(0, 6);
  }, [progress]);

  if (!recommendations.length) return null;

  return (
    <section className="mt-8">
      <div className="mb-3">
        <h2 className="text-2xl font-black text-foreground">Farms recomendados para sua conta</h2>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">
          Com base nos itens marcados como quero pegar ou buildando em Minha Conta.
        </p>
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {recommendations.map(item => (
          <Card key={item.href} className="p-4">
            <h3 className="text-lg font-black text-yellow-100">{item.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Recomendado por: {item.sources.slice(0, 3).join(", ")}.
            </p>
            <Button asChild size="sm" variant="secondary" className="mt-4">
              <Link href={item.href}>Abrir guia</Link>
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}

function labelForFarm(href: string) {
  const item = accountItems.find(candidate => candidate.href === href && candidate.category === "farm");
  if (item) return `Farm de ${item.name}`;
  if (href === "/steel-path") return "Checklist Steel Path";
  if (href === "/progressao") return "Progressão";
  if (href === "/farm") return "Farm";
  return "Guia recomendado";
}
