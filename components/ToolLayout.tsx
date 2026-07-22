import { ToolMeta } from "@/lib/tools";

export default function ToolLayout({
  tool,
  index,
  children,
}: {
  tool: ToolMeta;
  index: number;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-[15px] text-mint tracking-widest uppercase mb-2">
        أداة رقم {String(index + 1).padStart(2, "0")}
      </div>
      <h1 className="text-[32px] font-black mb-2">{tool.name}</h1>
      <p className="text-muted text-base leading-8 mb-7 max-w-[60ch]">
        {tool.shortDesc}
      </p>

      <div className="bg-surface border border-border rounded-[10px] p-6">
        {children}
      </div>

      <section className="mt-9">
        <h2 className="text-lg font-bold mb-3">طريقة الاستخدام</h2>
        <ol className="list-decimal pr-5 space-y-2 text-base text-muted leading-7">
          {tool.howTo.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-lg font-bold mb-3">الأسئلة الشائعة</h2>
        <div className="space-y-4">
          {tool.faq.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-4 bg-surface"
            >
              <div className="text-base font-semibold mb-1.5">{item.q}</div>
              <div className="text-[15px] text-muted leading-7">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
