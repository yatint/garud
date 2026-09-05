import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  { label: "About", target: "#program" },
  { label: "Outcomes", target: "#outcomes" },
  { label: "3-Day Journey", target: "#journey" },
  { label: "Method", target: "#method" },
  { label: "Benefits", target: "#benefits" },
  { label: "FAQs", target: "#faq" },
];

interface NavbarProps {
  onEnroll: () => void;
}

export const Navbar = ({ onEnroll }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (target: string) => {
    setOpen(false);
    scrollToId(target);
  };

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#1e293b]/80 bg-[#071328]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          data-testid="nav-logo"
          onClick={() => go("#top")}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#c8102e,#f0a500)] font-heading text-lg font-black text-white">
            R
          </span>
          <span className="text-left leading-tight">
            <span className="block font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-white">
              Youth Transform
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5c253]">
              Rupantaram Academy
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-7 lg:flex" data-testid="nav-links">
          {LINKS.map((l) => (
            <button
              key={l.target}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              onClick={() => go(l.target)}
              className="text-sm font-semibold text-slate-300 transition-colors duration-300 hover:text-[#f5c253]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            data-testid="nav-brochure-button"
            onClick={() => go("#program")}
            className="rounded-full border border-[#f5c253]/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#f5c253] transition-all duration-300 hover:border-[#f5c253] hover:bg-[#f5c253]/10"
          >
            Brochure
          </button>
          <button
            data-testid="nav-enroll-button"
            onClick={onEnroll}
            className="rounded-full bg-[#e6a635] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#071328] transition-all duration-300 hover:scale-[1.04] hover:bg-[#f5c253] active:scale-95"
          >
            Enroll Now
          </button>
        </div>

        <button
          data-testid="mobile-menu-button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1e3a5f] text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-[#1e293b] bg-[#071328]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <button
                  key={l.target}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  onClick={() => go(l.target)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-slate-200 transition-colors hover:bg-[#14305d] hover:text-[#f5c253]"
                >
                  {l.label}
                </button>
              ))}
              <button
                data-testid="mobile-nav-enroll-button"
                onClick={() => {
                  setOpen(false);
                  onEnroll();
                }}
                className="mt-2 rounded-full bg-[#e6a635] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#071328]"
              >
                Enroll Now
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
