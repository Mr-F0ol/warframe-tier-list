import type { Metadata } from "next";
import { PlannerTool } from "@/components/planner-tool";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { Card } from "@/components/ui/card";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Planejador Warframe — Descubra o Próximo Investimento",
  description: "Responda perguntas sobre sua conta e receba recomendações de Warframe, armas, builds, farm e progressão para o meta atual.",
  alternates: { canonical: "/planejador" },
  openGraph: {
    title: "Planejador Warframe — Descubra o Próximo Investimento",
    description: "Ferramenta em português para decidir o próximo investimento no Warframe.",
    url: "/planejador"
  },
  twitter: {
    card: "summary_large_image",
    title: "Planejador Warframe — Descubra o Próximo Investimento",
    description: "Responda perguntas sobre sua conta e receba recomendações de Warframe, armas, builds, farm e progressão."
  }
};

export default function PlanejadorPage() {
  const schema = articleJsonLd({
    title: "Planejador Warframe",
    description: "Ferramenta interativa para sugerir próximos investimentos no Warframe.",
    path: "/planejador"
  });

  return (
    <SeoPage
      eyebrow="Ferramenta"
      title="Planejador Warframe"
      description="Responda algumas perguntas e gere uma recomendação prática para Warframe, armas, build, farm, Forma e progressão."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Planejador", href: "/planejador" }
      ]}
      structuredData={schema}
    >
      <SectionBlock title="Como usar" description="A recomendação é local, editável e feita com regras simples do projeto. Não usa login, banco ou API externa.">
        <div className="grid gap-3 md:grid-cols-3">
          <Card className="p-4">
            <h2 className="font-black text-yellow-100">Sugestão prática</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">A ferramenta cruza estágio da conta, objetivo, estilo, investimento e itens já obtidos.</p>
          </Card>
          <Card className="p-4">
            <h2 className="font-black text-yellow-100">Salvo no navegador</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Você pode salvar planos localmente para consultar depois. Não há conta ou banco de dados.</p>
          </Card>
          <Card className="p-4">
            <h2 className="font-black text-yellow-100">Meta variável</h2>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">Esta recomendação é uma sugestão prática, não uma regra absoluta. O meta pode mudar com updates, hotfixes, Rivens, Arcanes e balanceamentos.</p>
          </Card>
        </div>
      </SectionBlock>

      <PlannerTool />

      <SectionBlock title="Ferramentas relacionadas" description="Use estas páginas para validar o plano antes de gastar Forma, Catalisador ou Arcanes.">
        <InfoCardGrid
          cards={[
            { title: "Comparador Warframe", description: "Compare duas ou três opções antes de fechar investimento.", href: "/comparar", tags: ["Comparar"] },
            { title: "Loadouts", description: "Transforme o plano em uma combinação salva para consultar depois.", href: "/loadouts", tags: ["Organizar"] },
            { title: "Progressão", description: "Veja o roteiro geral da conta por etapa.", href: "/progressao", tags: ["Roadmap"] }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Tier List", description: "Compare prioridades por categoria e função.", href: "/tier-list" },
          { title: "Builds", description: "Abra builds completas para armas recomendadas.", href: "/builds" },
          { title: "Farm", description: "Organize Créditos, Endo, Kuva e recursos antes de investir.", href: "/farm" },
          { title: "Comece Aqui", description: "Entenda por onde começar conforme estágio da conta.", href: "/comece-aqui" }
        ]}
      />
    </SeoPage>
  );
}
