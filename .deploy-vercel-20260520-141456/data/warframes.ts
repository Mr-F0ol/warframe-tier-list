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
    description: "Warframe muito seguro e completo, excelente para quem quer reduzir mortes e jogar conteúdo difícil com conforto.",
    recommendedFor: ["Steel Path", "Arquimídia Profunda", "Missões longas"],
    investment: "Alto",
    priorityNote: "Ótimo primeiro núcleo de endgame quando você quer sobreviver sem depender de execução perfeita."
  },
  {
    id: "protea-prime",
    name: "Protea Prime",
    tier: "S",
    variant: "Prime",
    role: "Dano, energia e utilidade",
    focus: ["Steel Path", "Suporte", "Clear"],
    description: "Opção forte e versátil para dano em área, sustain de recursos e conforto em missões longas.",
    recommendedFor: ["Steel Path", "Defesa", "Sobrevivência"],
    investment: "Alto",
    priorityNote: "A versão Prime é um destino melhor para Forma e Reactor quando disponível."
  },
  {
    id: "wisp-prime",
    name: "Wisp Prime",
    tier: "S",
    variant: "Prime",
    role: "Suporte universal",
    focus: ["Suporte", "Velocidade", "Sobrevivência"],
    description: "Buffs de vida, velocidade e conforto que funcionam em praticamente qualquer squad.",
    recommendedFor: ["Conteúdo geral", "Bosses", "Steel Path"],
    investment: "Médio",
    priorityNote: "Excelente investimento porque melhora qualquer arma e qualquer grupo."
  },
  {
    id: "saryn-prime",
    name: "Saryn Prime",
    tier: "S",
    variant: "Prime",
    role: "Dano em área e escalonamento",
    focus: ["Farm", "Clear", "Steel Path"],
    description: "Muito forte para limpar mapa e escalar dano em missões com boa densidade de inimigos.",
    recommendedFor: ["Farm", "Sobrevivência", "Elite Sanctuary"],
    investment: "Alto",
    priorityNote: "Priorize se você gosta de missões com muitos inimigos e quer acelerar farm."
  },
  {
    id: "revenant-prime",
    name: "Revenant Prime",
    tier: "S",
    variant: "Prime",
    role: "Sobrevivência extrema",
    focus: ["Steel Path", "Boss", "Segurança"],
    description: "Um dos Warframes mais confortáveis para não morrer, ótimo para contas que querem estabilidade.",
    recommendedFor: ["Steel Path", "Arconte", "Conteúdo solo"],
    investment: "Médio",
    priorityNote: "Prioridade alta para quem quer uma opção segura antes de otimizar dano."
  },
  {
    id: "mesa-prime",
    name: "Mesa Prime",
    tier: "S",
    variant: "Prime",
    role: "Dano direto",
    focus: ["Boss", "Alvo pesado", "Missões rápidas"],
    description: "Excelente para eliminar alvos rapidamente quando a missão favorece dano direto e boa linha de visão.",
    recommendedFor: ["Bosses", "Extermínio", "Bounties"],
    investment: "Alto",
    priorityNote: "Boa escolha quando você já tem energia e sobrevivência resolvidas."
  },
  {
    id: "khora-prime",
    name: "Khora Prime",
    tier: "A",
    variant: "Prime",
    role: "Farm, controle e stat-stick",
    focus: ["Farm", "Controle", "Loot"],
    description: "Muito boa para farm e controle de área, especialmente quando a conta já tem stat-stick e mods certos.",
    recommendedFor: ["Farm de recursos", "Sobrevivência", "Defesa"],
    investment: "Alto",
    priorityNote: "Priorize quando seu objetivo for retorno por hora em farm."
  },
  {
    id: "citrine",
    name: "Citrine",
    tier: "A",
    variant: "Sem Prime atual",
    role: "Suporte defensivo e status",
    focus: ["Suporte", "Sobrevivência", "Status"],
    description: "Suporte confortável, com boa resistência e utilidade para equipes que querem estabilidade.",
    recommendedFor: ["Steel Path", "Squads", "Missões longas"],
    investment: "Médio",
    priorityNote: "Boa peça de conta quando você quer suporte sem abrir mão de impacto real na missão."
  },
  {
    id: "xaku",
    name: "Xaku",
    tier: "A",
    variant: "Sem Prime atual",
    role: "Escalonamento e remoção de defesa",
    focus: ["Steel Path", "Endurance", "Clear"],
    description: "Escala muito bem em conteúdo de nível alto e tem ferramentas fortes para lidar com defesa inimiga.",
    recommendedFor: ["Steel Path", "Missões longas", "Conteúdo solo"],
    investment: "Alto",
    priorityNote: "Vale investir quando você já consegue manter energia e duração com consistência."
  },
  {
    id: "voruna-prime",
    name: "Voruna Prime",
    tier: "A",
    variant: "Prime",
    role: "Status, melee e sobrevivência agressiva",
    focus: ["Melee", "Status", "Conteúdo geral"],
    description: "Opção agressiva e confortável para quem gosta de jogo ativo com status e melee.",
    recommendedFor: ["Steel Path", "Missões rápidas", "Farm ativo"],
    investment: "Médio",
    priorityNote: "Boa candidata a investimento se o estilo de gameplay combina com você."
  }
];
