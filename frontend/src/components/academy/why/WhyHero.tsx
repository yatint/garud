import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLang } from "@/lib/lang";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG =
  "https://images.unsplash.com/photo-1662748642644-dd2e42d7cd9b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600";

interface WhyHeroProps {
  onEnquire: () => void;
}

export const WhyHero = ({ onEnquire }: WhyHeroProps) => {
  const navigate = useNavigate();
  const { t } = useLang();

  const goPrograms = () => {
    navigate("/");
    setTimeout(() => scrollToId("#programs", -124), 700);
  };

  return (
    <section id="top" data-testid="why-hero" className="relative">
      <div className="relative flex min-h-[72vh] items-center justify-center overflow-hidden [border-radius:0_0_50%_50%/0_0_72px_72px]">
        <img
          src={HERO_IMG}
          alt={t("Students walking together toward the morning light", "सकाळच्या प्रकाशाकडे एकत्र चाललेले विद्यार्थी")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,70,59,0.55)_0%,rgba(24,70,59,0.72)_60%,rgba(24,70,59,0.85)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-40 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#f68a4a]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f8b183]">
              {t("Why Choose Us", "आम्हीच का निवडावे")}
            </span>
            <span className="h-px w-10 bg-[#f68a4a]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl"
            data-testid="why-hero-title"
          >
            {t("Why Choose Rupantaram?", "रूपांतरम् का निवडावे?")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            data-testid="why-hero-subtitle"
          >
            {t(
              "We don't just teach skills — we transform attitudes, habits, character, and life direction through practical, value-based education.",
              "आम्ही फक्त कौशल्ये शिकवत नाही — व्यावहारिक, मूल्याधारित शिक्षणाद्वारे वृत्ती, सवयी, संस्कार आणि जीवनदिशा बदलतो."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              data-testid="why-hero-programs-button"
              onClick={goPrograms}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-[#18463b] active:scale-95"
            >
              {t("Explore Programs", "कार्यक्रम पहा")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="why-hero-counselling-button"
              onClick={onEnquire}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f8b183] active:scale-95"
            >
              <CalendarCheck size={16} />
              {t("Book a Counselling Session", "समुपदेशन सत्र बुक करा")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
