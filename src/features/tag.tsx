import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  color: string;
}

export default function Tag({ children, color }: TagProps) {
  return (
    <span
      className="rounded border-[1px] px-[9px] py-[3px] text-[11px] font-semibold tracking-wider"
      style={{
        backgroundColor: `${color}22`,
        borderColor: `${color}44`,
        color: color,
      }}
    >
      {children}
    </span>
  );
}