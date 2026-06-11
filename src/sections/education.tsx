import Tag from "../features/tag";

interface MoringaProject {
  name: string;
  desc: string;
  tech: string[];
  color: string;
}

const MORINGA_PROJECTS: MoringaProject[] = [
  {
    name: "Project One",
    desc: "Add a short description of this Moringa project.",
    tech: ["React", "JavaScript"],
    color: "#7B8FF0",
  },
  {
    name: "Project Two",
    desc: "Add a short description of this Moringa project.",
    tech: ["Python", "Flask"],
    color: "#E05C6A",
  },
  {
    name: "Project Three",
    desc: "Add a short description of this Moringa project.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "#60C0A0",
  },
  {
    name: "Project Four",
    desc: "Add a short description of this Moringa project.",
    tech: ["Node.js", "PostgreSQL"],
    color: "#F0A050",
  },
];

export default function Education() {
  return (
    <>
      <section id="education" className="pb-20">
        <div className="mb-10 flex items-baseline gap-[14px]">
          <h2 className="m-0 font-['Space_Grotesk'] text-[26px] font-bold text-[#E6EDF3]">
            Education
          </h2>
        </div>

        <div className="mb-7 rounded-xl border border-[#30363D] border-l-[3px] border-l-[#F0A050] bg-[#0a0e14]/80 px-7 py-6">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="mb-[3px] font-['Space_Grotesk'] text-[17px] font-semibold text-[#E6EDF3]">
                Software Engineering
              </h3>
              <p className="m-0 text-[14px] font-medium text-[#F0A050]">
                Moringa School · Nairobi, Kenya
              </p>
            </div>
            <span className="rounded-[5px] border border-[#30363D] bg-black/85 px-2.5 py-1 font-mono text-[12px] text-[#8B949E]">
              Completed
            </span>
          </div>

          <p className="mb-6 text-[14px] leading-[1.7] text-[#8B949E]">
            Intensive full-stack software engineering program covering modern
            web development, algorithms, and professional engineering practices.
            Built 4 projects across the curriculum.
          </p>

          <p className="mb-[14px] text-[11px] font-bold uppercase tracking-widest text-[#F0A050]">
            Training Projects
          </p>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
            {MORINGA_PROJECTS.map((p) => (
              <div
                key={p.name}
                className="rounded-lg border border-[#30363D] bg-black/85 px-[18px] py-4"
              >
                <h4 className="mb-[6px] font-['Space_Grotesk'] text-[14px] font-semibold text-[#E6EDF3]">
                  {p.name}
                </h4>
                <p className="mb-2.5 text-[13px] leading-[1.6] text-[#8B949E]">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-[5px]">
                  {p.tech.map((t) => (
                    <Tag key={t} color={p.color}>
                      {t}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
