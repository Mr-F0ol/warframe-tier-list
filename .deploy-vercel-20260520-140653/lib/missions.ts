import type { MissionPreset } from "@/lib/types";

export const missionPresets: Record<string, MissionPreset> = {
  steel: {
    label: "Steel Path geral",
    focus: ["steel", "tank", "clear", "support"],
    note: "Priorize sobrevivência simples, clear consistente e uma arma que não dependa de setup longo.",
    groups: {
      warframe: ["Dante", "Revenant Prime", "Protea Prime", "Wisp Prime", "Citrine", "Saryn Prime"],
      primary: ["Torid Incarnon", "Latron Incarnon", "Burston Incarnon", "Phenmor", "Strun Incarnon"],
      secondary: ["Laetum", "Dual Toxocyst Incarnon", "Lex Incarnon", "Kuva Nukor"],
      melee: ["Glaive Prime", "Ceramic Dagger Incarnon", "Praedos", "Dual Ichor Incarnon"]
    }
  },
  farm: {
    label: "Farm",
    focus: ["farm", "clear", "fast", "support"],
    note: "A prioridade é retorno por minuto: loot, mapa limpo rápido e pouca pausa entre ondas ou salas.",
    groups: {
      warframe: ["Khora Prime", "Nekros Prime", "Hydroid Prime", "Wisp Prime", "Volt Prime", "Titania Prime"],
      primary: ["Torid Incarnon", "Tenet Glaxion", "Kuva Bramma", "Acceltra Prime", "Cedo Prime"],
      secondary: ["Ocucor", "Kuva Nukor", "Epitaph Prime", "Tenet Cycron"],
      melee: ["Dual Ichor Incarnon", "Praedos", "Glaive Prime", "Xoris"]
    }
  },
  boss: {
    label: "Boss",
    focus: ["boss", "steel", "tank"],
    note: "Escolha dano concentrado e segurança. Clear de sala importa menos que matar alvo pesado sem morrer.",
    groups: {
      warframe: ["Revenant Prime", "Dante", "Mesa Prime", "Chroma Prime", "Rhino Prime", "Kullervo"],
      primary: ["Felarx", "Kuva Hek", "Phenmor", "Strun Incarnon", "Latron Incarnon"],
      secondary: ["Laetum", "Lex Incarnon", "Dual Toxocyst Incarnon", "Epitaph Prime"],
      melee: ["Ceramic Dagger Incarnon", "Magistar Incarnon", "Glaive Prime", "Quassus Prime"]
    }
  },
  fast: {
    label: "Missões rápidas",
    focus: ["fast", "clear", "steel"],
    note: "Mobilidade e dano imediato valem mais que escala infinita. Bom para fissuras, extermínio e captura.",
    groups: {
      warframe: ["Titania Prime", "Volt Prime", "Gauss Prime", "Wukong Prime", "Mirage Prime", "Mesa Prime"],
      primary: ["Acceltra Prime", "Kuva Tonkor", "Tenet Envoy", "Tenet Arca Plasmor", "Torid Incarnon"],
      secondary: ["Ocucor", "Kuva Nukor", "Dual Toxocyst Incarnon", "Tenet Cycron"],
      melee: ["Praedos", "Glaive Prime", "Dual Ichor Incarnon", "Kronen Prime"]
    }
  },
  endurance: {
    label: "Missões longas",
    focus: ["endurance", "tank", "support", "steel"],
    note: "Prefira sobrevivência renovável, energia estável e dano que continue escalando com nível alto.",
    groups: {
      warframe: ["Octavia Prime", "Revenant Prime", "Dante", "Citrine", "Xaku Prime", "Nidus Prime"],
      primary: ["Torid Incarnon", "Latron Incarnon", "Phenmor", "Trumna Prime", "Burston Incarnon"],
      secondary: ["Laetum", "Dual Toxocyst Incarnon", "Lex Incarnon", "Epitaph Prime"],
      melee: ["Glaive Prime", "Ceramic Dagger Incarnon", "Dual Ichor Incarnon", "Praedos"]
    }
  },
  beginner: {
    label: "Iniciante",
    focus: ["beginner", "tank", "steel"],
    note: "Comece por peças fáceis de usar e que não exigem Arcane, Riven ou cinco formas para funcionar.",
    groups: {
      warframe: ["Rhino Prime", "Wukong Prime", "Nezha Prime", "Revenant Prime", "Wisp Prime", "Dante"],
      primary: ["Nataruk", "Cedo", "Fulmin Prime", "Corinth Prime", "Tenet Arca Plasmor"],
      secondary: ["Kuva Nukor", "Epitaph Prime", "Laetum", "Tenet Cycron"],
      melee: ["Xoris", "Praedos", "Glaive Prime", "Kronen Prime"]
    }
  },
  archimedea: {
    label: "Archimedea",
    focus: ["steel", "tank", "support", "boss"],
    note: "Monte uma base estável primeiro. Conteúdo com restrição pune dependência de uma única peça perfeita.",
    groups: {
      warframe: ["Dante", "Revenant Prime", "Protea Prime", "Citrine", "Wisp Prime", "Gauss Prime"],
      primary: ["Torid Incarnon", "Latron Incarnon", "Felarx", "Phenmor", "Burston Incarnon"],
      secondary: ["Laetum", "Dual Toxocyst Incarnon", "Lex Incarnon", "Kuva Nukor"],
      melee: ["Ceramic Dagger Incarnon", "Praedos", "Glaive Prime", "Magistar Incarnon"]
    }
  }
};
