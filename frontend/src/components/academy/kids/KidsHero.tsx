import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useLang } from "@/lib/lang";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG =
  "https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600";

interface KidsHeroProps {
  onEnroll: () => void;
}

export const KidsHero = ({ onEnroll }: KidsHeroProps) => {
  const { t } = useLang();
  return (
    <section id="top" data-testid="kids-hero" className="relative">
      <div className="relative flex min-h-[72vh] items-center justify-center overflow-hidden [border-radius:0_0_50%_50%/0_0_72px_72px]">
        <img
          src={HERO_IMG}
          alt={t("Children laughing and playing during an activity", "उपक्रमादरम्यान हसत खेळत असलेली मुले")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,70,59,0.55)_0%,rgba(24,70,59,0.7)_60%,rgba(24,70,59,0.85)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-40 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#f68a4a]/50 bg-white/10 px-5 py-2 backdrop-blur-sm"
            data-testid="kids-hero-badge"
          >
            <span className="h-2 w-2 rounded-full bg-[#f68a4a] animate-gold-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">
              {t("Ages 6–13 · 3-Day Workshop", "वय ६–१३ · ३ दिवसीय कार्यशाळा")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl"
            data-testid="kids-hero-title"
          >
            Kids <span className="text-brand-gradient">Transform</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            data-testid="kids-hero-subtitle"
          >
            {t(
              "A 3-day life skills and personality development workshop that nurtures confidence, discipline, communication skills, and values through joyful, value-based learning — and shapes life itself.",
              "आनंददायी आणि संस्कारक्षम शिक्षणातून आत्मविश्वास, शिस्त, संवादकौशल्य, मूल्ये वृद्धिंगत करणारा आणि आयुष्य घडविणारा तीन दिवसीय जीवनकौशल्ये आणि व्यक्तिमत्व विकासाची कार्यशाळा."
            )}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52 }}
            className="mt-5 font-heading text-base font-black uppercase tracking-[0.24em] text-[#f8b183] [text-shadow:0_1px_10px_rgba(8,22,17,0.65)]"
            data-testid="kids-hero-tagline"
          >
            {t("Here, Life Is Shaped…", "इथे आयुष्य घडते…..")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              data-testid="kids-hero-register-button"
              onClick={onEnroll}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-[#18463b] active:scale-95"
            >
              {t("Register Now", "आत्ताच नोंदणी करा")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="kids-hero-brochure-button"
              onClick={() => scrollToId("#kids-about", -88)}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f8b183] active:scale-95"
            >
              <Download size={16} />
              {t("Download Brochure", "माहितीपत्रक डाउनलोड करा")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
