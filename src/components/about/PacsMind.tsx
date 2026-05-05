"use client";

import { motion, Variants } from "framer-motion";
import {
  Cpu,
  TrendingUp,
  GitBranch
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

export default function PACSMind(){
    return (
        <section className="py-20 bg-slate-900 text-white border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl font-bold mb-4">The PACSMind Workflow</h2>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Our Algorithmic Approach to Learning</p>
                  </div>
        
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="relative"
                  >
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-slate-800 z-0">
                      <div className="h-full bg-linear-to-r from-slate-800 via-(--emerald-500) to-slate-800 opacity-50" />
                    </div>
        
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
                      {[
                        { 
                          icon: <Cpu className="w-6 h-6" />, 
                          title: "Concept Ignition", 
                          desc: "Breaking down complex theories into fundamental, logical nodes. No rote memorization, just pure understanding.",
                          step: "01"
                        },
                        { 
                          icon: <GitBranch className="w-6 h-6" />, 
                          title: "Practical Validation", 
                          desc: "Applying concepts to real-world scenarios and multi-variable problems to build robust cognitive connections.",
                          step: "02"
                        },
                        { 
                          icon: <TrendingUp className="w-6 h-6" />, 
                          title: "Board Optimization", 
                          desc: "Refining knowledge delivery for exam environments. Time-management, structure, and precision formatting.",
                          step: "03"
                        }
                      ].map((node, i) => (
                        <motion.div key={i} variants={itemVariants} className="relative flex flex-col items-center text-center">
                          <div className="w-24 h-24 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center mb-6 relative group">
                            <div className="absolute inset-0 rounded-full border border-(--emerald-500) scale-[1.15] opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                            <div className="text-(--emerald-400)">{node.icon}</div>
                            <div className="absolute -top-2 -right-2 bg-slate-900 border border-slate-700 text-[9px] font-bold px-2 py-0.5 rounded-md text-slate-400">
                              {node.step}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold font-heading mb-3">{node.title}</h3>
                          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">{node.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>
    )
}