import type { Metadata } from "next";
import { FaqSection, GuideCardGrid, GuideCtaRow, GuideTable, NextGuideLinks } from "@/components/guide-ui";
import { SectionBlock, SeoPage } from "@/components/seo/seo-page";
import { articleJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Melhor Amp do Operador Warframe 2026 — 1-2-3, 5-4-7 e 7-4-7",
  description: "Entenda quais são os melhores Amps do Operador em Warframe, como montar 5-4-7, 7-4-7 e opções para iniciantes.",
  alternates: { canonical: "/melhor-amp-operador-warframe" },
  openGraph: {
    title: "Melhor Amp do Operador Warframe 2026 — 1-2-3, 5-4-7 e 7-4-7",
    description: "Entenda quais são os melhores Amps do Operador em Warframe, como montar 5-4-7, 7-4-7 e opções para iniciantes.",
    url: "/melhor-amp-operador-warframe"
  },
  twitter: {
    card: "summary_large_image",
    title: "Melhor Amp do Operador Warframe 2026 — 1-2-3, 5-4-7 e 7-4-7",
    description: "Entenda quais são os melhores Amps do Operador em Warframe, como montar 5-4-7, 7-4-7 e opções para iniciantes."
  }
};

const ampBuilds = [
  {
    title: "5-4-7",
    description: "Melhor Amp geral para muitos jogadores avançados: tiro primário confortável, disparo alternativo útil e Brace forte para crítico.",
    badge: "Melhor geral",
    badgeVariant: "meta" as const
  },
  {
    title: "7-4-7",
    description: "Ótimo para quem já domina posicionamento do Operador e quer um Amp agressivo para alvos importantes e conteúdo endgame.",
    badge: "Endgame",
    badgeVariant: "steel" as const
  },
  {
    title: "1-2-3",
    description: "Boa rota inicial para sair do Amp básico e começar a lidar melhor com Eidolon, anjos e inimigos vulneráveis a dano do Operador.",
    badge: "Iniciante",
    badgeVariant: "cyan" as const
  }
];

const quickAnswers = [
  {
    title: "Melhor Amp geral",
    description: "5-4-7 é a escolha mais equilibrada para quem já tem acesso a peças avançadas e quer conforto em missões variadas.",
    badge: "5-4-7",
    badgeVariant: "meta" as const
  },
  {
    title: "Melhor Amp para iniciante",
    description: "1-2-3 é a rota mais clara para sair do Amp inicial sem exigir todo o progresso avançado de Fortuna.",
    badge: "1-2-3",
    badgeVariant: "cyan" as const
  },
  {
    title: "Melhor Amp para Eidolon",
    description: "7-4-7 costuma ser a opção de teto alto para jogador que domina posicionamento, buff e janela de dano.",
    badge: "7-4-7",
    badgeVariant: "tierS" as const
  },
  {
    title: "Melhor Amp para uso geral",
    description: "5-4-7 funciona bem em Zariman, Void Angels, missões comuns e situações em que conforto importa mais que burst máximo.",
    badge: "Geral",
    badgeVariant: "steel" as const
  },
  {
    title: "Melhor custo-benefício",
    description: "Monte uma opção inicial barata primeiro e avance para 1-2-3 antes de gastar reputação pesada em 5-4-7 ou 7-4-7.",
    badge: "Progressão",
    badgeVariant: "outline" as const
  }
];

const useCases = [
  {
    title: "Melhor Amp para Eidolon",
    description: "7-4-7 é uma escolha forte quando você já tem acesso às peças avançadas e sabe jogar perto do alvo. Se ainda está evoluindo, 1-2-3 já é um salto enorme sobre o Amp inicial.",
    badge: "Eidolon",
    badgeVariant: "tierS" as const
  },
  {
    title: "Melhor Amp para uso geral",
    description: "5-4-7 tende a ser mais confortável para missões variadas porque combina alcance, disparo alternativo útil e bom potencial de crítico.",
    badge: "Geral",
    badgeVariant: "meta" as const
  },
  {
    title: "Melhor para quem está começando",
    description: "1-2-3 é uma rota clara para progredir sem exigir toda a reputação avançada de Vox Solaris logo no começo.",
    badge: "Primeiro Amp",
    badgeVariant: "cyan" as const
  },
  {
    title: "Melhor Amp para Zariman/Anjos",
    description: "5-4-7 costuma ser a escolha mais confortável para Void Angels porque combina alcance, consistência e disparo alternativo útil.",
    badge: "Zariman",
    badgeVariant: "steel" as const
  }
];

const tableRows = [
  {
    label: "Opção inicial barata",
    cells: ["Sair do Amp inicial e começar a aprender peças modulares.", "Baixa", "The Quills", "Custo menor, progressão simples e melhora imediata sobre o Amp inicial.", "Não tem o mesmo teto de dano das combinações avançadas."]
  },
  {
    label: "1-2-3",
    cells: ["Primeiro Amp real, início em Eidolon e progresso pós-Operador.", "Baixa a média", "The Quills", "Boa evolução sobre o Amp inicial e fácil de entender.", "Perde espaço quando você libera peças avançadas da Vox Solaris."]
  },
  {
    label: "5-4-7",
    cells: ["Uso geral, Void Angels, missões variadas e jogador que quer conforto.", "Média a alta", "The Quills + Vox Solaris", "Boa ponte entre controle, alcance e dano crítico.", "Exige progresso em Fortuna e mais planejamento de reputação."]
  },
  {
    label: "7-4-7",
    cells: ["Eidolon, alvo importante e jogador confortável com curta distância.", "Alta", "Vox Solaris", "Teto ofensivo alto em janelas curtas de dano.", "Menos confortável para iniciante e mais dependente de posicionamento."]
  }
];

const ampMistakes = [
  {
    title: "Ficar tempo demais no Amp inicial",
    description: "O Amp inicial serve para começar, mas trava conforto em Eidolon, Zariman e conteúdo que pede dano do Operador.",
    badge: "Progresso",
    badgeVariant: "cyan" as const
  },
  {
    title: "Copiar 7-4-7 cedo demais",
    description: "A combinação é forte, mas pede reputação, peça certa e noção de alcance. Antes disso, uma rota simples costuma render mais.",
    badge: "Endgame",
    badgeVariant: "steel" as const
  },
  {
    title: "Ignorar a escola de foco",
    description: "Amp e escola trabalham juntos. Madurai aumenta dano, enquanto Unairu e Vazarin ajudam quando a dificuldade é sobreviver.",
    badge: "Foco",
    badgeVariant: "meta" as const
  },
  {
    title: "Montar sem pensar no uso",
    description: "Um Amp bom para Eidolon não é automaticamente o mais confortável para missões comuns, Void Angels ou progresso inicial.",
    badge: "Objetivo",
    badgeVariant: "outline" as const
  }
];

const ctaLinks = [
  { href: "/melhor-escola-warframe", label: "Ver Melhor Escola" },
  { href: "/farm-foco-warframe", label: "Ver Farm de Foco" },
  { href: "/incarnon", label: "Ver guia de Incarnon", variant: "outline" as const },
  { href: "/builds", label: "Ver Builds", variant: "outline" as const }
];

const nextGuides = [
  { title: "Melhor Escola Warframe", description: "Escolha a escola que combina melhor com seu Amp, Operador e objetivo de missão.", href: "/melhor-escola-warframe", badge: "Operador", badgeVariant: "meta" as const },
  { title: "Farm de Foco", description: "Evolua Zenurik, Madurai, Unairu, Vazarin ou Naramon com um plano mais eficiente.", href: "/farm-foco-warframe", badge: "Foco", badgeVariant: "cyan" as const },
  { title: "Builds", description: "Combine seu Operador com armas fortes para Steel Path, bosses e missões rápidas.", href: "/builds", badge: "Builds", badgeVariant: "steel" as const }
];

const faq = [
  {
    question: "O que significam os números do Amp?",
    answer: "A comunidade usa três números na ordem Prism, Scaffold e Brace. Eles indicam a série das peças, não um ranking automático de poder."
  },
  {
    question: "Qual Amp devo fazer primeiro?",
    answer: "Se você ainda usa o Amp inicial, faça uma combinação simples como 1-2-3. O ganho de conforto é grande e você aprende a função de cada peça antes de investir em 5-4-7 ou 7-4-7."
  },
  {
    question: "5-4-7 é melhor que 7-4-7?",
    answer: "Depende do uso. 5-4-7 costuma ser mais confortável para uso geral; 7-4-7 tende a brilhar quando você domina posicionamento e quer mais pressão em alvos importantes."
  },
  {
    question: "Preciso de Madurai para usar Amp?",
    answer: "Não. Você pode usar Amp com qualquer escola, mas Madurai aumenta muito o teto ofensivo do Operador quando o foco é dano."
  },
  {
    question: "Qual Amp tem melhor custo-benefício?",
    answer: "Para a maioria das contas em evolução, um Amp inicial barato seguido de 1-2-3 entrega o melhor custo-benefício. Depois disso, avance para 5-4-7 ou 7-4-7 quando a reputação permitir."
  },
  {
    question: "Qual Amp usar contra Void Angels?",
    answer: "5-4-7 é uma recomendação confortável para Void Angels e Zariman porque não depende tanto de ficar colado no alvo. Se você já domina o combate, valide variações mais agressivas."
  }
];

export default function MelhorAmpOperadorWarframePage() {
  const articleSchema = articleJsonLd({
    title: "Melhor Amp do Operador Warframe 2026 — 1-2-3, 5-4-7 e 7-4-7",
    description: metadata.description || "",
    path: "/melhor-amp-operador-warframe"
  });

  return (
    <SeoPage
      eyebrow="Operador"
      title="Melhor Amp do Operador Warframe 2026"
      description="Entenda Amp, combinações 1-2-3, 5-4-7 e 7-4-7, e escolha uma build para Eidolon, uso geral ou progresso inicial."
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Guias", href: "/#guias-recomendados" },
        { label: "Melhor Amp do Operador", href: "/melhor-amp-operador-warframe" }
      ]}
      structuredData={articleSchema}
    >
      <SectionBlock title="Resposta rápida" description="Escolha direta para montar um Amp sem perder tempo com combinações que não resolvem seu objetivo atual.">
        <GuideCardGrid items={quickAnswers} />
        <GuideCtaRow items={ctaLinks} />
      </SectionBlock>

      <SectionBlock title="O que é Amp?" description="Amp é a arma modular do Operador/Drifter. Ele muda o disparo principal, o disparo alternativo e bônus de atributos por meio de três peças.">
        <GuideCardGrid
          items={[
            { title: "Prism", description: "Define o disparo principal do Amp. É o primeiro número da combinação.", badge: "1º número", badgeVariant: "cyan" },
            { title: "Scaffold", description: "Define o disparo alternativo. É o segundo número e costuma mudar bastante o uso contra grupos ou bosses.", badge: "2º número", badgeVariant: "outline" },
            { title: "Brace", description: "Adiciona bônus ao conjunto. O Certus Brace é muito usado em builds avançadas pelo valor ofensivo.", badge: "3º número", badgeVariant: "meta" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Como ler 1-2-3, 5-4-7 e 7-4-7" description="Os números seguem a ordem Prism, Scaffold e Brace. Eles ajudam a falar da build sem escrever o nome completo de cada peça.">
        <GuideTable columns={["Uso recomendado", "Dificuldade para obter", "Reputação necessária", "Pontos fortes", "Pontos fracos"]} rows={tableRows} />
      </SectionBlock>

      <SectionBlock title="Melhores builds de Amp" description="Escolhas práticas para sair do Amp inicial e preparar o Operador para conteúdo mais difícil.">
        <GuideCardGrid items={ampBuilds} />
      </SectionBlock>

      <SectionBlock title="Melhor Amp por objetivo" description="Escolha pelo problema que você quer resolver agora.">
        <GuideCardGrid items={useCases} />
      </SectionBlock>

      <SectionBlock title="Onde conseguir as peças" description="As peças de Amp são compradas com reputação em sindicatos ligados ao Operador.">
        <GuideCardGrid
          items={[
            { title: "Peças 1 a 4", description: "Vêm dos Quills com Onkko em Cetus. São a rota natural para o primeiro Amp útil.", badge: "Cetus", badgeVariant: "cyan" },
            { title: "Peças 5 a 7", description: "Vêm da Vox Solaris com Little Duck em Fortuna. Elas pedem mais progresso, mas abrem builds endgame.", badge: "Fortuna", badgeVariant: "steel" },
            { title: "Monte antes de gildar", description: "Escolha as três peças com calma. Depois de construir um Amp, trate como investimento real da sua conta.", badge: "Atenção", badgeVariant: "outline" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Quais reputações são necessárias" description="A progressão de Amp depende dos sindicatos do Operador. Planeje reputação antes de gastar recursos em uma combinação final.">
        <GuideCardGrid
          items={[
            { title: "The Quills", description: "Use a reputação dos Quills em Cetus para comprar as primeiras peças e montar combinações como 1-2-3.", badge: "Início", badgeVariant: "cyan" },
            { title: "Vox Solaris", description: "Use a reputação da Vox Solaris em Fortuna para liberar peças avançadas usadas em 5-4-7 e 7-4-7.", badge: "Avançado", badgeVariant: "steel" },
            { title: "Ordem prática", description: "Monte um Amp inicial primeiro, evolua reputação com calma e só depois feche uma build endgame com peças de Fortuna.", badge: "Plano", badgeVariant: "meta" }
          ]}
        />
      </SectionBlock>

      <SectionBlock title="Erros comuns ao montar Amp" description="Evite gastar reputação em uma combinação que não combina com seu estágio da conta.">
        <GuideCardGrid items={ampMistakes} columns="four" />
      </SectionBlock>

      <FaqSection items={faq} />
      <NextGuideLinks links={nextGuides} />
    </SeoPage>
  );
}
