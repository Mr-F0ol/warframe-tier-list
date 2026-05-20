import { CalendarDays, Save, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

export function MetaStatus() {
  return (
    <section className="mt-6 grid gap-3 md:grid-cols-3">
      <StatusCard icon={<CalendarDays className="h-5 w-5" />} label="Atualização" value="18 maio 2026" note="Meta revisado para Update 42.0.10." />
      <StatusCard icon={<ShieldCheck className="h-5 w-5" />} label="Critério" value="Steel Path + Endgame" note="Prioriza força real, conforto e investimento." />
      <StatusCard icon={<Save className="h-5 w-5" />} label="Loadouts" value="Organização rápida" note="Monte e organize loadouts para Steel Path, Farm, Bosses e missões rápidas." />
    </section>
  );
}

function StatusCard({ icon, label, value, note }: { icon: React.ReactNode; label: string; value: string; note: string }) {
  return (
    <Card className="flex gap-3 p-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-bold uppercase text-muted-foreground">{label}</span>
        <strong className="mt-1 block text-sm text-foreground">{value}</strong>
        <span className="mt-1 block text-xs leading-5 text-muted-foreground">{note}</span>
      </span>
    </Card>
  );
}
