"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "When do new admissions start?",
    answer: "Admissions at PACS remain open throughout the year. Our unique modular teaching methodology allows students to join at any point in the academic session without missing core concepts."
  },
  {
    question: "Do you offer scholarship programs?",
    answer: "Yes, we offer merit-based scholarships for students who excel in our internal diagnostic tests and those with exceptional previous board results."
  },
  {
    question: "What classes do you currently offer?",
    answer: "We offer comprehensive preparation for Class 8th, Matric (9th & 10th), and Intermediate (FSc Pre-Medical, FSc Pre-Engineering, and ICS)."
  },
  {
    question: "Are practical labs available?",
    answer: "Absolutely. Both our campuses are equipped with state-of-the-art physics and chemistry labs to ensure practical validation of theoretical concepts."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <HelpCircle className="w-10 h-10 text-(--emerald-500) mx-auto mb-4 opacity-50" />
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Common Questions</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Quick Clarifications</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? "bg-white border-slate-200 shadow-sm" : "bg-transparent border-slate-200 hover:border-slate-300"}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-sm font-bold text-slate-800 leading-tight pr-8">{faq.question}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-(--emerald-500) text-white" : "bg-slate-100 text-slate-400"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
