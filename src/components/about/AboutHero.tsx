"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function AboutHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="mb-6 flex items-center gap-3">
              <div className="h-[1px] w-8 bg-(--emerald-500)" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">The Origin</span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6"
            >
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--emerald-600) to-(--emerald-400)">
                Academic Excellence.
              </span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10 max-w-lg"
            >
              Founded by Sir Usama, PACS was built to bridge the gap between rote learning and true conceptual clarity. We treat academic preparation as a precise science—optimizing for both understanding and high-performance board results.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="p-6 border border-slate-100 rounded-xl bg-slate-50/50 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-(--emerald-500)" />
              <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-2">Mission Statement</p>
              <p className="text-sm font-medium text-slate-800 leading-relaxed">
                "To architect an educational environment where complex concepts are decoded into logical, retainable frameworks, guaranteeing intellectual growth and supreme academic outcomes."
              </p>
            </motion.div>
          </motion.div>
          
          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 grayscale hover:grayscale-0 transition-all duration-700"
          >
            <div className="absolute inset-0 bg-slate-900 mix-blend-multiply opacity-20 z-10 transition-opacity duration-700 hover:opacity-0" />
            <Image 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800" 
              alt="Sir Usama - Founder of PACS"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute bottom-4 left-4 right-4 z-20 glass p-3 sm:p-4 rounded-xl border border-white/20">
               <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold mb-1">Founder & CEO</p>
               <p className="text-white font-heading font-bold text-sm sm:text-base">Sir Usama</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
