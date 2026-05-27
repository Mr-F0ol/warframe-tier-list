import type { Metadata } from "next";
import { GuideCtaRow, type GuideCtaItem } from "@/components/guide-ui";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Comece Aqui no Warframe — Guia por Estágio da Conta",
  description: "Guia Comece Aqui para escolher prioridades no Warframe por estágio da conta: iniciante, meio do jogo, pré-Steel Path, Steel Path e endgame.",
  alternates: { canonical: "/comece-aqui" },
  openGraph: {
    title: "Comece Aqui no Warframe — Guia por Estágio da Conta",
    description: "Escolha por onde começar no Warframe conforme seu progresso, recursos e objetivo atual.",
    url: "/comece-aqui"
  },
  twitter: {
    card: "summary_large_image",
    title: "Comece Aqui no Warframe — Guia por Estágio da Conta",
    description: "Guia inicial para escolher prioridades de builds, farm, Steel Path e meta em português."
  }
};

export default function ComeceAquiPage() {
  const schema = articleJsonLd({
    title: "Comece Aqui no Warframe Fool",
    description: "Guia inicial para escolher prioridades de Warframe por estágio da conta.",
    path: "/comece-aqui"
  });

  return (
    <SeoPage
      eyebrow="Comece aqui"
      title="Comece Aqui no Warframe Fool"
      description="Um caminho simples para decidir o que ver primeiro: tier list, builds, farm, loadouts, Incarnon e meta atual."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Comece Aqui", href: "/comece-aqui" }
      ]}
      structuredData={schema}
    >
      <SectionBlock title="Escolha pelo seu objetivo" description="Use estes blocos como ponto de partida. O melhor investimento muda conforme mods, Arcanes, Rivens, Helminth, hotfixes e balanceamentos.">
        <InfoCardGrid
          cards={[
            {
              title: "Não sei o que priorizar",
              description: "Use o Planejador para receber uma sugestão de Warframe, arma, farm e próximo passo conforme sua conta.",
              href: "/planejador",
              tags: ["Planejador"]
            },
            {
              title: "Sou iniciante: o que pegar primeiro?",
              description: "Priorize sobrevivência, arma simples, mods base e uma rota de farm que você completa sem morrer.",
              href: "/tier-list",
              tags: ["Iniciante"]
            },
            {
              title: "Estou indo para Steel Path",
              description: "Monte uma base segura antes de buscar dano máximo: defesa, clear, alvo pesado e energia estável.",
              href: "/steel-path",
              tags: ["Steel Path"]
            },
            {
              title: "Tenho pouca Forma",
              description: "Invista primeiro em itens que resolvem várias missões, como uma arma de clear, uma opção de alvo pesado e um Warframe seguro.",
              href: "/meta-atual",
              tags: ["Prioridade"]
            },
            {
              title: "Quero farmar",
              description: "Escolha um método que sua conta repete bem. Depois otimize mobilidade, booster e loadout dedicado.",
              href: "/farm",
              tags: ["Farm"]
            },
            {
              title: "Quero matar boss",
              description: "Procure dano em alvo pesado, sobrevivência e elementos ajustados ao alvo. Felarx e Laetum são bons pontos de comparação.",
              href: "/builds/felarx",
              tags: ["Boss"]
            },
            {
              title: "Quero uma escolha segura",
              description: "Compare Meta Atual, Tier List e Builds antes de gastar Catalisador, Forma ou Arcanes raros.",
              href: "/builds",
              tags: ["Geral"]
            }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Rotas rápidas" description="Atalhos para guias que resolvem dúvidas comuns sem criar links quebrados.">
        <InfoCardGrid
          cards={[
            { title: "Tier List completa", description: "Veja todos os tiers, filtros e cards com build quando existir.", href: "/tier-list", tags: ["Ranking"] },
            { title: "Meta Atual", description: "Resumo com melhores escolhas por categoria e objetivo.", href: "/meta-atual", tags: ["Resumo"] },
            { title: "Build Laetum", description: "Secundária Incarnon para alvo pesado e Steel Path.", href: "/builds/laetum", tags: ["Secundária"] },
            { title: "Build Torid Incarnon", description: "Primária de clear para missões densas e conteúdo alto.", href: "/builds/torid-incarnon", tags: ["Primária"] },
            { title: "Build Praedos", description: "Melee Incarnon de mobilidade, farm e conforto.", href: "/builds/praedos", tags: ["Melee"] },
            { title: "Loadouts", description: "Organize combinações para consultar depois.", href: "/loadouts", tags: ["Organização"] }
          ]}
        />
      </SectionBlock>

      {accountStages.map(stage => (
        <SectionBlock key={stage.title} title={stage.title} description={stage.description}>
          <InfoCardGrid
            cards={[
              { title: "Objetivo principal", description: stage.objective, tags: ["Objetivo"] },
              { title: "O que farmar", description: stage.farm, href: stage.farmHref, tags: ["Farm"] },
              { title: "Warframes recomendados", description: stage.warframes, href: "/melhores-warframes", tags: ["Warframes"] },
              { title: "Armas recomendadas", description: stage.weapons, href: stage.weaponHref, tags: ["Armas"] },
              { title: "Onde gastar Forma", description: stage.forma, href: stage.formaHref, tags: ["Forma"] },
              { title: "O que evitar", description: stage.avoid, tags: ["Evite"] }
            ]}
          />
          <GuideCtaRow items={stage.ctas} />
        </SectionBlock>
      ))}

      <InternalLinks
        links={[
          { title: "Progressão", description: "Veja um roadmap completo para evoluir a conta por etapas.", href: "/progressao" },
          { title: "Planejador", description: "Gere um plano prático com prioridade, build, farm e próximos passos.", href: "/planejador" },
          { title: "Comparador", description: "Compare duas ou três opções antes de gastar recursos.", href: "/comparar" },
          { title: "Builds", description: "Veja guias de Felarx, Laetum, Praedos e Torid Incarnon.", href: "/builds" },
          { title: "Incarnon", description: "Entenda prioridades antes de gastar adaptadores e recursos.", href: "/incarnon" },
          { title: "Farm de créditos", description: "Organize créditos por estágio da conta.", href: "/farm-creditos" },
          { title: "Loadouts", description: "Salve setups por objetivo para consultar depois.", href: "/loadouts" },
          { title: "Steel Path", description: "Checklist para entrar em conteúdo mais resistente.", href: "/steel-path" }
        ]}
      />
    </SeoPage>
  );
}

const accountStages = [
  {
    title: "Conta nova",
    description: "Prioridade é liberar planetas, mods base e recursos sem copiar build cara cedo demais.",
    objective: "Liberar planetas, completar missões principais, juntar mods base e montar uma fundação de sobrevivência.",
    farm: "Créditos, Endo básico, mods essenciais, recursos de fabricação e Warframes fáceis de usar.",
    farmHref: "/farm",
    warframes: "Opções resistentes ou simples, como Rhino, Nezha, Wisp quando disponível, ou qualquer Warframe que sua conta sustente bem.",
    weapons: "Armas simples e baratas até liberar opções melhores. Evite depender de Incarnon ou Riven cedo.",
    weaponHref: "/melhores-armas-primarias",
    forma: "Evite gastar muita Forma em itens temporários. Guarde para peças que você pretende usar por mais tempo.",
    formaHref: "/tier-list",
    avoid: "Copiar build endgame sem ter mods, Arcanes, Catalisador, Reator ou recursos para sustentar a configuração.",
    ctas: [
      { href: "/farm", label: "Ver Farm" },
      { href: "/tier-list", label: "Ver Tier List", variant: "outline" },
      { href: "/loadouts", label: "Ver Loadouts", variant: "secondary" }
    ] satisfies GuideCtaItem[]
  },
  {
    title: "Meio do jogo",
    description: "Hora de preparar mods, reputações importantes e primeiras armas fortes sem exagerar no investimento.",
    objective: "Organizar mods, abrir reputações úteis, melhorar economia de créditos/Endo e montar primeiros setups consistentes.",
    farm: "Endo, créditos, relíquias, reputações importantes, recursos para Catalisador, Reator e Forma.",
    farmHref: "/farm-creditos",
    warframes: "Wisp, Rhino, Nezha, Revenant, Protea ou outro Warframe confortável conforme seu progresso.",
    weapons: "Opções que funcionem sem investimento absurdo e que cubram clear ou alvo resistente.",
    weaponHref: "/melhores-armas-primarias",
    forma: "Gaste Forma em itens que resolvem várias missões, não em armas que serão trocadas rapidamente.",
    formaHref: "/meta-atual",
    avoid: "Investir pesado em uma arma só porque parece forte no papel, sem saber qual função ela cumpre no seu loadout.",
    ctas: [
      { href: "/builds", label: "Ver Builds" },
      { href: "/farm-endo", label: "Farm de Endo", variant: "outline" },
      { href: "/farm-creditos", label: "Farm de Créditos", variant: "outline" }
    ] satisfies GuideCtaItem[]
  },
  {
    title: "Pré-Steel Path",
    description: "Antes de entrar no Steel Path, monte pelo menos um setup confiável com dano, sobrevivência e sustain.",
    objective: "Ter um Warframe seguro, uma arma principal forte, mods preparados e plano contra armadura, Eximus e inimigos resistentes.",
    farm: "Galvanized Mods, Arcanes básicos, Forma, Catalisador, Reator, créditos e Endo para fechar mods principais.",
    farmHref: "/farm",
    warframes: "Revenant, Wisp, Dante, Protea, Nezha ou opções confortáveis que mantenham sobrevivência sem rotação frágil.",
    weapons: "Laetum, Felarx, Torid Incarnon, Phenmor ou alternativas que sua conta consiga montar.",
    weaponHref: "/builds",
    forma: "Priorize o Warframe principal, uma arma de clear e uma resposta para alvo pesado.",
    formaHref: "/builds",
    avoid: "Entrar no Steel Path sem dano, sobrevivência, mods upados ou forma mínima nos itens principais.",
    ctas: [
      { href: "/steel-path", label: "Checklist Steel Path" },
      { href: "/builds", label: "Builds recomendadas", variant: "outline" },
      { href: "/incarnon", label: "Ver Incarnon", variant: "outline" }
    ] satisfies GuideCtaItem[]
  },
  {
    title: "Steel Path",
    description: "A prioridade passa a ser consistência: sobreviver, matar rápido e adaptar elemento por missão.",
    objective: "Completar missões com segurança, lidar com Eximus, manter clear e ter uma resposta para alvo pesado.",
    farm: "Arcanes, Kuva, Endo, Incarnon, recursos avançados e loadouts por objetivo.",
    farmHref: "/steel-path",
    warframes: "Dante, Revenant, Wisp, Protea, Saryn, Citrine ou outro Warframe que entregue defesa, dano ou suporte confiável.",
    weapons: "Torid Incarnon para clear, Felarx para alvo pesado, Laetum como secundária forte e Praedos para mobilidade.",
    weaponHref: "/builds/torid-incarnon",
    forma: "Invista em peças centrais do loadout, revisando Arcanes, elementos e conforto antes de gastar demais.",
    formaHref: "/loadouts",
    avoid: "Builds sem sinergia, sem elemento ajustado à facção, sem sustain ou sem plano contra inimigos resistentes.",
    ctas: [
      { href: "/loadouts", label: "Ver Loadouts" },
      { href: "/meta-atual", label: "Ver Meta Atual", variant: "outline" },
      { href: "/farm-kuva", label: "Farm de Kuva", variant: "outline" }
    ] satisfies GuideCtaItem[]
  },
  {
    title: "Endgame",
    description: "No endgame, o foco é otimizar por missão sem acreditar que existe uma única build certa.",
    objective: "Refinar builds para missões longas, bosses, Circuito, Arquimídia, farms dedicados e variações por facção.",
    farm: "Arcanes melhores, shards quando aplicável, Rivens opcionais, Incarnon e builds alternativas.",
    farmHref: "/incarnon",
    warframes: "Escolha conforme função: sobrevivência, clear, boss, suporte, farm ou mobilidade.",
    weapons: "Ajuste conforme conteúdo: Torid Incarnon para clear, Felarx/Laetum para alvo pesado e Praedos para conforto.",
    weaponHref: "/meta-atual",
    forma: "Use Forma para variações que você realmente repete: boss, farm, Steel Path, Circuito ou missões longas.",
    formaHref: "/builds",
    avoid: "Tratar ranking como regra absoluta. Updates, hotfixes, Arcanes, Rivens, Helminth e balanceamentos mudam prioridades.",
    ctas: [
      { href: "/meta-atual", label: "Ver Meta Atual" },
      { href: "/builds", label: "Builds avançadas", variant: "outline" },
      { href: "/incarnon", label: "Ver Incarnon", variant: "outline" }
    ] satisfies GuideCtaItem[]
  }
];
