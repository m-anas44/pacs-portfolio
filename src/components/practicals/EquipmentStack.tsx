"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Equipment {
  name: string;
  label: string;
  image: string;
  specs: { key: string; value: string }[];
  version: string;
}

const equipment: Equipment[] = [
  {
    name: "Compound Microscope",
    label: "Biology / Cytology",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=800",
    specs: [
      { key: "Magnification", value: "Up to 1000x" },
      { key: "Eyepiece", value: "10x Wide-Field" },
      { key: "Illumination", value: "LED Coaxial" },
      { key: "Stage", value: "Mechanical XY" },
    ],
    version: "LAB-STATION-01",
  },
  {
    name: "Digital Oscilloscope",
    label: "Physics / Electricity",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    specs: [
      { key: "Sample Rate", value: "1 GSa/s" },
      { key: "Bandwidth", value: "100 MHz" },
      { key: "Channels", value: "4 CH" },
      { key: "Display", value: "7in TFT Color" },
    ],
    version: "LAB-STATION-02",
  },
  {
    name: "Titration Assembly",
    label: "Chemistry / Analysis",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800",
    specs: [
      { key: "Burette", value: "50 mL Grade-A" },
      { key: "Indicator", value: "Phenolphthalein" },
      { key: "Precision", value: "±0.01 mL" },
      { key: "Setup", value: "IUPAC Standard" },
    ],
    version: "LAB-STATION-03",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function EquipmentCard({ item }: { item: Equipment }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-300"
    >
      {/* Version Tag */}
      <div className="absolute top-4 right-4 z-20 font-mono text-[9px] font-bold text-slate-400 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-md border border-slate-100">
        {item.version}
      </div>

      {/* Image */}
      <div className="relative w-full aspect-4/3 overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-20 group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Tint overlay */}
        <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="font-mono text-[10px] uppercase tracking-widest text-(--emerald-500) font-bold mb-2">
          {item.label}
        </p>
        <h3 className="font-heading text-lg font-bold text-slate-900 mb-4">{item.name}</h3>

        {/* Spec Sheet — visible on hover, always visible on mobile */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden md:block"
        >
          <div className="pt-4 border-t border-slate-100 space-y-2">
            {item.specs.map((spec, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  {spec.key}
                </span>
                <span className="text-xs font-bold text-slate-700">{spec.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile: always show specs */}
        <div className="md:hidden pt-4 border-t border-slate-100 space-y-2">
          {item.specs.map((spec, i) => (
            <div key={i} className="flex justify-between items-center">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                {spec.key}
              </span>
              <span className="text-xs font-bold text-slate-700">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function EquipmentStack() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-3">
              Equipment Stack / Rev. 2025
            </p>
            <h2 className="font-heading text-3xl font-bold text-slate-900">
              The Hardware Stack
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            State-of-the-art instruments calibrated to board syllabus requirements. Hover any card to reveal full specs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {equipment.map((item) => (
            <EquipmentCard key={item.version} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
