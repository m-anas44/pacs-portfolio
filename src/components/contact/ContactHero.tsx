"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden border-b border-slate-100 bg-white">
      {/* Precision Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[24px_24px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* System Status Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 flex items-center gap-3 px-3 py-1 rounded-full border border-emerald-100 bg-emerald-50/50"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700">
              Inquiry Portal v2.0
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6"
          >
            Connect with <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 via-emerald-600 to-slate-900">
              Precision Academy
            </span>
          </motion.h1>

          {/* Technical Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-500 text-sm md:text-base max-w-xl leading-relaxed border-l-2 border-emerald-500 pl-6 text-left md:text-center md:border-l-0 md:pl-0"
          >
            Access academic support, campus coordinates, and enrollment protocols. 
            Our administration is active Mon—Sat for immediate response.
          </motion.p>

          {/* UI Markers */}
          <div className="mt-12 flex gap-4">
            <div className="h-1 w-12 bg-slate-100" />
            <div className="h-1 w-4 bg-emerald-500" />
            <div className="h-1 w-12 bg-slate-100" />
          </div>
        </div>
      </div>

      {/* Geometric Accents instead of blurs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-slate-100" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-slate-100" />
      </div>
    </section>
  );
}