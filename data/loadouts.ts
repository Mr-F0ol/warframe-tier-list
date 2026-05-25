export interface LoadoutPreset {
  id: string;
  name: string;
  warframe: string;
  primary: string;
  secondary: string;
  melee: string;
  companion: string;
  focus: string;
  difficulty: "Baixa" | "Média" | "Alta";
  investment: "Baixo" | "Médio" | "Alto";
  description: string;
  notes: string;
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
    difficulty: "Média",
    investment: "Alto",
    description: "Combinação segura para entrar em Steel Path com clear, dano reserva e mobilidade.",
    notes: "Adapte elementos por facção e use a Praedos como conforto de deslocamento."
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
    difficulty: "Alta",
    investment: "Alto",
    description: "Loadout para missões em que o gargalo é derrubar alvo resistente sem perder segurança.",
    notes: "Use a secundária como suporte de status e ajuste a Felarx para o alvo real."
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
    difficulty: "Média",
    investment: "Médio",
    description: "Estrutura para farms repetidos em que deslocamento e conforto importam.",
    notes: "Troque o Warframe conforme o recurso: suporte, loot ou clear."
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
    difficulty: "Alta",
    investment: "Alto",
    description: "Base para Sanctuary Onslaught e sessões focadas em converter afinidade em foco.",
    notes: "Coloque lente no equipamento que realmente recebe afinidade no seu método."
  }
];
