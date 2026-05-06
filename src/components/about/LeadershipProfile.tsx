"use client";

import { motion, Variants } from "framer-motion";
import { TerminalSquare } from "lucide-react";

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

export default function LeadershipProfile() {
  return (
    <section className="py-14 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <h3 className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                <TerminalSquare className="w-4 h-4 text-(--emerald-500)" />
                Technical Profile
              </h3>
              
              <div className="space-y-4">
                {[
                  { label: "Core Expertise", value: "Physics & Advanced Mathematics" },
                  { label: "Experience", value: "10+ Years Academic Mentoring" },
                  { label: "Students Mentored", value: "5,000+ Alumni" },
                  { label: "Operating Philosophy", value: "Logic Over Memorization" }
                ].map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 border-b border-slate-50 last:border-0">
                    <span className="text-xs text-slate-500 font-medium">{item.label}</span>
                    <span className="text-sm font-bold text-slate-900 mt-1 sm:mt-0">{item.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants} className="font-heading text-3xl font-bold text-slate-900 mb-6">
                Architecting <span className="text-(--emerald-500)">Success</span>
              </motion.h2>
              <motion.div variants={itemVariants} className="pl-6 border-l-2 border-(--emerald-500) py-2 mb-8">
                <p className="text-lg text-slate-700 italic font-medium leading-relaxed">
                  "We don't just teach the syllabus; we reverse-engineer the exam patterns and impart fundamental truths. When a student understands the 'why' behind a formula, the 'how' becomes effortless."
                </p>
              </motion.div>
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-heading font-bold text-xl">
                  U
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Sir Usama</p>
                  <p className="text-[10px] uppercase tracking-widest text-slate-500">Visionary & Lead Instructor</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
