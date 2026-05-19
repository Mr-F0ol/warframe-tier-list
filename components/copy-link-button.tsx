"use client";

import { Check, Copy, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface CopyLinkButtonProps {
  url?: string;
  text?: string;
  label?: string;
  copiedLabel?: string;
  shareTitle?: string;
  shareText?: string;
  mode?: "copy" | "share";
  className?: string;
}

export function CopyLinkButton({
  url,
  text,
  label = "Copiar link",
  copiedLabel = "Copiado",
  shareTitle = "WarframeFool",
  shareText = "Guia Warframe em português no WarframeFool.",
  mode = "copy",
  className
}: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleClick() {
    const targetUrl = url || (typeof window !== "undefined" ? window.location.href : "https://warframefool.vercel.app");
    const targetText = text || targetUrl;

    try {
      if (mode === "share" && navigator.share) {
        await navigator.share({ title: shareTitle, text: shareText, url: targetUrl });
        return;
      }

      await navigator.clipboard.writeText(targetText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button type="button" variant="outline" size="sm" onClick={() => void handleClick()} className={className}>
      {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : mode === "share" ? <Share2 className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
      {copied ? copiedLabel : label}
    </Button>
  );
}
