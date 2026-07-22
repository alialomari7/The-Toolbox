import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "طرق التواصل مع فريق موقع صندوق الأدوات.",
};

export default function ContactPage() {
  return (
    <StaticPage eyebrow="تواصل معنا" title="تواصل معنا">
      <p>
        يسعدنا تواصلك معنا لأي استفسار، اقتراح أداة جديدة، أو الإبلاغ عن أي
        مشكلة تقنية في الموقع.
      </p>

      <div className="bg-bg border border-border rounded-lg p-4">
        <div className="text-sm text-muted mb-1">البريد الإلكتروني</div>
        <a
          href="mailto:contact@example.com"
          className="text-mint font-mono text-base"
        >
          contact@example.com
        </a>
      </div>

      <p className="text-sm text-muted/70 pt-2">
        ملاحظة للمطوّر: غيّر البريد الإلكتروني أعلاه إلى بريدك الحقيقي في
        ملف <code className="text-mint">app/contact/page.tsx</code> قبل نشر
        الموقع.
      </p>
    </StaticPage>
  );
}
