import { InfoCardGrid, InternalLinks, SectionBlock } from "@/components/seo/seo-page";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { FarmGuide } from "@/data/farms";
import { farmUpdateWarning } from "@/data/farms";

export function FarmGuideContent({ guide }: { guide: FarmGuide }) {
  return (
    <>
      <section className="mt-8 grid gap-3 lg:grid-cols-[1.1fr_.9fr]">
        <Card className="border-l-4 border-l-yellow-300 p-4">
          <Badge variant="meta">Melhor método</Badge>
          <h2 className="mt-3 text-xl font-black text-yellow-100">Melhor método geral</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{guide.bestPlace}</p>
        </Card>
        <Card className="border-l-4 border-l-cyan-300 p-4">
          <Badge variant="cyan">Iniciante</Badge>
          <h2 className="mt-3 text-xl font-black text-yellow-100">Alternativa para iniciantes</h2>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">{guide.beginnerAlternative}</p>
        </Card>
      </section>

      <SectionBlock title="Warframes recomendados" description="Escolha pelo que sua conta consegue manter com segurança: defesa, clear, suporte ou mobilidade.">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {guide.recommendedWarframes.map(warframe => (
            <Card key={warframe} className="p-4">
              <h3 className="text-lg font-black text-yellow-100">{warframe}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">Boa opção para manter o farm estável sem depender de execução perfeita.</p>
            </Card>
          ))}
        </div>
      </SectionBlock>

      {guide.detailSections?.length ? (
        <SectionBlock title="Plano por estágio da conta" description="Compare iniciante, intermediário e endgame antes de gastar booster, Forma ou tempo em uma rota.">
          <div className="grid gap-3 md:grid-cols-2">
            {guide.detailSections.map(section => (
              <Card key={section.title} className="p-4">
                <h3 className="text-lg font-black text-yellow-100">{section.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{section.description}</p>
                {section.items?.length ? (
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-muted-foreground">
                    {section.items.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </Card>
            ))}
          </div>
        </SectionBlock>
      ) : null}

      <SectionBlock title="Dicas rápidas" description="Ajustes simples para transformar um farm possível em uma rotina repetível.">
        <InfoCardGrid cards={guide.quickTips.map((tip, index) => ({ title: `Dica ${index + 1}`, description: tip, tags: [guide.resource] }))} />
      </SectionBlock>

      <SectionBlock title="O que evitar" description="Erros que costumam deixar o farm mais lento ou caro do que deveria.">
        <InfoCardGrid cards={guide.avoid.map(item => ({ title: item, description: "Revise esse ponto antes de investir Forma, booster ou muito tempo em uma rota.", tags: ["Evite"] }))} />
      </SectionBlock>

      <SectionBlock title="Observação de atualização" description="Nenhum farm deve ser tratado como permanente.">
        <Card className="border-l-4 border-l-yellow-300 p-4">
          <p className="text-sm leading-6 text-muted-foreground">{farmUpdateWarning}</p>
        </Card>
      </SectionBlock>

      <InternalLinks links={guide.relatedLinks} />
    </>
  );
}
