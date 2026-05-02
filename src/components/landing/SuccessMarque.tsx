"use client";

import { motion } from "framer-motion";

const results = [
  { name: "Anas Khan", score: "1082/1100", board: "BISE Lahore", class: "FSc (Pre-Med)" },
  { name: "Sara Ahmed", score: "1055/1100", board: "BISE Lahore", class: "Matric" },
  { name: "Bilal Malik", score: "1040/1100", board: "BISE Lahore", class: "ICS" },
  { name: "Zainab Bibi", score: "1078/1100", board: "BISE Lahore", class: "FSc (Pre-Eng)" },
];

export default function SuccessMarquee() {
  return (
    <section className="py-8 md:py-12 bg-slate-900 overflow-hidden border-y border-slate-800">
      <div className="flex whitespace-nowrap">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-8 md:gap-12 items-center"
        >
          {[...results, ...results].map((res, i) => (
            <div key={i} className="flex items-center gap-4 md:gap-6">
              <div className="flex flex-col">
                <span className="text-[8px] md:text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                  Position Holder
                </span>
                <span className="text-white font-bold text-base md:text-lg font-heading">{res.name}</span>
              </div>
              <div className="h-6 md:h-8 w-px bg-slate-700" />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-black text-white font-heading">{res.score}</span>
                <span className="text-[8px] md:text-[10px] text-slate-400 uppercase font-bold tracking-tighter">
                  {res.class} — {res.board}
                </span>
              </div>
              <div className="mx-4 md:mx-8 text-slate-800 text-2xl md:text-3xl font-black">/ / /</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}