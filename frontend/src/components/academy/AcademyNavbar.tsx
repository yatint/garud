import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { scrollToId } from "@/lib/scroll";

const OFFSET = -116;

const LINKS = [
  { label: "About", target: "#about" },
  { label: "Life Skills", target: "#skills" },
  { label: "Programs", target: "#programs" },
  { label: "Method", target: "#method" },
  { label: "Stories", target: "#stories" },
  { label: "Centers", target: "#centers" },
  { label: "FAQs", target: "#faq" },
];

interface AcademyNavbarProps {
  onEnquire: () => void;
}

export const AcademyNavbar = ({ onEnquire }: AcademyNavbarProps) => {
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
    scrollToId(target, OFFSET);
  };

  return (
    <header data-testid="academy-navbar" className="fixed inset-x-0 top-0 z-50">
      <div className="hidden bg-[#18463b] md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">
            Chala Manus Ghadvu Ya — Let's Build Better Human Beings
          </p>
          <a
            data-testid="topbar-phone-link"
            href="tel:+919860775149"
            className="inline-flex items-center gap-2 text-xs font-bold text-white transition-colors hover:text-[#f8b183]"
          >
            <Phone size={12} />
            +91 98607 75149
          </a>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-[#e1dfdf] bg-white/90 shadow-[0_2px_24px_rgba(24,70,59,0.07)] backdrop-blur-xl"
            : "border-b border-transparent bg-white/60 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            data-testid="academy-nav-logo"
            onClick={() => go("#top")}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0b5d3b] font-heading text-lg font-black text-white">
              R
            </span>
            <span className="text-left leading-tight">
              <span className="block font-heading text-sm font-extrabold uppercase tracking-[0.18em] text-[#18463b]">
                Rupantaram
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f68a4a]">
                Garud Zep Group
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-6 lg:flex" data-testid="academy-nav-links">
            {LINKS.map((l) => (
              <button
                key={l.target}
                data-testid={`academy-nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                onClick={() => go(l.target)}
                className="text-sm font-semibold text-[#555] transition-colors duration-300 hover:text-[#18463b]"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/youth-transform"
              data-testid="academy-nav-youth-link"
              className="rounded-full border border-[#18463b]/40 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:border-[#18463b] hover:bg-[#18463b]/5"
            >
              Youth Transform
            </Link>
            <button
              data-testid="academy-nav-enquire-button"
              onClick={onEnquire}
              className="rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
            >
              Enquire Now
            </button>
          </div>

          <button
            data-testid="academy-mobile-menu-button"
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
              data-testid="academy-mobile-menu"
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
                    data-testid={`academy-mobile-nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    onClick={() => go(l.target)}
                    className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#444] transition-colors hover:bg-[#f6f7f0] hover:text-[#18463b]"
                  >
                    {l.label}
                  </button>
                ))}
                <Link
                  to="/youth-transform"
                  data-testid="academy-mobile-nav-youth-link"
                  className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#18463b]"
                >
                  Youth Transform Program →
                </Link>
                <button
                  data-testid="academy-mobile-nav-enquire-button"
                  onClick={() => {
                    setOpen(false);
                    onEnquire();
                  }}
                  className="mt-2 rounded-full bg-[#f68a4a] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white"
                >
                  Enquire Now
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
