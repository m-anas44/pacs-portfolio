"use client";
import { motion } from "framer-motion";
import { ArrowRight, TerminalSquare } from "lucide-react";
import Link from "next/link";

export default function EnrollmentCTA() {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden border-t-4 border-(--emerald-500)">
      {/* Tech Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-(--emerald-500) rounded-full blur-[200px] opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 border border-slate-700 rounded-sm mb-8"
        >
          <TerminalSquare className="w-4 h-4 text-emerald-400" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-300">
            System_Ready / Await_Input
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
        >
          Initiate Your Academic <br />
          <span className="text-(--emerald-400)">Advancement.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10"
        >
          Secure your position in our specialized programs. Limited slots available for the upcoming high-performance session.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-(--emerald-500) hover:bg-(--emerald-600) text-white font-bold text-lg px-8 py-4 rounded-none transition-all shadow-lg shadow-emerald-500/20 active:scale-95 border border-transparent hover:border-emerald-300"
          >
            Commence Enrollment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
