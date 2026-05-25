import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ComparisonGuide, ComparisonItem } from "@/data/comparisons";

export function ItemComparison({ comparison }: { comparison: ComparisonGuide }) {
  return (
    <Card className="overflow-hidden p-4">
      <h3 className="text-lg font-black text-yellow-100">{comparison.title}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <ComparisonItemCard item={comparison.itemA} />
        <ComparisonItemCard item={comparison.itemB} />
      </div>
      <div className="mt-4 border-l-2 border-yellow-300/60 bg-yellow-300/10 p-3 text-sm leading-6 text-yellow-50">
        {comparison.conclusion}
      </div>
    </Card>
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
        <Row label="Categoria" value={item.category || "Geral"} />
        <Row label="Função" value={item.role} />
        <Row label="Dificuldade" value={item.difficulty} />
        <Row label="Investimento" value={item.buildCost} />
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
