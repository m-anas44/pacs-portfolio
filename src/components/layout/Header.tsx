"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ArrowRight } from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Classes", href: "/classes" },
  { name: "Practicals", href: "/practicals" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`sticky top-0 left-0 right-0 w-full z-100 border-b transition-all duration-500 ${
    scrolled 
      ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" 
      : "bg-transparent border-transparent py-6"
  }`}
>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          
          {/* Logo: The "System" Identity */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="bg-slate-900 p-2 rounded-sm transition-transform duration-500 group-hover:-rotate-90">
              <GraduationCap className="text-emerald-500 w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tighter text-slate-900 leading-none">
                PACS
              </span>
              <span className="font-mono text-[8px] font-bold text-emerald-600 tracking-[0.2em] uppercase">
                Precision_System
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Minimalist Dossier Style */}
          <div className="hidden md:flex items-center gap-2">
            <nav className="flex items-center bg-slate-50 border border-slate-100 p-1 rounded-sm">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-5 py-2 text-[10px] font-bold uppercase tracking-widest  transition-all relative ${
                      isActive ? "text-emerald-600" : "text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-white shadow-sm border border-slate-200 -z-10 rounded-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
            
            <div className="ml-4">
              <Link
                href="/contact"
                className="flex items-center gap-3 bg-emerald-500 text-slate-900 px-6 py-3 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all group"
              >
                Enroll Now
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className={`h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
            <div className={`h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "opacity-0" : "w-4"}`} />
            <div className={`h-0.5 bg-slate-900 transition-all duration-300 ${isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer: The "Technical Overlay" */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white border-l border-slate-200 z-110 p-10 flex flex-col shadow-2xl"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-900">
                <X className="w-8 h-8" />
              </button>
            </div>

            <div className="flex flex-col gap-8">
              {links.map((link, i) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="group"
                >
                  <p className="text-[10px] font-bold text-emerald-500 mb-1">0{i + 1}_</p>
                  <p className="text-3xl font-black text-slate-900 tracking-tighter group-hover:pl-4 transition-all duration-300">
                    {link.name}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full bg-slate-900 text-white text-center py-5 font-bold uppercase tracking-widest text-xs"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}