"use client";

import { motion } from "framer-motion";
import { ArrowRight, User, Phone, MessageSquare } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Content and Micro-Stats */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Ready to <span className="text-(--emerald-500)">Enroll?</span>
              </h2>
              <p className="text-slate-600 mb-10 max-w-lg leading-relaxed">
                Fill out the form and our academic advisors will reach out within 24 hours 
                to discuss your goals and create a personalized learning plan.
              </p>
              
              <div className="space-y-6">
                {[
                  { label: "Response Time", value: "< 24 Hours", sub: "Admissions Team" },
                  { label: "Active Support", value: "9:00 AM - 9:00 PM", sub: "Available Mon-Sat" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 border border-slate-100 rounded-2xl bg-slate-50/50">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">{item.label}</p>
                      <p className="text-xl font-bold text-slate-900 font-heading">{item.value}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: The High-Contrast Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-8 sm:p-12 rounded-4xl border border-slate-800 shadow-2xl relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-(--emerald-500) rounded-full blur-[100px] opacity-10 -mr-32 -mt-32" />
            
            <form className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Field: Full Name */}
                <div className="relative group">
                  <User className="absolute right-0 top-2 w-4 h-4 text-slate-600 group-focus-within:text-(--emerald-500) transition-colors" />
                  <input 
                    type="text" 
                    required
                    className="peer w-full bg-transparent border-b border-slate-700 py-2 outline-none focus:border-(--emerald-500) transition-colors text-sm font-medium text-white placeholder-transparent"
                    placeholder="Full Name"
                    id="fullName"
                  />
                  <label 
                    htmlFor="fullName"
                    className="absolute left-0 -top-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-placeholder-shown:lowercase peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-(--emerald-500)"
                  >
                    Full Name
                  </label>
                </div>

                {/* Field: WhatsApp Number */}
                <div className="relative group">
                  <Phone className="absolute right-0 top-2 w-4 h-4 text-slate-600 group-focus-within:text-(--emerald-500) transition-colors" />
                  <input 
                    type="tel" 
                    required
                    className="peer w-full bg-transparent border-b border-slate-700 py-2 outline-none focus:border-(--emerald-500) transition-colors text-sm font-medium text-white placeholder-transparent"
                    placeholder="WhatsApp Number"
                    id="phone"
                  />
                  <label 
                    htmlFor="phone"
                    className="absolute left-0 -top-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-placeholder-shown:lowercase peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-(--emerald-500)"
                  >
                    WhatsApp Number
                  </label>
                </div>
              </div>

              {/* Field: Select Class */}
              <div className="space-y-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Select Class Interest</p>
                <div className="flex flex-wrap gap-2">
                  {["9th Matric", "10th Matric", "FSc Pre-Med", "ICS"].map((opt) => (
                    <label key={opt} className="relative cursor-pointer">
                      <input type="radio" name="class" className="peer sr-only" />
                      <div className="px-4 py-2 rounded-xl border border-slate-800 text-xs font-bold text-slate-400 peer-checked:bg-(--emerald-500) peer-checked:text-white peer-checked:border-(--emerald-500) hover:bg-slate-800/50 transition-all">
                        {opt}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Field: Message */}
              <div className="relative group">
                <MessageSquare className="absolute right-0 top-2 w-4 h-4 text-slate-600 group-focus-within:text-(--emerald-500) transition-colors" />
                <textarea 
                  rows={3}
                  className="peer w-full bg-transparent border-b border-slate-700 py-2 outline-none focus:border-(--emerald-500) transition-colors text-sm font-medium text-white placeholder-transparent resize-none"
                  placeholder="Your Message"
                  id="message"
                />
                <label 
                  htmlFor="message"
                  className="absolute left-0 -top-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:font-normal peer-placeholder-shown:lowercase peer-placeholder-shown:tracking-normal peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-focus:text-(--emerald-500)"
                >
                  Your Message (Optional)
                </label>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-4 bg-(--emerald-500) text-white py-4 rounded-2xl text-sm font-bold shadow-xl shadow-(--emerald-500)/20 hover:bg-(--emerald-600) transition-all"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
