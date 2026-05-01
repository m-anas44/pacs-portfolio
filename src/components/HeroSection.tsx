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
    <section className="relative bg-white overflow-hidden min-h-[85vh] flex items-center pt-10">
      {/* Subtle Emerald Background Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--emerald-50)] rounded-full blur-3xl -mr-20 -mt-20 opacity-60" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--emerald-50)] rounded-full blur-3xl -ml-20 -mb-20 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wide text-[var(--emerald-700)] uppercase bg-[var(--emerald-100)] rounded-full"
          >
            Admissions Open Year-Round
          </motion.span>

          <motion.h1 
            variants={itemVariants}
            className="font-heading text-4xl md:text-6xl font-bold text-slate-900 leading-[1.1] mb-6"
          >
            Master Your <span className="text-[var(--emerald-500)]">Board Exams</span> with Confidence.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 font-sans"
          >
            Complete preparation for Class 8th, Matric, and FSc/ICS based on the latest Board Syllabus. Start your journey today—no need to wait for a session!
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="px-8 py-4 bg-[var(--emerald-500)] text-white rounded-xl font-bold shadow-lg shadow-[var(--emerald-100)] hover:bg-[var(--emerald-600)] hover:-translate-y-1 transition-all active:scale-95 font-heading">
              Contact Academy
            </button>
            <button className="flex items-center gap-3 px-6 py-4 border border-slate-200 rounded-xl bg-white text-slate-700 font-semibold hover:border-[var(--emerald-500)] hover:text-[var(--emerald-600)] transition-all shadow-sm group">
              View Class Timings
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </motion.div>

          {/* Classes Chips */}
          <motion.div 
            variants={itemVariants}
            className="mt-10 pt-8 border-t border-slate-100 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            {['Class 8th', '9th & 10th (Matric)', 'FSc Pre-Med', 'FSc Pre-Eng', 'ICS'].map((cls) => (
              <span key={cls} className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-bold rounded-md uppercase tracking-wider border-l-2 border-[var(--emerald-500)]">
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
          className="relative lg:block"
        >
          {/* Main Card Effect */}
          <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl shadow-slate-200 border border-slate-100 card-hover">
            <div className="overflow-hidden rounded-[2rem]">
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
              className="glass absolute -right-8 top-1/4 p-6 rounded-2xl shadow-xl border border-white/50 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[var(--emerald-100)] rounded-lg text-[var(--emerald-600)]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Success Rate</p>
                  <p className="text-xl font-extrabold text-slate-800">98% Board Results</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Subtle Decorative Circle */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border-2 border-dashed border-slate-200 rounded-full animate-[spin_60s_linear_infinite]" />
        </motion.div>

      </div>
    </section>
  );
}