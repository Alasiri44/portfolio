export default function Footer() {
  return (
    <>
      <footer className="relative z-10 border-t border-[#21262D] p-6 text-center">
        <p className="m-0 font-mono text-[13px] text-white">
          © {new Date().getFullYear()} Austin Pamba — Nairobi, Kenya
        </p>
      </footer>
    </>
  );
}
