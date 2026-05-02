'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, FlaskConical, ClipboardCheck, CheckCircle2, ChevronRight } from 'lucide-react';

const features = [
  {
    id: '01',
    title: "Expert Faculty",
    desc: "Our educators are Board-certified specialists focused on the specific marking criteria of the Punjab Board.",
    icon: <Users className="w-5 h-5" />,
    stats: "15+ Years Exp"
  },
  {
    id: '02',
    title: "Practical Labs",
    desc: "Hands-on sessions in specialized Physics and Chemistry labs to ensure 30/30 in practical exams.",
    icon: <FlaskConical className="w-5 h-5" />,
    stats: "Fully Equipped"
  },
  {
    id: '03',
    title: "Weekly Testing",
    desc: "Every Sunday, students undergo a simulated Board environment to build exam-day confidence.",
    icon: <ClipboardCheck className="w-5 h-5" />,
    stats: "Simulated Exams"
  },
  {
    id: '04',
    title: "Individual Focus",
    desc: "Limited batch sizes of 20 students per class to ensure personalized attention and feedback.",
    icon: <CheckCircle2 className="w-5 h-5" />,
    stats: "1:20 Ratio"
  }
];

export default function WhyUsFine() {
  const [hovered, setHovered] = useState<string | null>('01');

  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Minimal Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-4 text-center">
          <div className="max-w-md">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Why PACS <span className="text-(--emerald-500)">Outperforms</span>
            </h2>
          </div>
          <p className="text-slate-400 text-[9px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.2em]">
            Precision . Excellence . Results
          </p>
        </div>

        {/* Fine Accordion */}
        <div className="border-t border-slate-100">
          {features.map((f) => (
            <div
              key={f.id}
              onMouseEnter={() => setHovered(f.id)}
              className="group relative border-b border-slate-100 cursor-pointer overflow-hidden px-2 sm:px-4"
            >
              <div className="flex items-center justify-between py-5 md:py-7 transition-all duration-500">
                
                {/* Left Side: Number and Title */}
                <div className="flex items-center space-x-4 md:space-x-8 relative z-10">
                  <span className={`text-[10px] md:text-xs font-bold font-heading transition-colors duration-300 ${hovered === f.id ? 'text-(--emerald-500)' : 'text-slate-300'}`}>
                    {f.id}
                  </span>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 ${hovered === f.id ? 'translate-x-2 text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {f.title}
                  </h3>
                </div>

                {/* Right Side: Icon & Status */}
                <div className="flex items-center space-x-4 md:space-x-6 relative z-10">
                  <span className={`hidden sm:block text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 md:px-3 py-1 rounded-full border transition-all duration-300 ${hovered === f.id ? 'bg-emerald-50 border-emerald-100 text-emerald-600' : 'border-transparent text-slate-300'}`}>
                    {f.stats}
                  </span>
                  <div className={`transition-transform duration-500 ${hovered === f.id ? 'rotate-90 text-(--emerald-500)' : 'text-slate-200'}`}>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </div>
              </div>

              {/* Animated Reveal Section */}
              <AnimatePresence>
                {hovered === f.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 md:pb-8 pl-10 md:pl-16 flex flex-col md:flex-row md:items-center gap-6">
                      <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
                        {f.desc}
                      </p>
                      <div className="flex-1 flex justify-end">
                         <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                           {f.icon}
                         </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Hover Background Accent */}
              <div className={`absolute inset-0 bg-slate-50/50 z-0 transition-opacity duration-500 ${hovered === f.id ? 'opacity-100' : 'opacity-0'}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}