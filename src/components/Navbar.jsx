import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { label: "Work", href: "work" },
  { label: "Experience", href: "experience" },
  { label: "Strengths", href: "strengths" },
  { label: "Contact", href: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const frameRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const updateScrolled = () => {
      frameRef.current = null;
      const next = window.scrollY > 16;
      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setScrolled(next);
      }
    };

    const onScroll = () => {
      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updateScrolled);
      }
    };

    updateScrolled();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const goToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 60);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[calc(100%-32px)] max-w-canvas -translate-x-1/2 rounded-full border px-4 py-3 backdrop-blur-2xl transition-all duration-300 md:px-6 ${
        scrolled
          ? "border-white/80 bg-white/78 shadow-soft"
          : "border-white/55 bg-white/42"
      }`}
    >
      <nav className="flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-sm font-bold text-white">
            ZY
          </span>
          <span className="text-sm font-semibold text-ink md:text-base">Zhang Yu</span>
        </Link>
        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => goToSection(item.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-white hover:text-ink"
            >
              {item.label}
            </button>
          ))}
        </div>
        <a
          href="mailto:2082315263@qq.com"
          className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-harmony"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
