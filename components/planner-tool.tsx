"use client";

import Link from "next/link";
import { Copy, RotateCcw, Save, Trash2 } from "lucide-react";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import {
  generatePlannerRecommendations,
  goalOptions,
  investmentOptions,
  labelForPlannerValue,
  ownedItemGroups,
  playstyleOptions,
  stageOptions,
  type PlannerAnswers,
  type PlannerRecommendation
} from "@/data/planner";
import { accountItemMap, findAccountItemByName } from "@/data/accountItems";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { loadAccountProgress, type AccountProgress } from "@/lib/accountStorage";
import {
  isRecord,
  readJsonFromLocalStorage,
  removeLocalStorageItem,
  sanitizePlainText,
  writeJsonToLocalStorage
} from "@/lib/local-storage-security";
import { cn } from "@/lib/utils";

const storageKey = "warframe-fool-planner-plans";
const baseUrl = "https://warframefool.vercel.app";
const maxSavedPlansBytes = 120 * 1024;
const maxSavedPlans = 8;
const savedPlansVersion = 1;

interface SavedPlan {
  id: string;
  name: string;
  createdAt: string;
  answers: PlannerAnswers;
  recommendation: PlannerRecommendation;
}

const initialAnswers: PlannerAnswers = {
  stage: "",
  goal: "",
  playstyle: "",
  investment: "",
  ownedItems: []
};

export function PlannerTool() {
  const [answers, setAnswers] = useState<PlannerAnswers>(initialAnswers);
  const [savedPlans, setSavedPlans] = useState<SavedPlan[]>([]);
  const [accountProgress, setAccountProgress] = useState<AccountProgress | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let mounted = true;
    const accountResult = loadAccountProgress();
    window.requestAnimationFrame(() => {
      if (mounted) setAccountProgress(accountResult.progress);
    });
    const parsed = readJsonFromLocalStorage<unknown>(storageKey, {
      maxBytes: maxSavedPlansBytes,
      label: "Planos salvos"
    });

    if (!parsed.ok) {
      removeLocalStorageItem(storageKey);
      window.requestAnimationFrame(() => {
        if (mounted) setMessage("Planos salvos corrompidos foram limpos deste navegador.");
      });
    } else {
      const planValues = savedPlanValues(parsed.data);
      const validPlans = planValues.map(sanitizeSavedPlan).filter((plan): plan is SavedPlan => Boolean(plan)).slice(0, maxSavedPlans);
      window.requestAnimationFrame(() => {
        if (mounted) setSavedPlans(validPlans);
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  const isComplete = Boolean(answers.stage && answers.goal && answers.playstyle && answers.investment);
  const recommendations = useMemo(() => (isComplete ? generatePlannerRecommendations(answers) : []), [answers, isComplete]);
  const primary = recommendations[0];

  function updateAnswer<K extends keyof PlannerAnswers>(key: K, value: PlannerAnswers[K]) {
    setAnswers(current => ({ ...current, [key]: value }));
    setMessage("");
  }

  function toggleOwned(item: string) {
    setAnswers(current => {
      const hasItem = current.ownedItems.includes(item);
      return {
        ...current,
        ownedItems: hasItem ? current.ownedItems.filter(value => value !== item) : [...current.ownedItems, item]
      };
    });
  }

  async function copyPlan(plan = primary, planAnswers = answers) {
    if (!plan) return;
    const text = planToText(plan, planAnswers);
    try {
      await navigator.clipboard.writeText(text);
      setMessage("Plano copiado.");
    } catch {
      setMessage("Não foi possível copiar automaticamente. Selecione o texto do plano e copie manualmente.");
    }
  }

  function savePlan() {
    if (!primary || typeof window === "undefined") return;
    const plan: SavedPlan = {
      id: `${Date.now()}-${Math.round(Math.random() * 10000)}`,
      name: primary.title,
      createdAt: new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }),
      answers,
      recommendation: primary
    };

    const nextPlans = [plan, ...savedPlans].slice(0, 8);
    const result = writeJsonToLocalStorage(storageKey, {
      version: savedPlansVersion,
      plans: nextPlans.map(sanitizeSavedPlan).filter(Boolean)
    });
    if (result.ok) {
      setSavedPlans(nextPlans);
      setMessage("Plano salvo neste navegador.");
    } else {
      setMessage(result.error || "Não foi possível salvar neste navegador.");
    }
  }

  function removePlan(id: string) {
    const nextPlans = savedPlans.filter(plan => plan.id !== id);
    setSavedPlans(nextPlans);
    const result = writeJsonToLocalStorage(storageKey, {
      version: savedPlansVersion,
      plans: nextPlans.map(sanitizeSavedPlan).filter(Boolean)
    });
    if (!result.ok) {
      setMessage(result.error || "Plano removido da tela, mas o navegador bloqueou a atualização do armazenamento.");
    }
  }

  function resetPlanner() {
    setAnswers(initialAnswers);
    setMessage("Respostas limpas. Você pode refazer o planejamento.");
  }

  function useAccountData() {
    const result = loadAccountProgress();
    setAccountProgress(result.progress);
    const ownedItems = Object.entries(result.progress.items)
      .filter(([, state]) => state.owned)
      .map(([itemId]) => plannerOwnedNameForItem(itemId))
      .filter((item): item is string => Boolean(item));

    if (!ownedItems.length) {
      setMessage("Você ainda não marcou itens em Minha Conta.");
      return;
    }

    setAnswers(current => ({
      ...current,
      ownedItems: Array.from(new Set([...current.ownedItems, ...ownedItems]))
    }));
    setMessage("Itens obtidos da Minha Conta foram aplicados ao Planejador.");
  }

  return (
    <div className="mt-8 grid gap-8">
      <Card className="p-4 md:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-yellow-100">Responder perguntas</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
              Complete as etapas para gerar uma recomendação local. Nada é enviado para servidor.
            </p>
          </div>
          <Button type="button" variant="outline" size="sm" onClick={resetPlanner}>
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            Limpar respostas
          </Button>
          <Button type="button" variant="secondary" size="sm" onClick={useAccountData}>
            Usar dados da Minha Conta
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/minha-conta">Abrir Minha Conta</Link>
          </Button>
        </div>

        <PlannerStep number={1} title="Estágio da conta">
          <OptionGrid
            name="stage"
            value={answers.stage}
            options={stageOptions.map(option => ({ value: option.value, label: option.label, description: option.description }))}
            onChange={value => updateAnswer("stage", value as PlannerAnswers["stage"])}
          />
        </PlannerStep>

        <PlannerStep number={2} title="Objetivo atual">
          <OptionGrid
            name="goal"
            value={answers.goal}
            options={goalOptions.map(option => ({ value: option.value, label: option.label }))}
            onChange={value => updateAnswer("goal", value as PlannerAnswers["goal"])}
          />
        </PlannerStep>

        <PlannerStep number={3} title="Estilo de jogo">
          <OptionGrid
            name="playstyle"
            value={answers.playstyle}
            options={playstyleOptions.map(option => ({ value: option.value, label: option.label }))}
            onChange={value => updateAnswer("playstyle", value as PlannerAnswers["playstyle"])}
          />
        </PlannerStep>

        <PlannerStep number={4} title="Investimento disponível">
          <OptionGrid
            name="investment"
            value={answers.investment}
            options={investmentOptions.map(option => ({ value: option.value, label: option.label, description: option.description }))}
            onChange={value => updateAnswer("investment", value as PlannerAnswers["investment"])}
          />
        </PlannerStep>

        <PlannerStep number={5} title="Itens que você já tem">
          <div className="grid gap-4 lg:grid-cols-3">
            {ownedItemGroups.map(group => (
              <fieldset key={group.label} className="rounded-lg border border-border/70 bg-background/35 p-3">
                <legend className="px-1 text-sm font-black text-cyan-100">{group.label}</legend>
                <div className="mt-3 grid gap-2">
                  {group.items.map(item => {
                    const id = `owned-${item.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                    return (
                      <Label key={item} htmlFor={id} className="flex cursor-pointer items-center gap-2 rounded-md border border-border/50 bg-card/45 px-3 py-2 text-sm text-foreground">
                        <input
                          id={id}
                          type="checkbox"
                          checked={answers.ownedItems.includes(item)}
                          onChange={() => toggleOwned(item)}
                          className="h-4 w-4 accent-cyan-300"
                        />
                        <span>{item}</span>
                      </Label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </PlannerStep>
      </Card>

      <section aria-live="polite">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-black text-foreground">Seu plano recomendado</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              A recomendação aparece quando as quatro primeiras etapas estiverem preenchidas.
            </p>
          </div>
          {message ? <Badge variant="cyan">{message}</Badge> : null}
        </div>

        {!isComplete ? (
          <Card className="p-5">
            <p className="text-sm leading-6 text-muted-foreground">
              Selecione estágio, objetivo, estilo de jogo e investimento disponível para gerar o plano.
            </p>
          </Card>
        ) : primary ? (
          <div className="grid gap-4">
            <ResultCards recommendation={primary} secondary={recommendations.slice(1)} accountProgress={accountProgress} />
            <div className="flex flex-wrap gap-2">
              <Button type="button" onClick={() => void copyPlan()}>
                <Copy className="h-4 w-4" aria-hidden="true" />
                Copiar plano
              </Button>
              <Button type="button" variant="secondary" onClick={savePlan}>
                <Save className="h-4 w-4" aria-hidden="true" />
                Salvar plano neste navegador
              </Button>
              <Button asChild variant="outline">
                <Link href="/loadouts">Abrir Loadouts</Link>
              </Button>
            </div>
          </div>
        ) : null}
      </section>

      <section>
        <div className="mb-3">
          <h2 className="text-2xl font-black text-foreground">Planos salvos</h2>
          <p className="mt-1 text-sm leading-6 text-muted-foreground">Os planos salvos ficam apenas neste navegador.</p>
        </div>
        {savedPlans.length ? (
          <div className="grid gap-3 md:grid-cols-2">
            {savedPlans.map(plan => (
              <Card key={plan.id} className="p-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-black text-yellow-100">{plan.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{plan.createdAt}</p>
                  </div>
                  <Badge variant="outline">{plan.recommendation.priority}</Badge>
                </div>
                <dl className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
                  <SavedDetail label="Estágio" value={labelForPlannerValue(plan.answers.stage)} />
                  <SavedDetail label="Objetivo" value={labelForPlannerValue(plan.answers.goal)} />
                  <SavedDetail label="Prioridade" value={plan.recommendation.title} />
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button type="button" size="sm" variant="secondary" onClick={() => void copyPlan(plan.recommendation, plan.answers)}>
                    <Copy className="h-4 w-4" aria-hidden="true" />
                    Copiar
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/loadouts">Criar loadout</Link>
                  </Button>
                  <Button type="button" size="sm" variant="destructive" onClick={() => removePlan(plan.id)} aria-label={`Excluir plano ${plan.name}`}>
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                    Excluir
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-4">
            <p className="text-sm leading-6 text-muted-foreground">Nenhum plano salvo ainda.</p>
          </Card>
        )}
      </section>
    </div>
  );
}

function sanitizeSavedPlan(value: unknown): SavedPlan | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const plan = value as Partial<SavedPlan>;
  if (!plan.answers || !plan.recommendation) return null;
  const title = sanitizePlannerText(plan.recommendation.title, 120);
  if (!title) return null;

  return {
    id: /^[a-zA-Z0-9_-]{1,80}$/.test(String(plan.id || "")) ? String(plan.id) : `${Date.now()}-${Math.round(Math.random() * 10000)}`,
    name: sanitizePlannerText(plan.name || title, 120),
    createdAt: sanitizePlannerText(plan.createdAt, 40) || new Date().toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }),
    answers: {
      stage: sanitizePlannerText(plan.answers.stage, 40) as PlannerAnswers["stage"],
      goal: sanitizePlannerText(plan.answers.goal, 40) as PlannerAnswers["goal"],
      playstyle: sanitizePlannerText(plan.answers.playstyle, 40) as PlannerAnswers["playstyle"],
      investment: sanitizePlannerText(plan.answers.investment, 40) as PlannerAnswers["investment"],
      ownedItems: Array.isArray(plan.answers.ownedItems)
        ? plan.answers.ownedItems.map(item => sanitizePlannerText(item, 80)).filter(Boolean).slice(0, 80)
        : []
    },
    recommendation: {
      ...plan.recommendation,
      id: sanitizePlannerText(plan.recommendation.id, 80) || `saved-${Date.now()}`,
      title,
      reason: sanitizePlannerText(plan.recommendation.reason, 400),
      priority: sanitizePlannerPriority(plan.recommendation.priority),
      warframes: safeStringList(plan.recommendation.warframes, 12),
      weapons: safeStringList(plan.recommendation.weapons, 12),
      farms: safeStringList(plan.recommendation.farms, 12),
      build: sanitizePlannerText(plan.recommendation.build, 400),
      forma: sanitizePlannerText(plan.recommendation.forma, 400),
      avoid: safeStringList(plan.recommendation.avoid, 12),
      now: sanitizePlannerText(plan.recommendation.now, 400),
      next: sanitizePlannerText(plan.recommendation.next, 400),
      links: Array.isArray(plan.recommendation.links)
        ? plan.recommendation.links
            .filter(link => link && typeof link.href === "string" && link.href.startsWith("/"))
            .map(link => ({
              label: sanitizePlannerText(link.label, 80),
              href: sanitizePlannerText(link.href, 120)
            }))
            .slice(0, 12)
        : []
    }
  };
}

function savedPlanValues(value: unknown): unknown[] {
  if (Array.isArray(value)) return value;
  if (isRecord(value) && value.version === savedPlansVersion && Array.isArray(value.plans)) return value.plans;
  return [];
}

function sanitizePlannerPriority(value: unknown): PlannerRecommendation["priority"] {
  return value === "Alta" || value === "Média" || value === "Baixa" ? value : "Média";
}

function safeStringList(value: unknown, maxItems: number) {
  return Array.isArray(value) ? value.map(item => sanitizePlannerText(item, 120)).filter(Boolean).slice(0, maxItems) : [];
}

function sanitizePlannerText(value: unknown, maxLength: number) {
  return sanitizePlainText(value, maxLength);
}

function PlannerStep({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return (
    <section className="mt-6">
      <h3 className="mb-3 flex items-center gap-2 text-lg font-black text-foreground">
        <Badge variant="cyan">Etapa {number}</Badge>
        {title}
      </h3>
      {children}
    </section>
  );
}

function OptionGrid({
  name,
  value,
  options,
  onChange
}: {
  name: string;
  value: string;
  options: Array<{ value: string; label: string; description?: string }>;
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2 md:grid-cols-2 xl:grid-cols-3" role="radiogroup" aria-label={name}>
      {options.map(option => {
        const selected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.value)}
            className={cn(
              "min-h-16 rounded-lg border p-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              selected ? "border-cyan-300/60 bg-cyan-300/15 text-cyan-50" : "border-border/70 bg-card/55 text-muted-foreground hover:border-cyan-300/35 hover:text-foreground"
            )}
          >
            <span className="block text-sm font-black">{option.label}</span>
            {option.description ? <span className="mt-1 block text-xs leading-5">{option.description}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

function ResultCards({
  recommendation,
  secondary,
  accountProgress
}: {
  recommendation: PlannerRecommendation;
  secondary: PlannerRecommendation[];
  accountProgress: AccountProgress | null;
}) {
  const accountHints = accountProgress ? buildAccountHints(recommendation, accountProgress) : [];

  return (
    <div className="grid gap-3">
      <Card className="border-cyan-300/35 p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <Badge variant="meta">Prioridade principal</Badge>
            <h3 className="mt-3 text-2xl font-black text-yellow-100">{recommendation.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{recommendation.reason}</p>
          </div>
          <Badge variant={recommendation.priority === "Alta" ? "tierS" : "cyan"}>{recommendation.priority}</Badge>
        </div>
      </Card>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        <ResultCard title="Warframe recomendado" value={recommendation.warframes.join(", ")} />
        <ResultCard title="Arma recomendada" value={recommendation.weapons.join(", ")} />
        <ResultCard title="Build recomendada" value={recommendation.build} />
        <ResultCard title="Farm recomendado" value={recommendation.farms.join(", ")} />
        <ResultCard title="Onde gastar Forma" value={recommendation.forma} />
        <ResultCard title="O que evitar" value={recommendation.avoid.join(" · ")} />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <ResultCard title="O que fazer agora" value={recommendation.now} />
        <ResultCard title="Depois disso" value={recommendation.next} />
      </div>
      {secondary.length ? (
        <Card className="p-4">
          <h3 className="text-lg font-black text-yellow-100">Prioridades secundárias</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
            {secondary.map(item => (
              <li key={item.id}>
                <b className="text-cyan-100">{item.title}:</b> {item.now}
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
      {accountHints.length ? (
        <Card className="p-4">
          <h3 className="text-lg font-black text-yellow-100">Status da Minha Conta</h3>
          <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
            {accountHints.map(hint => (
              <li key={`${hint.name}-${hint.status}`}>
                <b className="text-cyan-100">{hint.name}:</b> {hint.status}
              </li>
            ))}
          </ul>
        </Card>
      ) : null}
      <Card className="p-4">
        <h3 className="text-lg font-black text-yellow-100">Links úteis</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {recommendation.links.map(link => (
            <Button key={link.href} asChild size="sm" variant="secondary">
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
          <Button asChild size="sm" variant="outline">
            <Link href="/tier-list">Ver Tier List</Link>
          </Button>
          <Button asChild size="sm" variant="outline">
            <Link href="/progressao">Ver Progressão</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}

function plannerOwnedNameForItem(itemId: string) {
  const directMap: Record<string, string> = {
    "arcanes-primarios": "Arcanes primários/secundários",
    "arcanes-secundarios": "Arcanes primários/secundários",
    helminth: "Helminth liberado"
  };
  if (directMap[itemId]) return directMap[itemId];

  const accountItem = accountItemMap.get(itemId);
  if (accountItem) return accountItem.name;

  const bySlug = itemId
    .split("-")
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

  const item = findAccountItemByName(bySlug);
  return item?.name;
}

function buildAccountHints(recommendation: PlannerRecommendation, accountProgress: AccountProgress) {
  return [...recommendation.warframes, ...recommendation.weapons]
    .map(name => {
      const item = findAccountItemByName(name);
      if (!item) return null;
      const state = accountProgress.items[item.id];
      if (state?.owned) return { name: item.name, status: "Você já marcou este item como obtido." };
      if (state?.wanted) return { name: item.name, status: "Você marcou este item como prioridade." };
      if (state?.building) return { name: item.name, status: "Você marcou este item como buildando." };
      return null;
    })
    .filter((hint): hint is { name: string; status: string } => Boolean(hint));
}

function ResultCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="p-4">
      <h3 className="text-sm font-black uppercase text-cyan-100/80">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{value}</p>
    </Card>
  );
}

function SavedDetail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-bold text-cyan-100/80">{label}</dt>
      <dd>{value || "Não informado"}</dd>
    </div>
  );
}

function planToText(plan: PlannerRecommendation, answers: PlannerAnswers) {
  const links = plan.links.map(link => `${baseUrl}${link.href}`).join("\n");
  return [
    "Planejador Warframe — Warframe Fool",
    "",
    `Estágio: ${labelForPlannerValue(answers.stage)}`,
    `Objetivo: ${labelForPlannerValue(answers.goal)}`,
    `Investimento: ${labelForPlannerValue(answers.investment)}`,
    "",
    "Prioridade principal:",
    plan.title,
    "",
    "Warframe recomendado:",
    plan.warframes.join(", "),
    "",
    "Armas recomendadas:",
    plan.weapons.join(", "),
    "",
    "Farm recomendado:",
    plan.farms.join(", "),
    "",
    "Onde gastar Forma:",
    plan.forma,
    "",
    "O que evitar:",
    plan.avoid.join("; "),
    "",
    "Links:",
    links
  ].join("\n");
}
