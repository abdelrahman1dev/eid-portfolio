"use client";
import { FacebookIcon, Github, Linkedin } from 'lucide-react'
import { useParams , usePathname } from 'next/navigation';

import { useTranslations } from "next-intl";
import Link from 'next/link';
import { link } from 'fs';

function Footer() {
  const t = useTranslations();
  const {locale} = useParams();
  const pathname = usePathname();



  const links = [
    { href: `/${locale}/`, label: "home"},
    { href: `/${locale}/about`, label: "about"},
    { href: `/${locale}/feed`, label: "feed"},
    { href: `/${locale}/contact`, label: "contact" },
    { href: `/`, label: "cv" },
  ];


  if (pathname === `/${locale}/feed`) return


  return (
    <footer className='w-full h-fit p-8 pb-30 lg:pb-0 bg-black/90 border-t border-white/10  flex flex-col justify-center items-center text-sm px-4'>
      <div className="flex justify-between items-center w-full max-w-6xl mb-4">
        <nav className="flex lg:flex-row flex-col gap-6">
          {
            links.map((link , index) => (
              <Link href={link.href} key={index}  className="hover:text-white transition text-gray-400"> {t(`common.${link.label}`)} </Link>
            ))
          }
        </nav>
        <div className="flex gap-4">
          <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-gray-400" title={t('footer.social.github')}> <FacebookIcon size={20} /> </a>
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
