export interface CompareItem {
  id: string;
  name: string;
  category: "Warframe" | "Primária" | "Secundária" | "Melee" | "Build";
  tier: "S" | "A" | "B" | "C" | "D" | "Sem nota";
  role: string;
  investment: "Baixo" | "Médio" | "Alto";
  difficulty: "Baixa" | "Média" | "Alta";
  bestUse: string;
  strengths: string[];
  weaknesses: string[];
  href?: string;
  note: string;
}

export const compareItems: CompareItem[] = [
  {
    id: "dante",
    name: "Dante",
    category: "Warframe",
    tier: "S",
    role: "Segurança, dano em área e suporte",
    investment: "Médio",
    difficulty: "Média",
    bestUse: "Steel Path, missões longas e conteúdo geral",
    strengths: ["Boa proteção", "Dano confortável", "Funciona bem solo e em grupo"],
    weaknesses: ["Pede rotação ativa", "Pode perder valor se a missão exigir função muito específica"],
    note: "Escolha segura quando a conta precisa de estabilidade sem depender só de arma."
  },
  {
    id: "revenant-prime",
    name: "Revenant Prime",
    category: "Warframe",
    tier: "S",
    role: "Sobrevivência simples e conteúdo solo",
    investment: "Médio",
    difficulty: "Baixa",
    bestUse: "Steel Path, bosses e missões em que morrer é o maior problema",
    strengths: ["Muito seguro", "Fácil de usar", "Ótimo para aprender conteúdo difícil"],
    weaknesses: ["Menos focado em acelerar farm", "Depende das armas para boa parte do dano"],
    note: "Recomendado para jogadores que querem uma escolha confortável antes de otimizar dano."
  },
  {
    id: "wisp-prime",
    name: "Wisp Prime",
    category: "Warframe",
    tier: "S",
    role: "Suporte, velocidade e conforto",
    investment: "Médio",
    difficulty: "Média",
    bestUse: "Farm, grupo, bosses e missões longas",
    strengths: ["Buffs úteis", "Ajuda armas e equipe", "Boa flexibilidade"],
    weaknesses: ["Precisa posicionar reservatórios", "Não substitui uma arma forte contra alvo pesado"],
    note: "Boa para quem quer melhorar consistência do loadout sem complicar demais."
  },
  {
    id: "protea-prime",
    name: "Protea Prime",
    category: "Warframe",
    tier: "S",
    role: "Energia, dano e utilidade",
    investment: "Alto",
    difficulty: "Alta",
    bestUse: "Missões longas, suporte de recursos e setups ativos",
    strengths: ["Kit completo", "Boa sustentação", "Escala bem com investimento"],
    weaknesses: ["Exige mais atenção", "Pode ser exagero para missões simples"],
    note: "Boa para jogadores que gostam de kit ativo e querem mais controle da missão."
  },
  {
    id: "saryn-prime",
    name: "Saryn Prime",
    category: "Warframe",
    tier: "S",
    role: "Clear em área e farm de foco",
    investment: "Alto",
    difficulty: "Alta",
    bestUse: "ESO, missões densas e farm com muitos inimigos",
    strengths: ["Clear muito forte", "Excelente em densidade", "Boa para foco quando preparada"],
    weaknesses: ["Menos confortável em baixa densidade", "Pede entendimento de rotação"],
    note: "Melhor quando a missão tem muitos inimigos e a build já sustenta energia/dano."
  },
  {
    id: "rhino",
    name: "Rhino",
    category: "Warframe",
    tier: "A",
    role: "Sobrevivência e buff simples",
    investment: "Baixo",
    difficulty: "Baixa",
    bestUse: "Conta nova, campanha, bosses iniciais e base segura",
    strengths: ["Fácil de entender", "Resistente", "Bom custo-benefício"],
    weaknesses: ["Escala menos que opções modernas", "Pode ficar lento em farms otimizados"],
    note: "Excelente ponte para contas novas antes de investir em opções endgame."
  },
  {
    id: "felarx",
    name: "Felarx",
    category: "Primária",
    tier: "S",
    role: "Dano alto em alvo único",
    investment: "Alto",
    difficulty: "Alta",
    bestUse: "Bosses, Steel Path e inimigos resistentes",
    strengths: ["Excelente contra alvo pesado", "Ótima com investimento", "Boa para complementar armas de clear"],
    weaknesses: ["Não é a opção mais confortável para limpar mapa inteiro", "Pede mods, Arcane e evolução correta"],
    href: "/builds/felarx",
    note: "Priorize quando o problema da conta é boss, Eximus ou alvo resistente."
  },
  {
    id: "laetum",
    name: "Laetum",
    category: "Secundária",
    tier: "S",
    role: "Secundária confiável para dano consistente",
    investment: "Alto",
    difficulty: "Alta",
    bestUse: "Steel Path, bosses e plano B para alvo resistente",
    strengths: ["Muito forte como secundária", "Boa cobertura para loadouts", "Escala bem com Arcanes"],
    weaknesses: ["Pede acesso e investimento", "Precisa encaixar na rotação do jogador"],
    href: "/builds/laetum",
    note: "Boa quando a primária já cobre clear e falta resposta confiável para alvo pesado."
  },
  {
    id: "torid-incarnon",
    name: "Torid Incarnon",
    category: "Primária",
    tier: "S",
    role: "Clear de grupos e status",
    investment: "Alto",
    difficulty: "Média",
    bestUse: "Steel Path, Sobrevivência, Circuito e missões longas",
    strengths: ["Clear excelente", "Muito confortável em densidade", "Boa para missões repetidas"],
    weaknesses: ["Menos direta contra boss isolado", "Depende do modo Incarnon para render melhor"],
    href: "/builds/torid-incarnon",
    note: "Priorize quando o gargalo é limpar grupos e manter ritmo."
  },
  {
    id: "dual-toxocyst-incarnon",
    name: "Dual Toxocyst Incarnon",
    category: "Secundária",
    tier: "S",
    role: "Dano sustentado e alvo único",
    investment: "Alto",
    difficulty: "Alta",
    bestUse: "Steel Path e conteúdo avançado",
    strengths: ["Alto potencial com investimento", "Boa secundária endgame", "Escala com Galvanized e Arcane"],
    weaknesses: ["Exige ritmo", "Menos simples para iniciante", "Depende de Incarnon e mods fortes"],
    href: "/builds/dual-toxocyst-incarnon",
    note: "Boa para quem gosta do estilo da arma e já tem base de secundária."
  },
  {
    id: "ceramic-dagger-incarnon",
    name: "Ceramic Dagger Incarnon",
    category: "Melee",
    tier: "S",
    role: "Melee utilitária e sinergias",
    investment: "Alto",
    difficulty: "Alta",
    bestUse: "Setups otimizados, sinergias e melee com função específica",
    strengths: ["Boa utilidade", "Sinergias fortes", "Pode complementar setups avançados"],
    weaknesses: ["Pouco intuitiva para iniciantes", "Resultado varia conforme evolução e build"],
    href: "/builds/ceramic-dagger-incarnon",
    note: "Melhor quando você sabe exatamente qual função ela terá no loadout."
  },
  {
    id: "praedos",
    name: "Praedos",
    category: "Melee",
    tier: "S",
    role: "Mobilidade e conforto",
    investment: "Médio",
    difficulty: "Média",
    bestUse: "Farm, missões rápidas e loadouts que valorizam deslocamento",
    strengths: ["Mobilidade excelente", "Ótima qualidade de vida", "Pode virar melee de dano se montada para isso"],
    weaknesses: ["Nem sempre é a melhor para dano puro", "Precisa de objetivo claro"],
    href: "/builds/praedos",
    note: "Escolha forte quando tempo de deslocamento pesa no farm."
  },
  {
    id: "glaive-prime",
    name: "Glaive Prime",
    category: "Melee",
    tier: "S",
    role: "Melee arremessável e dano alto",
    investment: "Alto",
    difficulty: "Alta",
    bestUse: "Conteúdo avançado e jogadores que gostam do estilo arremessável",
    strengths: ["Dano forte", "Funciona à distância", "Boa peça de endgame"],
    weaknesses: ["Estilo pode não agradar", "Guia dedicado ainda não está pronto"],
    note: "Compare com Praedos e Ceramic Dagger antes de investir se sua prioridade for melee."
  }
];
