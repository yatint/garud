import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, CalendarClock, GraduationCap, Phone, UserPlus, Users } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

interface Stat {
  icon: LucideIcon;
  value: string;
  label: string;
}

const STATS: Stat[] = [
  { icon: Award, value: "5", label: "Transformation Programs" },
  { icon: UserPlus, value: "25", label: "Life Skills Taught" },
  { icon: Building2, value: "4", label: "Training Locations" },
  { icon: Users, value: "6 – 19+", label: "Age Group (Years)" },
  { icon: CalendarClock, value: "30", label: "Day Flagship Program" },
  { icon: GraduationCap, value: "6", label: "Trained Mentors" },
];

export const AcademyHero = ({ started }: { started: boolean }) => {
  return (
    <section id="top" data-testid="academy-hero" className="relative">
      <div className="relative flex min-h-[88vh] items-center justify-center overflow-hidden">
        <img
          src="/assets/hero-banner.webp"
          alt="Rupantaram training campus surrounded by greenery"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,70,59,0.5)_0%,rgba(24,70,59,0.68)_55%,rgba(24,70,59,0.8)_100%)]" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 pb-32 pt-44 text-center sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-mukta text-2xl font-bold text-white sm:text-3xl"
            data-testid="academy-hero-marathi-tagline"
          >
            चला माणूस घडवू या
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 font-heading text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-[3.6rem]"
            data-testid="academy-hero-title"
          >
            Life Skills &amp; Personality Transformation Academy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-5"
          >
            <button
              data-testid="academy-hero-programs-button"
              onClick={() => scrollToId("#programs", -124)}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-9 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#fff] hover:bg-white hover:text-[#18463b] hover:shadow-[0_5px_20px_rgba(0,0,0,0.25)] active:scale-95"
            >
              Explore Programs
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="academy-hero-call-button"
              href="tel:+919860775149"
              className="group inline-flex items-center gap-3 transition-transform duration-300 hover:-translate-y-[3px] active:scale-95"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a] text-white shadow-[0_0_0_6px_rgba(246,138,74,0.25)] transition-colors duration-300 group-hover:bg-white group-hover:text-[#18463b]">
                <Phone size={18} />
              </span>
              <span className="font-heading text-sm font-bold uppercase tracking-[0.12em] text-white">
                Call Us: +91 98607 75149
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="relative z-20 mx-auto -mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-testid="academy-stats-strip">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={started ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`stat-${i + 1}`}
              className="rounded-xl border border-[#e1dfdf] bg-white px-4 py-7 text-center shadow-[0_18px_44px_rgba(24,70,59,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-[#f68a4a]/50"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#fdf1e7] text-[#f68a4a]">
                <s.icon size={26} />
              </span>
              <p className="mt-4 font-heading text-3xl font-black text-[#18463b]">{s.value}</p>
              <p className="mt-1.5 text-xs font-semibold leading-snug text-[#7a7a7a]">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
