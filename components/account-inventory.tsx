"use client";

import Link from "next/link";
import { Copy, Download, RotateCcw, Search, Upload } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { accountItemMap, accountItems, type AccountItem, type AccountItemCategory } from "@/data/accountItems";
import {
  createEmptyAccountProgress,
  exportAccountProgress,
  loadAccountProgress,
  parseAccountProgress,
  resetAccountProgress,
  saveAccountProgress,
  updateAccountItemState,
  type AccountItemState,
  type AccountProgress
} from "@/lib/accountStorage";
import { cn } from "@/lib/utils";

type StatusFilter = "all" | "owned" | "wanted" | "building" | "favorite";
type CategoryFilter = "all" | AccountItemCategory;

const categoryLabels: Record<AccountItemCategory, string> = {
  warframe: "Warframes",
  arma: "Armas",
  sistema: "Mods/Sistemas",
  farm: "Farm/recursos"
};

export function AccountInventory() {
  const [progress, setProgress] = useState<AccountProgress>(() => createEmptyAccountProgress());
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [tagFilter, setTagFilter] = useState("all");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [exportText, setExportText] = useState("");
  const [importText, setImportText] = useState("");

  useEffect(() => {
    let mounted = true;
    const result = loadAccountProgress();
    window.requestAnimationFrame(() => {
      if (!mounted) return;
      setProgress(result.progress);
      if (result.error) setError(result.error);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const tags = useMemo(() => Array.from(new Set(accountItems.flatMap(item => item.tags))).sort((a, b) => a.localeCompare(b, "pt-BR")), []);
  const summary = useMemo(() => buildSummary(progress), [progress]);
  const priorities = useMemo(() => buildPriorities(progress), [progress]);

  const filteredItems = useMemo(() => {
    const normalizedQuery = normalize(query);
    return accountItems.filter(item => {
      const state = progress.items[item.id] || {};
      const haystack = normalize(`${item.name} ${item.type} ${item.tags.join(" ")} ${item.description}`);
      const matchesQuery = !normalizedQuery || haystack.includes(normalizedQuery);
      const matchesCategory = categoryFilter === "all" || item.category === categoryFilter;
      const matchesTag = tagFilter === "all" || item.tags.includes(tagFilter);
      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "owned" && state.owned) ||
        (statusFilter === "wanted" && state.wanted) ||
        (statusFilter === "building" && state.building) ||
        (statusFilter === "favorite" && state.favorite);
      return matchesQuery && matchesCategory && matchesTag && matchesStatus;
    });
  }, [categoryFilter, progress, query, statusFilter, tagFilter]);

  function persist(nextProgress: AccountProgress, successMessage = "Progresso salvo neste navegador.") {
    const result = saveAccountProgress(nextProgress);
    setProgress(nextProgress);
    setExportText("");
    setError(result.ok ? "" : result.error || "Não foi possível salvar.");
    setMessage(result.ok ? successMessage : "");
  }

  function updateItem(itemId: string, patch: Partial<AccountItemState>, successMessage?: string) {
    persist(updateAccountItemState(progress, itemId, patch), successMessage);
  }

  async function exportProgress(copy = false) {
    const text = exportAccountProgress(progress);
    setExportText(text);
    setMessage("Progresso exportado. Guarde este JSON para importar em outro navegador.");
    if (copy) {
      try {
        await navigator.clipboard.writeText(text);
        setMessage("Progresso exportado e copiado.");
      } catch {
        setMessage("Progresso exportado. Copie o JSON manualmente se o navegador bloquear a área de transferência.");
      }
    }
  }

  function importProgress() {
    const result = parseAccountProgress(importText);
    if (result.error) {
      setError(result.error);
      setMessage("");
      return;
    }

    const shouldReplace = window.confirm("Importar este progresso vai substituir os dados atuais deste navegador. Continuar?");
    if (!shouldReplace) return;

    persist(result.progress, "Progresso importado com sucesso.");
    setImportText("");
  }

  function clearProgress() {
    const shouldClear = window.confirm("Limpar todos os dados salvos da Minha Conta neste navegador?");
    if (!shouldClear) return;
    const result = resetAccountProgress();
    const empty = createEmptyAccountProgress();
    setProgress(empty);
    setExportText("");
    setImportText("");
    setMessage(result.ok ? "Dados locais limpos." : "");
    setError(result.ok ? "" : result.error || "Não foi possível limpar.");
  }

  return (
    <div className="mt-8 grid gap-8">
      {(message || error) ? (
        <div className={cn("rounded-lg border p-3 text-sm leading-6", error ? "border-yellow-300/35 bg-yellow-300/10 text-yellow-50" : "border-cyan-300/35 bg-cyan-300/10 text-cyan-50")} role="status">
          {error || message}
        </div>
      ) : null}

      <section>
        <div className="mb-3">
          <h2 className="text-2xl font-black text-foreground">Resumo do progresso</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Um retrato rápido do que você marcou neste navegador.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
          <SummaryCard label="Tenho" value={summary.owned} />
          <SummaryCard label="Quero pegar" value={summary.wanted} />
          <SummaryCard label="Buildando" value={summary.building} />
          <SummaryCard label="Favoritos" value={summary.favorite} />
          <SummaryCard label="Sistemas liberados" value={summary.systems} />
        </div>
        <Card className="mt-3 p-4">
          <p className="text-sm leading-6 text-muted-foreground">{summary.message}</p>
        </Card>
      </section>

      <section>
        <div className="mb-3 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-foreground">Próximas prioridades</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">Sugestões simples baseadas no que você marcou como obtido, desejado ou em build.</p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/planejador">Abrir Planejador</Link>
          </Button>
        </div>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {priorities.map(priority => (
            <Card key={priority.title} className="p-4">
              <Badge variant={priority.level === "alto" ? "tierS" : priority.level === "medio" ? "cyan" : "outline"}>
                Prioridade {priority.level}
              </Badge>
              <h3 className="mt-3 text-lg font-black text-yellow-100">{priority.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{priority.reason}</p>
              <p className="mt-2 text-sm leading-6 text-cyan-50">{priority.action}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {priority.links.map(link => (
                  <Button key={link.href} asChild size="sm" variant="secondary">
                    <Link href={link.href}>{link.label}</Link>
                  </Button>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="surface-panel rounded-lg p-4">
          <div className="grid gap-3 lg:grid-cols-[1fr_auto_auto_auto] lg:items-end">
            <label className="grid gap-2">
              <span className="text-sm font-bold text-cyan-100">Buscar item</span>
              <span className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                <Input className="pl-9" type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Buscar Warframe, arma, mod ou recurso..." />
              </span>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-cyan-100">Categoria</span>
              <Select value={categoryFilter} onChange={event => setCategoryFilter(event.target.value as CategoryFilter)} aria-label="Filtrar por categoria">
                <option value="all">Todas</option>
                <option value="warframe">Warframes</option>
                <option value="arma">Armas</option>
                <option value="sistema">Mods/Sistemas</option>
                <option value="farm">Farm/recursos</option>
              </Select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-cyan-100">Status</span>
              <Select value={statusFilter} onChange={event => setStatusFilter(event.target.value as StatusFilter)} aria-label="Filtrar por status">
                <option value="all">Todos</option>
                <option value="owned">Tenho</option>
                <option value="wanted">Quero pegar</option>
                <option value="building">Buildando</option>
                <option value="favorite">Favoritos</option>
              </Select>
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-bold text-cyan-100">Tag</span>
              <Select value={tagFilter} onChange={event => setTagFilter(event.target.value)} aria-label="Filtrar por tag">
                <option value="all">Todas</option>
                {tags.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </Select>
            </label>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {filteredItems.map(item => (
            <InventoryItemCard key={item.id} item={item} state={progress.items[item.id] || {}} onUpdate={updateItem} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-3">
          <h2 className="text-2xl font-black text-foreground">Exportar, importar ou limpar</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Use JSON para levar seu progresso para outro navegador. Não cole dados sensíveis.</p>
        </div>
        <div className="grid gap-3 lg:grid-cols-2">
          <Card className="p-4">
            <h3 className="text-lg font-black text-yellow-100">Exportar progresso</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Gere um JSON com os itens marcados neste navegador.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button type="button" size="sm" onClick={() => void exportProgress(false)}>
                <Download className="h-4 w-4" aria-hidden="true" />
                Exportar progresso
              </Button>
              <Button type="button" size="sm" variant="secondary" onClick={() => void exportProgress(true)}>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copiar JSON
              </Button>
            </div>
            <label className="mt-4 grid gap-2">
              <span className="text-sm font-bold text-cyan-100">JSON exportado</span>
              <textarea
                value={exportText}
                readOnly
                rows={8}
                className="w-full rounded-md border border-border/70 bg-background/70 p-3 text-xs text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="O JSON aparece aqui depois de exportar."
              />
            </label>
          </Card>

          <Card className="p-4">
            <h3 className="text-lg font-black text-yellow-100">Importar ou limpar</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Cole um JSON exportado pelo Warframe Fool. A importação substitui os dados atuais.</p>
            <label className="mt-4 grid gap-2">
              <span className="text-sm font-bold text-cyan-100">JSON para importar</span>
              <textarea
                value={importText}
                onChange={event => setImportText(event.target.value)}
                rows={8}
                className="w-full rounded-md border border-border/70 bg-background/70 p-3 text-xs text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                placeholder="Cole aqui o JSON exportado."
              />
            </label>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button type="button" size="sm" variant="secondary" onClick={importProgress} disabled={!importText.trim()}>
                <Upload className="h-4 w-4" aria-hidden="true" />
                Importar
              </Button>
              <Button type="button" size="sm" variant="destructive" onClick={clearProgress}>
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
                Limpar dados
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}

function InventoryItemCard({
  item,
  state,
  onUpdate
}: {
  item: AccountItem;
  state: AccountItemState;
  onUpdate: (itemId: string, patch: Partial<AccountItemState>, successMessage?: string) => void;
}) {
  return (
    <Card className="flex h-full flex-col p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[11px] font-bold uppercase text-cyan-200/75">{categoryLabels[item.category]} · {item.type}</span>
          <h3 className="mt-1 text-lg font-black text-yellow-100">{item.name}</h3>
        </div>
        {state.favorite ? <Badge variant="meta">Favorito</Badge> : null}
      </div>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
      <p className="mt-2 text-sm leading-6 text-cyan-50/85">{item.priorityHint}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {item.tags.slice(0, 4).map(tag => (
          <Badge key={tag} variant="outline">{tag}</Badge>
        ))}
      </div>

      <div className="mt-4 grid gap-2">
        <ToggleButton active={Boolean(state.owned)} label="Tenho" onClick={() => onUpdate(item.id, { owned: !state.owned })} />
        <ToggleButton active={Boolean(state.wanted)} label="Quero pegar" onClick={() => onUpdate(item.id, { wanted: !state.wanted })} />
        <ToggleButton active={Boolean(state.building)} label="Buildando" onClick={() => onUpdate(item.id, { building: !state.building })} />
        <ToggleButton active={Boolean(state.favorite)} label="Favorito" onClick={() => onUpdate(item.id, { favorite: !state.favorite })} />
      </div>

      <div className="mt-4 grid gap-3">
        <label className="grid gap-1">
          <span className="text-xs font-bold text-cyan-100">Formas investidas</span>
          <Input
            type="number"
            min={0}
            max={99}
            value={state.formaInvested || 0}
            onChange={event => onUpdate(item.id, { formaInvested: Number(event.target.value) || 0 }, "Formas atualizadas.")}
            aria-label={`Formas investidas em ${item.name}`}
          />
        </label>
        <label className="flex items-center gap-2 rounded-md border border-border/70 bg-background/45 px-3 py-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={Boolean(state.catalystInstalled)}
            onChange={() => onUpdate(item.id, { catalystInstalled: !state.catalystInstalled })}
            className="h-4 w-4 accent-cyan-300"
          />
          Catalisador/Reator instalado
        </label>
        <label className="grid gap-1">
          <span className="text-xs font-bold text-cyan-100">Nota local</span>
          <textarea
            value={state.notes || ""}
            onChange={event => onUpdate(item.id, { notes: event.target.value }, "Nota salva.")}
            rows={3}
            maxLength={240}
            className="w-full rounded-md border border-border/70 bg-background/70 p-2 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            placeholder="Ex.: falta Arcane, testar elemento, farmar blueprint..."
            aria-label={`Nota local para ${item.name}`}
          />
        </label>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {item.href ? (
          <Button asChild size="sm" variant="secondary">
            <Link href={item.href}>Abrir guia</Link>
          </Button>
        ) : null}
        {item.relatedFarms.slice(0, 1).map(href => (
          <Button key={href} asChild size="sm" variant="outline">
            <Link href={href}>Farm relacionado</Link>
          </Button>
        ))}
      </div>
    </Card>
  );
}

function ToggleButton({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <Button type="button" size="sm" variant={active ? "secondary" : "outline"} onClick={onClick} className="justify-start">
      {label}
    </Button>
  );
}

function SummaryCard({ label, value }: { label: string; value: number }) {
  return (
    <Card className="p-4">
      <span className="text-xs font-bold uppercase text-muted-foreground">{label}</span>
      <strong className="mt-2 block text-3xl font-black text-yellow-100">{value}</strong>
    </Card>
  );
}

function buildSummary(progress: AccountProgress) {
  const states = Object.values(progress.items);
  const owned = states.filter(state => state.owned).length;
  const wanted = states.filter(state => state.wanted).length;
  const building = states.filter(state => state.building).length;
  const favorite = states.filter(state => state.favorite).length;
  const systemIds = [
    "mods-galvanized",
    "steel-path-liberado",
    "arbitrations-liberadas",
    "zariman-liberada",
    "duviri-liberado",
    "operador-amp-decente",
    "forma-suficiente"
  ];
  const systems = systemIds.filter(id => progress.items[id]?.owned).length;

  let message = "Marque alguns itens para receber prioridades mais úteis.";
  if (owned || wanted || building) {
    const metaWeapons = ["felarx", "laetum", "torid-incarnon", "dual-toxocyst-incarnon", "ceramic-dagger-incarnon", "praedos"].filter(id => progress.items[id]?.owned).length;
    const safeWarframes = ["dante", "revenant-prime", "wisp-prime", "rhino", "nezha"].filter(id => progress.items[id]?.owned).length;
    message = `Você marcou ${metaWeapons} armas fortes, ${safeWarframes} Warframes seguros e ${systems} sistemas importantes. O próximo passo é focar no gargalo mais claro antes de espalhar Forma.`;
  }

  return { owned, wanted, building, favorite, systems, message };
}

function buildPriorities(progress: AccountProgress) {
  const priorities: Array<{
    title: string;
    reason: string;
    action: string;
    level: "alto" | "medio" | "baixo";
    links: Array<{ label: string; href: string }>;
  }> = [];

  const has = (id: string, key: keyof AccountItemState = "owned") => Boolean(progress.items[id]?.[key]);
  const wantedOrBuilding = (id: string) => has(id, "wanted") || has(id, "building");

  if (!has("steel-path-liberado")) {
    priorities.push({
      title: "Preparar acesso e base para Steel Path",
      reason: "Você ainda não marcou Steel Path como liberado. Antes de builds caras, vale fechar sobrevivência, dano e mods principais.",
      action: "Siga o roadmap e confira o checklist de Steel Path antes de gastar muitas Formas.",
      level: "alto",
      links: [
        { label: "Progressão", href: "/progressao" },
        { label: "Steel Path", href: "/steel-path" }
      ]
    });
  }

  if (has("steel-path-liberado") && !has("mods-galvanized")) {
    priorities.push({
      title: "Buscar Mods Galvanized",
      reason: "Você marcou Steel Path, mas ainda não marcou Mods Galvanized. Muitas builds de armas dependem desse salto de consistência.",
      action: "Priorize Endo, mods de arma e builds principais antes de otimizações de luxo.",
      level: "alto",
      links: [
        { label: "Steel Path", href: "/steel-path" },
        { label: "Farm de Endo", href: "/farm-endo" },
        { label: "Builds", href: "/builds" }
      ]
    });
  }

  if (["felarx", "laetum", "torid-incarnon"].some(wantedOrBuilding)) {
    priorities.push({
      title: "Fechar recursos para armas meta",
      reason: "Felarx, Laetum e Torid Incarnon pedem base de créditos, Endo, Forma e mods antes de renderem bem.",
      action: "Finalize um setup principal antes de investir em muitas armas ao mesmo tempo.",
      level: "alto",
      links: [
        { label: "Farm de Créditos", href: "/farm-creditos" },
        { label: "Farm de Endo", href: "/farm-endo" },
        { label: "Builds", href: "/builds" }
      ]
    });
  }

  const buildingCount = Object.values(progress.items).filter(state => state.building).length;
  if (buildingCount >= 4) {
    priorities.push({
      title: "Reduzir builds simultâneas",
      reason: "Muitos itens buildando ao mesmo tempo costumam consumir Forma, Endo e Catalisador sem fechar uma base confiável.",
      action: "Escolha um Warframe seguro e uma arma principal para terminar primeiro.",
      level: "medio",
      links: [
        { label: "Planejador", href: "/planejador" },
        { label: "Loadouts", href: "/loadouts" }
      ]
    });
  }

  const safeWarframeIds = ["dante", "revenant-prime", "wisp-prime", "rhino", "nezha"];
  if (!safeWarframeIds.some(id => has(id))) {
    priorities.push({
      title: "Escolher um Warframe seguro",
      reason: "Você ainda não marcou uma opção segura. Sobrevivência estável facilita Steel Path, farm e bosses.",
      action: "Considere Revenant Prime, Wisp Prime, Dante, Rhino ou Nezha conforme acesso e preferência.",
      level: "medio",
      links: [
        { label: "Melhores Warframes", href: "/melhores-warframes" },
        { label: "Tier List", href: "/tier-list" }
      ]
    });
  }

  const strongWeaponIds = ["laetum", "felarx", "torid-incarnon"];
  if (!strongWeaponIds.some(id => has(id))) {
    priorities.push({
      title: "Definir uma arma forte principal",
      reason: "Você ainda não marcou Laetum, Felarx ou Torid Incarnon como obtida. Uma arma confiável muda muito a progressão.",
      action: "Escolha uma função: Laetum para secundária, Felarx para alvo pesado ou Torid Incarnon para clear.",
      level: "medio",
      links: [
        { label: "Build Felarx", href: "/builds/felarx" },
        { label: "Build Laetum", href: "/builds/laetum" },
        { label: "Build Torid", href: "/builds/torid-incarnon" }
      ]
    });
  }

  if (!priorities.length) {
    priorities.push({
      title: "Refinar otimizações finais",
      reason: "Sua base marcada parece avançada. O próximo ganho tende a vir de Arcanes, elementos por facção, Rivens opcionais e loadouts salvos.",
      action: "Compare opções antes de gastar Forma e salve seus setups principais.",
      level: "baixo",
      links: [
        { label: "Comparador", href: "/comparar" },
        { label: "Loadouts", href: "/loadouts" }
      ]
    });
  }

  return priorities.slice(0, 6);
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}
