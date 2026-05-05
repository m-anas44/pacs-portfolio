"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FlaskConical, Atom } from "lucide-react";

export default function LabHero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[100] h-[2px] bg-slate-100">
        <motion.div
          className="h-full bg-(--emerald-500) origin-left"
          style={{ scaleX: scrollProgress / 100 }}
          transition={{ duration: 0 }}
        />
      </div>

      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden bg-white border-b border-slate-100">
        {/* Graph-Paper Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Corner Accent Dot */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-(--emerald-500) rounded-full blur-[120px] opacity-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            {/* Meta Label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-8 bg-(--emerald-500)" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
                LAB-DIVISION / v4.2.0
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] mb-8"
            >
              Where Theory{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--emerald-600) to-(--emerald-400)">
                Meets Reality.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mb-12"
            >
              Experience a curriculum designed for the hands-on scientist. From
              Physics simulations to Biology dissections, every practical session
              at PACS is engineered for precision and mastery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: <FlaskConical className="w-4 h-4" />, label: "3 Active Labs" },
                { icon: <Atom className="w-4 h-4" />, label: "50+ Experiments" },
                { icon: <FlaskConical className="w-4 h-4" />, label: "Safety Certified" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-xs font-bold text-slate-600 bg-white shadow-sm"
                >
                  <span className="text-(--emerald-500)">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
