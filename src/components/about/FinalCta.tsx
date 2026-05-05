"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center border border-slate-800 shadow-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-(--emerald-500) rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />

          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">
            Visit a Campus Today
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-10 max-w-xl mx-auto relative z-10">
            Experience the PACSMind methodology firsthand. Walk through our
            labs, meet the faculty, and take the first step toward academic
            excellence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <button className="w-full sm:w-auto px-8 py-3.5 bg-(--emerald-500) text-white rounded-xl text-sm font-bold shadow-lg shadow-(--emerald-500)/20 hover:bg-(--emerald-600) transition-all flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Model Town Directions
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 bg-slate-800 text-white rounded-xl text-sm font-bold border border-slate-700 hover:border-slate-600 hover:bg-slate-700 transition-all flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              Johar Town Directions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
