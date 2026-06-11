interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-[14px] font-medium tracking-[0.04em] text-[#8B949E] transition-colors duration-200 hover:text-[#F0A050]"
    >
      {children}
    </a>
  );
}