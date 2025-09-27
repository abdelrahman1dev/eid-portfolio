"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function ScrollCTA() {
  const [showBox, setShowBox] = useState(false);
  const [hasShown, setHasShown] = useState(false); 
  const pathname = usePathname();


  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (!hasShown && pathname === "/" && scrollPosition > pageHeight / 2) {
        setShowBox(true);
        setHasShown(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShown]);

 
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showBox) {
      timer = setTimeout(() => {
        setShowBox(false);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [showBox]);

  return (
    <AnimatePresence>
      {showBox && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-25 right-10 z-100 
           bg-white shadow-xl rounded-t-2xl rounded-bl-2xl px-4 py-4 
           lg:w-70 lg:right-25 lg:bottom-10
            md:right-10 md:bottom-10 sm:right-5 sm:bottom-5
            xs:right-2 xs:bottom-2
           w-52 max-w-md border"
        >
          <div className="flex justify-between items-center">
            <p className="text-gray-800 font-medium">
              like what you see ? <Link href="/contact" className="text-teal-400 underline"><span className="underline cursor-pointer">lets connect!</span></Link>
            </p>
            <button
              onClick={() => setShowBox(false)}
              className="ml-3 text-gray-500 hover:text-gray-800"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
