"use client";

import { motion, Variants } from "framer-motion";
import { Building2, MapPin, CheckCircle2 } from "lucide-react";

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

export default function DualCampus() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Strategic Presence</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">The Dual-Campus Network</p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10"
        >
          {/* Campus 1 */}
          <motion.div variants={itemVariants} className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:border-slate-200 transition-colors shadow-sm">
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-(--emerald-500) animate-pulse" />
              <span className="text-[9px] uppercase tracking-wider font-bold text-(--emerald-700)">Active</span>
            </div>
            
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-(--emerald-50) group-hover:text-(--emerald-600) group-hover:border-(--emerald-100) transition-colors">
              <Building2 className="w-6 h-6 text-slate-400 group-hover:text-(--emerald-500) transition-colors" />
            </div>
            
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Model Town Campus</h3>
            <p className="text-xs text-slate-500 mb-6 flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
              123 Academic Block, Model Town, Lahore
            </p>
            
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-(--emerald-500)" />
                <span className="font-medium">Capacity: 500+ Students</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-(--emerald-500)" />
                <span className="font-medium">Advanced Science Labs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-(--emerald-500)" />
                <span className="font-medium">Digital Smart Boards</span>
              </div>
            </div>
          </motion.div>

          {/* Campus 2 */}
          <motion.div variants={itemVariants} className="group relative bg-white border border-slate-100 rounded-2xl p-8 hover:border-slate-200 transition-colors shadow-sm">
            <div className="absolute top-6 right-6 flex items-center gap-2 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-(--emerald-500) animate-pulse" />
              <span className="text-[9px] uppercase tracking-wider font-bold text-(--emerald-700)">Enrollment Open</span>
            </div>
            
            <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-(--emerald-50) group-hover:text-(--emerald-600) group-hover:border-(--emerald-100) transition-colors">
              <Building2 className="w-6 h-6 text-slate-400 group-hover:text-(--emerald-500) transition-colors" />
            </div>
            
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-2">Johar Town Campus</h3>
            <p className="text-xs text-slate-500 mb-6 flex items-start gap-2">
              <MapPin className="w-4 h-4 shrink-0 text-slate-400 mt-0.5" />
              456 Education Ave, Johar Town, Lahore
            </p>
            
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-(--emerald-500)" />
                <span className="font-medium">Capacity: 400+ Students</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-(--emerald-500)" />
                <span className="font-medium">Dedicated Library Space</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-(--emerald-500)" />
                <span className="font-medium">Computer Science Hub</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
