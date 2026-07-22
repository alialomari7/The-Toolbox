import Link from "next/link";
import { TOOLS } from "@/lib/tools";

export default function Home() {
  return (
    <div>
      <div className="font-mono text-[15px] text-mint tracking-widest uppercase mb-2">
        الرئيسية
      </div>
      <h1 className="text-[32px] font-black mb-2">صندوق الأدوات</h1>
      <p className="text-muted text-base leading-8 mb-8 max-w-[60ch]">
        مجموعة أدوات سريعة ومجانية تعمل مباشرة في متصفحك بدون تسجيل ولا حفظ
        بيانات.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {TOOLS.map((t) => (
          <Link
            key={t.slug}
            href={`/tools/${t.slug}`}
            className="bg-surface border border-border rounded-[10px] p-5 hover:border-mint transition-colors"
          >
            <div className="text-3xl mb-2">{t.icon}</div>
            <div className="font-bold mb-1">{t.name}</div>
            <div className="text-[15px] text-muted leading-6">
              {t.shortDesc}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
