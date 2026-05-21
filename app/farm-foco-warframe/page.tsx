import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideCtaRow, GuideTable, NextGuideLinks } from "@/components/guide-ui";
import { SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Farm de Foco Warframe 2026 — Melhores Métodos para Pontos de Escola",
  description: "Guia de farm de foco em Warframe com métodos para iniciantes, intermediários e jogadores avançados.",
  alternates: { canonical: "/farm-foco-warframe" },
  openGraph: {
    title: "Farm de Foco Warframe 2026 — Melhores Métodos para Pontos de Escola",
    description: "Guia de farm de foco em Warframe com métodos para iniciantes, intermediários e jogadores avançados.",
    url: "/farm-foco-warframe"
  },
  twitter: {
    card: "summary_large_image",
    title: "Farm de Foco Warframe 2026 — Melhores Métodos para Pontos de Escola",
    description: "Guia de farm de foco em Warframe com métodos para iniciantes, intermediários e jogadores avançados."
  }
};

const methodRows = [
  {
    label: "Iniciante",
    cells: ["Lente no Warframe ou arma que você usa sempre.", "Baixa a média, mas muito consistente.", "Baixa", "Aprender convergência e desbloquear primeiros nós sem depender de build cara."]
  },
  {
    label: "Intermediário",
    cells: ["Warframe de clear e lente melhor em equipamento estável.", "Média, com boa repetição.", "Média", "Sanctuary Onslaught normal, missões densas e evolução de uma escola já escolhida."]
  },
  {
    label: "Avançado",
    cells: ["Build de clear pronta, lente forte e rotina estável.", "Alta quando a execução é consistente.", "Alta", "Elite Sanctuary Onslaught e sessões focadas em maximizar afinidade."]
  }
];

const quickAnswers = [
  {
    title: "Melhor método iniciante",
    description: "Use uma lente no Warframe ou arma que você realmente leva para missões seguras. Consistência vale mais que tentar pular etapas.",
    badge: "Iniciante",
    badgeVariant: "cyan" as const
  },
  {
    title: "Melhor método intermediário",
    description: "Sanctuary Onslaught normal e missões com muita densidade rendem bem quando você já tem um Warframe de clear confiável.",
    badge: "Intermediário",
    badgeVariant: "meta" as const
  },
  {
    title: "Melhor método avançado",
    description: "Elite Sanctuary Onslaught é a rota mais direta quando sua build limpa rápido e você consegue repetir a sessão sem falhar.",
    badge: "Avançado",
    badgeVariant: "steel" as const
  },
  {
    title: "Melhor lente para investir",
    description: "Use lente melhor apenas na escola e no equipamento que você tem certeza que vai manter no farm.",
    badge: "Lentes",
    badgeVariant: "farm" as const
  },
  {
    title: "Prioridade prática",
    description: "Escolha uma escola, instale a lente certa, pegue convergência e só depois otimize tempo.",
    badge: "Plano",
    badgeVariant: "outline" as const
  }
];

const lensRows = [
  {
    label: "Lente normal",
    cells: ["Primeira opção para começar a ganhar foco de uma escola.", "Boa quando você ainda está testando Zenurik, Madurai, Unairu, Vazarin ou Naramon.", "Use em item que você realmente leva para missões."]
  },
  {
    label: "Lente maior",
    cells: ["Versão melhorada da lente comum, com retorno mais eficiente.", "Vale quando você já escolheu uma escola prioritária.", "Evite colocar em equipamento que será abandonado rápido."]
  },
  {
    label: "Lente Eidolon",
    cells: ["Opção mais forte que a lente maior e ligada a progresso em conteúdo de Eidolon.", "Boa para acelerar uma escola importante depois que sua conta já tem plano claro.", "Não gaste cedo se ainda está mudando de escola toda hora."]
  },
  {
    label: "Lente Lua",
    cells: ["Uma das melhores lentes para conversão de afinidade em foco.", "Use em Warframes ou armas que você mantém no loadout principal de farm.", "Guarde para setups estáveis de farm, especialmente clear em SO ou ESO."]
  }
];

const tips = [
  {
    title: "Use lente no item certo",
    description: "Se o Warframe mata com habilidade, a lente nele costuma render melhor. Se a arma carrega a missão, coloque lente na arma que realmente recebe afinidade.",
    badge: "Lentes",
    badgeVariant: "cyan" as const
  },
  {
    title: "Pegue orbes de convergência",
    description: "A convergência aumenta o ganho de foco por tempo limitado. Planeje a rota para matar bastante logo depois de pegar o orbe.",
    badge: "Convergência",
    badgeVariant: "meta" as const
  },
  {
    title: "Escolha a escola antes",
    description: "A lente define qual escola recebe foco. Evite distribuir pontos sem plano se você ainda precisa terminar Zenurik, Madurai ou Unairu.",
    badge: "Prioridade",
    badgeVariant: "steel" as const
  },
  {
    title: "Leve clear confortável",
    description: "Foco vem de afinidade. Quanto mais consistente o clear, melhor o resultado sem precisar inventar uma rota complicada.",
    badge: "Clear",
    badgeVariant: "farm" as const
  }
];

const mistakes = [
  {
    title: "Lente em equipamento errado",
    description: "Colocar lente em arma que quase não mata ou em item que não está no nível máximo reduz muito o retorno.",
    badge: "Erro comum",
    badgeVariant: "outline" as const
  },
  {
    title: "Ignorar sobrevivência",
    description: "Morrer durante convergência corta o ritmo e atrapalha a sessão. Ajuste defesa antes de buscar dano máximo.",
    badge: "Segurança",
    badgeVariant: "steel" as const
  },
  {
    title: "Trocar de escola toda hora",
    description: "Escolha uma escola prioritária e termine os nós importantes antes de espalhar foco em todas ao mesmo tempo.",
    badge: "Foco",
    badgeVariant: "cyan" as const
  },
  {
    title: "Entrar no ESO sem build pronta",
    description: "Elite Sanctuary Onslaught pune setup fraco. Se o clear cair, volte para método intermediário e melhore a build.",
    badge: "Endgame",
    badgeVariant: "meta" as const
  }
];

const ctaLinks = [
  { href: "/melhor-escola-warframe", label: "Ver Melhor Escola" },
  { href: "/melhor-amp-operador-warframe", label: "Ver Melhor Amp", variant: "outline" as const },
  { href: "/farm", label: "Ver guia de Farm", variant: "outline" as const },
  { href: "/loadouts", label: "Montar Loadout", variant: "secondary" as const }
];

const nextGuides = [
  { title: "Melhor Escola Warframe", description: "Escolha onde investir foco antes de colocar lentes melhores nos seus equipamentos.", href: "/melhor-escola-warframe", badge: "Foco", badgeVariant: "meta" as const },
  { title: "Melhor Amp do Operador", description: "Use o foco para fortalecer uma escola que combina com seu Amp e seu objetivo.", href: "/melhor-amp-operador-warframe", badge: "Operador", badgeVariant: "cyan" as const },
  { title: "Guias de Farm", description: "Veja rotas para créditos, recursos e progresso sem trocar de método toda hora.", href: "/farm", badge: "Farm", badgeVariant: "farm" as const }
];

const faq = [
  {
    question: "Qual é o melhor lugar para farmar foco?",
    answer: "Para contas avançadas, Elite Sanctuary Onslaught costuma ser a rota mais direta e consistente. Para contas em evolução, Sanctuary Onslaught normal e missões densas com lente bem colocada são mais confortáveis."
  },
  {
    question: "O que são lentes de foco?",
    answer: "Lentes convertem parte da afinidade recebida por um equipamento no nível máximo em pontos de uma escola específica. A escola da lente define para onde os pontos vão."
  },
  {
    question: "Vale usar lente Lua ou Eidolon cedo?",
    answer: "Use lentes melhores quando você já sabe qual escola quer evoluir. Se ainda está testando, comece com uma lente mais simples para não desperdiçar recurso."
  },
  {
    question: "Farm de foco precisa de grupo?",
    answer: "Não precisa, mas um grupo com bom clear deixa Sanctuary Onslaught e Elite Sanctuary Onslaught mais estáveis. Solo funciona melhor quando sua build já limpa rápido."
  },
  {
    question: "Lente Lua vale em qualquer item?",
    answer: "Não. Ela vale mais em Warframes e armas que você usa sempre no farm. Colocar lente forte em item pouco usado reduz o retorno do investimento."
  },
  {
    question: "Devo farmar foco antes de Steel Path?",
    answer: "Vale evoluir pelo menos uma escola útil antes de focar Steel Path pesado. Zenurik, Madurai e Unairu resolvem problemas diferentes e ajudam bastante na transição."
  }
];

export default function FarmFocoWarframePage() {
  const articleSchema = articleJsonLd({
    title: "Farm de Foco Warframe 2026 — Melhores Métodos para Pontos de Escola",
    description: metadata.description || "",
    path: "/farm-foco-warframe"
  });

  return (
    <SeoPage
      eyebrow="Farm"
      title="Farm de Foco Warframe 2026"
      description="Aprenda a ganhar pontos de escola com lentes, convergência e métodos por estágio da conta."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Guias", href: "/#guias-recomendados" },
        { label: "Farm de Foco", href: "/farm-foco-warframe" }
      ]}
      structuredData={articleSchema}
    >
      <SectionBlock title="Resposta rápida" description="Escolha o método de farm pelo estágio da sua conta e pelo quanto sua build consegue repetir sem cair.">
        <GuideCardGrid items={quickAnswers} />
        <GuideCtaRow items={ctaLinks} />
      </SectionBlock>

      <SectionBlock title="O que é foco?" description="Foco é o recurso usado para desbloquear e evoluir habilidades das escolas do Operador: Zenurik, Madurai, Unairu, Vazarin e Naramon.">
        <GuideCardGrid
          items={[
            { title: "Pontos de escola", description: "Você gasta foco para liberar nós, melhorar habilidades e avançar a árvore escolhida.", badge: "Progressão", badgeVariant: "cyan" },
            { title: "Lentes", description: "A lente instalada define qual escola recebe os pontos gerados pela afinidade daquele equipamento.", badge: "Conversão", badgeVariant: "meta" },
            { title: "Convergência", description: "Orbes amarelos aparecem em missão quando há lente equipada e aumentam o ganho por um curto período.", badge: "Ritmo", badgeVariant: "farm" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Como funcionam lentes" description="Lentes convertem afinidade de equipamentos no nível máximo em pontos da escola escolhida. O item certo importa tanto quanto a lente.">
        <GuideCardGrid
          items={[
            { title: "Warframe que mata muito", description: "Se suas habilidades fazem o clear, coloque lente no Warframe usado para farm.", badge: "Clear", badgeVariant: "meta" },
            { title: "Arma principal da missão", description: "Se a arma carrega a afinidade, a lente nela tende a render melhor.", badge: "Arma", badgeVariant: "cyan" },
            { title: "Escola já decidida", description: "Lentes melhores devem ir para a escola que você realmente quer evoluir agora.", badge: "Prioridade", badgeVariant: "steel" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Diferença entre lentes de foco" description="Todas convertem afinidade em pontos de escola, mas lentes melhores aproveitam melhor o tempo investido.">
        <GuideTable columns={["Como funciona", "Quando usar", "Atenção"]} rows={lensRows} />
      </SectionBlock>

      <SectionBlock title="Melhor lugar para farmar foco" description="Elite Sanctuary Onslaught é a rota mais forte quando você já tem build de clear, mas não é a melhor primeira opção para toda conta.">
        <GuideCardGrid
          items={[
            { title: "Melhor método avançado", description: "Elite Sanctuary Onslaught com Warframe de clear, lente boa e rotação estável.", badge: "Endgame", badgeVariant: "steel" },
            { title: "Melhor método intermediário", description: "Sanctuary Onslaught normal ou missões com muita densidade, sem exigir o mesmo nível de investimento.", badge: "Intermediário", badgeVariant: "cyan" },
            { title: "Melhor método iniciante", description: "Missões seguras que você já completa rápido, usando lente no Warframe ou arma que mais recebe afinidade.", badge: "Iniciante", badgeVariant: "outline" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Métodos por estágio da conta" description="Não force ESO se sua build ainda falha; foco bom é foco que você consegue repetir.">
        <GuideTable columns={["Requisito", "Velocidade", "Dificuldade", "Melhor para"]} rows={methodRows} />
      </SectionBlock>

      <SectionBlock title="Dicas para farmar mais rápido" description="A maior parte do ganho vem de escolher bem a lente, matar rápido e aproveitar a convergência.">
        <GuideCardGrid items={tips} columns="four" />
      </SectionBlock>

      <SectionBlock title="Erros comuns" description="Evite perder tempo em setups que parecem bons, mas geram pouco foco na prática.">
        <GuideCardGrid items={mistakes} columns="four" />
      </SectionBlock>

      <FaqSection items={faq} />
      <NextGuideLinks links={nextGuides} />
    </SeoPage>
  );
}
