interface SkillCategory {
  cat: string;
  items: string[];
}

const SKILLS: SkillCategory[] = [
  {
    cat: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  { cat: "Backend", items: ["Go (Fiber)", "Flask", "Node.js", "REST APIs"] },
  { cat: "Data", items: ["PostgreSQL", "Sanity CMS", "GORM"] },
  { cat: "Tooling", items: ["Git", "Vercel", "Docker basics", "Linux"] },
];

interface SkillGroupProps {
  cat: string;
  items: string[];
}

function SkillGroup({ cat, items }: SkillGroupProps) {
  return (
    <div>
      <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#F0A050]">
        {cat}
      </p>
      <div className="flex flex-wrap gap-[7px]">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-md border border-[#30363D] bg-[rgba(10,14,20,0.82)] px-3 py-1 text-[13px] text-[#C9D1D9]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <>
      <section id="skills" className="pb-20">
        <div className="mb-10 flex items-baseline gap-[14px]">
          <h2 className="m-0 font-['Space_Grotesk'] text-[26px] font-bold text-[#E6EDF3]">
            Skills
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7 rounded-xl border border-[#30363D] bg-[rgba(10,14,20,0.82)] px-[30px] py-7">
          {SKILLS.map((s) => (
            <SkillGroup key={s.cat} cat={s.cat} items={s.items} />
          ))}
        </div>
      </section>
    </>
  );
}
