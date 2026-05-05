"use client";

import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

const infoCards = [
  {
    title: "Model Town Campus",
    icon: <MapPin className="w-5 h-5" />,
    details: [
      "123 Academic Block, Model Town, Lahore",
      "Phone: +92 300 1234567",
      "Office Hours: 8:00 AM - 6:00 PM"
    ],
    status: "Main Branch"
  },
  {
    title: "Johar Town Campus",
    icon: <MapPin className="w-5 h-5" />,
    details: [
      "456 Education Ave, Johar Town, Lahore",
      "Phone: +92 300 7654321",
      "Office Hours: 8:00 AM - 6:00 PM"
    ],
    status: "Enrollment Open"
  },
  {
    title: "Digital Support",
    icon: <Mail className="w-5 h-5" />,
    details: [
      "Admissions: admissions@pacs.edu",
      "General: hello@pacs.edu",
      "Response time: Within 24 hours"
    ],
    status: "Online 24/7"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function ContactInfo() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">Visit Our Locations</h2>
          <p className="text-sm text-slate-500 uppercase tracking-widest font-bold">Strategic Strategic Centers</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {infoCards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="group bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:border-(--emerald-500) transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-400 group-hover:bg-(--emerald-50) group-hover:text-(--emerald-500) group-hover:border-(--emerald-100) transition-colors">
                  {card.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-slate-50 text-slate-400 rounded-md group-hover:bg-(--emerald-50) group-hover:text-(--emerald-600) transition-colors">
                  {card.status}
                </span>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
              
              <ul className="space-y-3 mb-8">
                {card.details.map((detail, i) => (
                  <li key={i} className="text-sm text-slate-500 leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
              
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-(--emerald-600) hover:gap-3 transition-all">
                Get Directions <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
