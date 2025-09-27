import type { Metadata } from "next";
import "./globals.css";




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
  
          {children}
      
     
      </body>
    </html>
  );
}