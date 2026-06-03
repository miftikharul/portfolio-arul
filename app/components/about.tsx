"use client";

import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6  bg-[#020408]">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-2">About Me</p>
          <h2 className="text-white text-4xl md:text4xl font-bold">
            Know More <span className="text-blue-500">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side: Profile Image */}
          <div className="relative group">
            <div className="relative z-10 w-full aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/foto4.jpeg" 
                alt="Muhammad Iftikharul Ramadhan"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-blue-500/30 rounded-[2rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          </div>

          {/* Right Side: Professional Content from CV */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl md:text-3xl font-bold">
              I'm a Passionate <span className="text-blue-500">Front End Developer </span>
            </h3>
            
            <div className="text-gray-400 space-y-4 leading-relaxed text-justify">
              <p>
                I am an Information Technology graduate from <span className="text-white font-medium">Brawijaya University </span> with a strong focus on building functional and scalable information systems. My academic background in vocational studies has equipped me with a practical approach to solving digital problems through efficient code.
              </p>
              <p>
                During my internships as a <span className="text-white">Full-Stack Developer at SG8 Group</span> and <span className="text-white">Web Developer at PT Gatraco</span>, I managed end-to-end application lifecycles. I specialize in architecting <span className="text-blue-400">RESTful APIs using Laravel</span> and crafting seamless user interfaces with <span className="text-blue-400">Next.js and Tailwind CSS</span>.
              </p>
              <p>
                I am deeply committed to <span className="text-white italic">clean code principles</span> and optimized database management. Whether it's a complex enterprise system or a refined UI/UX design in <span className="text-white">Figma</span>, I aim to deliver meaningful digital experiences that align with both user expectations and business goals.
              </p>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { label: "Experience", value: "Internship", icon: "💼" },
                { label: "Projects", value: "10+", icon: "🚀" },
                { label: "Certified", value: "BNSP", icon: "🏅" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center hover:border-blue-500/50 transition-colors">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-white font-bold text-lg leading-tight">{stat.value}</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-tighter mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}