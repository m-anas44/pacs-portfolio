'use client';
import { motion } from 'framer-motion';
import { BookOpen, Monitor, Beaker, Calculator } from 'lucide-react';

const classes = [
  {
    title: "9th & 10th (Matric)",
    desc: "Comprehensive coverage of Science & Arts subjects with focus on Board patterns.",
    icon: <BookOpen className="w-6 h-6" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    title: "FSc Pre-Medical",
    desc: "In-depth Biology and Chemistry sessions designed for high-scoring marks.",
    icon: <Beaker className="w-6 h-6" />,
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    title: "FSc Pre-Engineering",
    desc: "Advanced Mathematics and Physics concepts with regular practice sessions.",
    icon: <Calculator className="w-6 h-6" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    title: "ICS (Computer Science)",
    desc: "Focus on Programming, Statistics, and Physics for the future tech leaders.",
    icon: <Monitor className="w-6 h-6" />,
    color: "bg-purple-50 text-purple-600"
  }
];

export default function ClassesGrid() {
  return (
    <section className="py-10 md:py-24 bg-white" id="classes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          >
            Academic Programs
          </motion.h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
            We follow the official Punjab Board curriculum, ensuring every student is prepared for their specific board requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-6 md:p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all card-hover"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${cls.color} flex items-center justify-center mb-6`}>
                {cls.icon}
              </div>
              <h3 className="font-heading font-bold text-lg md:text-xl mb-3 text-slate-800">{cls.title}</h3>
              <p className="text-slate-500 text-xs md:text-sm leading-relaxed">{cls.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}