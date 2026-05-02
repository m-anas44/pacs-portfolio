'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Animation variants for consistency
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15 
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20
    }
  }
};

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden min-h-[85vh] flex items-center py-5 md:py-10">
      {/* Subtle Emerald Background Accents */}
      <div className="absolute top-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-(--emerald-50) rounded-full blur-3xl -mr-20 -mt-20 opacity-60" />
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 bg-(--emerald-50) rounded-full blur-3xl -ml-20 -mb-20 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left order-2 lg:order-1"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-xs sm:text-sm font-bold tracking-wide text-(--emerald-700) uppercase bg-(--emerald-100) rounded-full"
          >
            Admissions Open Year-Round
          </motion.span>

          <motion.h1 
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] mb-6"
          >
            Master Your <span className="text-(--emerald-500)">Board Exams</span> with Confidence.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 font-sans"
          >
            Complete preparation for Class 8th, Matric, and FSc/ICS based on the latest Board Syllabus. Start your journey today—no need to wait for a session!
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="px-4 py-2.5 md:px-8 md:py-4 bg-(--emerald-500) text-white rounded-xl font-bold shadow-(--emerald-100) hover:bg-(--emerald-600) hover:-translate-y-1 transition-all active:scale-95 font-heading w-full sm:w-auto">
              Contact Academy
            </button>
            <button className="flex items-center justify-center gap-3 px-4 py-2.5 md:px-8 md:py-4 border border-slate-200 rounded-xl bg-slate-900 text-white font-semibold hover:border-(--emerald-500) hover:text-(--emerald-600) transition-all shadow-sm group w-full sm:w-auto">
              View Class Timings
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>

          {/* Classes Chips */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 border-t border-slate-100 flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start"
          >
            {['Class 8th', '9th & 10th (Matric)', 'FSc Pre-Med', 'FSc Pre-Eng', 'ICS'].map((cls) => (
              <span key={cls} className="px-2 sm:px-3 py-1 bg-slate-100 text-slate-500 text-[10px] sm:text-xs font-bold rounded-md uppercase tracking-wider border-l-2 border-(--emerald-500)">
                {cls}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-1 lg:order-2 max-w-lg mx-auto lg:max-w-none"
        >
          {/* Main Card Effect */}
          <div className="relative z-10 bg-white p-2 sm:p-4 rounded-4xl sm:rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 card-hover">
            <div className="overflow-hidden rounded-3xl sm:rounded-4xl">
              <Image 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000" 
                alt="Academy Excellence"
                width={800}
                height={1000}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Floating Glass Stats Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="glass absolute -right-4 sm:-right-8 top-1/4 p-4 sm:p-6 rounded-2xl shadow-xl border border-white/50 hidden sm:block"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-(--emerald-100) rounded-lg text-(--emerald-600)">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Success Rate</p>
                  <p className="text-lg sm:text-xl font-extrabold text-slate-800">98% Board Results</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Subtle Decorative Circle */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-slate-200 rounded-full animate-[spin_60s_linear_infinite] hidden sm:block" />
        </motion.div>

      </div>
    </section>
  );
}