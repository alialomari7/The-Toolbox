import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لموقع صندوق الأدوات وكيفية التعامل مع بيانات الزوار.",
};

export default function PrivacyPolicyPage() {
  return (
    <StaticPage eyebrow="صفحة قانونية" title="سياسة الخصوصية">
      <p>
        نحترم خصوصيتك. جميع الأدوات المتوفرة في هذا الموقع (حاسبة العمر،
        BMI، مولد كلمات المرور، وغيرها) تعمل بالكامل داخل متصفحك، ولا يتم
        إرسال أي بيانات تُدخلها في هذه الأدوات إلى أي خادم أو تخزينها لدينا.
      </p>

      <h2 className="text-lg font-bold text-text pt-2">البيانات التي قد نجمعها</h2>
      <p>
        عند زيارتك للموقع، قد يقوم مزودو خدمات تحليلية أو إعلانية (مثل Google
        AdSense أو Google Analytics) بجمع بيانات غير شخصية مثل نوع المتصفح
        والجهاز والصفحات التي زرتها، وذلك لأغراض إحصائية أو لعرض إعلانات ذات
        صلة.
      </p>

      <h2 className="text-lg font-bold text-text pt-2">إعلانات Google (AdSense)</h2>
      <p>
        نستخدم أو قد نستخدم خدمة Google AdSense لعرض الإعلانات على الموقع.
        تستخدم Google ملفات تعريف الارتباط (Cookies) لعرض إعلانات مبنية على
        زياراتك السابقة لهذا الموقع أو مواقع أخرى. يمكنك تعطيل الإعلانات
        المخصصة من خلال زيارة صفحة{" "}
        <a
          href="https://adssettings.google.com"
          className="text-mint underline"
          target="_blank"
        >
          إعدادات الإعلانات في Google
        </a>
        .
      </p>

      <h2 className="text-lg font-bold text-text pt-2">ملفات تعريف الارتباط (Cookies)</h2>
      <p>
        قد يستخدم هذا الموقع ملفات تعريف ارتباط لتحسين تجربة الاستخدام أو
        لأغراض إعلانية. باستمرارك في استخدام الموقع فإنك توافق على استخدام
        هذه الملفات.
      </p>

      <h2 className="text-lg font-bold text-text pt-2">التواصل معنا</h2>
      <p>
        لأي استفسار يتعلق بسياسة الخصوصية، يمكنك التواصل معنا عبر صفحة{" "}
        <a href="/contact" className="text-mint underline">
          تواصل معنا
        </a>
        .
      </p>

      <p className="text-sm text-muted/70 pt-4">
        آخر تحديث لهذه السياسة: يوليو 2026.
      </p>
    </StaticPage>
  );
}
