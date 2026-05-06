import { motion } from "framer-motion";

export type Category = "Matric" | "Intermediate" | "Entry Test";

interface CourseFiltersProps {
  categories: Category[];
  activeCategory: Category;
  onSelect: (category: Category) => void;
}

export default function CourseFilters({ categories, activeCategory, onSelect }: CourseFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start mb-12 border-b border-slate-200 pb-4">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className={`relative px-6 py-2.5 text-sm font-bold tracking-wide uppercase transition-colors duration-300 ${
              isActive ? "text-slate-900" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {cat}
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute left-0 right-0 bottom-[-17px] h-1 bg-(--emerald-500)"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
