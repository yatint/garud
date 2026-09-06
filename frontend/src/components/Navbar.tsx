import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LangToggle } from "@/components/LangToggle";
import { useLang } from "@/lib/lang";
import { scrollToId } from "@/lib/scroll";

interface NavbarProps {
  onEnroll: () => void;
}

export const Navbar = ({ onEnroll }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  const LINKS = [
    { label: t("About", "कार्यक्रमाविषयी"), target: "#program", slug: "about" },
    { label: t("Outcomes", "परिणाम"), target: "#outcomes", slug: "outcomes" },
    { label: t("3-Day Journey", "३ दिवसांचा प्रवास"), target: "#journey", slug: "3-day-journey" },
    { label: t("Method", "पद्धत"), target: "#method", slug: "method" },
    { label: t("Benefits", "फायदे"), target: "#benefits", slug: "benefits" },
    { label: t("FAQs", "प्रश्न"), target: "#faq", slug: "faqs" },
  ];

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
              {t("Rupantaram Academy", "रूपांतरम् अकादमी")}
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-6 lg:flex" data-testid="nav-links">
          <Link
            to="/"
            data-testid="nav-link-home"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#f68a4a] transition-colors duration-300 hover:text-[#18463b]"
          >
            <ArrowLeft size={14} />
            {t("Academy Home", "मुख्यपृष्ठ")}
          </Link>
          {LINKS.map((l) => (
            <button
              key={l.target}
              data-testid={`nav-link-${l.slug}`}
              onClick={() => go(l.target)}
              className="text-sm font-semibold text-[#555] transition-colors duration-300 hover:text-[#18463b]"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle />
          <button
            data-testid="nav-brochure-button"
            onClick={() => go("#program")}
            className="rounded-full border border-[#18463b]/40 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:border-[#18463b] hover:bg-[#18463b]/5"
          >
            {t("Brochure", "ब्रोशर")}
          </button>
          <button
            data-testid="nav-enroll-button"
            onClick={onEnroll}
            className="rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
          >
            {t("Enroll Now", "नोंदणी करा")}
          </button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle />
          <button
            data-testid="mobile-menu-button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e1dfdf] text-[#18463b]"
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
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
              <Link
                to="/"
                data-testid="mobile-nav-link-home"
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#f68a4a]"
              >
                ← {t("Academy Home", "मुख्यपृष्ठ")}
              </Link>
              {LINKS.map((l) => (
                <button
                  key={l.target}
                  data-testid={`mobile-nav-link-${l.slug}`}
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
                {t("Enroll Now", "नोंदणी करा")}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
