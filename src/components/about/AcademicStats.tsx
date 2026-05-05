"use client";

import { motion, Variants } from "framer-motion";
import {
  Network,
  Users,
  GraduationCap,
  Award,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
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
export default function AcademicStats() {
    return (
        <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
          >
            {[
              { val: "98%", label: "Success Rate", icon: <Award className="w-5 h-5" /> },
              { val: "5000+", label: "Alumni Network", icon: <Users className="w-5 h-5" /> },
              { val: "2", label: "State-of-Art Campuses", icon: <Network className="w-5 h-5" /> },
              { val: "15+", label: "Expert Faculty", icon: <GraduationCap className="w-5 h-5" /> },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center group">
                <div className="flex justify-center mb-4 text-slate-300 group-hover:text-(--emerald-400) transition-colors">
                  {stat.icon}
                </div>
                <div className="font-heading text-4xl sm:text-5xl font-black text-slate-900 mb-2 tracking-tighter">
                  {stat.val}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-(--emerald-500)">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    )
}