import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BedDouble,
  Building2,
  CalendarClock,
  GraduationCap,
  Phone,
  UserPlus,
} from "lucide-react";
import { useLang } from "@/lib/lang";
import { scrollToId } from "@/lib/scroll";

interface Stat {
  icon: LucideIcon;
  value: string;
  en: string;
  mr: string;
}

const STATS: Stat[] = [
  { icon: Award, value: "5", en: "Transformation Programs", mr: "परिवर्तन कार्यक्रम" },
  { icon: UserPlus, value: "25", en: "Life Skills Taught", mr: "शिकवलेली जीवनकौशल्ये" },
  { icon: CalendarClock, value: "4", en: "Training Locations", mr: "प्रशिक्षण ठिकाणे" },
  { icon: Building2, value: "6 – 19+", en: "Age Group (Years)", mr: "वयोगट (वर्षे)" },
  { icon: BedDouble, value: "30", en: "Day Flagship Program", mr: "दिवसांचा प्रमुख कार्यक्रम" },
  { icon: GraduationCap, value: "6", en: "Trained Mentors", mr: "प्रशिक्षित मार्गदर्शक" },
];

const HEXAGON =
  "[clip-path:polygon(50%_0%,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)]";

export const AcademyHero = ({ started }: { started: boolean }) => {
  const { t, lang } = useLang();

  return (
    <section id="top" data-testid="academy-hero" className="relative">
      <div className="relative flex min-h-[92vh] items-center justify-center overflow-hidden [border-radius:0_0_50%_50%/0_0_110px_110px]">
        <img
          src="/assets/hero-campus.webp"
          alt={t(
            "Aerial view of the Rupantaram campus with blue rooftops surrounded by trees",
            "झाडांनी वेढलेल्या रूपांतरम् परिसराचा हवाई दृश्य — निळी छपरे"
          )}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,70,59,0.55)_0%,rgba(20,52,43,0.62)_45%,rgba(12,32,26,0.85)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_42%,rgba(10,26,21,0.55),transparent_75%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-40 pt-44 text-center sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-sm font-bold uppercase tracking-[0.28em] text-[#f8b183] sm:text-base"
            data-testid="academy-hero-tagline"
          >
            {lang === "mr"
              ? "Life Skills & Personality Transformation Academy"
              : "चला माणूस घडवू या"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-heading text-3xl font-extrabold uppercase leading-tight tracking-wide text-white [text-shadow:0_2px_18px_rgba(8,22,17,0.6)] sm:text-5xl lg:text-[3.6rem]"
            data-testid="academy-hero-title"
          >
            {lang === "mr"
              ? "चला माणूस घडवू या"
              : "Life Skills & Personality Transformation Academy"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.48 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white [text-shadow:0_1px_10px_rgba(8,22,17,0.65)] sm:text-lg"
            data-testid="academy-hero-subtitle"
          >
            {t(
              "Plenty of places prepare children for exams; very few prepare them for life. Garud Zep – Rupantaram builds character, discipline, emotional strength, and career direction — through activity, not lectures.",
              "परीक्षांची तयारी करणारी ठिकाणे बरीच आहेत; पण आयुष्याची तयारी करणारी जागा फार कमी. गरुड झेप – रूपांतरम्मध्ये संस्कार, शिस्त, भावनिक बळकटी आणि करिअरची दिशा उपक्रमांतून घडवली जाते — उपदेशांनी नव्हे."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
          >
            <button
              data-testid="academy-hero-programs-button"
              onClick={() => scrollToId("#programs", -124)}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-9 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#fff] hover:bg-white hover:text-[#18463b] hover:shadow-[0_5px_20px_rgba(0,0,0,0.25)] active:scale-95"
            >
              {t("Explore Programs", "कार्यक्रम पहा")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="academy-hero-call-button"
              href="tel:+919011658888"
              className="group inline-flex items-center gap-3 transition-transform duration-300 hover:-translate-y-[3px] active:scale-95"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a] text-white shadow-[0_0_0_6px_rgba(246,138,74,0.25)] transition-colors duration-300 group-hover:bg-white group-hover:text-[#18463b]">
                <Phone size={18} />
              </span>
              <span className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-white">
                {t("Call Us:", "कॉल करा:")} +91 90116 58888
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6" data-testid="academy-stats-strip">
          {STATS.map((s, i) => (
            <motion.div
              key={s.en}
              initial={{ opacity: 0, y: 30 }}
              animate={started ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`stat-${i + 1}`}
              className="group rounded-2xl border border-[#efece7] bg-white px-4 py-8 text-center shadow-[0_16px_40px_rgba(24,70,59,0.1)] transition-all duration-300 hover:-translate-y-2 hover:border-[#f68a4a]/40"
            >
              <span
                className={`mx-auto flex h-16 w-16 items-center justify-center bg-[#faf4ec] transition-transform duration-300 group-hover:scale-110 ${HEXAGON}`}
              >
                <s.icon size={27} strokeWidth={1.7} className="text-[#a15e2e]" />
              </span>
              <p className="mt-5 font-heading text-3xl font-black text-[#18463b]">{s.value}</p>
              <p className="mt-2 text-sm font-medium leading-snug text-[#7a7a7a]">
                {t(s.en, s.mr)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
