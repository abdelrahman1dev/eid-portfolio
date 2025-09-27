"use client";
import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Video,
  Mail,
  FileText,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import dynamic from "next/dynamic";



interface SideNavProps {
  className?: string;
}

export default function SideNav({ className }: SideNavProps) {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('common');
  const router = useRouter();
  // initialize locale from router locale if available, otherwise from navigator
  const [locale, setLocale] = useState<string>(() => {
    if (typeof window === 'undefined') return 'en';
    try {
      const nav = navigator.language || (navigator as any).userLanguage || 'en';
      return nav.startsWith('ar') ? 'ar' : 'en';
    } catch (e) {
      return 'en';
    }
  });

  const links = [
    { href: "/", label: t('home'), icon: <Home className="w-5 h-5" /> },
    { href: "/about", label: t('about'), icon: <User className="w-5 h-5" /> },
    { href: "/feed", label: t('feed'), icon: <Video className="w-5 h-5" /> },
    { href: "/contact", label: t('contact'), icon: <Mail className="w-5 h-5" /> },
    { href: "/cv.pdf", label: t('cv'), icon: <FileText className="w-5 h-5" /> },
  ];

  const socials = [
    { href: "#", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { href: "#", label: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { href: "#", label: "YouTube", icon: <Youtube className="w-5 h-5" /> },
  ];

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale);
    // push to same pathname but with new locale
    // next/navigation router.push accepts a string; to change locale use locale option
    try {
      // Build a locale-prefixed path (e.g. /ar/about) when using next's i18n routing
      const cleanPath = pathname || '/';
      // If pathname already contains a locale segment, replace it
      const parts = cleanPath.split('/').filter(Boolean);
      const supported = ['en', 'ar'];
      if (supported.includes(parts[0])) {
        parts[0] = newLocale;
      } else {
        parts.unshift(newLocale);
      }
      const target = '/' + parts.join('/');
      router.push(target);
    } catch (e) {
      // fallback: basic push
      router.push(pathname || '/');
    }
  };

  return (
    <motion.aside
      animate={{ width: expanded ? 240 : 70 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`flex fixed top-0 z-10 right-0 h-screen bg-black/40 backdrop-blur-md p-4 flex-col items-center shadow-lg border-r border-gray-800 ${className}`}
    >
      <div className="mb-4 w-full flex items-center justify-center">
        {/* small screens: compact select; md+: buttons */}
        <div className="block md:hidden w-full">
          <select
            aria-label={t('language')}
            value={locale}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded border border-gray-600"
          >
            <option value="en">English</option>
            <option value="ar">العربية</option>
          </select>
        </div>

        <div className="hidden md:flex gap-2">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`px-3 py-1 rounded ${locale === 'en' ? 'bg-teal-500 text-black' : 'bg-gray-800 text-white'}`}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange('ar')}
            className={`px-3 py-1 rounded ${locale === 'ar' ? 'bg-teal-500 text-black' : 'bg-gray-800 text-white'}`}
          >
            ع
          </button>
        </div>
      </div>
      <div className="mb-8"></div>

      {/* Nav Links */}
      <nav className="flex-1 w-full">
        <ul className="space-y-6 font-medium">
          {links.map(({ href, label, icon }) => {
            const isActive = pathname === href;
            return (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className={`flex items-center gap-3 transition ${
                    isActive
                      ? "text-teal-400"
                      : "text-gray-300 hover:text-teal-400"
                  }`}
                >
                  {icon}
                  {expanded && label}
                </Link>
                {!expanded && (
                  <span className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap transition">
                    {label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Socials */}
      <div
        className={`mt-auto text-gray-400 ${
          expanded ? "flex gap-5" : "flex flex-col gap-6"
        }`}
      >
        {socials.map(({ href, label, icon }) => (
          <div key={label} className="relative group">
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
              prefetch={false}
            >
              {icon}
            </Link>
            {!expanded && (
              <span className="absolute left-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap transition">
                {label}
              </span>
            )}
          </div>
        ))}
      </div>
    </motion.aside>
  );
}
