"use client";

import { motion, Variants } from "framer-motion";
import { useRef, useState } from "react";
import CountUp from "react-countup";
import { Network, Users, GraduationCap, Award } from "lucide-react";

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

export default function AcademicStats() {
  // Logic to control when the count-up starts
  const [startCount, setStartCount] = useState(false);

  const stats = [
    { numeric: 98, suffix: "%", label: "Success Rate", icon: <Award className="w-5 h-5" /> },
    { numeric: 5000, suffix: "+", label: "Alumni Network", icon: <Users className="w-5 h-5" /> },
    { numeric: 2, suffix: "", label: "State-of-Art Campuses", icon: <Network className="w-5 h-5" /> },
    { numeric: 15, suffix: "+", label: "Expert Faculty", icon: <GraduationCap className="w-5 h-5" /> },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          // We use Framer's viewport trigger to start the count
          onViewportEnter={() => setStartCount(true)}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div key={i} variants={itemVariants} className="text-center group">
              <div className="flex justify-center mb-4 text-slate-300 group-hover:text-emerald-400 transition-colors">
                {stat.icon}
              </div>
              <div className="font-heading text-4xl sm:text-5xl font-black text-slate-900 mb-2 tracking-tighter flex justify-center items-baseline">
                {startCount ? (
                  <CountUp
                    start={0}
                    end={stat.numeric}
                    duration={2.5}
                    separator=","
                  />
                ) : (
                  <span>0</span>
                )}
                <span className="text-emerald-500 ml-0.5">{stat.suffix}</span>
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}