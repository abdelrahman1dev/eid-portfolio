"use client";
import { Github } from 'lucide-react'
import React from 'react'
import { useState } from 'react';
import { usePathname , useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations();
  const router = useRouter();
    const [locale, setLocale] = useState(() => {
      if (typeof window === 'undefined') return 'en';
      try {
        const nav = navigator.language || navigator.userLanguage || 'en';
        return nav.startsWith('ar') ? 'ar' : 'en';
      } catch (e) {
        return 'en';
      }
    });

 
  const pathname = usePathname();
  const isFeedPage = pathname === `/${locale}/feed`;
  if (isFeedPage) return null;
  return (
    <footer className='w-full h-20 bg-black/90 border-t border-white/10 hidden lg:flex justify-center items-center gap-2 text-sm px-4'>
        <p className='font-light flex items-center gap-1 text-gray-400 dir="ltr"'> 
            {t('footer.developedBy')} <a href="https://github.com/abdelrahman1dev" target="_blank" rel="noopener noreferrer" className='flex items-center gap-2 hover:underline transition text-gray-300 hover:text-white'> {t('footer.name')} <Github size={16} /></a> {t('footer.year')}
        </p>
    </footer>
  )
}

export default Footer
