"use client";
import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";
import { useTranslations } from 'next-intl';

function HeroSec() {
  const t = useTranslations('hero');
  
  const socials = [
    { href: "https://linkedin.com/in/your-profile", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { href: "https://instagram.com/your-profile", label: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { href: "https://youtube.com/@your-channel", label: "YouTube", icon: <Youtube className="w-5 h-5" /> },
  ];

  const keywords = ["design", "motion", "info", "graphic design"];

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-teal-500 to-green-400 rounded-full blur-[160px] opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-r from-green-400 to-teal-500 rounded-full blur-[140px] opacity-20 translate-x-1/3 translate-y-1/3"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-xl sm:text-2xl lg:text-3xl font-light mb-2 text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('greeting')}
          </motion.h2>
          
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 text-teal-300 leading-tight"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-white">{t('name')}</span>
          </motion.h1>
          
          <motion.h3
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-6 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('title')}
          </motion.h3>

          <motion.p
            className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('description')}
          </motion.p>

          <div className="flex justify-center space-x-6 mb-8">
            {socials.map(({ href, label, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-gray-800"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>

          <CtaBtn />
        </div>
      </section>

      <motion.section
        className="bg-black w-full overflow-hidden py-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.div
          className="flex gap-6 text-6xl sm:text-7xl font-thin whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {keywords.concat(keywords).map((word, index) => (
            <h1 key={index} className="px-4 text-gray-200">
              {word}.
            </h1>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default HeroSec;