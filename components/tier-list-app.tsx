"use client";

import Image from "next/image";
import { LayoutGrid, ListChecks, Search, Shield, Swords } from "lucide-react";
import { useMemo, useState } from "react";
import { CopyLinkButton } from "@/components/copy-link-button";
import { ItemDetailDialog } from "@/components/item-detail-dialog";
import { LoadoutsPanel } from "@/components/loadouts-panel";
import { MissionRecommender } from "@/components/mission-recommender";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  buildItemIndex,
  defaultVariantLabels,
  displayTags,
  labelForTag
} from "@/lib/tier-utils";
import type {
  ItemRecord,
  TierKey,
  TierListData,
  TierMetaData,
  ViewMode,
  WeaponCategory
} from "@/lib/types";
import { cn } from "@/lib/utils";

interface TierListAppProps {
  tierList: TierListData;
  tierMeta: TierMetaData;
}

type Panel = "warframes" | "weapons";
type WeaponFilter = "primary" | "secondary" | "melee" | "all";

const tierOptions: Array<TierKey | "all"> = ["all", "S", "A", "B", "C", "D", "U"];

export function TierListApp({ tierList, tierMeta }: TierListAppProps) {
  const [panel, setPanel] = useState<Panel>("warframes");
  const [tierFilter, setTierFilter] = useState<TierKey | "all">("all");
  const [objectiveFilter, setObjectiveFilter] = useState("all");
  const [variantFilter, setVariantFilter] = useState("all");
  const [weaponFilter, setWeaponFilter] = useState<WeaponFilter>("primary");
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("compact");
  const [selectedItem, setSelectedItem] = useState<ItemRecord | null>(null);

  const variantLabels = useMemo(
    () => ({ ...defaultVariantLabels, ...(tierList.variantLabels || {}) }),
    [tierList.variantLabels]
  );
  const itemIndex = useMemo(() => buildItemIndex(tierList), [tierList]);

  function openPanel(nextPanel: Panel) {
    setPanel(nextPanel);
    setQuery("");
    if (nextPanel === "weapons") setWeaponFilter("primary");
  }

  const filterState = { tierFilter, objectiveFilter, variantFilter, query };

  return (
    <>
      <section className="surface-panel md:sticky md:top-20 z-20 rounded-lg p-3 md:p-4">
        <div className="grid gap-4 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start min-[1600px]:grid-cols-[auto_minmax(0,1fr)_auto]">
          <div className="flex min-w-0 flex-wrap items-center gap-3">
            <a href="#conteudo" aria-label="Voltar ao conteúdo principal" className="shrink-0">
              <Image
                src="/assets/site-logo.svg"
                alt=""
                width={46}
                height={46}
                className="h-11 w-11 drop-shadow-[0_0_14px_rgba(247,198,91,.38)]"
              />
            </a>
            <div className="flex shrink-0 rounded-lg border border-border/80 bg-background/55 p-1">
              <Button type="button" size="sm" className="min-w-[108px]" variant={panel === "warframes" ? "secondary" : "ghost"} onClick={() => openPanel("warframes")}>
                <Shield className="h-4 w-4" aria-hidden="true" />
                Warframes
              </Button>
              <Button type="button" size="sm" className="min-w-[88px]" variant={panel === "weapons" ? "secondary" : "ghost"} onClick={() => openPanel("weapons")}>
                <Swords className="h-4 w-4" aria-hidden="true" />
                Armas
              </Button>
            </div>
          </div>

          <div className="grid min-w-0 gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(240px,1fr)_150px_170px_160px] min-[1600px]:grid-cols-[minmax(300px,1fr)_170px_188px_180px]">
            <label className="relative min-w-0 sm:col-span-2 lg:col-span-1">
              <span className="sr-only">Buscar</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
              <Input
                className="pl-9"
                type="search"
                placeholder="Buscar nome ou tag..."
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
            </label>
            <Select aria-label="Filtrar por tier" value={tierFilter} onChange={event => setTierFilter(event.target.value as TierKey | "all")}>
              {tierOptions.map(tier => (
                <option key={tier} value={tier}>
                  {tier === "all" ? "Todos os tiers" : tier === "U" ? "Novos" : `Tier ${tier}`}
                </option>
              ))}
            </Select>
            <Select aria-label="Filtrar por função" value={objectiveFilter} onChange={event => setObjectiveFilter(event.target.value)}>
              <option value="all">Todas funções</option>
              <option value="steel">Steel Path</option>
              <option value="farm">Farm</option>
              <option value="boss">Boss</option>
              <option value="fast">Rápidas</option>
              <option value="endurance">Longas</option>
              <option value="beginner">Iniciante</option>
            </Select>
            <Select aria-label="Filtrar por variante" className="sm:col-span-2 lg:col-span-1" value={variantFilter} onChange={event => setVariantFilter(event.target.value)}>
              <option value="all">Todas variantes</option>
              <option value="normal">Normal</option>
              <option value="prime">Prime</option>
              <option value="incarnon">Incarnon</option>
              <option value="kuva">Kuva</option>
              <option value="tenet">Tenet</option>
              <option value="special">Especiais</option>
            </Select>
          </div>

          <div className="grid w-full grid-cols-2 rounded-lg border border-border/80 bg-background/55 p-1 sm:w-fit sm:min-w-[270px] sm:shrink-0 lg:col-start-2 min-[1600px]:col-start-auto min-[1600px]:justify-self-end">
            <Button type="button" size="sm" className="min-w-0 justify-center px-3 sm:min-w-[128px]" variant={viewMode === "compact" ? "secondary" : "ghost"} onClick={() => setViewMode("compact")}>
              <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="leading-none">Compacto</span>
            </Button>
            <Button type="button" size="sm" className="min-w-0 justify-center px-3 sm:min-w-[128px]" variant={viewMode === "detailed" ? "secondary" : "ghost"} onClick={() => setViewMode("detailed")}>
              <ListChecks className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="leading-none">Detalhado</span>
            </Button>
          </div>
        </div>

        {panel === "weapons" ? (
          <div className="mt-4 flex flex-wrap gap-2 border-t border-border/70 pt-4">
            {(["primary", "secondary", "melee", "all"] as WeaponFilter[]).map(filter => (
              <Button
                key={filter}
                type="button"
                size="sm"
                variant={weaponFilter === filter ? "secondary" : "outline"}
                onClick={() => setWeaponFilter(filter)}
              >
                {filter === "primary" ? "Primária" : filter === "secondary" ? "Secundária" : filter === "melee" ? "Melee" : "Todas"}
              </Button>
            ))}
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase">
            <Badge variant="meta">Meta Atual</Badge>
            <Badge variant="outline">Atualizado: {tierList.updatedAt}</Badge>
            <Badge variant="cyan">{tierList.currentPatch}</Badge>
          </div>
          <CopyLinkButton label="Copiar link da tier list" url="https://warframefool.vercel.app/tier-list" />
        </div>
      </section>

      <section className="mt-5 grid gap-3 md:grid-cols-3">
        <InfoCard title="Critério">
          Meta geral no Update 42.0.10, Steel Path, Deep/Temporal Archimedea, missões longas, conforto de uso e investimento necessário.
        </InfoCard>
        <InfoCard title="Como ler">
          S é prioridade universal. Quando existe Prime, ele costuma ficar acima da versão normal por ser melhor destino de Forma/reactor; B/C/D ainda podem funcionar bem.
        </InfoCard>
        <InfoCard title="Importante">
          Riven, Incarnon, Arcanes, Helminth e hotfixes podem mudar muito a posição real na sua conta.
        </InfoCard>
      </section>

      <section className="mt-6 grid gap-3">
        {panel === "warframes" ? (
          <TierRows
            rows={tierList.warframes}
            context="warframe"
            filterState={filterState}
            itemIndex={itemIndex}
            tierMeta={tierMeta}
            variantLabels={variantLabels}
            viewMode={viewMode}
            onSelect={setSelectedItem}
          />
        ) : (
          tierList.weapons
            .filter(category => weaponFilter === "all" || category.id === weaponFilter)
            .map(category => (
              <WeaponCategorySection
                key={category.id}
                category={category}
                filterState={filterState}
                itemIndex={itemIndex}
                tierMeta={tierMeta}
                variantLabels={variantLabels}
                viewMode={viewMode}
                onSelect={setSelectedItem}
              />
            ))
        )}
      </section>

      <MissionRecommender itemIndex={itemIndex} tierMeta={tierMeta} variantLabels={variantLabels} onSelect={setSelectedItem} />
      <LoadoutsPanel tierList={tierList} />

      <ItemDetailDialog
        item={selectedItem}
        tierMeta={tierMeta}
        variantLabels={variantLabels}
        open={Boolean(selectedItem)}
        onOpenChange={open => {
          if (!open) setSelectedItem(null);
        }}
      />
    </>
  );
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="group overflow-hidden p-4">
      <span className="mb-3 block h-1 w-10 bg-gradient-to-r from-cyan-300 to-yellow-300" />
      <b className="text-cyan-100">{title}</b>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{children}</p>
    </Card>
  );
}

function WeaponCategorySection(props: {
  category: WeaponCategory;
  filterState: FilterState;
  itemIndex: Map<string, ItemRecord>;
  tierMeta: TierMetaData;
  variantLabels: Record<string, string>;
  viewMode: ViewMode;
  onSelect: (item: ItemRecord) => void;
}) {
  const { category, ...tierRowProps } = props;

  return (
    <article className="grid gap-3 border-t border-border/70 pt-5 first:border-t-0 first:pt-0">
      <h2 className="text-xl font-black text-foreground">
        {category.title}
        <span className="mt-1 block text-sm font-normal text-muted-foreground">{category.description}</span>
      </h2>
      <TierRows rows={category.rows} context="weapon" category={category} {...tierRowProps} />
    </article>
  );
}

interface FilterState {
  tierFilter: TierKey | "all";
  objectiveFilter: string;
  variantFilter: string;
  query: string;
}

function TierRows(props: {
  rows: TierListData["warframes"];
  context: "warframe" | "weapon";
  category?: WeaponCategory;
  filterState: FilterState;
  itemIndex: Map<string, ItemRecord>;
  tierMeta: TierMetaData;
  variantLabels: Record<string, string>;
  viewMode: ViewMode;
  onSelect: (item: ItemRecord) => void;
}) {
  return (
    <>
      {props.rows.map(row => {
        const visibleItems = row.items
          .map(item => props.itemIndex.get(item.name))
          .filter((item): item is ItemRecord => Boolean(item))
          .filter(item => itemMatches(item, row.tier, props.filterState, props.tierMeta));

        if (!visibleItems.length) return null;

        return (
          <article
            key={`${props.category?.id || props.context}-${row.tier}`}
            className="tier-row-shell grid min-h-[78px] grid-cols-[62px_1fr] overflow-hidden rounded-lg border border-border/70 bg-card/80 sm:grid-cols-[74px_1fr] md:grid-cols-[92px_1fr]"
          >
            <div className={cn("grid place-items-center border-r border-white/10 p-2 text-center font-black", `tier-label-${row.tier}`)}>
              <div>
                <strong className={cn("block leading-none", row.tier === "U" ? "text-lg md:text-xl" : "text-3xl md:text-4xl")}>
                  {row.tier === "U" ? "Novo" : row.tier}
                </strong>
                <span className="mt-1 block text-[9px] uppercase leading-tight text-yellow-100/85">{tierSubtitle(row.tier, props.category?.id || props.context)}</span>
              </div>
            </div>
            <div className="flex flex-wrap content-start gap-2 p-2.5 md:p-3">
              {visibleItems.map(item => (
                <ItemCard
                  key={item.name}
                  item={item}
                  tierMeta={props.tierMeta}
                  variantLabels={props.variantLabels}
                  viewMode={props.viewMode}
                  onSelect={() => props.onSelect(item)}
                />
              ))}
            </div>
          </article>
        );
      })}
    </>
  );
}

function ItemCard(props: {
  item: ItemRecord;
  tierMeta: TierMetaData;
  variantLabels: Record<string, string>;
  viewMode: ViewMode;
  onSelect: () => void;
}) {
  const tags = displayTags(props.item, props.tierMeta).slice(0, props.viewMode === "detailed" ? 4 : 2);
  const isMeta = props.item.tier === "S";

  return (
    <button
      type="button"
      onClick={props.onSelect}
      className={cn(
        "tier-item-card group grid min-w-[156px] max-w-[226px] max-[520px]:min-w-full max-[520px]:max-w-full gap-2 overflow-hidden rounded-lg border border-border/70 bg-gradient-to-b from-secondary/90 to-card/85 p-3 text-left transition duration-200 hover:-translate-y-0.5 hover:border-yellow-300/60 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        isMeta && "border-yellow-300/35 shadow-[0_0_26px_rgba(247,198,91,.10)]",
        props.viewMode === "detailed" && "min-w-[250px] max-w-[330px] max-[520px]:min-w-full max-[520px]:max-w-full grid-cols-[48px_1fr] gap-x-3",
        props.viewMode === "compact" && "min-h-[70px] content-between"
      )}
    >
      {props.viewMode === "detailed" ? <ItemImage item={props.item} /> : null}
      <span className="grid min-w-0 gap-2">
        <span className="flex min-w-0 items-start justify-between gap-2">
          <strong className="min-w-0 text-sm leading-tight text-foreground group-hover:text-yellow-100">{props.item.name}</strong>
          <Badge variant={tierBadgeVariant(props.item.tier)} className="shrink-0">{props.item.tier}</Badge>
        </span>
        {isMeta ? <Badge variant="meta" className="w-fit">Meta Atual</Badge> : null}
        {props.viewMode === "detailed" ? (
          <>
            <span className="text-[10px] font-bold uppercase text-yellow-100/90">{props.item.variant || "Normal"}</span>
            <span className="line-clamp-2 text-xs leading-5 text-muted-foreground">{props.item.note || "Sem nota definida."}</span>
          </>
        ) : null}
      </span>
      <span className={cn("flex flex-wrap gap-1 pt-1", props.viewMode === "detailed" && "col-span-full")}>
        {tags.map(tag => (
          <Badge key={tag} variant={tag === "prime" || tag === "incarnon" ? "cyan" : tag === "steel" ? "steel" : tag === "farm" ? "farm" : "gold"}>
            {labelForTag(tag, props.tierMeta, props.variantLabels)}
          </Badge>
        ))}
      </span>
    </button>
  );
}
export function ItemImage({ item }: { item: Pick<ItemRecord, "name" | "baseName" | "image" | "variantTags"> }) {
  return (
    <span className="relative h-[46px] w-[46px] overflow-hidden rounded-md border border-yellow-300/30 bg-yellow-300/10 shadow-[0_0_18px_rgba(247,198,91,.12)]">
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image} alt={`Imagem de ${item.name}`} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <span className="grid h-full w-full place-items-center text-xs font-black text-yellow-200">{initialsFor(item.baseName || item.name)}</span>
      )}
    </span>
  );
}

function itemMatches(item: ItemRecord, tier: TierKey, filters: FilterState, meta: TierMetaData) {
  const tags = displayTags(item, meta);
  const variantTags = item.variantTags || ["normal"];
  const haystack = `${item.name} ${item.baseName || ""} ${item.variant || ""} ${tags.join(" ")} ${item.note || ""}`.toLowerCase();

  const tierMatch = filters.tierFilter === "all" || tier === filters.tierFilter;
  const objectiveMatch = filters.objectiveFilter === "all" || tags.includes(filters.objectiveFilter);
  const variantMatch =
    filters.variantFilter === "all" ||
    variantTags.includes(filters.variantFilter) ||
    (filters.variantFilter === "special" && variantTags.some(tag => !["normal", "prime", "incarnon", "kuva", "tenet"].includes(tag)));
  const queryMatch = !filters.query.trim() || haystack.includes(filters.query.trim().toLowerCase());

  return tierMatch && objectiveMatch && variantMatch && queryMatch;
}

function tierSubtitle(tier: TierKey, context: string) {
  const subtitles: Record<string, Partial<Record<TierKey, string>>> = {
    warframe: { S: "Top meta", A: "Muito forte", B: "Bom", C: "Nicho", D: "Baixa prioridade", U: "Sem nota" },
    primary: { S: "Prioridade", A: "Excelente", B: "Forte", C: "Situacional", D: "Trocar cedo", U: "Sem nota" },
    secondary: { S: "Prioridade", A: "Excelente", B: "Forte", C: "Situacional", D: "Trocar cedo", U: "Sem nota" },
    melee: { S: "Top melee", A: "Excelente", B: "Forte", C: "Situacional", D: "Trocar cedo", U: "Sem nota" }
  };

  return subtitles[context]?.[tier] || subtitles.primary[tier] || "";
}

function tierBadgeVariant(tier: TierKey) {
  if (tier === "S") return "tierS";
  if (tier === "A") return "tierA";
  if (tier === "B") return "tierB";
  if (tier === "C") return "tierC";
  if (tier === "D") return "tierD";
  return "outline";
}

function initialsFor(name = "") {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0])
      .join("")
      .toUpperCase() || "?"
  );
}





