"use client";
import React, { useState } from "react";
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
import { usePathname } from "next/navigation";

interface SideNavProps {
  className?: string;
}

export default function SideNav({ className }: SideNavProps) {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { href: "/about", label: "About", icon: <User className="w-5 h-5" /> },
    { href: "/feed", label: "Feed", icon: <Video className="w-5 h-5" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="w-5 h-5" /> },
    { href: "/cv.pdf", label: "CV", icon: <FileText className="w-5 h-5" /> },
  ];

  const socials = [
    { href: "#", label: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { href: "#", label: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { href: "#", label: "YouTube", icon: <Youtube className="w-5 h-5" /> },
  ];

  return (
    <motion.aside
      animate={{ width: expanded ? 240 : 70 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`hidden lg:flex fixed top-0 z-10 right-0 h-screen bg-black/40 backdrop-blur-md p-4 flex-col items-center shadow-lg border-r border-gray-800 ${className}`}
    >
      <div className="mb-12"></div>

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
