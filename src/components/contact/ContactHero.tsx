"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-(--emerald-500)" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Contact Us</span>
            <div className="h-[1px] w-8 bg-(--emerald-500)" />
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-(--emerald-600) to-(--emerald-400)">Conversation.</span>
          </h1>
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Whether you're a prospective student, a parent, or an alum, we're here to help. 
            Our team is dedicated to providing you with the support you need for academic excellence.
          </p>
        </motion.div>
      </div>
      
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-(--emerald-50) rounded-full blur-3xl -mr-48 -mt-48 opacity-40" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-(--emerald-50) rounded-full blur-3xl -ml-48 -mb-48 opacity-40" />
    </section>
  );
}
