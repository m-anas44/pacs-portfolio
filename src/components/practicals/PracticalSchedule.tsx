"use client";

import { motion } from "framer-motion";

interface Session {
  batch: string;
  subject: string;
  lab: string;
  time: string;
  status: "live" | "next" | "scheduled";
}

const sessions: Session[] = [
  { batch: "Batch-A", subject: "Chemistry", lab: "Titration Lab", time: "10:00 AM", status: "live" },
  { batch: "Batch-B", subject: "Physics", lab: "Optics Lab", time: "12:00 PM", status: "next" },
  { batch: "Batch-C", subject: "Biology", lab: "Microscopy Lab", time: "02:00 PM", status: "scheduled" },
  { batch: "Batch-A", subject: "Physics", lab: "Electricity Lab", time: "04:00 PM", status: "scheduled" },
  { batch: "Batch-D", subject: "Chemistry", lab: "Qualitative Analysis", time: "06:00 PM", status: "scheduled" },
];

const statusConfig = {
  live: { label: "● LIVE", className: "text-(--emerald-400) animate-pulse" },
  next: { label: "◌ NEXT", className: "text-yellow-400" },
  scheduled: { label: "○ QUEUED", className: "text-slate-500" },
};

export default function PracticalSchedule() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500 mb-3">
              System Log / Live Feed
            </p>
            <h2 className="font-heading text-3xl font-bold text-white">Practical Schedule</h2>
          </div>
          <div className="flex items-center gap-2">
            <motion.span
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 rounded-full bg-(--emerald-500)"
            />
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Live Update</span>
          </div>
        </div>

        {/* Terminal Window */}
        <div className="border border-slate-800 rounded-2xl overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-5 py-3 bg-slate-800 border-b border-slate-700">
            <div className="w-3 h-3 rounded-full bg-red-500/60" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <div className="w-3 h-3 rounded-full bg-green-500/60" />
            <span className="ml-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
              pacs-lab-scheduler — today's sessions
            </span>
          </div>

          {/* Session Rows */}
          <div className="divide-y divide-slate-800">
            {/* Column Headers */}
            <div className="hidden sm:grid grid-cols-5 px-6 py-3 bg-slate-800/50">
              {["Batch", "Subject", "Lab Station", "Time", "Status"].map((h) => (
                <span key={h} className="font-mono text-[9px] uppercase tracking-widest text-slate-600">{h}</span>
              ))}
            </div>

            {sessions.map((s, idx) => {
              const sc = statusConfig[s.status];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.07 }}
                  className="grid grid-cols-2 sm:grid-cols-5 gap-y-1 px-6 py-4 hover:bg-slate-800/30 transition-colors"
                >
                  <span className="font-mono text-xs font-bold text-white">{s.batch}</span>
                  <span className="font-mono text-xs text-slate-300">{s.subject}</span>
                  <span className="font-mono text-xs text-slate-400 col-span-2 sm:col-span-1">{s.lab}</span>
                  <span className="font-mono text-xs text-slate-400">{s.time}</span>
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${sc.className}`}>
                    {sc.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        <p className="font-mono text-[9px] text-slate-600 mt-4 uppercase tracking-widest">
          // Timestamps in PKT (UTC+5) — Schedule subject to change
        </p>
      </div>
    </section>
  );
}
