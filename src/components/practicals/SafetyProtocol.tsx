"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, FlameKindling, Wind, HeartPulse } from "lucide-react";

const protocols = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    code: "PPE-01",
    label: "Personal Protective Equipment",
    desc: "Goggles, lab coats & gloves are mandatory for all lab personnel before entry.",
  },
  {
    icon: <FlameKindling className="w-7 h-7" />,
    code: "FSP-02",
    label: "Fire Safety Protocol",
    desc: "CO₂ extinguishers and fire blankets at every bench. Exit drills every semester.",
  },
  {
    icon: <Wind className="w-7 h-7" />,
    code: "GHP-03",
    label: "Gas Handling Procedures",
    desc: "All flammable gas experiments conducted in dedicated fume hoods with active exhaust.",
  },
  {
    icon: <HeartPulse className="w-7 h-7" />,
    code: "FAT-04",
    label: "First Aid Trained Staff",
    desc: "Every instructor is CPR-certified. Fully stocked first-aid kits on site.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function SafetyProtocol() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-3">
              Safety Framework / ISO Aligned
            </p>
            <h2 className="font-heading text-3xl font-bold text-slate-900">Safety First</h2>
          </div>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            Compliance with laboratory safety standards is non-negotiable at every PACS campus.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {protocols.map((p, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group p-6 bg-white border border-slate-100 rounded-2xl hover:border-(--emerald-500)/30 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div className="mb-6 text-slate-300 group-hover:text-(--emerald-400) transition-colors duration-300">
                {p.icon}
              </div>
              <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-2">{p.code}</div>
              <h3 className="text-sm font-bold text-slate-800 font-heading mb-3">{p.label}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              <div className="mt-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-(--emerald-500) transition-colors duration-300" />
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest">Compliant</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
