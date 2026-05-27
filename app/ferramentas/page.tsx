import type { Metadata } from "next";
import { InfoCardGrid, SeoPage } from "@/components/seo/seo-page";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Ferramentas Warframe — Planejador, Comparador e Loadouts",
  description: "Use ferramentas em português para planejar builds, comparar armas, montar loadouts e escolher prioridades no Warframe.",
  alternates: { canonical: "/ferramentas" },
  openGraph: {
    title: "Ferramentas Warframe — Planejador, Comparador e Loadouts",
    description: "Planejador, comparador, loadouts, tier list e progressão para jogadores brasileiros de Warframe.",
    url: "/ferramentas"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferramentas Warframe — Planejador, Comparador e Loadouts",
    description: "Use ferramentas em português para planejar builds, comparar armas, montar loadouts e escolher prioridades."
  }
};

export default function FerramentasPage() {
  const schema = articleJsonLd({
    title: "Ferramentas Warframe",
    description: "Central de ferramentas do Warframe Fool.",
    path: "/ferramentas"
  });

  return (
    <SeoPage
      eyebrow="Ferramentas"
      title="Ferramentas Warframe"
      description="Atalhos para planejar sua conta, comparar opções, montar loadouts e decidir onde investir recursos."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Ferramentas", href: "/ferramentas" }
      ]}
      structuredData={schema}
    >
      <section className="mt-8">
        <InfoCardGrid
          cards={[
            { title: "Planejador Warframe", description: "Responda perguntas e receba um plano com Warframe, arma, farm e próximos passos.", href: "/planejador", tags: ["Novo"] },
            { title: "Comparador Warframe", description: "Compare Warframes, armas e builds antes de gastar Forma e Arcanes.", href: "/comparar", tags: ["Comparar"] },
            { title: "Loadouts", description: "Salve combinações de Warframe, armas, escola do Operador e notas.", href: "/loadouts", tags: ["Organizar"] },
            { title: "Tier List", description: "Use filtros para encontrar opções por categoria, tier e função.", href: "/tier-list", tags: ["Ranking"] },
            { title: "Progressão", description: "Siga um roadmap por etapa da conta para evitar desperdício de recursos.", href: "/progressao", tags: ["Roteiro"] },
            { title: "Builds", description: "Abra guias completos de Felarx, Laetum, Torid, Praedos e outras armas.", href: "/builds", tags: ["Guias"] }
          ]}
        />
      </section>
    </SeoPage>
  );
}
