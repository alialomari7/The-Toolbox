export default function StaticPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="font-mono text-sm text-mint tracking-widest uppercase mb-2">
        {eyebrow}
      </div>
      <h1 className="text-3xl font-black mb-6">{title}</h1>
      <div className="bg-surface border border-border rounded-[10px] p-6 space-y-4 text-base text-muted leading-8">
        {children}
      </div>
    </div>
  );
}
