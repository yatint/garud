import { Mail, MapPin, Phone } from "lucide-react";
import { useLang } from "@/lib/lang";
import { scrollToId } from "@/lib/scroll";

export const Footer = () => {
  const { t } = useLang();

  const LINKS = [
    { label: t("About the Program", "कार्यक्रमाविषयी"), target: "#program" },
    { label: t("Key Outcomes", "महत्त्वाचे परिणाम"), target: "#outcomes" },
    { label: t("3-Day Journey", "३ दिवसांचा प्रवास"), target: "#journey" },
    { label: t("Learning Method", "शिकण्याची पद्धत"), target: "#method" },
    { label: t("Benefits", "फायदे"), target: "#benefits" },
    { label: t("FAQs", "प्रश्न"), target: "#faq" },
  ];

  const PROGRAMS = [
    t("Kids Transform (Ages 6–12)", "Kids Transform (६–१२ वर्षे)"),
    t("Youth Transform (Ages 13–18)", "Youth Transform (१३–१८ वर्षे)"),
    t("Young Adult Transform (19+)", "Young Adult Transform (१९+)"),
    t("Parenting 360° (1 Day)", "Parenting 360° (१ दिवस)"),
    t("30-Day Transformation Journey", "३० दिवसांचा रूपांतर प्रवास"),
  ];

  return (
    <footer id="contact" data-testid="footer" className="border-t border-[#0b5d3b] bg-[#18463b]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f68a4a] font-heading text-xl font-black text-white">
                R
              </span>
              <div className="leading-tight">
                <p className="font-heading text-base font-extrabold uppercase tracking-[0.14em] text-white">
                  Rupantaram
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f8b183]">
                  Garud Zep Group
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              {t(
                "Life Skills & Personality Transformation Academy. Chala Manus Ghadvu Ya — Let's Build Better Human Beings.",
                "जीवनकौशल्य व व्यक्तिमत्त्व परिवर्तन अकादमी. चला माणूस घडवू या."
              )}
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
              {t("Explore", "दुवे")}
            </h3>
            <ul className="mt-5 flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.target}>
                  <button
                    data-testid={`footer-link-${l.target.replace("#", "")}`}
                    onClick={() => scrollToId(l.target)}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-[#f8b183]"
                  >
                    {l.label}
                  </button>
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
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
              {t("Contact", "संपर्क")}
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#f68a4a]" />
                <span data-testid="footer-centers">
                  {t("Centers: Karjat · Alibag · Pen · Lonavala", "केंद्रे: कर्जत · आलिबाग · पेन · लोणावळा")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-[#f68a4a]" />
                <a
                  data-testid="footer-phone-link"
                  href="tel:+919011658888"
                  className="transition-colors hover:text-white"
                >
                  +91 90116 58888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-[#f68a4a]" />
                <a
                  data-testid="footer-email-link"
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
            {t("© 2026 Garud Zep Rupantaram. All rights reserved.", "© २०२६ गरुड झेप रूपांतरम्. सर्व हक्क राखीव.")}
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
            {t("Discover · Build · Create", "ओळखा · घडवा · निर्माण करा")}
          </p>
        </div>
      </div>
    </footer>
  );
};
