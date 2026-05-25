import type { Metadata } from "next";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";

export const metadata: Metadata = {
  title: "Farm Warframe — Créditos, Recursos e Rotas para Evoluir Mais Rápido",
  description: "Guia de farm Warframe em português com prioridades para créditos, recursos, equipamentos confortáveis e rotas de repetição.",
  alternates: { canonical: "/farm" },
  openGraph: {
    title: "Farm Warframe | WarframeFool",
    description: "Guias de farm para créditos, recursos e evolução consistente no Warframe.",
    url: "/farm"
  },
  twitter: {
    card: "summary_large_image",
    title: "Farm Warframe — Créditos, Recursos e Rotas para Evoluir Mais Rápido",
    description: "Guia de farm Warframe em português com prioridades para créditos, recursos, equipamentos confortáveis e rotas de repetição."
  }
};

export default function FarmPage() {
  return (
    <SeoPage
      eyebrow="Farm"
      title="Farm Warframe"
      description="Organize créditos, recursos e equipamentos para repetir missões com menos travas e mais consistência."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Farm", href: "/farm" }
      ]}
    >
      <SectionBlock title="Guias de farm" description="Comece pelo gargalo da sua conta: créditos, recursos, mobilidade ou sobrevivência.">
        <InfoCardGrid
          cards={[
            { title: "Farm de créditos", description: "Métodos por estágio da conta, equipamentos recomendados, booster e erros comuns.", href: "/farm-creditos", tags: ["Créditos"] },
            { title: "Farm de Endo", description: "Organize recursos para evoluir mods sem gastar Endo em prioridades erradas.", href: "/farm-endo", tags: ["Endo"] },
            { title: "Farm de Kuva", description: "Planeje Kuva para Riven sem sacrificar mods, Arcanes e builds base.", href: "/farm-kuva", tags: ["Kuva"] },
            { title: "Farm de Oxio", description: "Rotas Corpus, clear consistente e cuidados para farmar Oxio sem perder ritmo.", href: "/farm-oxio", tags: ["Oxio"] },
            { title: "Farm de Criótico", description: "Guia para escavação com defesa de objetivo, energia e repetição segura.", href: "/farm-criotico", tags: ["Criótico"] },
            { title: "Farm de Telúrio", description: "Rota segura para um recurso raro, sem prometer números fixos de drop.", href: "/farm-telurio", tags: ["Telúrio"] },
            { title: "Farm de foco", description: "Lentes, convergência e métodos para evoluir Zenurik, Madurai, Unairu, Vazarin e Naramon.", href: "/farm-foco-warframe", tags: ["Foco"] },
            { title: "Warframes para foco", description: "Saryn, Volt, Mirage e outras opções para Sanctuary Onslaught e ESO.", href: "/melhores-warframes-farm-foco", tags: ["ESO"] },
            { title: "Loadout confortável", description: "Salve combinações para repetir farms longos sem remontar tudo manualmente.", href: "/loadouts", tags: ["Organização"] },
            { title: "Melee de mobilidade", description: "Praedos ajuda quando o tempo de deslocamento pesa em rotas repetidas.", href: "/builds/praedos", tags: ["Mobilidade"] }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Prioridade prática" description="Farm bom é farm que sua conta consegue repetir sem morrer, sem ficar sem energia e sem depender de setup lento.">
        <InfoCardGrid
          cards={[
            { title: "Conta nova", description: "Use Warframes seguros, armas simples e evite gastar Forma demais só para farm básico.", href: "/melhores-warframes", tags: ["Iniciante"] },
            { title: "Conta intermediária", description: "Procure clear consistente e uma arma reserva para Eximus, bosses ou inimigos resistentes.", href: "/melhores-armas-primarias", tags: ["Consistência"] },
            { title: "Endgame", description: "Invista em Incarnon, Arcanes e variações de loadout quando o farm virar rotina.", href: "/incarnon", tags: ["Endgame"] }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Farm de créditos", description: "Guia detalhado para organizar crédito sem prometer números irreais.", href: "/farm-creditos" },
          { title: "Steel Path", description: "Monte uma base segura antes de rotas difíceis.", href: "/steel-path" },
          { title: "Tier List", description: "Compare Warframes e armas antes de investir.", href: "/tier-list" }
        ]}
      />
    </SeoPage>
  );
}
