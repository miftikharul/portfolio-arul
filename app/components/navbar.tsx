"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "certificates", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Kalau bagian atas section udah mau nyampe tengah layar, anggep aktif
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  const menuItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Certifications", href: "#certificates", id: "certificates" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <motion.div 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-0 w-full flex justify-center z-50 px-4"
    >
      <nav className="flex items-center justify-between w-full max-w-5xl bg-[#121212]/70 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full shadow-2xl">
        
        <div className="flex items-center gap-2">
          <span className="text-white font-semibold tracking-tight hidden sm:inline">MIFTIKHARUL</span>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {/* Pill Background buat menu yang aktif */}
              {activeSection === item.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-white text-black text-[10px] uppercase tracking-wider font-bold px-5 py-2 rounded-full hover:scale-105 transition">
            Hire Me
          </button>
        </div>
      </nav>
    </motion.div>
  );
}