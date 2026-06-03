"use client";

import React from "react";

const skillCategories = [
  {
    title: "Frontend & Design",
    skills: [
      { name: "Next.js & React", level: "90%" },
      { name: "Tailwind CSS", level: "92%" },
      { name: "Figma (UI/UX)", level: "88%" },
      { name: "HTML & Javascript", level: "90%" },
    ],
  },
  {
    title: "Backend & Tools",
    skills: [
      { name: "Laravel (PHP)", level: "92%" },
      { name: "MySQL & PostgreSQL", level: "85%" },
      { name: "GitHub / Version Control", level: "88%" },
      { name: "RESTful API Development", level: "85%" },
    ],
  },
];

const techIcons = [
  "Figma", "HTML", "MySQL", "Laravel", "Next.js", "React", "PostgreSQL", "Github", "Tailwind", "Draw.io"
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#020408] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-4xl md:text-4xl font-bold mb-4">
            <span className="text-blue-500">Soft Skills</span>
          </h2>
        </div>

        {/* Progress Bars Grid Berdasarkan Hard Skills CV */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-2 h-6 bg-blue-500 rounded-full"></span> {cat.title}
              </h3>
              <div className="space-y-6">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400 font-medium">{skill.level}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" 
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ikon List Sesuai CV Lo */}
        <div className="text-center mb-8">
          <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">Technologies I Work With</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {techIcons.map((tech, idx) => (
            <div 
              key={idx} 
              className="group border border-white/10 bg-white/5 p-4 rounded-xl flex flex-col items-center justify-center hover:border-blue-500/50 transition-all duration-300"
            >
              <div className="text-blue-400 group-hover:scale-110 transition-transform mb-2">
                <span className="text-xs font-mono">&lt;{tech === "Figma" ? "UI" : "JS"}&gt;</span>
              </div>
              <span className="text-gray-400 text-xs font-medium group-hover:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}