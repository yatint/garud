import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToId } from "@/lib/scroll";

const OFFSET = -124;

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3V11H9v3h2.3v7h2.2Z" />
  </svg>
);
const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.7 3H21l-7.2 8.2L22 21h-6.6l-4.5-5.9L5.7 21H2.4l7.7-8.8L2 3h6.8l4.1 5.4L17.7 3Zm-1.2 16h1.8L6.9 4.9H5L16.5 19Z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.4 8.9H3.6V21h2.8V8.9ZM5 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM12 11.3c0-1-.1-1.8-.2-2.4h2.6l.1 1.1h.1c.4-.6 1.3-1.3 2.7-1.3 1.8 0 3.1 1.2 3.1 3.7V21h-2.8v-7.9c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8V21H12v-9.7Z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2L10 15.2Z" />
  </svg>
);

const SOCIALS = [FacebookIcon, XIcon, InstagramIcon, LinkedinIcon, YoutubeIcon];
const SOCIAL_SLUGS = ["facebook", "x", "instagram", "linkedin", "youtube"];

const PROGRAM_MENU = [
  { label: "All Programs Overview", href: "/programs" },
  { label: "Kids Transform (6–12)", href: "/programs/kids-transform" },
  { label: "Youth Transform (13–18)", href: "/youth-transform" },
  { label: "Young Adult Transform (19+)", href: "/programs/young-adult-transform" },
  { label: "Parenting 360°", href: "/programs" },
  { label: "30-Day Transformation", href: "/programs" },
];

interface AcademyNavbarProps {
  onEnquire: () => void;
}

export const AcademyNavbar = ({ onEnquire }: AcademyNavbarProps) => {
  const [open, setOpen] = useState(false);

  const go = (target: string) => {
    setOpen(false);
    scrollToId(target, OFFSET);
  };

  const linkClass =
    "font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-white/85 transition-colors duration-300 hover:text-[#f8b183]";

  return (
    <header data-testid="academy-navbar" className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-[#e1dfdf] bg-white">
        <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="hidden items-center gap-4 md:flex" data-testid="topbar-socials">
            {SOCIALS.map((Icon, i) => (
              <a
                key={SOCIAL_SLUGS[i]}
                data-testid={`topbar-social-${SOCIAL_SLUGS[i]}`}
                href="#top"
                onClick={(e) => e.preventDefault()}
                aria-label={SOCIAL_SLUGS[i]}
                className="text-[#18463b] transition-colors duration-300 hover:text-[#f68a4a]"
              >
                <Icon />
              </a>
            ))}
          </div>

          <button
            data-testid="academy-nav-logo"
            onClick={() => go("#top")}
            className="absolute left-1/2 -translate-x-1/2"
          >
            <img
              src="/assets/logo.webp"
              alt="Garud Zep Rupantaram — Chala Manus Ghadvu Ya"
              className="h-12 w-auto"
            />
          </button>

          <div className="ml-auto flex items-center gap-3">
            <a
              data-testid="topbar-phone-link"
              href="tel:+919860775149"
              className="hidden items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] sm:inline-flex"
            >
              <Phone size={13} />
              +91 98607 75149
            </a>
            <button
              data-testid="academy-mobile-menu-button"
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#e1dfdf] text-[#18463b] lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden bg-[#18463b] lg:block">
        <nav
          className="mx-auto flex h-12 max-w-7xl items-center justify-center gap-9 px-4"
          data-testid="academy-nav-links"
        >
          <button data-testid="academy-nav-link-home" onClick={() => go("#top")} className={linkClass}>
            Home
          </button>
          <Link to="/about" data-testid="academy-nav-link-about" className={linkClass}>
            About
          </Link>
          <Link to="/why-us" data-testid="academy-nav-link-why-us" className={linkClass}>
            Why Us
          </Link>

          <div className="group relative">
            <Link
              to="/programs"
              data-testid="academy-nav-link-programs"
              className={`${linkClass} inline-flex items-center gap-1`}
            >
              Programs
              <ChevronDown size={13} className="transition-transform duration-300 group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="w-64 rounded-xl border border-[#e1dfdf] bg-white p-2 shadow-[0_18px_44px_rgba(24,70,59,0.16)]" data-testid="programs-dropdown">
                {PROGRAM_MENU.map((p) => (
                  <Link
                    key={p.label}
                    to={p.href}
                    data-testid={`programs-dropdown-${p.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    className="block rounded-lg px-4 py-2.5 text-sm font-semibold text-[#444] transition-colors hover:bg-[#f6f7f0] hover:text-[#f68a4a]"
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <button data-testid="academy-nav-link-life-skills" onClick={() => go("#skills")} className={linkClass}>
            Life Skills
          </button>
          <Link to="/gallery" data-testid="academy-nav-gallery-link" className={linkClass}>
            Gallery
          </Link>
          <button data-testid="academy-nav-link-success-stories" onClick={() => go("#stories")} className={linkClass}>
            Success Stories
          </button>
          <button data-testid="academy-nav-link-contact" onClick={() => go("#contact")} className={linkClass}>
            Contact
          </button>
          <button
            data-testid="academy-nav-enquire-button"
            onClick={onEnquire}
            className="ml-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-5 py-2 font-heading text-[12px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#18463b]"
          >
            Enquire Now
          </button>
        </nav>
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
              {[
                { label: "Home", target: "#top" },
                { label: "Life Skills", target: "#skills" },
                { label: "Success Stories", target: "#stories" },
                { label: "Contact", target: "#contact" },
              ].map((l) => (
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
                to="/about"
                data-testid="academy-mobile-nav-about-link"
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#18463b]"
              >
                About Us →
              </Link>
              <Link
                to="/why-us"
                data-testid="academy-mobile-nav-why-us-link"
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#18463b]"
              >
                Why Choose Us →
              </Link>
              <Link
                to="/programs"
                data-testid="academy-mobile-nav-programs-link"
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#18463b]"
              >
                All Programs →
              </Link>
              <Link
                to="/gallery"
                data-testid="academy-mobile-nav-gallery-link"
                className="rounded-lg px-3 py-3 text-left text-sm font-semibold text-[#18463b]"
              >
                Gallery →
              </Link>
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
    </header>
  );
};
