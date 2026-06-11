import { useState, useEffect } from "react";

export default function Cursor() {
  const [vis, setVis] = useState<boolean>(true);

  useEffect(() => {
    const t = setInterval(() => setVis((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className="inline-block h-[1.1em] w-0.5 translate-y-[-0.05em] rounded-sm bg-[#F0A050] transition-opacity duration-100"
      style={{ opacity: vis ? 1 : 0 }}
    />
  );
}