"use client";

import { useMemo, useState } from "react";
import { ItemImage } from "@/components/tier-list-app";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select } from "@/components/ui/select";
import { missionPresets } from "@/lib/missions";
import { displayTags, itemTags, labelForTag } from "@/lib/tier-utils";
import type { ItemRecord, MissionPreset, TierMetaData } from "@/lib/types";

interface MissionRecommenderProps {
  itemIndex: Map<string, ItemRecord>;
  tierMeta: TierMetaData;
  variantLabels: Record<string, string>;
  onSelect: (item: ItemRecord) => void;
}

const groups = [
  ["warframe", "Warframes"],
  ["primary", "Primárias"],
  ["secondary", "Secundárias"],
  ["melee", "Melee"]
] as const;

export function MissionRecommender({ itemIndex, tierMeta, variantLabels, onSelect }: MissionRecommenderProps) {
  const [mission, setMission] = useState("steel");
  const preset = missionPresets[mission] || missionPresets.steel;

  const recommendations = useMemo(() => {
    return Object.fromEntries(groups.map(([group]) => [group, recommendationsFor(group, preset, itemIndex, tierMeta)])) as Record<
      (typeof groups)[number][0],
      ItemRecord[]
    >;
  }, [itemIndex, preset, tierMeta]);

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-black">
        Recomendador por Missão
        <span className="mt-1 block text-sm font-normal text-muted-foreground">
          Prioridade rápida para montar um núcleo forte para cada tipo de conteúdo.
        </span>
      </h2>
      <Card className="mt-3 grid gap-4 p-4">
        <div className="grid gap-3 md:grid-cols-[260px_1fr]">
          <div className="grid gap-2">
            <Select value={mission} onChange={event => setMission(event.target.value)}>
              <option value="steel">Steel Path geral</option>
              <option value="farm">Farm</option>
              <option value="boss">Boss</option>
              <option value="fast">Missões rápidas</option>
              <option value="endurance">Missões longas</option>
              <option value="beginner">Iniciante</option>
              <option value="archimedea">Archimedea</option>
            </Select>
          </div>
          <p className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-sm leading-6 text-cyan-50">{preset.note}</p>
        </div>
        <div className="grid gap-3 lg:grid-cols-4">
          {groups.map(([group, label]) => (
            <article key={group} className="rounded-md border border-border bg-background/50 p-3">
              <h3 className="font-bold text-yellow-200">{label}</h3>
              <div className="mt-3 grid gap-2">
                {recommendations[group].map(item => {
                  const tags = displayTags(item, tierMeta)
                    .slice(0, 2)
                    .map(tag => labelForTag(tag, tierMeta, variantLabels))
                    .join(" | ");

                  return (
                    <Button
                      key={item.name}
                      type="button"
                      variant="outline"
                      className="h-auto justify-start gap-3 p-2 text-left"
                      onClick={() => onSelect(item)}
                    >
                      <ItemImage item={item} />
                      <span className="grid min-w-0 gap-1">
                        <strong className="leading-tight">{item.name}</strong>
                        <small className="text-cyan-200">Tier {item.tier}</small>
                        <span className="truncate text-xs text-muted-foreground">{tags || item.note || "Uso geral"}</span>
                      </span>
                    </Button>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </Card>
    </section>
  );
}

function recommendationsFor(group: string, preset: MissionPreset, itemIndex: Map<string, ItemRecord>, meta: TierMetaData) {
  const preferred = (preset.groups[group as keyof MissionPreset["groups"]] || [])
    .map(name => itemIndex.get(name))
    .filter((item): item is ItemRecord => Boolean(item));
  const generated = [...itemIndex.values()]
    .filter(record => {
      if (group === "warframe") return record.type === "warframe";
      return record.type === "weapon" && record.category === group;
    })
    .filter(record => !preferred.some(item => item.name === record.name))
    .sort((a, b) => scoreForMission(b, preset, meta) - scoreForMission(a, preset, meta));

  return [...preferred, ...generated].slice(0, 5);
}

function scoreForMission(record: ItemRecord, preset: MissionPreset, meta: TierMetaData) {
  const tags = itemTags(record, meta);
  const tagScore = preset.focus.reduce((score, tag) => score + (tags.includes(tag) ? 10 : 0), 0);
  const note = `${record.name} ${record.note}`.toLowerCase();
  const textScore = preset.focus.reduce((score, tag) => score + (note.includes(tag) ? 3 : 0), 0);
  return tierScoreValue(record.tier) + tagScore + textScore;
}

function tierScoreValue(tier: string) {
  const values: Record<string, number> = { S: 60, A: 46, B: 32, C: 18, D: 6, U: 12 };
  return values[tier] ?? 0;
}
