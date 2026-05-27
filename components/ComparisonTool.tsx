"use client";

import Link from "next/link";
import { Copy } from "lucide-react";
import { useMemo, useState } from "react";
import type { CompareItem } from "@/data/compareItems";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export function ComparisonTool({ items }: { items: CompareItem[] }) {
  const [selectedIds, setSelectedIds] = useState<string[]>([
    items.find(item => item.id === "felarx")?.id || items[0]?.id || "",
    items.find(item => item.id === "laetum")?.id || items[1]?.id || "",
    ""
  ]);
  const [message, setMessage] = useState("");

  const selectedItems = useMemo(
    () => selectedIds.filter(Boolean).filter((id, index, list) => list.indexOf(id) === index).map(id => items.find(item => item.id === id)).filter(Boolean) as CompareItem[],
    [items, selectedIds]
  );

  const conclusion = buildConclusion(selectedItems);

  function updateSlot(index: number, value: string) {
    setSelectedIds(current => current.map((item, itemIndex) => (itemIndex === index ? value : item)));
    setMessage("");
  }

  async function copyComparison() {
    const text = comparisonToText(selectedItems, conclusion);
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Comparação copiada.");
    } catch {
      setMessage("Não foi possível copiar automaticamente.");
    }
  }

  return (
    <div className="mt-8 grid gap-6">
      <Card className="p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map(index => (
            <div key={index} className="grid gap-2">
              <Label htmlFor={`compare-${index}`}>{index === 2 ? "Item 3 opcional" : `Item ${index + 1}`}</Label>
              <Select id={`compare-${index}`} value={selectedIds[index]} onChange={event => updateSlot(index, event.target.value)}>
                {index === 2 ? <option value="">Sem terceiro item</option> : null}
                {items.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Select>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <Button type="button" onClick={() => void copyComparison()} disabled={selectedItems.length < 2}>
            <Copy className="h-4 w-4" aria-hidden="true" />
            Copiar comparação
          </Button>
          {message ? <Badge variant="cyan">{message}</Badge> : null}
        </div>
      </Card>

      {selectedItems.length < 2 ? (
        <Card className="p-4">
          <p className="text-sm leading-6 text-muted-foreground">Escolha pelo menos dois itens para comparar.</p>
        </Card>
      ) : (
        <>
          <div className="grid gap-3 lg:grid-cols-3">
            {selectedItems.map(item => (
              <CompareItemCard key={item.id} item={item} />
            ))}
          </div>
          <Card className="p-4">
            <h2 className="text-xl font-black text-yellow-100">Conclusão prática</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{conclusion}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedItems.map(item =>
                item.href ? (
                  <Button key={item.id} asChild size="sm" variant="secondary">
                    <Link href={item.href}>Abrir {item.name}</Link>
                  </Button>
                ) : null
              )}
              <Button asChild size="sm" variant="outline">
                <Link href="/planejador">Usar Planejador</Link>
              </Button>
            </div>
          </Card>
        </>
      )}
    </div>
  );
}

function CompareItemCard({ item }: { item: CompareItem }) {
  return (
    <Card className="h-full p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <span className="text-[11px] font-bold uppercase text-cyan-200/75">{item.category}</span>
          <h2 className="mt-1 text-xl font-black text-foreground">{item.name}</h2>
        </div>
        <Badge variant={item.tier === "S" ? "tierS" : item.tier === "A" ? "tierA" : "outline"}>Tier {item.tier}</Badge>
      </div>
      <dl className="mt-4 grid gap-3 text-sm leading-6 text-muted-foreground">
        <CompareDetail label="Função" value={item.role} />
        <CompareDetail label="Investimento" value={item.investment} />
        <CompareDetail label="Dificuldade" value={item.difficulty} />
        <CompareDetail label="Melhor uso" value={item.bestUse} />
      </dl>
      <div className="mt-4 grid gap-3">
        <ListBlock title="Pontos fortes" items={item.strengths} />
        <ListBlock title="Pontos fracos" items={item.weaknesses} />
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{item.note}</p>
      {item.href ? (
        <Button asChild size="sm" variant="secondary" className="mt-4">
          <Link href={item.href}>Página relacionada</Link>
        </Button>
      ) : null}
    </Card>
  );
}

function CompareDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-bold uppercase text-cyan-100/80">{label}</dt>
      <dd>{value || "Não informado"}</dd>
    </div>
  );
}

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/35 p-3">
      <h3 className="text-xs font-black uppercase text-cyan-100/80">{title}</h3>
      <ul className="mt-2 grid gap-1 text-sm leading-6 text-muted-foreground">
        {(items.length ? items : ["Sem observação definida."]).map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function buildConclusion(items: CompareItem[]) {
  if (items.length < 2) return "Escolha pelo menos dois itens para comparar.";
  const lowDifficulty = items.find(item => item.difficulty === "Baixa");
  const clear = items.find(item => /clear|farm|grupo|missões longas/i.test(`${item.role} ${item.bestUse}`));
  const boss = items.find(item => /boss|alvo único|alvo pesado/i.test(`${item.role} ${item.bestUse}`));
  const lowerInvestment = items.find(item => item.investment === "Baixo" || item.investment === "Médio");

  if (boss && clear && boss.id !== clear.id) {
    return `${boss.name} tende a resolver melhor alvo pesado, enquanto ${clear.name} tende a ser mais confortável para clear, farm ou missões longas. A escolha depende da lacuna do seu loadout.`;
  }

  if (lowDifficulty && lowerInvestment) {
    return `${lowDifficulty.name} parece a escolha mais simples para começar. Quando tiver mais recursos, compare com opções de investimento maior para Steel Path e endgame.`;
  }

  const first = items[0];
  return `${first.name} é uma boa referência, mas a melhor escolha depende da função que falta: sobrevivência, clear, alvo pesado, suporte ou mobilidade. Use o Planejador se ainda estiver em dúvida.`;
}

function comparisonToText(items: CompareItem[], conclusion: string) {
  return [
    "Comparador Warframe — Warframe Fool",
    "",
    ...items.map(item =>
      [
        `${item.name} — Tier ${item.tier}`,
        `Categoria: ${item.category}`,
        `Função: ${item.role}`,
        `Investimento: ${item.investment}`,
        `Dificuldade: ${item.difficulty}`,
        `Melhor uso: ${item.bestUse}`,
        item.href ? `Página: https://warframefool.vercel.app${item.href}` : "Página: guia dedicado ainda não disponível"
      ].join("\n")
    ),
    "",
    "Conclusão:",
    conclusion
  ].join("\n\n");
}
