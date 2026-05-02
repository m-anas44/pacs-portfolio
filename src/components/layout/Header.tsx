"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";

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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "glass py-3 shadow-lg shadow-emerald-900/5 border-b border-emerald-100/20" 
          : "bg-transparent py-5 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-(--emerald-500) p-2 rounded-xl shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-transform duration-300">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-slate-900 uppercase">
              PACS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 rounded-full ${
                    isActive ? "text-(--emerald-600)" : "text-slate-600 hover:text-(--emerald-500)"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-(--emerald-500) rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
            
            <div className="pl-4">
              <Link
                href="/contact"
                className="bg-(--emerald-500) text-white px-6 py-2.5 rounded-xl font-heading font-bold text-sm hover:bg-(--emerald-600) hover:shadow-xl hover:shadow-emerald-100 transition-all active:scale-95"
              >
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg bg-emerald-50 text-(--emerald-600) focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 md:hidden bg-white/95 backdrop-blur-xl border-b border-emerald-50 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-2">
              {links.map((link, i) => (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between p-4 rounded-xl text-sm font-bold ${
                      pathname === link.href 
                        ? "bg-emerald-50 text-(--emerald-600)" 
                        : "text-slate-600 active:bg-emerald-50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                    <ChevronRight className={`w-5 h-5 ${pathname === link.href ? "opacity-100" : "opacity-0"}`} />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full bg-(--emerald-500) text-white px-6 py-4 rounded-2xl font-heading font-extrabold text-center text-lg shadow-lg shadow-emerald-100"
                  onClick={() => setIsOpen(false)}
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}