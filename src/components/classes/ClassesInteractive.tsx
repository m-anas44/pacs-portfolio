"use client";

import { useState } from "react";
import CourseFilters, { Category } from "./CourseFilters";
import ClassGrid, { CourseData } from "./ClassGrid";

// Mock data extending across categories
const coursesData: (CourseData & { category: Category })[] = [
  // Matric
  {
    id: "MAT-PHY-9",
    category: "Matric",
    title: "Physics",
    iconName: "atom",
    modules: ["Kinematics & Dynamics", "Waves & Thermodynamics", "Electromagnetism"],
    stats: ["20+ Lab Sessions", "Weekly Assessments"],
  },
  {
    id: "MAT-BIO-9",
    category: "Matric",
    title: "Biology",
    iconName: "flask",
    modules: ["Cellular Biology", "Human Physiology", "Genetics Basics"],
    stats: ["15+ Dissections", "Monthly Grand Tests"],
  },
  {
    id: "MAT-MTH-9",
    category: "Matric",
    title: "Mathematics",
    iconName: "brain",
    modules: ["Algebraic Operations", "Geometry & Theorems", "Trigonometry"],
    stats: ["Daily Problem Sets", "Concept Mapping"],
  },
  
  // Intermediate
  {
    id: "INT-FSC-11",
    category: "Intermediate",
    title: "Pre-Medical",
    iconName: "flask",
    modules: ["Advanced Biology", "Organic Chemistry", "Medical Physics"],
    stats: ["30+ Lab Sessions", "Board Pattern Tests"],
  },
  {
    id: "INT-ENG-11",
    category: "Intermediate",
    title: "Pre-Engineering",
    iconName: "atom",
    modules: ["Calculus & Analytics", "Applied Physics", "Inorganic Chemistry"],
    stats: ["Weekly Assessments", "Formula Derivations"],
  },
  {
    id: "INT-ICS-11",
    category: "Intermediate",
    title: "Computer Science",
    iconName: "book",
    modules: ["Programming Fundamentals", "Database Systems", "IT Infrastructure"],
    stats: ["Hands-on Coding", "Project Development"],
  },

  // Entry Test
  {
    id: "ENT-MDCAT",
    category: "Entry Test",
    title: "MDCAT Prep",
    iconName: "brain",
    modules: ["Logical Reasoning", "Speed Chemistry", "Bio-mechanics"],
    stats: ["50+ Mock Tests", "UHS Syllabus Focus"],
  },
  {
    id: "ENT-ECAT",
    category: "Entry Test",
    title: "ECAT Prep",
    iconName: "atom",
    modules: ["Advanced Math Logic", "Physics Numericals", "Time Management"],
    stats: ["UET Pattern Exams", "Shortcut Techniques"],
  },
];

const categories: Category[] = ["Matric", "Intermediate", "Entry Test"];

export default function ClassesInteractive() {
  const [activeCategory, setActiveCategory] = useState<Category>("Intermediate");

  const filteredCourses = coursesData.filter(
    (course) => course.category === activeCategory
  );

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">
            Technical Disciplines.
          </h2>
          <p className="text-slate-500 font-medium max-w-2xl">
            Filter our high-density modules by your current academic phase.
          </p>
        </div>

        <CourseFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <ClassGrid courses={filteredCourses} />
      </div>
    </section>
  );
}
