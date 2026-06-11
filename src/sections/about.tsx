import Cursor from "../features/cursor";
import useTypewriter from "../features/useTypewriter";

const ROLES: string[] = [
  "Full-Stack Developer",
  "React & TypeScript",
  "Next.js Builder",
  "Go & Flask Backend Dev",
];

export default function About() {
  const role = useTypewriter(ROLES);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <section id="about" className="py-[100px] pb-20">
        <div className="mb-5">
          <span className="rounded border border-[#F0A050]/20 bg-[#F0A050]/[0.08] px-3 py-1 font-mono text-[13px] text-[#F0A050]">
            Available for opportunities
          </span>
        </div>

        <h1 className="mb-2 text-[clamp(36px,6vw,58px)] font-bold leading-[1.15] text-[#E6EDF3] font-['Space_Grotesk']">
          Austin Pamba
        </h1>

        <div className="mb-7 flex min-h-[1.5em] items-center font-mono text-[clamp(16px,2.5vw,20px)] text-[#8B949E]">
          <span className="mr-2 text-[#F0A050]">$</span>
          <span className="text-[#C9D1D9]">{role}</span>
          <Cursor />
        </div>

        <p className="mb-8 max-w-[600px] text-[16px] leading-[1.75] text-[#8B949E]">
          Full-stack developer based in{" "}
          <span className="text-[#C9D1D9]">Nairobi, Kenya</span> with 1.5+ years
          building production web apps. I work across the stack — React,
          Next.js, TypeScript on the frontend; Go and Flask on the backend.
        </p>

        <div className="flex flex-wrap gap-[14px]">
          <button
            onClick={() => scrollTo("projects")}
            className="rounded-lg border-none bg-[#F0A050] px-[22px] py-[10px] text-[14px] font-semibold tracking-[0.02em] text-[#0D1117] cursor-pointer"
          >
            See my work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="rounded-lg border border-[#30363D] bg-transparent px-[22px] py-[10px] text-[14px] font-medium text-[#C9D1D9] cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </section>
    </>
  );
}
