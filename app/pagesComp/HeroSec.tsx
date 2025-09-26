import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import CtaBtn from "../components/CtaBtn";

function HeroSec() {
  const socials = [
    { href: "#LinkedIn", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { href: "#Instagram", label: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { href: "#YouTube", label: "YouTube", icon: <Youtube className="w-5 h-5" /> },
  ];

  const keywords = [
    "design",
    "motion",
    "info",
    "graphic design",
  ]


  return (
    <><section className="z-1 relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">
      {/* Glowing Background */}
      <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-teal-500 rounded-full blur-[180px] opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-green-400 rounded-full blur-[160px] opacity-20 translate-x-1/3 translate-y-1/3"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-lg sm:text-xl font-light text-gray-300 mb-2 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Hello, I`m
          <span className="text-teal-400 font-medium">  Mohamed Eid</span>
        </motion.h2>
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mt-4 mb-6 text-teal-300 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A Motion Graphic Designer <br />
          <span className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light">
            & Infographic Specialist
          </span>
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I create captivating motion graphics and infographics that bring stories to life and simplify complex information.
        </motion.p>

        {/* Socials */}
        <div className="flex justify-center space-x-6 mb-8">
          {socials.map(({ href, label, icon }) => (
            <a
              key={href}
              href={href}
              className="text-gray-300 hover:text-teal-400 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-gray-800"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* CTA Button */}
          <CtaBtn />



      </div>

    </section>

<motion.section
  className="bg-black w-full overflow-hidden "
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.6 }}
>
  <div className="scroll-wrapper flex w-max infinite-scroll-container  ">
    {/* First set */}
    <div className="flex gap-3 text-7xl font-thin whitespace-nowrap">
      {keywords.map((word, index) => (
        <h1 key={`set1-${index}`} className="px-3">
          {word}.
        </h1>
      ))}
    </div>
    {/* Duplicate set for seamless loop */}
    <div className="flex gap-3 text-7xl font-thin whitespace-nowrap">
      {keywords.map((word, index) => (
        <h1 key={`set2-${index}`} className="px-3">
          {word}.
        </h1>
      ))}
    </div>
  </div>
</motion.section>

      </>
  );
}

export default HeroSec;
