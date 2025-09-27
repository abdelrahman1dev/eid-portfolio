import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/SideNav";
import BottomNav from "./components/BottomNav";
import GoTopBtn from "./components/GoTopBtn";
import Footer from "./components/Footer";
import ScrollCTA from "./components/ContactmeNotify";
import { Toaster } from "sonner";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {getLocale} from 'next-intl/server';


export const metadata: Metadata = {
  title: "Mohamed Eid",
  description: "Personal Portfolio of Mohamed Eid – Motion & Infographic Specialist",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className="bg-black/97 text-white antialiased relative overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
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
