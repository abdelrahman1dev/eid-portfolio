import type { ReactNode } from "react";
import SideNav from "../components/SideNav";
import BottomNav from "../components/BottomNav";
import GoTopBtn from "../components/GoTopBtn";
import Footer from "../components/Footer";
import ScrollCTA from "../components/ContactmeNotify";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";

const locales = ["en", "ar"] as const;
type Locale = typeof locales[number];

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params; // 👈 notice: params is async, need await

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="bg-black/97 text-white antialiased relative overflow-x-hidden">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Toaster />
          <SideNav />
          {children}
          <ScrollCTA />
          <GoTopBtn />
          <BottomNav />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
