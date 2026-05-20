"use client";

import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ItemImage } from "@/components/tier-list-app";
import { displayTags, itemDetail, labelForTag } from "@/lib/tier-utils";
import type { ItemRecord, TierMetaData } from "@/lib/types";

interface ItemDetailDialogProps {
  item: ItemRecord | null;
  tierMeta: TierMetaData;
  variantLabels: Record<string, string>;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ItemDetailDialog({ item, tierMeta, variantLabels, open, onOpenChange }: ItemDetailDialogProps) {
  if (!item) {
    return <Dialog open={open} onOpenChange={onOpenChange} />;
  }

  const detail = itemDetail(item, tierMeta, variantLabels);
  const tags = displayTags(item, tierMeta);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-start gap-3 pr-6">
            <ItemImage item={item} />
            <div className="grid gap-2">
              <DialogTitle>{item.name}</DialogTitle>
              <div className="flex flex-wrap gap-1">
                <Badge variant="cyan">Tier {item.tier}</Badge>
                {tags.slice(0, 5).map(tag => (
                  <Badge key={tag} variant={tag === "prime" || tag === "incarnon" ? "cyan" : "gold"}>
                    {labelForTag(tag, tierMeta, variantLabels)}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <DetailBox title="Função">{detail.role}</DetailBox>
            <DetailBox title="Investimento">{detail.investment}</DetailBox>
          </div>
          <DetailBox title="Melhores usos">{detail.bestUses.join(" | ") || "Uso geral"}</DetailBox>
          <div className="rounded-md border border-border bg-background/50 p-3">
            <b className="text-sm text-cyan-200">Mini build</b>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-muted-foreground">
              {detail.build.map(line => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
          <DetailBox title="Aviso">{detail.warning}</DetailBox>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function DetailBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-border bg-background/50 p-3">
      <b className="text-sm text-cyan-200">{title}</b>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{children}</p>
    </div>
  );
}
