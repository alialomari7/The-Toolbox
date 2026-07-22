# صندوق الأدوات (Sanduq Al-Adawat)

مشروع Next.js لموقع أدوات مجانية، كل أداة لها صفحة مستقلة لتحسين الظهور في محركات البحث (SEO).

## التشغيل محليًا

```bash
npm install
npm run dev
```

افتح http://localhost:3000

## البنية

- `app/page.tsx` — الصفحة الرئيسية (تعرض كل الأدوات).
- `app/tools/<اسم-الأداة>/page.tsx` — صفحة مستقلة لكل أداة (title + description + الأداة نفسها + طريقة الاستخدام + أسئلة شائعة).
- `components/tools/*` — منطق كل أداة (client components).
- `components/ToolLayout.tsx` — القالب المشترك لكل صفحة أداة (العنوان، الوصف، طريقة الاستخدام، FAQ).
- `lib/tools.ts` — قائمة الأدوات ومحتوى SEO لكل واحدة (عدّل النصوص من هنا).

## إضافة أداة جديدة

1. أضف عنصر جديد في `lib/tools.ts` (slug, name, icon, shortDesc, metaDescription, howTo, faq).
2. أنشئ مكوّن جديد في `components/tools/YourTool.tsx`.
3. أنشئ مجلد `app/tools/your-slug/page.tsx` بنفس نمط الصفحات الموجودة.

## النشر على Vercel

```bash
npm install -g vercel
vercel
```

أو اربط المستودع مباشرة من لوحة تحكم Vercel (vercel.com) واختر هذا المجلد.

## الخطوة التالية المقترحة

- ربط دومين `.com` أو `.sa`.
- إضافة Google Search Console وملف `sitemap.xml` (يمكن توليده تلقائيًا بإضافة `app/sitemap.ts`).
- إضافة أدوات جديدة تدريجيًا بنفس النمط بعد التأكد من أداء أول 10 أدوات.
