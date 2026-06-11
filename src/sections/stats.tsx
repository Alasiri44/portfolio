interface StatItem {
  num: string;
  label: string;
}

const STATS: StatItem[] = [
  { num: "1.5+", label: "Years experience" },
  { num: "10+", label: "Cover letters sent" },
  { num: "4+", label: "Client projects" },
];

export default function Stats() {
  return (
    <>
      <section className="pb-20">
        <div className="flex flex-wrap gap-4">
          {STATS.map(({ num, label }) => (
            <div
              key={label}
              className="flex-[1_1_140px] rounded-[10px] border border-[#30363D] bg-[#0a0e14]/80 px-[22px] py-5"
            >
              <p className="mb-1 font-['Space_Grotesk'] text-[28px] font-bold text-[#F0A050]">
                {num}
              </p>
              <p className="m-0 text-[13px] text-[#8B949E]">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
