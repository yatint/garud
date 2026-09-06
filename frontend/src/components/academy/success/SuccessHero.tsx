import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useLang } from "@/lib/lang";

const HERO_IMG =
  "https://images.unsplash.com/photo-1758270703721-b1e61dbccd47?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600";

interface SuccessHeroProps {
  onEnquire: () => void;
}

export const SuccessHero = ({ onEnquire }: SuccessHeroProps) => {
  const { t } = useLang();
  return (
    <section id="top" data-testid="success-hero" className="relative">
      <div className="relative flex min-h-[72vh] items-center justify-center overflow-hidden [border-radius:0_0_50%_50%/0_0_72px_72px]">
        <img
          src={HERO_IMG}
          alt={t("Students celebrating their achievements", "यश साजरे करणारे विद्यार्थी")}
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
              {t("Success Stories", "यशोगाथा")}
            </span>
            <span className="h-px w-10 bg-[#f68a4a]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-4xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-6xl"
            data-testid="success-hero-title"
          >
            {t("Every Transformation", "प्रत्येक परिवर्तनामागे")}{" "}
            <span className="text-brand-gradient">{t("Has a Story", "एक कथा असते")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            data-testid="success-hero-subtitle"
          >
            {t(
              "Behind every confident child, every inspired parent, and every responsible young leader is a journey of consistent growth, discipline, and self-discovery.",
              "प्रत्येक आत्मविश्वासू मुलामागे, प्रत्येक प्रेरित पालकामागे आणि प्रत्येक जबाबदार तरुण नेतृत्वामागे सातत्यपूर्ण प्रगती, शिस्त आणि स्व-शोधाचा प्रवास असतो."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              data-testid="success-hero-join-button"
              onClick={onEnquire}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-[#18463b] active:scale-95"
            >
              {t("Join a Program", "कार्यक्रमात सहभागी व्हा")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="success-hero-contact-button"
              href="tel:+919011658888"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f8b183] active:scale-95"
            >
              <Phone size={16} />
              {t("Contact Us", "संपर्क करा")}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
