import { Card } from "@/components/ui/card";

export function GuideSections() {
  return (
    <>
      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <PriorityCard title="1. Base segura">
          <strong>Rhino, Revenant ou Dante</strong> primeiro. Eles reduzem morte boba e deixam você aprender Steel Path sem depender de build perfeita.
        </PriorityCard>
        <PriorityCard title="2. Clear e suporte">
          <strong>Wisp, Citrine, Saryn ou Protea</strong> são o melhor segundo passo. Você ganha dano em área, sustain, energia ou buffs para qualquer squad.
        </PriorityCard>
        <PriorityCard title="3. Armas que carregam">
          <strong>Nataruk, Cedo e Kuva Nukor</strong> no começo. Depois mire <strong>Torid, Latron, Burston, Laetum, Dual Toxocyst, Lex e Felarx</strong>.
        </PriorityCard>
        <PriorityCard title="4. Salto de endgame">
          <strong>Galvanized mods, Arcanes, Helminth, Praedos e Ceramic Dagger</strong> mudam a conta. Só invista pesado em Riven depois dessa base.
        </PriorityCard>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-black">
          Prioridade de Investimento
          <span className="mt-1 block text-sm font-normal text-muted-foreground">
            Uma ordem simples para decidir onde gastar Forma, Catalisador, Adaptadores Exilus e Arcanes.
          </span>
        </h2>
        <div className="mt-3 overflow-hidden rounded-lg border border-border">
          {[
            ["Prioridade", "Invista primeiro", "Por quê"],
            ["1. Conta nova", "Rhino, Wisp quando possível, Nataruk, Cedo, Kuva Nukor", "São opções fortes com builds simples e carregam o mapa estelar e início do Steel Path."],
            ["2. Steel Path", "Dante, Revenant, Protea, Torid Incarnon, Laetum, Dual Toxocyst, Felarx", "Reduzem a dificuldade de sobrevivência e entregam dano consistente contra armadura alta."],
            ["3. Farm", "Khora, Nekros, Hydroid, Smeeta/companheiro de loot, Torid ou Dual Ichor", "Melhora retorno por hora. Mesmo que o dano seja menor, o ganho de recursos compensa."],
            ["4. Utilidade endgame", "Ceramic Dagger Incarnon, Praedos, Magistar Incarnon, Helminth otimizado", "Essas peças desbloqueiam stat-stick, mobilidade e setups específicos que mudam o teto da conta."]
          ].map((row, index) => (
            <div key={row[0]} className={`grid border-t border-border first:border-t-0 md:grid-cols-[180px_1fr_1fr] ${index === 0 ? "bg-cyan-300/10 font-bold text-cyan-200" : "bg-card"}`}>
              {row.map(cell => (
                <div key={cell} className="border-l border-border p-3 first:border-l-0">
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-black">
          Base de Builds
          <span className="mt-1 block text-sm font-normal text-muted-foreground">
            Não é uma build fixa para todos os casos, mas um checklist para evitar desperdiçar espaço nos mods.
          </span>
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          <GuideCard title="Warframes de dano" items={["Força se a habilidade escala dano, buff ou strip.", "Alcance para nukes, controle e aplicação de status.", "Eficiência ou geração de energia para manter rotação.", "Sobrevivência: Adaptation, Rolling Guard, escudo ou overguard."]} />
          <GuideCard title="Armas primárias" items={["Multishot e dano base quase sempre são prioridade.", "Crítico em armas com chance crítica alta.", "Viral + Heat ou corrosivo conforme inimigo e build.", "Galvanized mods e Primary Merciless/Deadhead quando liberar."]} />
          <GuideCard title="Secundárias e melee" items={["Secundárias podem ser primer com status e multishot.", "Melee valoriza combo, crítico, status e velocidade.", "Praedos é excelente mesmo pelo bônus de mobilidade.", "Use Condition Overload quando a arma ou equipe aplica vários status."]} />
        </div>
      </section>
    </>
  );
}

function PriorityCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Card className="border-l-4 border-l-cyan-300 p-4">
      <b className="text-yellow-200">{title}</b>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{children}</p>
    </Card>
  );
}

function GuideCard({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="p-4">
      <h3 className="font-bold text-yellow-200">{title}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}
