import { useState, useEffect } from "react";
import NavLink from "./navlink";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.4 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-[100] border-b border-[#21262D] bg-black/75 backdrop-blur-md">
      <div className="mx-auto flex h-[60px] max-w-[960px] items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => scrollTo("about")}
          className="cursor-pointer font-mono text-[14px] font-medium text-[#F0A050] hover:opacity-80"
        >
          austin.dev
        </button>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((n) => (
            <NavLink
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(n.id);
              }}
            >
              <span className={activeSection === n.id ? "text-[#F0A050]" : "text-[#8B949E]"}>
                {n.label}
              </span>
            </NavLink>
          ))}
          <a
            href="/resume.pdf"
            className="rounded-lg bg-[#F0A050] px-4 py-1.5 text-[13px] font-semibold text-[#0D1117] transition-opacity hover:opacity-90"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-[18px] text-[#C9D1D9]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-[#21262D] bg-[#0a0e14]/95 px-6 pb-4 pt-3 md:hidden">
          {NAV_ITEMS.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="block w-full py-3 text-left text-[15px] text-[#C9D1D9] hover:text-[#F0A050]"
            >
              {n.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}