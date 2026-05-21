import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideTable } from "@/components/guide-ui";
import { InternalLinks, SectionBlock, SeoPage } from "@/components/seo/seo-page";
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
    cells: ["Missões que você completa sem morrer, com lente no Warframe mais usado.", "Consistência, aprender convergência e desbloquear primeiros nós.", "Não coloque lente em item que você troca toda hora."]
  },
  {
    label: "Intermediário",
    cells: ["Sanctuary Onslaught normal ou missões densas com Warframe de clear.", "Gerar afinidade rápido sem exigir build endgame.", "Use uma lente melhor quando já tiver certeza da escola."]
  },
  {
    label: "Avançado",
    cells: ["Elite Sanctuary Onslaught com Warframe de clear e equipe estável.", "Farm direto de foco por afinidade com ritmo alto.", "Entre com build pronta; testar setup novo durante o farm reduz muito a consistência."]
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
      <SectionBlock title="O que é foco?" description="Foco é o recurso usado para desbloquear e evoluir habilidades das escolas do Operador: Zenurik, Madurai, Unairu, Vazarin e Naramon.">
        <GuideCardGrid
          items={[
            { title: "Pontos de escola", description: "Você gasta foco para liberar nós, melhorar habilidades e avançar a árvore escolhida.", badge: "Progressão", badgeVariant: "cyan" },
            { title: "Lentes", description: "A lente instalada define qual escola recebe os pontos gerados pela afinidade daquele equipamento.", badge: "Conversão", badgeVariant: "meta" },
            { title: "Convergência", description: "Orbes amarelos aparecem em missão quando há lente equipada e aumentam o ganho por um curto período.", badge: "Ritmo", badgeVariant: "farm" }
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
        <GuideTable columns={["Onde farmar", "Objetivo", "Atenção"]} rows={methodRows} />
      </SectionBlock>

      <SectionBlock title="Dicas para farmar mais rápido" description="A maior parte do ganho vem de escolher bem a lente, matar rápido e aproveitar a convergência.">
        <GuideCardGrid items={tips} columns="four" />
      </SectionBlock>

      <SectionBlock title="Erros comuns" description="Evite perder tempo em setups que parecem bons, mas geram pouco foco na prática.">
        <GuideCardGrid items={mistakes} columns="four" />
      </SectionBlock>

      <InternalLinks
        links={[
          { title: "Melhor Escola Warframe", description: "Decida primeiro se seu foco vai para Zenurik, Madurai, Unairu, Vazarin ou Naramon.", href: "/melhor-escola-warframe" },
          { title: "Melhor Amp do Operador", description: "Combine sua escola com um Amp útil para Operador, Eidolon e Void Angels.", href: "/melhor-amp-operador-warframe" },
          { title: "Warframes para farm de foco", description: "Escolha Saryn, Volt, Mirage ou outra opção de clear para SO e ESO.", href: "/melhores-warframes-farm-foco" },
          { title: "Farm Warframe", description: "Veja outros guias de farm para créditos, recursos e rotas repetidas.", href: "/farm" }
        ]}
      />

      <FaqSection items={faq} />
    </SeoPage>
  );
}
