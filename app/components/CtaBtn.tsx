import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

function CtaBtn() {
    const t = useTranslations('hero');
    const {locale} = useParams();
    
    return (
        <Link href={`/${locale}/contact`}>
            <div className="inline-flex items-center rounded-full border border-teal-400 overflow-hidden cursor-pointer hover:bg-teal-400 hover:text-black transition-all duration-300 group">
                <span className="bg-teal-400 text-black px-4 py-3 font-medium text-sm sm:text-base">
                    {t('cta')}
                </span>
                <span className="py-3 px-6 font-semibold text-sm sm:text-base group-hover:translate-x-1 transition-transform duration-300">
                    {t('ctaAction')}
                </span>
            </div>
        </Link>
    )
}

export default CtaBtn