import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Phone, Users } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG =
  "https://images.unsplash.com/photo-1758270705639-9727f350f026?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

const MaskedLine = ({
  children,
  delay,
  started,
}: {
  children: ReactNode;
  delay: number;
  started: boolean;
}) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className="block"
      initial={{ y: "115%" }}
      animate={started ? { y: 0 } : { y: "115%" }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  </span>
);

export const AcademyHero = ({ started }: { started: boolean }) => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 120, damping: 18 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 120, damping: 18 });

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="top"
      onMouseMove={onMouseMove}
      data-testid="academy-hero"
      className="relative overflow-hidden bg-[#f6f7f0]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(246,138,74,0.14),transparent_70%)]" />
        <div className="absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(24,70,59,0.1),transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-20 pt-40 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-28 lg:pt-48">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f68a4a]/40 bg-white px-4 py-2 shadow-sm"
            data-testid="academy-hero-badge"
          >
            <span className="h-2 w-2 rounded-full bg-[#f68a4a] animate-gold-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e0701f]">
              Life Skills & Personality Transformation Academy
            </span>
          </motion.div>

          <h1 className="font-heading text-5xl font-black leading-[1.02] tracking-tight text-[#18463b] sm:text-6xl lg:text-7xl">
            <MaskedLine started={started} delay={0.25}>
              Chala <span className="text-brand-gradient">Manus</span>
            </MaskedLine>
            <MaskedLine started={started} delay={0.38}>
              Ghadvu Ya.
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-4 font-heading text-xl font-bold text-[#f68a4a] sm:text-2xl"
            data-testid="academy-hero-tagline"
          >
            Let's Build Better Human Beings.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-[#555] sm:text-lg"
            data-testid="academy-hero-subtitle"
          >
            Plenty of places prepare children for exams; very few prepare them for life. Garud Zep
            – Rupantaram builds character, discipline, emotional strength, and career direction —
            through activity, not lectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.86 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="academy-hero-programs-button"
              onClick={() => scrollToId("#programs", -116)}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#18463b] hover:bg-[#18463b] hover:shadow-[0_5px_20px_rgba(0,0,0,0.2)] active:scale-95"
            >
              Explore Programs
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="academy-hero-call-button"
              href="tel:+919860775149"
              className="inline-flex items-center gap-2 rounded-full border border-[#18463b]/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f68a4a] active:scale-95"
            >
              <Phone size={16} />
              +91 98607 75149
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:col-span-5 lg:block" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
            data-testid="academy-hero-image-card"
          >
            <div className="absolute -inset-3 rounded-3xl border border-[#f68a4a]/30" />
            <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf] shadow-[0_30px_70px_rgba(24,70,59,0.18)]">
              <img
                src={HERO_IMG}
                alt="Happy students at a Rupantaram session"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(24,70,59,0.55)_100%)]" />
            </div>

            <motion.div
              style={{ transform: "translateZ(50px)" }}
              className="absolute -left-8 bottom-10 flex items-center gap-3 rounded-xl border border-[#e1dfdf] bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(24,70,59,0.14)] backdrop-blur-md"
              data-testid="academy-hero-float-centers"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f68a4a]/15 text-[#f68a4a]">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold text-[#18463b]">4 Centers</span>
                <span className="block text-xs text-[#7a7a7a]">Karjat · Alibag · Pen · Lonavala</span>
              </span>
            </motion.div>

            <motion.div
              style={{ transform: "translateZ(40px)" }}
              className="absolute -right-5 top-8 flex items-center gap-3 rounded-xl border border-[#e1dfdf] bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(24,70,59,0.14)] backdrop-blur-md"
              data-testid="academy-hero-float-programs"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18463b]/10 text-[#18463b]">
                <Users size={20} />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold text-[#18463b]">Ages 6–19+</span>
                <span className="block text-xs text-[#7a7a7a]">5 Transformation Programs</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
