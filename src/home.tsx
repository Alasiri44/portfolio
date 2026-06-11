import Footer from "./features/footer";
import Contact from "./sections/contact";
import Skills from "./sections/skills";
import Stats from "./sections/stats";
import Education from "./sections/education";
import Projects from "./sections/project";
import Experience from "./sections/experience";
import About from "./sections/about";
import NavBar from "./features/navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black font-sans text-[#C9D1D9]">
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />

      {/* Grid dot background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px),radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:20px_20px]"
      />

      <NavBar />

      <main className="relative z-10 mx-auto max-w-[960px] px-6">
        <About />

        {/* Divider */}
        <div className="mb-[72px] h-px w-full bg-gradient-to-r from-[#F0A05033] via-[#30363D] to-transparent" />

        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Stats />
        <Contact />
      </main>

      <Footer />

      {/* Global Scrollbar Styles */}
      <style>{`
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0D1117; }
        ::-webkit-scrollbar-thumb { background: #30363D; border-radius: 3px; }
      `}</style>
    </div>
  );
}