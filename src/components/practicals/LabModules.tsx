"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Atom, FlaskConical, Leaf, ChevronRight } from "lucide-react";

const subjects = [
  {
    id: "physics",
    label: "Physics",
    icon: <Atom className="w-5 h-5" />,
    color: "text-blue-500",
    modules: [
      {
        title: "Mechanics",
        experiments: [
          "Simple Pendulum & Gravitational Acceleration",
          "Inclined Plane — Coefficient of Friction",
          "Hooke's Law — Spring Constant",
        ],
        protocol: "PPE-P01 — Safety goggles & gloves required.",
      },
      {
        title: "Optics",
        experiments: [
          "Converging Lens — Focal Length",
          "Verification of Snell's Law",
          "Diffraction Grating — Wavelength of Light",
        ],
        protocol: "PPE-P02 — Never look directly into laser source.",
      },
      {
        title: "Electricity",
        experiments: [
          "Ohm's Law — V-I Characteristics",
          "Wheatstone Bridge — Unknown Resistance",
          "Oscilloscope — AC/DC Waveform Analysis",
        ],
        protocol: "PPE-P03 — Power disconnected before circuit changes.",
      },
    ],
  },
  {
    id: "chemistry",
    label: "Chemistry",
    icon: <FlaskConical className="w-5 h-5" />,
    color: "text-(--emerald-500)",
    modules: [
      {
        title: "Qualitative Analysis",
        experiments: [
          "Cation Identification — Group I–V",
          "Anion Detection — Halide & Sulphate Tests",
          "Flame Test — Characteristic Colours",
        ],
        protocol: "PPE-C01 — Lab coat, gloves, and goggles mandatory.",
      },
      {
        title: "Thermochemistry",
        experiments: [
          "Heat of Neutralisation — Strong Acid/Base",
          "Hess's Law — Enthalpy of Formation",
          "Calorimetry — Specific Heat Capacity",
        ],
        protocol: "PPE-C02 — Handle hot glass with insulated gloves.",
      },
    ],
  },
  {
    id: "biology",
    label: "Biology",
    icon: <Leaf className="w-5 h-5" />,
    color: "text-lime-600",
    modules: [
      {
        title: "Cytology",
        experiments: [
          "Onion Epidermal Cell — Plasmolysis",
          "Human Blood Smear — Cell Identification",
          "Mitosis in Garlic Root Tips",
        ],
        protocol: "PPE-B01 — Dispose of slides in sharps container only.",
      },
      {
        title: "Anatomy",
        experiments: [
          "Dissection of Earthworm — Internal Organs",
          "Mammalian Heart — External Structures",
          "Leaf Anatomy — Cross-Section Slides",
        ],
        protocol: "PPE-B02 — Fixative chemicals used in fume hood only.",
      },
      {
        title: "Histology",
        experiments: [
          "Tissue Staining — Haematoxylin & Eosin",
          "Epithelial Tissue — 400x Magnification",
          "Muscle Fibre Types — Comparative Study",
        ],
        protocol: "PPE-B03 — Staining agents are corrosive — full PPE required.",
      },
    ],
  },
];

const panelVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

export default function LabModules() {
  const [activeSubject, setActiveSubject] = useState(subjects[0].id);
  const [openModule, setOpenModule] = useState<number | null>(0);

  const subject = subjects.find((s) => s.id === activeSubject)!;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-3">
            Curriculum Matrix / Board-Aligned
          </p>
          <h2 className="font-heading text-3xl font-bold text-slate-900">Subject Lab Modules</h2>
        </div>

        {/* Tab Bar */}
        <div className="flex gap-2 sm:gap-4 border-b border-slate-100 mb-12 overflow-x-auto pb-px">
          {subjects.map((s) => (
            <button
              key={s.id}
              onClick={() => { setActiveSubject(s.id); setOpenModule(0); }}
              className={`relative flex items-center gap-2.5 px-5 py-3 text-sm font-bold whitespace-nowrap transition-colors ${
                activeSubject === s.id ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <span className={activeSubject === s.id ? s.color : ""}>{s.icon}</span>
              {s.label}
              {activeSubject === s.id && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-(--emerald-500)"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Accordion Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubject}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-3xl space-y-4"
          >
            {subject.modules.map((mod, idx) => {
              const isOpen = openModule === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen ? "border-slate-200 bg-white shadow-sm" : "border-slate-100 bg-slate-50/50 hover:border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenModule(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[10px] font-bold text-slate-400">
                        MOD-{String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-bold text-slate-800">{mod.title}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-slate-100 pt-5 space-y-5">
                          <div>
                            <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-3">Core Experiments</p>
                            <ul className="space-y-2.5">
                              {mod.experiments.map((exp, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                  <span className="text-(--emerald-500) mt-0.5 shrink-0">›</span>
                                  {exp}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 mb-1">Safety Protocol</p>
                            <p className="text-xs text-slate-600 font-medium">{mod.protocol}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
