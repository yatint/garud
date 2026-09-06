import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useLang } from "@/lib/lang";

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3V11H9v3h2.3v7h2.2Z" />
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
const YoutubeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15.2V8.8l5.2 3.2L10 15.2Z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.4 8.9H3.6V21h2.8V8.9ZM5 3.5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM12 11.3c0-1-.1-1.8-.2-2.4h2.6l.1 1.1h.1c.4-.6 1.3-1.3 2.7-1.3 1.8 0 3.1 1.2 3.1 3.7V21h-2.8v-7.9c0-1.2-.4-2-1.5-2-.8 0-1.3.6-1.5 1.1-.1.2-.1.5-.1.8V21H12v-9.7Z" />
  </svg>
);

const SOCIALS = [
  { icon: FacebookIcon, label: "Facebook", slug: "facebook" },
  { icon: InstagramIcon, label: "Instagram", slug: "instagram" },
  { icon: YoutubeIcon, label: "YouTube", slug: "youtube" },
  { icon: LinkedinIcon, label: "LinkedIn", slug: "linkedin" },
];

export const AcademyFooter = () => {
  const { t } = useLang();

  const LINKS = [
    { label: t("About Us", "आमच्याविषयी"), href: "/about", slug: "about" },
    { label: t("Why Us", "आमची खासियत"), href: "/why-us", slug: "why-us" },
    { label: t("Programs", "कार्यक्रम"), href: "/programs", slug: "programs" },
    { label: t("Life Skills", "जीवनकौशल्ये"), href: "/life-skills", slug: "life-skills" },
    { label: t("Gallery", "गॅलरी"), href: "/gallery", slug: "gallery" },
    { label: t("Success Stories", "यशोगाथा"), href: "/success-stories", slug: "success-stories" },
    { label: t("Contact", "संपर्क"), href: "/contact", slug: "contact" },
  ];

  const PROGRAMS = [
    t("Kids Transform (Ages 6–12)", "Kids Transform (६–१२ वर्षे)"),
    t("Youth Transform (Ages 13–18)", "Youth Transform (१३–१८ वर्षे)"),
    t("Young Adult Transform (19+)", "Young Adult Transform (१९+)"),
    t("Parenting 360° (1 Day)", "Parenting 360° (१ दिवस)"),
    t("30-Day Transformation Journey", "३० दिवसांचा रूपांतर प्रवास"),
  ];

  return (
    <footer id="contact" data-testid="academy-footer" className="border-t border-[#0b5d3b] bg-[#18463b]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/logo.webp" alt="Rupantaram" className="h-12 w-auto rounded-lg bg-white p-1" />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              {t(
                "A life skills & personality transformation academy. This is not teaching — this is transformation.",
                "जीवनकौशल्य व व्यक्तिमत्त्व परिवर्तन अकादमी. हे केवळ शिकवणे नाही — हे रूपांतर आहे."
              )}
            </p>
            <p className="mt-4 font-heading text-sm font-bold uppercase tracking-[0.18em] text-[#f8b183]">
              {t("Chala Manus Ghadvu Ya", "चला माणूस घडवू या")}
            </p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.slug}
                  data-testid={`social-link-${s.slug}`}
                  href="#contact"
                  aria-label={s.label}
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-300 hover:border-[#f68a4a] hover:text-[#f68a4a]"
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
              {t("Quick Links", "महत्त्वाचे दुवे")}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={l.href}
                    data-testid={`academy-footer-link-${l.slug}`}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-[#f8b183]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
              {t("Programs", "कार्यक्रम")}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {PROGRAMS.map((p) => (
                <li key={p} className="text-sm text-white/60">
                  {p}
                </li>
              ))}
              <li>
                <Link
                  to="/youth-transform"
                  data-testid="academy-footer-youth-link"
                  className="text-sm font-semibold text-[#f8b183] transition-colors hover:text-white"
                >
                  {t("Explore Youth Transform →", "Youth Transform पहा →")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
              {t("Contact", "संपर्क")}
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#f68a4a]" />
                <span data-testid="academy-footer-centers">
                  {t("Karjat · Alibag · Pen · Lonavala, Maharashtra", "कर्जत · आलिबाग · पेन · लोणावळा, महाराष्ट्र")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#f68a4a]" />
                <span>
                  <a data-testid="academy-footer-phone-1" href="tel:+919011658888" className="transition-colors hover:text-white">
                    +91 90116 58888
                  </a>
                  {" · "}
                  <a data-testid="academy-footer-phone-2" href="tel:+919011678888" className="transition-colors hover:text-white">
                    +91 90116 78888
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#f68a4a]" />
                <a
                  data-testid="academy-footer-website"
                  href="mailto:info@garudzeprupantaram.com"
                  className="transition-colors hover:text-white"
                >
                  info@garudzeprupantaram.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/45">
            {t("© 2026 Garud Zep – Rupantaram. All rights reserved.", "© २०२६ गरुड झेप – रूपांतरम्. सर्व हक्क राखीव.")}
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            {t("Not Teaching — Transformation", "शिकवणे नाही — रूपांतर")}
          </p>
        </div>
      </div>
    </footer>
  );
};
