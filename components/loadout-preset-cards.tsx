import Link from "next/link";
import { CopyLinkButton } from "@/components/copy-link-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { loadoutPresets } from "@/data/loadouts";

export function LoadoutPresetCards() {
  return (
    <section className="mt-8">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <h2 className="text-2xl font-black">
          Loadouts prontos
          <span className="mt-1 block text-sm font-normal text-muted-foreground">
            Estruturas para copiar, compartilhar e adaptar aos seus objetivos.
          </span>
        </h2>
        <Badge variant="meta">Prontos para copiar</Badge>
      </div>
      <div className="mt-3 grid gap-3 lg:grid-cols-3">
        {loadoutPresets.map(loadout => {
          const text = formatLoadout(loadout);
          return (
            <Card key={loadout.id} className="p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-black text-yellow-100">{loadout.name}</h3>
                <div className="flex flex-wrap justify-end gap-2">
                  <Badge variant={loadout.difficulty === "Alta" ? "tierA" : "cyan"}>{loadout.difficulty}</Badge>
                  <Badge variant={loadout.investment === "Alto" ? "meta" : "outline"}>{loadout.investment}</Badge>
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{loadout.description}</p>
              <dl className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
                <Row label="Warframe" value={loadout.warframe} />
                <Row label="Primária" value={loadout.primary} />
                <Row label="Secundária" value={loadout.secondary} />
                <Row label="Melee" value={loadout.melee} />
                <Row label="Companheiro" value={loadout.companion} />
                <Row label="Foco" value={loadout.focus} />
                <Row label="Escola" value={loadout.operatorSchool} />
                <Row label="Arcane" value={loadout.mainArcane} />
                <Row label="Elementos" value={loadout.elementNotes} />
              </dl>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{loadout.notes}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <CopyLinkButton text={text} label="Copiar loadout completo" copiedLabel="Loadout copiado" />
                <CopyLinkButton
                  mode="share"
                  text={text}
                  label="Compartilhar"
                  shareTitle={`${loadout.name} - WarframeFool`}
                  shareText={text}
                />
                {loadout.relatedBuilds.length ? (
                  <Button asChild size="sm" variant="secondary">
                    <Link href={loadout.relatedBuilds[0].href}>Abrir builds relacionadas</Link>
                  </Button>
                ) : null}
              </div>
              {loadout.relatedBuilds.length > 1 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {loadout.relatedBuilds.slice(1).map(build => (
                    <Button key={build.href} asChild size="sm" variant="outline">
                      <Link href={build.href}>{build.label}</Link>
                    </Button>
                  ))}
                </div>
              ) : null}
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[112px_1fr] gap-2">
      <dt className="font-bold text-cyan-100/85">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

function formatLoadout(loadout: typeof loadoutPresets[number]) {
  return [
    `Loadout: ${loadout.name}`,
    `Warframe: ${loadout.warframe}`,
    `Primária: ${loadout.primary}`,
    `Secundária: ${loadout.secondary}`,
    `Melee: ${loadout.melee}`,
    `Companheiro: ${loadout.companion}`,
    `Foco: ${loadout.focus}`,
    `Escola do Operador: ${loadout.operatorSchool}`,
    `Arcane principal: ${loadout.mainArcane}`,
    `Dificuldade: ${loadout.difficulty}`,
    `Investimento: ${loadout.investment}`,
    `Observação de elemento por facção: ${loadout.elementNotes}`,
    `Notas: ${loadout.notes}`
  ].join("\n");
}
