export interface LoadoutPreset {
  id: string;
  name: string;
  warframe: string;
  primary: string;
  secondary: string;
  melee: string;
  focus: string;
  difficulty: "Baixa" | "Média" | "Alta";
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
    focus: "Sobrevivência, clear e alvo pesado",
    difficulty: "Média",
    notes: "Estrutura pronta para editar conforme seus mods, Arcanes e disponibilidade de Incarnon."
  },
  {
    id: "boss-alvo-pesado",
    name: "Boss e alvo pesado",
    warframe: "Dante",
    primary: "Felarx",
    secondary: "Kuva Nukor",
    melee: "Ceramic Dagger Incarnon",
    focus: "Dano em alvo único e estabilidade",
    difficulty: "Alta",
    notes: "Use como base para missões em que clear não é o gargalo principal."
  },
  {
    id: "farm-mobilidade",
    name: "Farm com mobilidade",
    warframe: "Wisp Prime",
    primary: "Torid Incarnon",
    secondary: "Kuva Nukor",
    melee: "Praedos",
    focus: "Conforto, velocidade e repetição",
    difficulty: "Média",
    notes: "Modelo editável para farms repetidos em que deslocamento e conforto importam."
  }
];
