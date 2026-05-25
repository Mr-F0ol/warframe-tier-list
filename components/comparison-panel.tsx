import { ItemComparison } from "@/components/item-comparison";
import { Badge } from "@/components/ui/badge";
import { comparisons, type ComparisonGuide } from "@/data/comparisons";

export function ComparisonPanel({ items = comparisons }: { items?: ComparisonGuide[] }) {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-black">
          Comparação rápida
          <span className="mt-1 block text-sm font-normal text-muted-foreground">
            Comparação rápida de função, custo e melhor uso entre duas opções.
          </span>
        </h2>
        <Badge variant="meta">Comparativo</Badge>
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {items.map(comparison => (
          <ItemComparison key={comparison.id} comparison={comparison} />
        ))}
      </div>
    </section>
  );
}
