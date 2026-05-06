"use client";

import { motion } from "framer-motion";
import { MessageCircle, MessageCircleMore } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "+923241449207"; // Placeholder
  const message = "Hello! I'm interested in enrolling at PACS Academy. Could you please provide more information?";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
      aria-label="Contact on WhatsApp"
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <MessageCircleMore className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap font-semibold text-sm transition-all duration-300 group-hover:max-w-xs group-hover:ml-3">
        Chat with us
      </span>
    </motion.a>
  );
}
