import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرّف على فكرة موقع صندوق الأدوات والهدف منه.",
};

export default function AboutPage() {
  return (
    <StaticPage eyebrow="من نحن" title="عن صندوق الأدوات">
      <p>
        صندوق الأدوات موقع يقدّم مجموعة من الأدوات المجانية والسريعة التي
        يحتاجها أي شخص في حياته اليومية أو عمله: حاسبة عمر، حاسبة مؤشر كتلة
        الجسم، مولد كلمات مرور قوية، مولد رموز QR، ومحولات متعددة للوحدات
        والصيغ.
      </p>

      <p>
        هدفنا إن كل أداة تكون بسيطة، سريعة، وواضحة — بدون تسجيل حساب، وبدون
        تعقيد. كل أداة تعمل مباشرة داخل متصفحك، وبياناتك ما تُحفظ ولا تُرسل
        لأي مكان.
      </p>

      <h2 className="text-lg font-bold text-text pt-2">لماذا هذا الموقع؟</h2>
      <p>
        كثير من الأدوات المشابهة على الإنترنت مليئة بالإعلانات المزعجة أو
        تحتاج تسجيل دخول. نحاول نبني بديل أبسط وأسرع، ونضيف أدوات جديدة بشكل
        مستمر بناءً على احتياجات الزوار.
      </p>

      <h2 className="text-lg font-bold text-text pt-2">تواصل معنا</h2>
      <p>
        لو عندك اقتراح لأداة جديدة أو ملاحظة، تقدر تتواصل معنا من صفحة{" "}
        <a href="/contact" className="text-mint underline">
          تواصل معنا
        </a>
        .
      </p>
    </StaticPage>
  );
}
