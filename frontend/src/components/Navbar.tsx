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
          ? "border-b border-[#e1dfdf] bg-white/90 shadow-[0_2px_24px_rgba(24,70,59,0.07)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          data-testid="nav-logo"
          onClick={() => go("#top")}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b5d3b] font-heading text-lg font-black text-white">
            R
          </span>
          <span className="text-left leading-tight">
            <span className="block font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-[#18463b]">
              Youth Transform
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f68a4a]">
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
              className="text-sm font-semibold text-[#555] transition-colors duration-300 hover:text-[#18463b]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            data-testid="nav-brochure-button"
            onClick={() => go("#program")}
            className="rounded-full border border-[#18463b]/40 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:border-[#18463b] hover:bg-[#18463b]/5"
          >
            Brochure
          </button>
          <button
            data-testid="nav-enroll-button"
            onClick={onEnroll}
            className="rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
          >
            Enroll Now
          </button>
        </div>

        <button
          data-testid="mobile-menu-button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e1dfdf] text-[#18463b] lg:hidden"
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
            className="overflow-hidden border-b border-[#e1dfdf] bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <button
                  key={l.target}
                  data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  onClick={() => go(l.target)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#444] transition-colors hover:bg-[#f6f7f0] hover:text-[#18463b]"
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
                className="mt-2 rounded-full bg-[#f68a4a] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white"
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
