import type { Metadata } from "next";
import "./globals.css";
import SideNav from "./components/SideNav";
import BottomNav from "./components/BottomNav";
import GoTopBtn from "./components/GoTopBtn";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Mohamed Eid",
  description: "Personal Portfolio of Mohamed Eid – Motion & Infographic Specialist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {



  return (
    <html lang="en">
      <body className="bg-black/97 text-white antialiased relative overflow-x-hidden">
      <Toaster />
        <SideNav />
        {children}
        <GoTopBtn />
        <BottomNav />
      </body>
    </html>
  );
}
