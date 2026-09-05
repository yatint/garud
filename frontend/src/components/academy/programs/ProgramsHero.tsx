import { motion } from "framer-motion";
import { Compass, Phone } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG =
  "https://images.unsplash.com/photo-1659352787906-f809a3b9e86e?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600";

export const ProgramsHero = () => {
  return (
    <section id="top" data-testid="programs-hero" className="relative">
      <div className="relative flex min-h-[72vh] items-center justify-center overflow-hidden [border-radius:0_0_50%_50%/0_0_72px_72px]">
        <img
          src={HERO_IMG}
          alt="Children, parents, and mentors together"
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
              Our Programs
            </span>
            <span className="h-px w-10 bg-[#f68a4a]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-[3.4rem]"
            data-testid="programs-hero-title"
          >
            Every Age Has a <span className="text-brand-gradient">Different Journey</span> of
            Transformation
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            data-testid="programs-hero-subtitle"
          >
            Rupantaram offers age-specific life skills and personality development programs
            designed to build confidence, discipline, leadership, emotional intelligence, and
            strong values.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              data-testid="programs-hero-find-button"
              onClick={() => scrollToId("#program-finder", -88)}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-[#18463b] active:scale-95"
            >
              <Compass size={16} />
              Find Your Program
            </button>
            <a
              data-testid="programs-hero-contact-button"
              href="tel:+919860775149"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f8b183] active:scale-95"
            >
              <Phone size={16} />
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
