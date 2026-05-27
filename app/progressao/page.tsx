import type { Metadata } from "next";
import { GuideCtaRow } from "@/components/guide-ui";
import { InfoCardGrid, InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Roadmap de Progressão Warframe — O que Fazer Primeiro",
  description: "Roteiro de progressão Warframe em português com prioridades para planetas, mods, Warframes, armas, farms, Incarnon e Steel Path.",
  alternates: { canonical: "/progressao" },
  openGraph: {
    title: "Roadmap de Progressão Warframe — O que Fazer Primeiro",
    description: "Veja uma rota prática para evoluir a conta sem gastar recursos cedo demais.",
    url: "/progressao"
  },
  twitter: {
    card: "summary_large_image",
    title: "Roadmap de Progressão Warframe — O que Fazer Primeiro",
    description: "Roteiro de progressão Warframe por prioridade: mods, farms, builds, Incarnon e Steel Path."
  }
};

export default function ProgressaoPage() {
  const schema = articleJsonLd({
    title: "Roadmap de Progressão Warframe",
    description: "Roteiro de progressão para jogadores brasileiros de Warframe.",
    path: "/progressao"
  });

  return (
    <SeoPage
      eyebrow="Progressão"
      title="Roadmap de Progressão Warframe"
      description="Uma rota recomendada para decidir o que fazer primeiro, sem tratar o meta como regra absoluta."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Progressão", href: "/progressao" }
      ]}
      structuredData={schema}
    >
      <SectionBlock title="Antes de seguir o roteiro" description="Use como direção prática. Sua conta, mods, Arcanes, Warframes liberados e preferência de gameplay podem mudar a ordem ideal.">
        <Card className="border-l-4 border-l-yellow-300 p-4">
          <p className="text-sm leading-6 text-muted-foreground">
            Este roadmap não é uma regra absoluta. Ele ajuda a evitar desperdício de Forma, créditos, Endo, Kuva e tempo, priorizando uma base segura antes de builds caras.
          </p>
        </Card>
        <GuideCtaRow
          items={[
            { href: "/planejador", label: "Gerar plano" },
            { href: "/comece-aqui", label: "Ver Comece Aqui" },
            { href: "/tier-list", label: "Abrir Tier List", variant: "outline" },
            { href: "/farm", label: "Ver Farm", variant: "outline" },
            { href: "/loadouts", label: "Montar Loadout", variant: "secondary" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Etapas recomendadas" description="Cada etapa tem objetivo, ação prática, erro comum e links úteis.">
        <div className="grid gap-3">
          {steps.map((step, index) => (
            <Card key={step.title} className="p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <Badge variant="cyan">Etapa {index + 1}</Badge>
                  <h2 className="mt-3 text-2xl font-black text-yellow-100">{step.title}</h2>
                </div>
                <Badge variant="outline">{step.stage}</Badge>
              </div>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                <MiniBlock title="Objetivo" text={step.objective} />
                <MiniBlock title="O que fazer" text={step.action} />
                <MiniBlock title="Erro comum" text={step.mistake} />
              </div>
              <GuideCtaRow items={step.links} />
            </Card>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Prioridade por estágio" description="Atalhos para decidir onde investir quando você está sem direção.">
        <InfoCardGrid
          cards={[
            { title: "Conta nova", description: "Planetas, mods base, créditos, Endo e Warframe seguro antes de build cara.", href: "/comece-aqui", tags: ["Iniciante"] },
            { title: "Meio do jogo", description: "Endo, créditos, reputações, primeiras armas fortes e loadouts consistentes.", href: "/farm-endo", tags: ["Base"] },
            { title: "Pré-Steel Path", description: "Mods Galvanized, Arcanes, Forma, Catalisador/Reator e plano contra Eximus.", href: "/steel-path", tags: ["Checklist"] },
            { title: "Steel Path", description: "Sobrevivência confiável, arma de clear, alvo pesado e loadout salvo.", href: "/loadouts", tags: ["Setup"] },
            { title: "Endgame", description: "Incarnon, Arcanes melhores, variações por facção e builds de objetivo específico.", href: "/incarnon", tags: ["Otimização"] },
            { title: "Recursos", description: "Créditos, Endo e Kuva devem acompanhar a progressão, não virar gasto sem plano.", href: "/farm", tags: ["Farm"] }
          ]}
        />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Tier List", description: "Compare prioridades antes de gastar Forma e Catalisador.", href: "/tier-list" },
          { title: "Planejador", description: "Gere um plano prático para a etapa atual da sua conta.", href: "/planejador" },
          { title: "Comparador", description: "Compare armas, Warframes e builds antes de investir.", href: "/comparar" },
          { title: "Builds", description: "Veja guias de Felarx, Laetum, Praedos, Torid e outras armas Incarnon.", href: "/builds" },
          { title: "Farm de créditos", description: "Organize créditos por estágio da conta.", href: "/farm-creditos" },
          { title: "Farm de Endo", description: "Evolua mods sem gastar recursos em prioridade errada.", href: "/farm-endo" },
          { title: "Incarnon", description: "Entenda quando buscar adaptadores e armas mais caras.", href: "/incarnon" },
          { title: "Steel Path", description: "Checklist para entrar em conteúdo mais exigente.", href: "/steel-path" }
        ]}
      />
    </SeoPage>
  );
}

function MiniBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-md border border-border/70 bg-background/45 p-3">
      <h3 className="text-xs font-black uppercase text-cyan-100/80">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

const steps = [
  {
    title: "Liberar planetas",
    stage: "Base",
    objective: "Abrir acesso a missões, recursos, chefes e sistemas da conta.",
    action: "Complete nós, junctions e quests que liberam novos planetas sem gastar Forma em todo item temporário.",
    mistake: "Parar cedo para copiar build endgame sem ter mods, recursos ou acesso necessário.",
    links: [
      { href: "/comece-aqui", label: "Comece Aqui" },
      { href: "/farm", label: "Ver Farm", variant: "outline" as const }
    ]
  },
  {
    title: "Farmar mods base",
    stage: "Mods",
    objective: "Construir dano, sobrevivência, multishot, elemento, crítico/status e utilidade.",
    action: "Evolua primeiro mods usados em várias builds e junte Endo sem gastar tudo em mods de luxo.",
    mistake: "Upar muitos mods ao mesmo tempo e ficar sem Endo para o que realmente entra no loadout.",
    links: [
      { href: "/farm-endo", label: "Farm de Endo" },
      { href: "/builds", label: "Ver Builds", variant: "outline" as const }
    ]
  },
  {
    title: "Montar Warframe seguro",
    stage: "Sobrevivência",
    objective: "Ter um Warframe que aguenta missões longas, objetivos e erro humano.",
    action: "Escolha uma opção resistente ou confortável, depois ajuste energia, sustain, escudo, controle ou redução de dano.",
    mistake: "Usar só dano e entrar em conteúdo alto sem plano para sobreviver.",
    links: [
      { href: "/melhores-warframes", label: "Melhores Warframes" },
      { href: "/loadouts", label: "Loadouts", variant: "outline" as const }
    ]
  },
  {
    title: "Escolher arma principal confiável",
    stage: "Dano",
    objective: "Ter pelo menos uma arma que resolve grupos ou alvos resistentes com consistência.",
    action: "Compare função antes de investir: clear, alvo único, boss, farm ou Steel Path.",
    mistake: "Gastar Catalisador em arma sem função clara só porque aparece em ranking.",
    links: [
      { href: "/tier-list", label: "Tier List" },
      { href: "/builds/felarx", label: "Build Felarx", variant: "outline" as const }
    ]
  },
  {
    title: "Farmar créditos e Endo",
    stage: "Economia",
    objective: "Sustentar mods, fabricação, trades, upgrades e builds sem travar a conta.",
    action: "Use rotas seguras primeiro; depois otimize Index, Arbitrations, Ayatan e outros métodos conforme progresso.",
    mistake: "Tentar farm endgame com setup fraco e perder mais tempo do que economiza.",
    links: [
      { href: "/farm-creditos", label: "Farm de Créditos" },
      { href: "/farm-endo", label: "Farm de Endo", variant: "outline" as const }
    ]
  },
  {
    title: "Liberar reputações importantes",
    stage: "Sistemas",
    objective: "Abrir acesso a itens, armas, Arcanes, Amp, operadores e recursos de progressão.",
    action: "Priorize reputações que destravam poder real para sua conta, sem tentar maximizar tudo ao mesmo tempo.",
    mistake: "Ignorar reputação até precisar de um item e descobrir que o progresso ainda está travado.",
    links: [
      { href: "/melhor-escola-warframe", label: "Escolas de Foco" },
      { href: "/melhor-amp-operador-warframe", label: "Amp do Operador", variant: "outline" as const }
    ]
  },
  {
    title: "Preparar Zariman e Duviri",
    stage: "Incarnon",
    objective: "Abrir caminho para armas Incarnon, foco, recursos avançados e builds modernas.",
    action: "Quando aplicável, avance nesses conteúdos com loadout seguro antes de caçar rota perfeita.",
    mistake: "Planejar adaptador Incarnon sem conferir rotação, acesso e recursos no jogo.",
    links: [
      { href: "/incarnon", label: "Guia Incarnon" },
      { href: "/builds/laetum", label: "Build Laetum", variant: "outline" as const }
    ]
  },
  {
    title: "Buscar armas Incarnon",
    stage: "Investimento",
    objective: "Adicionar peças que mudam clear, alvo pesado, mobilidade ou dano sustentado.",
    action: "Priorize armas com função clara, como Torid para clear, Felarx/Laetum para alvo pesado e Praedos para conforto.",
    mistake: "Pegar adaptador forte sem ter mods, Arcane ou interesse real na arma.",
    links: [
      { href: "/builds/torid-incarnon", label: "Build Torid" },
      { href: "/builds/praedos", label: "Build Praedos", variant: "outline" as const }
    ]
  },
  {
    title: "Entrar no Steel Path",
    stage: "Endgame inicial",
    objective: "Completar conteúdo mais resistente com sobrevivência, dano e plano contra Eximus.",
    action: "Monte um Warframe seguro, arma de clear, alvo pesado e loadout salvo antes de missões longas.",
    mistake: "Entrar sem mods upados, sem elemento ajustado e sem sustain.",
    links: [
      { href: "/steel-path", label: "Checklist Steel Path" },
      { href: "/loadouts", label: "Montar Loadout", variant: "outline" as const }
    ]
  },
  {
    title: "Otimizar Arcanes, Formas e builds",
    stage: "Endgame",
    objective: "Refinar por objetivo: boss, farm, Circuito, Arquimídia, Steel Path e missões longas.",
    action: "Crie variações por função e revise após hotfixes, Rivens, Arcanes, Incarnon, Helminth e balanceamentos.",
    mistake: "Achar que só existe uma build certa e gastar recurso sem validar em missão real.",
    links: [
      { href: "/meta-atual", label: "Meta Atual" },
      { href: "/farm-kuva", label: "Farm de Kuva", variant: "outline" as const }
    ]
  }
];
