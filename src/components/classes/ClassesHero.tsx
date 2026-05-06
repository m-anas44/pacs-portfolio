"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function ClassesHero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-white border-b border-slate-100">
      {/* Graph-Paper Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      
      {/* Subtle Accent Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-(--emerald-500) rounded-full blur-[150px] opacity-[0.05]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* System Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 border border-slate-800 rounded-sm">
              <Terminal className="w-3 h-3 text-(--emerald-500)" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-300">
                Program_Selection / v4.2.0
              </span>
            </div>
            <div className="h-px w-12 bg-slate-200" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9] mb-8"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 via-emerald-600 to-emerald-400">
              Academic Success.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed border-l-2 border-(--emerald-500) pl-6"
          >
            Precision-crafted curricula designed for intellectual growth and supreme board outcomes. Select your technical track below.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
