"use client";

import { Check, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function ShareButton({ url = "https://warframefool.vercel.app" }: { url?: string }) {
  const [copied, setCopied] = useState(false);

  async function shareSite() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "WarframeFool - Tier List Warframe",
          text: "Tier list Warframe com meta, Primes, Incarnon e recomendações por missão.",
          url
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      } catch {
        setCopied(false);
      }
    }
  }

  return (
    <Button type="button" variant="outline" size="sm" aria-label={copied ? "Link copiado" : "Compartilhar WarframeFool"} onClick={() => void shareSite()} className="shrink-0">
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Share2 className="h-4 w-4" aria-hidden="true" />}
      <span aria-live="polite">{copied ? "Link copiado" : "Compartilhar"}</span>
    </Button>
  );
}
