"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard not available, silently ignore
    }
  }

  return (
    <button
      onClick={copy}
      disabled={!text}
      className="text-sm font-mono px-3 py-1.5 rounded-lg border border-border text-muted hover:text-mint hover:border-mint transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
    >
      {copied ? "✓ تم النسخ" : "نسخ"}
    </button>
  );
}
