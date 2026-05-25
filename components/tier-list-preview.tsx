import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { TierItem, TierListData, WeaponCategoryId } from "@/lib/types";

interface PreviewGroup {
  title: string;
  description: string;
  items: TierItem[];
}

export function TierListPreview({ tierList }: { tierList: TierListData }) {
  const groups: PreviewGroup[] = [
    {
      title: "Top Warframes Tier S",
      description: "Warframes mais fortes para Steel Path, conforto e investimento geral.",
      items: tierList.warframes.find(row => row.tier === "S")?.items.slice(0, 5) || []
    },
    {
      title: "Top Primárias Tier S",
      description: "Primárias que resolvem clear, alvo pesado ou conteúdo endgame.",
      items: topWeapons(tierList, "primary")
    },
    {
      title: "Top Secundárias Tier S",
      description: "Secundárias de dano consistente, primer ou plano B para alvos resistentes.",
      items: topWeapons(tierList, "secondary")
    },
    {
      title: "Top Melees Tier S",
      description: "Melees com dano, utilidade, mobilidade ou valor de investimento alto.",
      items: topWeapons(tierList, "melee")
    }
  ];

  return (
    <section id="tier-list-preview" className="mt-8 scroll-mt-24">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-black">
          Prévia da Tier List
          <span className="mt-1 block text-sm font-normal leading-6 text-muted-foreground">
            Apenas os principais Tier S da Home. A lista completa continua com filtros, busca e todos os tiers.
          </span>
        </h2>
        <Badge variant="meta">Tier S</Badge>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {groups.map(group => (
          <Card key={group.title} className="p-4">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-lg font-black text-yellow-100">{group.title}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{group.description}</p>
              </div>
              <Badge variant="tierS">S</Badge>
            </div>
            <ol className="mt-4 grid list-none gap-2 p-0">
              {group.items.map((item, index) => (
                <li key={item.name} className="flex items-center gap-3 rounded-md border border-border/65 bg-background/42 p-3">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-yellow-300/35 bg-yellow-300/10 text-xs font-black text-yellow-100">
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <strong className="block truncate text-sm text-foreground">{item.name}</strong>
                    {item.note ? <span className="mt-1 block line-clamp-2 text-xs leading-5 text-muted-foreground">{item.note}</span> : null}
                  </span>
                </li>
              ))}
            </ol>
          </Card>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <Button asChild size="lg">
          <Link href="/tier-list">Ver tier list completa</Link>
        </Button>
      </div>
    </section>
  );
}

function topWeapons(tierList: TierListData, categoryId: WeaponCategoryId) {
  const category = tierList.weapons.find(item => item.id === categoryId);
  return category?.rows.find(row => row.tier === "S")?.items.slice(0, 5) || [];
}
