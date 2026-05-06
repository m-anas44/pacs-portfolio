"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Target, Zap, ChevronRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AboutHero() {
  return (
    <section className="relative py-8 md:py-14 overflow-hidden bg-white">
      {/* Background Layering */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none " />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] bg-size-[32px_32px] opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Tactical Narrative (7 Columns) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-4"
            >
              <div className="px-2 py-1 text-emerald-500 font-mono text-xs uppercase tracking-wider bg-slate-900 rounded-sm">
                The Origin
              </div>
              <div className="h-px w-10 bg-slate-100" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                Est. 2022 / PACS
              </span>
            </motion.div>

            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-black tracking-tighter text-slate-900 mb-8"
          >
             <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-900 via-emerald-600 to-slate-900">
            Architecting <br />
            </span>
            Academic Mastery.
          </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 text-base md:text-lg leading-relaxed mb-12 max-w-xl font-medium border-l-2 border-emerald-500 pl-8"
            >
              Founded by Sir Usama, PACS was engineered to dismantle rote
              learning. We treat education as a precise science—decoding complex
              board requirements into high-performance frameworks.
            </motion.p>

            {/* The Directive (Mission) */}
            <motion.div
              variants={itemVariants}
              className="relative p-8 bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target className="w-20 h-20 text-white" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-black">
                    Core Directive
                  </p>
                </div>
                <p className="text-base font-bold text-white leading-relaxed tracking-tight">
                  "To decode complex concepts into logical, retainable
                  frameworks, guaranteeing intellectual growth and supreme board
                  outcomes."
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Founder Profile (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-5 relative"
          >
            {/* Technical Frame Accents */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-emerald-500/20" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-slate-200" />

            <div className="relative aspect-4/5 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl group">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800"
                alt="Sir Usama"
                fill
                className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />

              {/* Profile Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/5 backdrop-blur-md border border-white/20 p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-emerald-400 font-black mb-1">
                    Founder / CEO
                  </p>
                  <h3 className="text-xl font-black text-white tracking-tighter">
                    Sir Usama
                  </h3>
                </div>
              </div>
            </div>

            {/* Float Badge */}
            <div className="absolute -right-8 top-1/4 bg-white p-4 shadow-xl border border-slate-100 hidden xl:block">
              <Zap className="w-5 h-5 text-emerald-500 mb-2" />
              <p className="text-[10px] font-black uppercase text-slate-400">
                Result Focus
              </p>
              <p className="text-sm font-bold text-slate-900">100% Logic</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
