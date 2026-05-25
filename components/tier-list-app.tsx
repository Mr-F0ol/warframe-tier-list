"use client";

import Link from "next/link";
import { LayoutGrid, ListChecks, Search, Shield, SlidersHorizontal, Swords } from "lucide-react";
import { useMemo, useState } from "react";
import { CopyLinkButton } from "@/components/copy-link-button";
import { ItemDetailDialog } from "@/components/item-detail-dialog";
import { LoadoutsPanel } from "@/components/loadouts-panel";
import { MissionRecommender } from "@/components/mission-recommender";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { buildGuides } from "@/data/builds";
import { siteMeta } from "@/data/siteMeta";
import {
  buildItemIndex,
  defaultVariantLabels,
  displayTags,
  itemDetail,
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
  const [investmentFilter, setInvestmentFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [weaponFilter, setWeaponFilter] = useState<WeaponFilter>("primary");
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("compact");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
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

  const filterState = { tierFilter, objectiveFilter, variantFilter, investmentFilter, difficultyFilter, query };
  const activeFilterCount = [tierFilter, objectiveFilter, variantFilter, investmentFilter, difficultyFilter].filter(value => value !== "all").length;

  return (
    <>
      <section className="surface-panel md:sticky md:top-20 z-20 rounded-lg p-3">
        <div className="grid gap-3 xl:grid-cols-[auto_minmax(260px,1fr)_auto] xl:items-center">
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <div className="flex shrink-0 rounded-lg border border-border/70 bg-background/35 p-1">
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

          <label className="relative min-w-0">
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

          <div className="flex flex-wrap items-center gap-2 xl:justify-end">
            <Button type="button" size="sm" variant={showAdvancedFilters ? "secondary" : "outline"} onClick={() => setShowAdvancedFilters(value => !value)}>
              <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
              Filtros{activeFilterCount ? ` (${activeFilterCount})` : ""}
            </Button>
            <div className="grid grid-cols-2 rounded-lg border border-border/70 bg-background/35 p-1">
              <Button type="button" size="sm" className="min-w-0 justify-center px-3" variant={viewMode === "compact" ? "secondary" : "ghost"} onClick={() => setViewMode("compact")}>
                <LayoutGrid className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="leading-none">Compacto</span>
              </Button>
              <Button type="button" size="sm" className="min-w-0 justify-center px-3" variant={viewMode === "detailed" ? "secondary" : "ghost"} onClick={() => setViewMode("detailed")}>
                <ListChecks className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="leading-none">Detalhado</span>
              </Button>
            </div>
          </div>
        </div>

        {showAdvancedFilters ? (
          <div className="mt-3 grid min-w-0 gap-2 border-t border-border/60 pt-3 sm:grid-cols-2 lg:grid-cols-5">
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
            <Select aria-label="Filtrar por variante" value={variantFilter} onChange={event => setVariantFilter(event.target.value)}>
              <option value="all">Todas variantes</option>
              <option value="normal">Normal</option>
              <option value="prime">Prime</option>
              <option value="incarnon">Incarnon</option>
              <option value="kuva">Kuva</option>
              <option value="tenet">Tenet</option>
              <option value="special">Especiais</option>
            </Select>
            <Select aria-label="Filtrar por investimento" value={investmentFilter} onChange={event => setInvestmentFilter(event.target.value)}>
              <option value="all">Todo investimento</option>
              <option value="alto">Alto</option>
              <option value="medio">Médio</option>
              <option value="baixo">Baixo</option>
            </Select>
            <Select aria-label="Filtrar por dificuldade" value={difficultyFilter} onChange={event => setDifficultyFilter(event.target.value)}>
              <option value="all">Toda dificuldade</option>
              <option value="alta">Alta</option>
              <option value="media">Média</option>
              <option value="baixa">Baixa</option>
            </Select>
          </div>
        ) : null}

        {panel === "weapons" ? (
          <div className="mt-3 flex flex-wrap gap-2 border-t border-border/60 pt-3">
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

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Meta atual · Atualizado em {siteMeta.lastUpdated} · {siteMeta.updatePatchLabel}
          </p>
          <CopyLinkButton label="Copiar link da tier list" url="https://warframefool.vercel.app/tier-list" />
        </div>
      </section>

      <section className="mt-4 rounded-lg border border-border/60 bg-card/45 px-4 py-3 text-sm leading-6 text-muted-foreground">
        <b className="text-foreground">Como ler:</b> S indica prioridade alta. B, C e D ainda podem funcionar conforme conta, Riven, Arcanes, Incarnon, Helminth e hotfixes.
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
  investmentFilter: string;
  difficultyFilter: string;
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
          .filter(item => itemMatches(item, row.tier, props.filterState, props.tierMeta, props.variantLabels));

        if (!visibleItems.length) return null;

        return (
          <article
            key={`${props.category?.id || props.context}-${row.tier}`}
            className="tier-row-shell grid min-h-[64px] grid-cols-[48px_1fr] overflow-hidden rounded-lg border border-border/60 bg-card/65 sm:grid-cols-[56px_1fr] md:grid-cols-[64px_1fr]"
          >
            <div className={cn("grid place-items-center border-r border-white/10 p-2 text-center font-black", `tier-label-${row.tier}`)}>
              <div>
                <strong className={cn("block leading-none", row.tier === "U" ? "text-sm md:text-base" : "text-2xl md:text-3xl")}>
                  {row.tier === "U" ? "Novo" : row.tier}
                </strong>
              </div>
            </div>
            <div className="flex flex-wrap content-start gap-2 p-2 md:p-2.5">
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
  const tags = displayTags(props.item, props.tierMeta).slice(0, props.viewMode === "detailed" ? 2 : 1);
  const detail = itemDetail(props.item, props.tierMeta, props.variantLabels);
  const categoryLabel = props.item.type === "weapon" ? props.item.categoryTitle || "Arma" : "Warframe";
  const investment = investmentLevelForItem(props.item, props.tierMeta, props.variantLabels);
  const bestUse = detail.bestUses.length ? detail.bestUses.slice(0, 3).join(" · ") : "Uso geral";
  const buildHref = buildHrefForItem(props.item);
  const copyUrl = `https://warframefool.vercel.app${buildHref || "/tier-list"}`;

  return (
    <article
      className={cn(
        "tier-item-card group grid min-w-[152px] max-w-[218px] max-[520px]:min-w-full max-[520px]:max-w-full gap-2 overflow-hidden rounded-lg border border-border/60 bg-card/70 p-3 text-left transition duration-200 hover:border-cyan-300/45 hover:bg-secondary/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        props.viewMode === "detailed" && "min-w-[238px] max-w-[316px] max-[520px]:min-w-full max-[520px]:max-w-full grid-cols-[42px_1fr] gap-x-3",
        props.viewMode === "compact" && "min-h-[64px] content-between"
      )}
    >
      {props.viewMode === "detailed" ? <ItemImage item={props.item} /> : null}
      <span className="grid min-w-0 gap-2">
        <span className="flex min-w-0 items-start justify-between gap-2">
          <strong className="min-w-0 text-sm leading-tight text-foreground group-hover:text-yellow-100">{props.item.name}</strong>
          <Badge variant={tierBadgeVariant(props.item.tier)} className="shrink-0">{props.item.tier}</Badge>
        </span>
        {props.viewMode === "detailed" ? (
          <>
            <span className="text-[10px] font-bold uppercase text-muted-foreground">{props.item.variant || "Normal"}</span>
            <span className="line-clamp-2 text-xs leading-5 text-muted-foreground">{props.item.note || "Sem nota definida."}</span>
            <span className="grid gap-1 text-xs leading-5 text-muted-foreground">
              <span><b>Categoria:</b> {categoryLabel}</span>
              <span className="line-clamp-1"><b>Função:</b> {detail.role}</span>
              <span><b>Investimento:</b> {investment}</span>
              <span className="line-clamp-1"><b>Melhor uso:</b> {bestUse}</span>
            </span>
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
      <div className={cn("flex flex-wrap gap-2 pt-1", props.viewMode === "detailed" && "col-span-full")}>
        <Button type="button" size="sm" variant="outline" onClick={props.onSelect}>Detalhes</Button>
        {buildHref ? (
          <Button asChild size="sm" variant="secondary">
            <Link href={buildHref}>Ver build</Link>
          </Button>
        ) : null}
        <CopyLinkButton url={copyUrl} label="Copiar" className="min-h-8" />
      </div>
    </article>
  );
}
export function ItemImage({ item }: { item: Pick<ItemRecord, "name" | "baseName" | "image" | "variantTags"> }) {
  return (
    <span className="relative h-[46px] w-[46px] overflow-hidden rounded-md border border-yellow-300/30 bg-yellow-300/10 shadow-[0_0_18px_rgba(247,198,91,.12)]">
      {item.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={item.image} alt={`${item.name} no Warframe`} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <span className="grid h-full w-full place-items-center text-xs font-black text-yellow-200">{initialsFor(item.baseName || item.name)}</span>
      )}
    </span>
  );
}

function itemMatches(item: ItemRecord, tier: TierKey, filters: FilterState, meta: TierMetaData, variantLabels: Record<string, string>) {
  const tags = displayTags(item, meta);
  const variantTags = item.variantTags || ["normal"];
  const haystack = `${item.name} ${item.baseName || ""} ${item.variant || ""} ${tags.join(" ")} ${item.note || ""}`.toLowerCase();
  const investment = normalizeFilterValue(investmentLevelForItem(item, meta, variantLabels));
  const difficulty = normalizeFilterValue(difficultyLevelForItem(item));

  const tierMatch = filters.tierFilter === "all" || tier === filters.tierFilter;
  const objectiveMatch = filters.objectiveFilter === "all" || tags.includes(filters.objectiveFilter);
  const investmentMatch = filters.investmentFilter === "all" || investment === filters.investmentFilter;
  const difficultyMatch = filters.difficultyFilter === "all" || difficulty === filters.difficultyFilter;
  const variantMatch =
    filters.variantFilter === "all" ||
    variantTags.includes(filters.variantFilter) ||
    (filters.variantFilter === "special" && variantTags.some(tag => !["normal", "prime", "incarnon", "kuva", "tenet"].includes(tag)));
  const queryMatch = !filters.query.trim() || haystack.includes(filters.query.trim().toLowerCase());

  return tierMatch && objectiveMatch && investmentMatch && difficultyMatch && variantMatch && queryMatch;
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

function investmentLevelForItem(item: ItemRecord, meta: TierMetaData, variantLabels: Record<string, string>) {
  const investment = itemDetail(item, meta, variantLabels).investment;
  if (/baixa/i.test(investment)) return "Baixo";
  if (/média|media/i.test(investment)) return "Médio";
  return "Alto";
}

function difficultyLevelForItem(item: ItemRecord) {
  if (item.tier === "S" || item.tier === "A") return "Alta";
  if (item.tier === "B" || item.tier === "U") return "Média";
  return "Baixa";
}

function buildHrefForItem(item: ItemRecord) {
  const normalized = normalizeSlug(item.baseName || item.name);
  const direct = buildGuides.find(build => build.slug === normalized);
  if (direct) return `/builds/${direct.slug}`;

  const byName = buildGuides.find(build => normalizeSlug(build.name) === normalized);
  return byName ? `/builds/${byName.slug}` : undefined;
}

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function normalizeFilterValue(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}





