"use client";
import {
  Home,
  User,
  Video,
  Mail,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export default function BottomNav() {
  const { locale } = useParams();
  const t = useTranslations("common");

  const links = [
    { href: `/${locale}/`, label: "home", icon: <Home className="w-5 h-5" /> },
    { href: `/${locale}/about`, label: "about", icon: <User className="w-5 h-5" /> },
    { href: `/${locale}/feed`, label: "feed", icon: <Video className="w-7 h-7 " /> },
    { href: `/${locale}/contact`, label: "contact", icon: <Mail className="w-5 h-5" /> },
    { href: `/`, label: "cv", icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <nav 
      dir="ltr"
      className="lg:hidden fixed bottom-0 w-full bg-black/60 backdrop-blur-md border-t border-gray-800 shadow-lg z-50"
    >
      <ul className="flex relative justify-around items-center py-3 px-2">
        {links.map(({ href, label, icon }) => (
          <li key={href} className="flex-1 min-w-0">
            <Link
              href={href}
              className={`flex flex-col items-center  hover:text-teal-400 transition text-xs gap-1 ${label === "feed" ? "bg-teal-400 hover:opacity-50 hover:text-black rounded-full justify-center p-2 text-black scale-115 bottom-7 right-[50%] translate-x-[50%] w-12 h-12 absolute" : "" }`}
            prefetch
            >
              <h1 className="">{icon}</h1>
            {
              label === "feed" ? 
              "" :     <span className="mt-0.5 text-center truncate w-full px-1 ">
                {
              t(label) 
                }
              </span>
            }
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}