import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        outline: "border-border/80 bg-background/35 text-foreground",
        gold: "border-yellow-300/40 bg-yellow-300/10 text-yellow-100",
        cyan: "border-cyan-300/40 bg-cyan-300/10 text-cyan-100",
        meta: "border-yellow-300/55 bg-yellow-300/15 text-yellow-50 shadow-[0_0_18px_rgba(247,198,91,.12)]",
        tierS: "border-yellow-300/60 bg-yellow-300/15 text-yellow-50",
        tierA: "border-cyan-300/55 bg-cyan-300/13 text-cyan-50",
        tierB: "border-blue-300/50 bg-blue-300/12 text-blue-100",
        tierC: "border-emerald-300/50 bg-emerald-300/12 text-emerald-100",
        tierD: "border-red-300/50 bg-red-300/12 text-red-100",
        warframe: "border-violet-300/45 bg-violet-300/10 text-violet-100",
        primary: "border-cyan-300/45 bg-cyan-300/10 text-cyan-100",
        secondaryWeapon: "border-sky-300/45 bg-sky-300/10 text-sky-100",
        melee: "border-yellow-300/45 bg-yellow-300/10 text-yellow-100",
        farm: "border-emerald-300/45 bg-emerald-300/10 text-emerald-100",
        steel: "border-red-300/45 bg-red-300/10 text-red-100"
      }
    },
    defaultVariants: {
      variant: "outline"
    }
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
