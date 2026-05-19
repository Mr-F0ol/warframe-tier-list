import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { comparisons, type ComparisonGuide, type ComparisonItem } from "@/data/comparisons";

export function ComparisonPanel({ items = comparisons }: { items?: ComparisonGuide[] }) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-black">
          Comparação rápida
          <span className="mt-1 block text-sm font-normal text-muted-foreground">
            Dados mockados e editáveis para comparar função, custo e melhor uso entre duas opções.
          </span>
        </h2>
        <Badge variant="meta">Editável</Badge>
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {items.map(comparison => (
          <Card key={comparison.id} className="overflow-hidden p-4">
            <h3 className="text-lg font-black text-yellow-100">{comparison.title}</h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <ComparisonItemCard item={comparison.itemA} />
              <ComparisonItemCard item={comparison.itemB} />
            </div>
            <div className="mt-4 border-l-2 border-yellow-300/60 bg-yellow-300/10 p-3 text-sm leading-6 text-yellow-50">
              {comparison.conclusion}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function ComparisonItemCard({ item }: { item: ComparisonItem }) {
  return (
    <article className="rounded-md border border-border/70 bg-background/45 p-3">
      <div className="flex items-start justify-between gap-2">
        <strong className="text-sm text-foreground">{item.name}</strong>
        <Badge variant={tierVariant(item.tier)}>Tier {item.tier}</Badge>
      </div>
      <dl className="mt-3 grid gap-2 text-xs leading-5 text-muted-foreground">
        <Row label="Função" value={item.role} />
        <Row label="Dificuldade" value={item.difficulty} />
        <Row label="Custo" value={item.buildCost} />
        <Row label="Melhor uso" value={item.bestUse} />
      </dl>
    </article>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-bold uppercase text-cyan-100/80">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function tierVariant(tier: string) {
  if (tier === "S") return "tierS";
  if (tier === "A") return "tierA";
  if (tier === "B") return "tierB";
  if (tier === "C") return "tierC";
  if (tier === "D") return "tierD";
  return "outline";
}
