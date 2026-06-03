"use client";

import React, { useState } from "react";
import { ExternalLink, FolderOpen } from "lucide-react";

const projectData = [
  { title: "Employee Payroll System", cat: "Web", desc: "Optimized complex MySQL schemas for payroll management.", tech: ["Laravel", "MySQL"], img: "/abco.jpg", github: "https://github.com/miftikharul/TA-WebsiteAbco", demo: "#" },
  { title: "Project Based Learning", cat: "Web", desc: "This MBKM/Archive internship application based on a website was created by students of the Vocational Faculty of Brawijaya University.", tech: ["Laravel"], img: "/mbkm.png", github: "https://github.com/klvnd/PBL-web-MBKM-Arsip", demo: "#" },
  { title: "Project Based Learning E-Commerce Store", cat: "Web", desc: "Built a functional clothing store with core e-commerce features.", tech: ["JavaScript", "Laravel", "Figma"], img: "/smith.png", github: "https://github.com/miftikharul/web-tokoonline", demo: "#" },
  { title: "LIBY UI/UX Design", cat: "Design", desc: "Created high-fidelity wireframes and mockups in Figma.", tech: ["Figma"], img: "/liby.png", github: "https://github.com/miftikharul/LIBY-UI-UX-Design", demo: "#" },
  { title: "SG8 Group Internship", cat: "Web", desc: "Designed and implemented RESTful APIs using Laravel, supporting seamless data exchange.", tech: ["React.js", "Laravel"], img: "/sg8.jpeg", github: "https://github.com/sg8group/fe-sg8group", demo: "#" }, 
];

function ProjectCard({ project }: { project: typeof projectData[0] }) {
  return (
    <div className="group relative flex flex-col bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500">
      {/* Image Container */}
      <div className="w-full aspect-video overflow-hidden relative bg-black/20 border-b border-white/5">
        <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-[#020408]/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-xs">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-blue-600 rounded-xl hover:scale-110 transition-transform shadow-lg" title="Live Preview">
            <ExternalLink size={20} />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-blue-600 rounded-xl hover:scale-110 transition-transform shadow-lg" title="Source Code">
            <FolderOpen size={20} />
          </a>
        </div>
      </div>
      {/* Konten Teks */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="mb-4">
          <h3 className="text-white font-bold text-xl mb-2 tracking-tight leading-snug">{project.title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{project.desc}</p>
        </div>
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {project.tech.map((t, ti) => (
            <span key={ti} className="text-[10px] uppercase tracking-wider px-2.5 py-1 bg-white/5 text-blue-400 rounded-md border border-white/5 font-bold">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? projectData : projectData.filter(p => p.cat === filter);

  return (
    <section id="projects" className="py-24 px-6 bg-[#020408]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold">My Recent <span className="text-blue-500">Projects</span></h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
        </div>
        {/* Filter Tab */}
        <div className="flex justify-center gap-4 mb-12">
          {["All", "Web", "Design"].map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-6 py-2 rounded-full border transition-all ${filter === c ? "bg-blue-500 border-blue-500 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-white/5 border-white/10 text-gray-400 hover:border-blue-500/50"}`}>{c}</button>
          ))}
        </div>
        {/* Grid Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filtered.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}