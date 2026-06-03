"use client";

import React from "react";


export default function Hero() {
  return (
   
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-32 pb-12 bg-[#020408]">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Sisi Kiri: Teks yang lebih rapih */}
        <div className="flex flex-col justify-center text-left space-y-6 order-2 md:order-1">
          <div className="space-y-2">
            <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-tight">
              Hi, I'm <span className="text-blue-500">Muhammad Iftikharul</span>
            </h1>
            <h2 className="text-gray-500 text-2xl md:text-2xl font-bold">
              Full-Stack Developer | Front End Developer
            </h2>
          </div>
            <p className="text-gray-400 max-w-lg text-justify leading-relaxed"> 
                Fresh graduate from the Faculty of Information Technology at Brawijaya University with practical experience in the field of information systems. 
                I am interested in the fields of computer science, communication, and UI/UX design.
            </p>
            <div className="flex items-center space-x-4 border-r border-white/10 pr-4">
            {/* GitHub */}
            <a href="https://github.com/miftikharul" target="_blank" className="text-gray-400 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/miftikharul" target="_blank" className="text-gray-400 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/mhmmd.iftikharul?igsh=MXVnc2x1YXAyeDI3eQ%3D%3D&utm_source=qr" target="_blank" className="text-gray-400 hover:text-white">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#contact" 
              className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition transform duration-200 shadow-xl"
            >
              Contact Me
            </a>
            <a 
              href="/CV ATS Muhammad Iftikharul Ramadhan (PHOTO UPDATED).pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:bg-white/5 transition flex items-center justify-center"
            >
            View CV
          </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end order-1 md:order-2">
          <div className="relative w-64 h-80 md:w-80 md:h-[450px]">
            {/* Background aksen biar fotonya nggak "nempel" ke layar */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10"></div>
            
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/foto1.jpg" 
                alt="Muhammad Iftikharul Ramadhan"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition duration-700"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/400x500?text=Foto+Arul";
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}