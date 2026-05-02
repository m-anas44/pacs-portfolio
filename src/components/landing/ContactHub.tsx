"use client";

import { motion } from "framer-motion";
import { Send, Phone, MapPin, Mail, ArrowRight } from "lucide-react";

export default function ContactHub() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Fine-Line Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-slate-100 rounded-2xl overflow-hidden shadow-sm">
          
          {/* Left: Quick Info (4 Columns) */}
          <div className="lg:col-span-4 bg-slate-50/50 p-6 sm:p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Get in <span className="text-(--emerald-500)">Touch</span>
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                  Ready to secure your seat? Our admissions team is one message away.
                </p>
              </div>

              <div className="space-y-5 sm:space-y-6">
                {[
                  { icon: <Phone className="w-4 h-4" />, label: "Call", val: "+92 300 1234567" },
                  { icon: <Mail className="w-4 h-4" />, label: "Email", val: "admissions@pacs.edu" },
                  { icon: <MapPin className="w-4 h-4" />, label: "Visit", val: "Model Town, Lahore" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-(--emerald-500) group-hover:text-(--emerald-500) transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-700">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Minimal Form (8 Columns) */}
          <div className="lg:col-span-8 p-6 sm:p-8 md:p-12 bg-white">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 sm:gap-y-8">
              
              {/* Field 1 */}
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                className="relative group"
              >
                <input 
                  type="text" 
                  required
                  className="peer w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-(--emerald-500) transition-colors text-xs sm:text-sm font-medium text-slate-900"
                />
                <label className="absolute left-0 top-2 text-slate-400 text-xs sm:text-sm transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[9px] sm:peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-(--emerald-500) peer-focus:uppercase peer-valid:-top-4 peer-valid:text-[9px] sm:peer-valid:text-[10px] peer-valid:uppercase">
                  Student Full Name
                </label>
              </motion.div>

              {/* Field 2 */}
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                className="relative group"
              >
                <input 
                  type="tel" 
                  required
                  className="peer w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-(--emerald-500) transition-colors text-xs sm:text-sm font-medium text-slate-900"
                />
                <label className="absolute left-0 top-2 text-slate-400 text-xs sm:text-sm transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[9px] sm:peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-(--emerald-500) peer-focus:uppercase peer-valid:-top-4 peer-valid:text-[9px] sm:peer-valid:text-[10px] peer-valid:uppercase">
                  WhatsApp Number
                </label>
              </motion.div>

              {/* Field 3 (Dropdown) */}
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                className="relative md:col-span-2"
              >
                <p className="text-[9px] sm:text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-3">Select Interest</p>
                <div className="flex flex-wrap gap-2">
                  {["9th Matric", "10th Matric", "FSc Pre-Med", "ICS"].map((opt) => (
                    <label key={opt} className="relative cursor-pointer">
                      <input type="radio" name="class" className="peer sr-only" />
                      <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-slate-100 text-[10px] sm:text-xs font-bold text-slate-500 peer-checked:bg-(--emerald-500) peer-checked:text-white peer-checked:border-(--emerald-500) hover:bg-slate-50 transition-all">
                        {opt}
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Field 4 (Message) */}
              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                className="relative md:col-span-2"
              >
                <input 
                  type="text" 
                  required
                  className="peer w-full bg-transparent border-b border-slate-200 py-2 outline-none focus:border-(--emerald-500) transition-colors text-xs sm:text-sm font-medium text-slate-900"
                />
                <label className="absolute left-0 top-2 text-slate-400 text-xs sm:text-sm transition-all pointer-events-none peer-focus:-top-4 peer-focus:text-[9px] sm:peer-focus:text-[10px] peer-focus:font-bold peer-focus:text-(--emerald-500) peer-focus:uppercase peer-valid:-top-4 peer-valid:text-[9px] sm:peer-valid:text-[10px] peer-valid:uppercase">
                  Anything else we should know?
                </label>
              </motion.div>

              {/* Submit Button */}
              <div className="md:col-span-2 pt-4">
                <motion.button
                  className="w-full sm:w-auto flex items-center justify-center gap-4 bg-slate-900 text-white px-4 py-2.5 md:px-8 md:py-3.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-lg shadow-slate-200 hover:bg-emerald-600 transition-all"
                >
                  Confirm Registration <ArrowRight className="w-4 h-4 text-emerald-400" />
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}