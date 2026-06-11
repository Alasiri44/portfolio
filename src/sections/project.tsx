import ProjectCard from "../features/projectCard";

interface Project {
  name: string;
  tag: string;
  desc: string;
  tech: string[];
  color: string;
}

const PROJECTS: Project[] = [
  {
    name: "Church Website",
    tag: "Full-Stack · Next.js + Sanity",
    desc: "Membership registration system with custom Sanity Studio document actions, auto-generating member numbers in HGA00X format and form validation pipelines.",
    tech: ["Next.js", "Sanity CMS", "TypeScript", "React"],
    color: "#60C0A0",
  },
  {
    name: "Writer Portfolio — Gladwell Pamba",
    tag: "Frontend · Client Work",
    desc: "A bright, distinctive portfolio site for a writer client — electric coral, cobalt blue, sunshine yellow palette. Full TypeScript conversion and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "#E05C6A",
  },
  {
    name: "POS System Refactor",
    tag: "Backend · Go + Fiber",
    desc: "Refactored a point-of-sale Go backend using Fiber and GORM — corrected search fields, removed phantom associations, resolved routing conflicts on session endpoints.",
    tech: ["Go", "Fiber", "GORM", "PostgreSQL"],
    color: "#7B8FF0",
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects" className="pb-20">
        <div className="mb-10 flex items-baseline gap-[14px]">
          <h2 className="m-0 font-['Space_Grotesk'] text-[26px] font-bold text-[#E6EDF3]">
            Projects
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[18px]">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
