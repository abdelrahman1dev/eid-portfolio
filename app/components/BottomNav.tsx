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


export default function BottomNav() {
  const { locale } = useParams();
  const links = [
    { href: `/${locale}/`, label: "Home", icon: <Home className="w-5 h-5" /> },
    { href: `/${locale}/about`, label: "About", icon: <User className="w-5 h-5" /> },
    { href: `/${locale}/feed`, label: "Feed", icon: <Video className="w-5 h-5" /> },
    { href: `/${locale}/contact`, label: "Contact", icon: <Mail className="w-5 h-5" /> },
    { href: `/`, label: "CV", icon: <FileText className="w-5 h-5" /> },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-gray-800 shadow-lg z-50">
      <ul className="flex justify-around items-center py-3">
        {links.map(({ href, label, icon }) => (
          <li key={href}>
            <Link href={href}>
              <p
                className="flex flex-col items-center text-gray-300 hover:text-teal-400 transition text-xs"
              >
                {icon}
                <span className="mt-1">{label}</span>
              </p>
            </Link>

          </li>
        ))}
      </ul>
    </nav>
  );
}