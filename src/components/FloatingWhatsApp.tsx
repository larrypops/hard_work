"use client";

import { motion } from "motion/react";

export default function FloatingWhatsApp() {
  const phoneNumber = "237687882290";
  const message = "Bonjour ETS HARD WORK, j'aimerais demander une intervention.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-[100] flex h-16 w-16 items-center justify-center rounded-full bg-white p-2 shadow-2xl"
      id="floating-whatsapp"
      title="Contactez-nous sur WhatsApp"
    >
      <div className="pointer-events-none absolute -top-12 right-0 whitespace-nowrap rounded-lg bg-white px-3 py-1.5 text-xs font-bold text-primary opacity-0 shadow-xl transition-opacity group-hover:opacity-100">
        Besoin d'aide ? Discutez avec nous !
        <div className="absolute -bottom-1 right-4 h-2 w-2 rotate-45 bg-white" />
      </div>

      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" />

      <img
        src="/images/whatsapp-official.svg"
        alt="Logo officiel WhatsApp"
        className="relative h-12 w-12"
      />
    </motion.a>
  );
}
