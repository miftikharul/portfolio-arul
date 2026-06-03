import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Skills from "./components/skills";
import Project from "./components/project";
import Certificate from "./components/certificate";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Certificate />
      <Contact />
      <footer className="py-10 text-center text-gray-500 bg-[#020408]">
        © 2026 Muhammad Iftikharul Ramadhan
      </footer>
    </main>
  );
}