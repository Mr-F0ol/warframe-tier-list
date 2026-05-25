import type { TierKey } from "@/lib/types";

export type WarframeInvestment = "Baixo" | "Médio" | "Alto";

export interface WarframeGuide {
  id: string;
  name: string;
  tier: TierKey;
  variant: "Normal" | "Prime" | "Sem Prime atual";
  role: string;
  focus: string[];
  description: string;
  recommendedFor: string[];
  investment: WarframeInvestment;
  priorityNote: string;
}

export const warframes: WarframeGuide[] = [
  {
    id: "dante",
    name: "Dante",
    tier: "S",
    variant: "Sem Prime atual",
    role: "Overguard, dano e suporte",
    focus: ["Steel Path", "Segurança", "Conteúdo geral"],
    description: "Warframe seguro e versátil. Para iniciantes avançando para conteúdo difícil, ajuda a reduzir mortes; para intermediários, dá margem de erro; no endgame, funciona como base confortável para missões variadas.",
    recommendedFor: ["Steel Path", "Arquimídia Profunda", "Missões longas"],
    investment: "Alto",
    priorityNote: "Boa prioridade quando sua conta precisa de segurança antes de otimizar dano. Revise builds após updates, hotfixes, Helminth e mudanças de Arcanes."
  },
  {
    id: "protea-prime",
    name: "Protea Prime",
    tier: "S",
    variant: "Prime",
    role: "Dano, energia e utilidade",
    focus: ["Steel Path", "Suporte", "Clear"],
    description: "Opção versátil para dano em área, recursos e defesa de objetivo. Funciona melhor quando o jogador já entende rotação de habilidades e quer uma peça estável para missões longas.",
    recommendedFor: ["Steel Path", "Defesa", "Sobrevivência"],
    investment: "Alto",
    priorityNote: "Para iniciante, use com moderação; para intermediário e endgame, a versão Prime tende a ser melhor destino de Forma quando disponível."
  },
  {
    id: "wisp-prime",
    name: "Wisp Prime",
    tier: "S",
    variant: "Prime",
    role: "Suporte universal",
    focus: ["Suporte", "Velocidade", "Sobrevivência"],
    description: "Suporte de vida, velocidade e conforto que encaixa em squads e jogo solo. Ajuda iniciantes pela segurança, intermediários pelo ritmo e endgame por melhorar armas fortes.",
    recommendedFor: ["Conteúdo geral", "Bosses", "Steel Path"],
    investment: "Médio",
    priorityNote: "Investimento seguro quando você quer uma base que melhora muitas armas sem depender de uma composição específica."
  },
  {
    id: "saryn-prime",
    name: "Saryn Prime",
    tier: "S",
    variant: "Prime",
    role: "Dano em área e escalonamento",
    focus: ["Farm", "Clear", "Steel Path"],
    description: "Warframe de clear para missões com boa densidade. Não é a escolha mais simples para todo iniciante, mas escala bem quando a conta já tem energia, alcance e sobrevivência.",
    recommendedFor: ["Farm", "Sobrevivência", "Elite Sanctuary"],
    investment: "Alto",
    priorityNote: "Priorize para farm e foco quando você já consegue manter rotação. Mudanças de balanceamento e Helminth podem alterar variações."
  },
  {
    id: "revenant-prime",
    name: "Revenant Prime",
    tier: "S",
    variant: "Prime",
    role: "Sobrevivência extrema",
    focus: ["Steel Path", "Boss", "Segurança"],
    description: "Warframe de segurança simples e consistente. Para iniciante, reduz punição por erro; para intermediário, facilita Steel Path; no endgame, é opção de estabilidade quando a missão não exige função específica.",
    recommendedFor: ["Steel Path", "Arconte", "Conteúdo solo"],
    investment: "Médio",
    priorityNote: "Prioridade alta quando o maior problema da conta é sobreviver. Depois, complemente com armas de clear e alvo pesado."
  },
  {
    id: "mesa-prime",
    name: "Mesa Prime",
    tier: "S",
    variant: "Prime",
    role: "Dano direto",
    focus: ["Boss", "Alvo pesado", "Missões rápidas"],
    description: "Warframe de dano direto que funciona melhor quando a missão favorece linha de visão e alvos claros. Boa para intermediários e endgame; menos universal para quem ainda falta energia ou defesa.",
    recommendedFor: ["Bosses", "Extermínio", "Bounties"],
    investment: "Alto",
    priorityNote: "Boa escolha depois que energia e sobrevivência estão resolvidas. Hotfixes e ajustes de armas podem mudar o melhor suporte para ela."
  },
  {
    id: "khora-prime",
    name: "Khora Prime",
    tier: "A",
    variant: "Prime",
    role: "Farm, controle e stat-stick",
    focus: ["Farm", "Controle", "Loot"],
    description: "Warframe de farm e controle que depende mais de preparação. Para iniciante, pode parecer cara; para intermediário, começa a render; no endgame, entrega mais valor com stat-stick e rotina de farm.",
    recommendedFor: ["Farm de recursos", "Sobrevivência", "Defesa"],
    investment: "Alto",
    priorityNote: "Priorize quando o objetivo é farm repetido e a conta já tem mods, energia e armas de suporte suficientes."
  },
  {
    id: "citrine",
    name: "Citrine",
    tier: "A",
    variant: "Sem Prime atual",
    role: "Suporte defensivo e status",
    focus: ["Suporte", "Sobrevivência", "Status"],
    description: "Suporte defensivo e de status, útil para jogadores que querem estabilidade sem abrir mão de presença na missão.",
    recommendedFor: ["Steel Path", "Squads", "Missões longas"],
    investment: "Médio",
    priorityNote: "Boa peça intermediária: ajuda squads, missões longas e Steel Path sem exigir um setup muito específico."
  },
  {
    id: "xaku",
    name: "Xaku",
    tier: "A",
    variant: "Sem Prime atual",
    role: "Escalonamento e remoção de defesa",
    focus: ["Steel Path", "Endurance", "Clear"],
    description: "Warframe de escalonamento e remoção de defesa. É mais indicado para intermediário/endgame, quando você já consegue sustentar energia e duração.",
    recommendedFor: ["Steel Path", "Missões longas", "Conteúdo solo"],
    investment: "Alto",
    priorityNote: "Vale investir quando a conta já sustenta rotação. Mudanças em Helminth, Arcanes e balanceamentos podem mudar variações."
  },
  {
    id: "voruna-prime",
    name: "Voruna Prime",
    tier: "A",
    variant: "Prime",
    role: "Status, melee e sobrevivência agressiva",
    focus: ["Melee", "Status", "Conteúdo geral"],
    description: "Opção agressiva para quem gosta de status, melee e ritmo ativo. Não é a escolha mais passiva, mas entrega bom valor quando o estilo combina com o jogador.",
    recommendedFor: ["Steel Path", "Missões rápidas", "Farm ativo"],
    investment: "Médio",
    priorityNote: "Boa candidata para conta intermediária que já tem armas e mods base. Teste antes de investir muitas Formas."
  }
];
