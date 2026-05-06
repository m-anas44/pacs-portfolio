"use client";
import { motion } from "framer-motion";

const timelineData = [
  {
    phase: "01",
    title: "Diagnostic Assessment",
    description: "Initial evaluation to identify strengths and bridge foundational gaps.",
    duration: "Week 1-2",
  },
  {
    phase: "02",
    title: "Syllabus Completion",
    description: "Rigorous coverage of board-prescribed curriculum with active lab sessions.",
    duration: "Months 1-5",
  },
  {
    phase: "03",
    title: "Revision Phase",
    description: "Strategic review of complex modules and past paper analysis.",
    duration: "Months 6-7",
  },
  {
    phase: "04",
    title: "Grand Tests",
    description: "Full-length mock exams modeled precisely on board exam protocols.",
    duration: "Month 8",
  },
];

export default function AcademicTimeline() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#0f172a 1px, transparent 1px)",
          backgroundSize: "100% 40px",
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Academic Roadmap.
          </h2>
          <p className="text-slate-500 font-medium">Standardized progression for guaranteed board success.</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={item.phase} className="relative flex items-center md:justify-between group">
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-slate-200 md:-translate-x-1/2 flex items-center justify-center group-hover:border-(--emerald-500) transition-colors z-10">
                    <div className="w-2 h-2 bg-slate-300 rounded-full group-hover:bg-(--emerald-500) transition-colors" />
                  </div>

                  {/* Content Box */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="bg-white p-6 border border-slate-200 shadow-sm group-hover:shadow-md group-hover:border-slate-300 transition-all relative"
                    >
                      {/* Decorative accents */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-slate-100 group-hover:bg-(--emerald-500) transition-colors" />
                      
                      <div className="flex items-center gap-4 mb-3 md:hidden">
                         <span className="font-mono text-xs font-bold text-(--emerald-500)">PHASE {item.phase}</span>
                         <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-sm">{item.duration}</span>
                      </div>
                      
                      <div className={`hidden md:flex items-center gap-4 mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                         <span className={`text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-sm ${isEven ? 'order-1' : 'order-2'}`}>{item.duration}</span>
                         <span className={`font-mono text-xs font-bold text-(--emerald-500) ${isEven ? 'order-2' : 'order-1'}`}>PHASE {item.phase}</span>
                      </div>

                      <h3 className="font-heading text-xl font-black text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm font-medium">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
