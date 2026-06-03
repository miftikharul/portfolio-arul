"use client";

import React from "react";

const certData = [
  { title: "Revou - Intro to Software Engineering", issuer: "Revou", year: "2026", icon: "🚀" },
  { title: "Microsoft Office Desktop Application", issuer: "Microsoft", year: "2025", icon: "📊" },
  { title: "BNSP - Junior Web Developer", issuer: "BNSP Indonesia", year: "2024", icon: "💻" },
  { title: "Certificate of Organization", issuer: "HMPS TI UB", year: "2022-2024", icon: "🤝" }
];

export default function certificate() {
  return (
    <section id="certificates" className="py-24 px-6 bg-[#020408] ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-4xl font-bold">
            My <span className="text-blue-500">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certData.map((cert, i) => (
            <div 
              key={i} 
              className="group relative flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
            >
              {/* Icon Holder */}
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {cert.icon}
              </div>

              {/* Text Info */}
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{cert.issuer}</p>
                <span className="inline-block mt-3 px-3 py-1 text-[10px] font-bold text-blue-500 bg-blue-500/10 rounded-full uppercase tracking-wider">
                  Issued: {cert.year}
                </span>
              </div>

              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}