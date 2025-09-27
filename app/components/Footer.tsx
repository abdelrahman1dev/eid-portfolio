"use client";
import { Github, Linkedin } from 'lucide-react'
import React from 'react'
import { useState } from 'react';
import { usePathname , useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from 'next/link';

function Footer() {
  const t = useTranslations();
  const router = useRouter();
    const [locale, setLocale] = useState(() => {
      if (typeof window === 'undefined') return 'en';
      try {
        const nav = navigator.language || navigator.language || 'en';
        return nav.startsWith('ar') ? 'ar' : 'en';
      } catch (e) {
        return 'en';
      }
    });

 
  const pathname = usePathname();
  const isFeedPage = pathname === `/${locale}/feed`;
  if (isFeedPage) return null;
  return (
    <footer className='w-full h-32 bg-black/90 border-t border-white/10 hidden lg:flex flex-col justify-center items-center text-sm px-4'>
      <div className="flex justify-between items-center w-full max-w-6xl mb-4">
        <nav className="flex gap-6">
          <Link href={`/${locale}`} className="hover:text-white transition text-gray-400"> {t('common.home')} </Link>
          <Link href={`/${locale}/about`} className="hover:text-white transition text-gray-400"> {t('common.about')} </Link>
          <Link href={`/${locale}/feed`} className="hover:text-white transition text-gray-400"> {t('common.feed')} </Link>
          <Link href={`/${locale}/contact`} className="hover:text-white transition text-gray-400"> {t('common.contact')} </Link>
        </nav>
        <div className="flex gap-4">
          <a href="https://github.com/abdelrahman1dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-gray-400" title={t('footer.social.github')}> <Github size={20} /> </a>
          <a href="https://linkedin.com/in/abdelrahman1dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-gray-400" title={t('footer.social.linkedin')}> <Linkedin size={20} /> </a>
        </div>
      </div>
      <div className="text-center">
        <p className='font-light text-gray-400 dir="ltr"'> 
          {t('footer.developedBy')} <a href="https://github.com/abdelrahman1dev" target="_blank" rel="noopener noreferrer" className='hover:underline transition text-gray-300 hover:text-white'> {t('footer.name')} </a> {t('footer.year')}
        </p>
        <p className="text-xs text-gray-500 mt-1">{t('footer.copyright')}</p>
      </div>
    </footer>
  )
}

export default Footer
