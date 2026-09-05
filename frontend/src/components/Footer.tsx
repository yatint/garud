import { Mail, MapPin, Phone } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const LINKS = [
  { label: "About the Program", target: "#program" },
  { label: "Key Outcomes", target: "#outcomes" },
  { label: "3-Day Journey", target: "#journey" },
  { label: "Learning Method", target: "#method" },
  { label: "Benefits", target: "#benefits" },
  { label: "FAQs", target: "#faq" },
];

const PROGRAMS = [
  "Kids Transform (Ages 6–12)",
  "Youth Transform (Ages 13–18)",
  "Young Adult Transform (19+)",
  "Parenting 360 (1 Day)",
  "30-Day Transformation Journey",
];

export const Footer = () => {
  return (
    <footer id="contact" data-testid="footer" className="border-t border-[#1e293b] bg-[#050d1d]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#c8102e,#f0a500)] font-heading text-xl font-black text-white">
                R
              </span>
              <div className="leading-tight">
                <p className="font-heading text-base font-extrabold uppercase tracking-[0.14em] text-white">
                  Rupantaram
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f5c253]">
                  Garud Zep Group
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Life Skills & Personality Transformation Academy. Chala Manus Ghadvu Ya — Let's
              Build Better Human Beings.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f5c253]">
              Explore
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.target}>
                  <button
                    data-testid={`footer-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                    onClick={() => scrollToId(l.target)}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-[#f5c253]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f5c253]">
              Programs
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {PROGRAMS.map((p) => (
                <li key={p} className="text-sm text-slate-400">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f5c253]">
              Contact
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#e6a635]" />
                <span data-testid="footer-centers">Centers: Karjat · Alibag · Pen · Lonavala</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#e6a635]" />
                <a
                  data-testid="footer-phone-link"
                  href="tel:+919000000000"
                  className="transition-colors hover:text-[#f5c253]"
                >
                  +91 90000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#e6a635]" />
                <a
                  data-testid="footer-email-link"
                  href="mailto:hello@rupantaram.in"
                  className="transition-colors hover:text-[#f5c253]"
                >
                  hello@rupantaram.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#1e293b] pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © 2026 Garud Zep Rupantaram. All rights reserved.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            Discover · Build · Create
          </p>
        </div>
      </div>
    </footer>
  );
};
