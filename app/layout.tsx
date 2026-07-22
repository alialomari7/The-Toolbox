import type { Metadata } from "next";
import { Tajawal, IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-tajawal",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "صندوق الأدوات — أدوات مجانية سريعة",
    template: "%s | صندوق الأدوات",
  },
  description:
    "مجموعة أدوات مجانية عبر الإنترنت: حاسبة عمر، BMI، مولد كلمات مرور، QR Code، ومحولات مختلفة.",
  other: {
    "google-adsense-account": "ca-pub-4641431769683313",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4641431769683313"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${tajawal.variable} ${plexMono.variable} font-display bg-bg text-text min-h-screen`}
      >
        <div className="grid md:grid-cols-[260px_1fr] min-h-screen">
          <Sidebar />
          <div className="flex flex-col">
            <main className="px-5 py-8 md:px-12 md:py-10 max-w-3xl flex-1">
              {children}
            </main>
            <footer className="px-5 md:px-12 py-6 border-t border-border flex gap-5 text-sm text-muted">
              <a href="/about" className="hover:text-mint transition-colors">من نحن</a>
              <a href="/privacy-policy" className="hover:text-mint transition-colors">سياسة الخصوصية</a>
              <a href="/contact" className="hover:text-mint transition-colors">تواصل معنا</a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
