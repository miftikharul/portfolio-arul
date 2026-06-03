"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulasi kirim pesan singkat (bisa lo sambungin ke EmailJS atau API Form nanti)
    setTimeout(() => {
      alert("Pesan berhasil dikirim! (Simulasi)");
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center bg-[#020408] py-20 px-6 overflow-hidden">
      
      {/* Efek Glow Ornamen Latar Belakang */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Contact <span className="text-blue-500">Me</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-md mx-auto text-sm md:text-base"
          >
            Punya project seru atau mau diskusi kerjaan? Drop pesan kamu di bawah, saya bakal bales secepatnya!
          </motion.p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Kolom Kiri: Info Kontak (4 Kolom) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-[#121212]/40 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <div className="space-y-8">
              <h3 className="text-white text-xl font-bold flex items-center gap-2">
                <MessageSquare className="text-blue-500" size={22} /> Talk to me
              </h3>
              
              <div className="space-y-6">
                {/* Email Box */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-blue-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Email</h4>
                    <p className="text-white text-sm font-medium mt-1">miftikharul@gmail.com</p>
                    <a href="mailto:m.iftikharul.r@gmail.com" className="text-xs text-blue-400 hover:underline mt-1 block">Kirim email langsung</a>
                  </div>
                </div>

                {/* Lokasi Box */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-blue-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Location</h4>
                    <p className="text-white text-sm font-medium mt-1">Jakarta, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline Tambahan bawah */}
            <div className="pt-8 border-t border-white/5 mt-8 md:mt-0">
              <p className="text-xs text-gray-500 leading-relaxed">
                Saya terbuka untuk posisi <span className="text-gray-300 font-medium">Full-Stack / Front-End Developer</span> kontrak maupun full-time.
              </p>
            </div>
          </motion.div>

          {/* Kolom Kanan: Form (7 Kolom) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 p-8 rounded-3xl bg-[#121212]/40 backdrop-blur-md border border-white/10 shadow-xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Nama Anda</label>
                <input 
                  type="text" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Masukkan nama kamu..." 
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition duration-200 placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="name@example.com" 
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition duration-200 placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Pesan</label>
                <textarea 
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tulis apa yang mau kamu diskusikan..." 
                  className="w-full bg-white/5 border border-white/10 focus:border-blue-500 rounded-xl px-4 py-3.5 text-white text-sm outline-none transition duration-200 placeholder:text-gray-600 resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 text-sm disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} className={isSubmitting ? "animate-pulse" : ""} />
              </motion.button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
}