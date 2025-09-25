"use client";
import { Github } from 'lucide-react'
import React from 'react'
import { usePathname } from "next/navigation";

function Footer() {
  const pathname = usePathname();
  const isFeedPage = pathname === "/feed";
  if (isFeedPage) return null;
  return (
    <section className='w-full h-20 bg-black text-gray-400 flex justify-center items-center gap-2 text-sm'>
        <h1 className='font-light flex items-center gap-1 '> 
            developed by <a href="https://github.com/abdelrahman1dev"  className='flex items-center gap-2 hover:underline transition '>abdelrahman mohamed eid <Github /></a> @2025
        </h1>
    </section>
  )
}

export default Footer
