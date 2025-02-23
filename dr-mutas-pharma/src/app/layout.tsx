import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Footer from '@/components/Footer';
import "./globals.css";

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  title: "DR.MUTUS Pharma - Products for Better Life",
  description: "DR.MUTUS Pharma - An American-Egyptian brand producing innovative medical therapy products and cosmetics for a better life.",
  keywords: "DR.MUTUS Pharma, Kazuarin, Uzarsef, medical therapy, cosmetics, Egyptian American brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-cairo rtl`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
