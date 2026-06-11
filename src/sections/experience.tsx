import Tag from "../features/tag";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  desc: string;
  tech: string[];
  color: string;
}

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Javan Informatics Limited",
    role: "Software Developer Intern",
    period: "6 months · 2025",
    desc: `Focused on building high-performance backend services using the Golang Fiber framework such as implementing strict validation checks during the creation and updating of purchase items to prevent duplicate entries, ensuring data integrity and consistency across the store's inventory records.`,
    tech: ["Web Development", "Team Collaboration", "Software Engineering"],
    color: "#60C0A0",
  },
];

export default function Experience() {
  return (
    <>
      <section id="experience" className="pb-20">
        <div className="mb-10 flex items-baseline gap-[14px]">
          <h2 className="m-0 font-['Space_Grotesk'] text-[26px] font-bold text-[#E6EDF3]">
            Experience
          </h2>
        </div>

        <div className="space-y-6">
          {EXPERIENCE.map((job) => (
            <div
              key={job.company}
              className="rounded-xl border border-[#30363D] bg-[#0a0e14]/80 px-7 py-6"
              style={{ borderLeft: `3px solid ${job.color}` }}
            >
              <div className="mb-[6px] flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="mb-[3px] font-['Space_Grotesk'] text-[17px] font-semibold text-[#E6EDF3]">
                    {job.role}
                  </h3>
                  <p
                    className="m-0 text-[14px] font-medium"
                    style={{ color: job.color }}
                  >
                    {job.company}
                  </p>
                </div>
                <span className="rounded-[5px] border border-[#30363D] bg-black/85 px-2.5 py-1 font-mono text-[12px] text-[#8B949E]">
                  {job.period}
                </span>
              </div>

              <p className="my-3 text-[14px] leading-[1.7] text-[#8B949E]">
                {job.desc}
              </p>

              <div className="flex flex-wrap gap-[7px]">
                {job.tech.map((t) => (
                  <Tag key={t} color={job.color}>
                    {t}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
