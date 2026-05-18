import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ItemRecord } from "@/lib/types";

interface QuickPick {
  title: string;
  item: ItemRecord | undefined;
  fallback: string;
  reason: string;
}

interface QuickPicksProps {
  itemIndex: Map<string, ItemRecord>;
}

export function QuickPicks({ itemIndex }: QuickPicksProps) {
  const picks: QuickPick[] = [
    {
      title: "Melhor iniciante",
      item: itemIndex.get("Rhino") || itemIndex.get("Wukong"),
      fallback: "Rhino",
      reason: "Seguro, simples de buildar e ótimo para aprender conteúdo difícil."
    },
    {
      title: "Steel Path seguro",
      item: itemIndex.get("Revenant Prime") || itemIndex.get("Revenant"),
      fallback: "Revenant",
      reason: "Sobrevivência absurda e pouca exigência mecânica."
    },
    {
      title: "Suporte universal",
      item: itemIndex.get("Wisp Prime") || itemIndex.get("Wisp"),
      fallback: "Wisp",
      reason: "Buffs de velocidade, vida e conforto para quase qualquer missão."
    },
    {
      title: "Farm consistente",
      item: itemIndex.get("Khora Prime") || itemIndex.get("Khora"),
      fallback: "Khora",
      reason: "Controle, loot e dano em área quando bem montada."
    },
    {
      title: "Primária meta",
      item: itemIndex.get("Torid Incarnon"),
      fallback: "Torid Incarnon",
      reason: "Clear fortíssimo e escala excelente no endgame."
    },
    {
      title: "Secundária meta",
      item: itemIndex.get("Laetum") || itemIndex.get("Dual Toxocyst Incarnon"),
      fallback: "Laetum",
      reason: "Dano alto, ótima consistência e valor contra alvos fortes."
    },
    {
      title: "Melee utilitária",
      item: itemIndex.get("Praedos"),
      fallback: "Praedos",
      reason: "Mobilidade e qualidade de vida mesmo fora de builds melee."
    },
    {
      title: "Boss e alvo pesado",
      item: itemIndex.get("Felarx") || itemIndex.get("Kuva Hek"),
      fallback: "Felarx",
      reason: "Excelente para derreter inimigos resistentes e bosses."
    }
  ];

  return (
    <section className="mt-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-black">
          Melhores Escolhas Rápidas
          <span className="mt-1 block text-sm font-normal text-muted-foreground">
            Atalhos para quem quer decidir rápido onde investir primeiro.
          </span>
        </h2>
        <span className="border border-yellow-300/25 bg-yellow-300/10 px-3 py-2 text-xs font-bold uppercase text-yellow-100">
          Prioridade prática
        </span>
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {picks.map(pick => (
          <Card key={pick.title} className="group overflow-hidden p-4 transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/35">
            <span className="mb-3 block h-1 w-10 bg-gradient-to-r from-yellow-300 to-cyan-300" />
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-bold uppercase text-cyan-100">{pick.title}</h3>
              <Badge variant={pick.item?.tier === "S" ? "gold" : "cyan"}>Tier {pick.item?.tier || "?"}</Badge>
            </div>
            <strong className="mt-3 block text-lg leading-tight text-yellow-100 group-hover:text-yellow-50">
              {pick.item?.name || pick.fallback}
            </strong>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{pick.reason}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
