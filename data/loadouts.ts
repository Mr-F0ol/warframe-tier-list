export interface LoadoutPreset {
  id: string;
  name: string;
  warframe: string;
  primary: string;
  secondary: string;
  melee: string;
  companion: string;
  focus: string;
  operatorSchool: string;
  mainArcane: string;
  elementNotes: string;
  difficulty: "Baixa" | "Média" | "Alta";
  investment: "Baixo" | "Médio" | "Alto";
  description: string;
  notes: string;
  relatedBuilds: Array<{
    label: string;
    href: string;
  }>;
}

export const loadoutPresets: LoadoutPreset[] = [
  {
    id: "steel-path-seguro",
    name: "Steel Path seguro",
    warframe: "Revenant Prime",
    primary: "Torid Incarnon",
    secondary: "Laetum",
    melee: "Praedos",
    companion: "Companheiro de suporte ou loot",
    focus: "Sobrevivência, clear e alvo pesado",
    operatorSchool: "Zenurik para conforto de energia ou Unairu quando precisar de remoção de defesa.",
    mainArcane: "Primary Merciless na primária ou Arcane equivalente conforme arma usada.",
    elementNotes: "Ajuste Viral/Calor ou outro elemento conforme facção e inimigos que travam a missão.",
    difficulty: "Média",
    investment: "Alto",
    description: "Combinação segura para entrar em Steel Path com clear, dano reserva e mobilidade.",
    notes: "Adapte elementos por facção e use a Praedos como conforto de deslocamento.",
    relatedBuilds: [
      { label: "Torid Incarnon", href: "/builds/torid-incarnon" },
      { label: "Laetum", href: "/builds/laetum" },
      { label: "Praedos", href: "/builds/praedos" }
    ]
  },
  {
    id: "boss-alvo-pesado",
    name: "Boss e alvo pesado",
    warframe: "Dante",
    primary: "Felarx",
    secondary: "Kuva Nukor",
    melee: "Ceramic Dagger Incarnon",
    companion: "Companheiro defensivo",
    focus: "Dano em alvo único e estabilidade",
    operatorSchool: "Madurai para janelas de dano ou Unairu quando a missão pedir suporte contra defesa.",
    mainArcane: "Primary Deadhead ou Primary Merciless, conforme padrão de abate e conforto.",
    elementNotes: "Troque elemento conforme boss ou facção; não trate a mesma combinação como universal.",
    difficulty: "Alta",
    investment: "Alto",
    description: "Loadout para missões em que o gargalo é derrubar alvo resistente sem perder segurança.",
    notes: "Use a secundária como suporte de status e ajuste a Felarx para o alvo real.",
    relatedBuilds: [
      { label: "Felarx", href: "/builds/felarx" }
    ]
  },
  {
    id: "farm-mobilidade",
    name: "Farm com mobilidade",
    warframe: "Wisp Prime",
    primary: "Torid Incarnon",
    secondary: "Kuva Nukor",
    melee: "Praedos",
    companion: "Companheiro de loot quando fizer sentido",
    focus: "Conforto, velocidade e repetição",
    operatorSchool: "Zenurik para energia ou Naramon quando o foco for melee e combo.",
    mainArcane: "Arcane de primária/secundária alinhado à arma que realmente faz o clear.",
    elementNotes: "Use elementos de uso geral para rotas simples e ajuste quando o farm for contra facção específica.",
    difficulty: "Média",
    investment: "Médio",
    description: "Estrutura para farms repetidos em que deslocamento e conforto importam.",
    notes: "Troque o Warframe conforme o recurso: suporte, loot ou clear.",
    relatedBuilds: [
      { label: "Torid Incarnon", href: "/builds/torid-incarnon" },
      { label: "Praedos", href: "/builds/praedos" }
    ]
  },
  {
    id: "farm-foco",
    name: "Farm de foco",
    warframe: "Saryn Prime",
    primary: "Torid Incarnon",
    secondary: "Laetum",
    melee: "Praedos",
    companion: "Companheiro de utilidade",
    focus: "Clear, convergência e escola de foco",
    operatorSchool: "A escola equipada deve ser a que você quer evoluir com o farm de foco.",
    mainArcane: "Use Arcanes que mantenham clear e sobrevivência estáveis durante a sessão.",
    elementNotes: "Priorize elementos que limpem grupos com consistência no método escolhido.",
    difficulty: "Alta",
    investment: "Alto",
    description: "Base para Sanctuary Onslaught e sessões focadas em converter afinidade em foco.",
    notes: "Coloque lente no equipamento que realmente recebe afinidade no seu método.",
    relatedBuilds: [
      { label: "Torid Incarnon", href: "/builds/torid-incarnon" },
      { label: "Laetum", href: "/builds/laetum" },
      { label: "Praedos", href: "/builds/praedos" }
    ]
  }
];
