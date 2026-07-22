"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOOLS } from "@/lib/tools";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="bg-surface border-l border-border p-4 bg-pegboard bg-peg overflow-x-auto md:overflow-visible flex md:block gap-1.5">
      <Link
        href="/"
        className="hidden md:flex items-center gap-2.5 px-2 pb-5 mb-4 border-b border-border"
      >
        <span className="w-8 h-8 rounded-lg bg-mint/10 border border-mint flex items-center justify-center text-mint font-mono text-sm font-semibold">
          TB
        </span>
        <span className="block">
          <b className="block text-base font-black">صندوق الأدوات</b>
          <span className="block text-[15px] text-muted font-mono">
            tools.site/tools/*
          </span>
        </span>
      </Link>

      {TOOLS.map((t, i) => {
        const active = pathname === `/tools/${t.slug}`;
        return (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[15.5px] whitespace-nowrap md:whitespace-normal border mb-0.5 transition-colors ${
              active
                ? "bg-mint/10 border-mint text-mint"
                : "border-transparent text-muted hover:bg-surface2 hover:text-text"
            }`}
          >
            <span>{t.icon}</span>
            {t.name}
            <span
              className={`font-mono text-[14px] mr-auto ${
                active ? "text-mint" : "text-muted"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
