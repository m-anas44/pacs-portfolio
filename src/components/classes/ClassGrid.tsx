import { motion, Variants } from "framer-motion";
import { FlaskConical, Atom, BookOpen, Brain, CheckSquare, Activity } from "lucide-react";

export type CourseData = {
  id: string;
  title: string;
  iconName: "flask" | "atom" | "book" | "brain";
  modules: string[];
  stats: string[];
};

interface ClassGridProps {
  courses: CourseData[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const iconMap = {
  flask: FlaskConical,
  atom: Atom,
  book: BookOpen,
  brain: Brain,
};

export default function ClassGrid({ courses }: ClassGridProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {courses.map((course) => {
        const IconComponent = iconMap[course.iconName];

        return (
          <motion.div
            key={course.id}
            variants={itemVariants}
            className="group relative bg-white border border-slate-200 p-6 flex flex-col hover:border-(--emerald-500) hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300"
          >
            {/* Dossier Header Accent */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-(--emerald-500)" />
            <div className="absolute top-0 right-0 w-8 h-px bg-slate-300" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-slate-300 group-hover:border-(--emerald-500) transition-colors" />

            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-slate-50 text-slate-700 group-hover:bg-emerald-50 group-hover:text-(--emerald-600) transition-colors rounded-sm">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl font-black text-slate-900 tracking-tight">
                  {course.title}
                </h3>
              </div>
              <span className="font-mono text-[10px] text-slate-400 font-bold uppercase">
                ID:{course.id.slice(0, 4)}
              </span>
            </div>

            {/* Module Breakdown */}
            <div className="mb-6 flex-1">
              <h4 className="text-[10px] uppercase tracking-widest text-(--emerald-600) font-bold mb-3 flex items-center gap-2">
                <CheckSquare className="w-3 h-3" />
                Module Breakdown
              </h4>
              <ul className="space-y-2">
                {course.modules.map((mod, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                    <div className="w-1 h-1 bg-slate-300 rounded-full mt-2 shrink-0 group-hover:bg-(--emerald-500) transition-colors" />
                    {mod}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Stats */}
            <div className="bg-slate-50 border border-slate-100 p-3">
              <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-2 flex items-center gap-2">
                <Activity className="w-3 h-3" />
                Technical Specs
              </h4>
              <div className="grid grid-cols-1 gap-2">
                {course.stats.map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>{stat.split(":")[0]}</span>
                    <span className="text-slate-900">{stat.split(":")[1] || ""}</span>
                  </div>
                ))}
              </div>
            </div>

            
          </motion.div>
        );
      })}
    </motion.div>
  );
}
