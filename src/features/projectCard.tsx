import Tag from "./tag";

interface Project {
  name: string;
  tag: string;
  desc: string;
  tech: string[];
  color: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative cursor-default overflow-hidden rounded-xl border border-[#30363D] bg-[#161B22] p-6 transition-all duration-250 hover:border-[#F0A050]/55 hover:bg-[#1C2128]">
      {/* Top Accent Border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl bg-transparent transition-colors duration-250 group-hover:bg-[#F0A050]" />

      <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-['Space_Grotesk'] text-[16px] font-semibold text-[#E6EDF3]">
          {project.name}
        </h3>
        <span className="whitespace-nowrap text-[12px] text-[#8B949E]">
          {project.tag}
        </span>
      </div>

      <p className="mb-4 text-[14px] leading-[1.65] text-[#8B949E]">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t: any) => (
          <Tag key={t} color={project.color}>
            {t}
          </Tag>
        ))}
      </div>
    </div>
  );
}
