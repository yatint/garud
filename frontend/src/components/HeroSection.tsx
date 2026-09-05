import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, GraduationCap, Users } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG =
  "https://images.unsplash.com/photo-1774205884995-fb3561261518?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

const STATS = [
  { value: "3", label: "Intensive Days" },
  { value: "13–18", label: "Age Group" },
  { value: "8", label: "Life Outcomes" },
  { value: "100%", label: "Activity-Based" },
];

const MaskedLine = ({
  children,
  delay,
  started,
  className = "",
}: {
  children: ReactNode;
  delay: number;
  started: boolean;
  className?: string;
}) => (
  <span className={`block overflow-hidden pb-1 ${className}`}>
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

interface HeroSectionProps {
  started: boolean;
  onEnroll: () => void;
}

export const HeroSection = ({ started, onEnroll }: HeroSectionProps) => {
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
      data-testid="hero-section"
      className="relative overflow-hidden bg-[#f6f7f0]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(246,138,74,0.14),transparent_70%)]" />
        <div className="absolute -bottom-40 -right-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(24,70,59,0.1),transparent_70%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-32 lg:pt-44">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f68a4a]/40 bg-white px-4 py-2 shadow-sm"
            data-testid="hero-badge"
          >
            <span className="h-2 w-2 rounded-full bg-[#f68a4a] animate-gold-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#e0701f]">
              3-Day Flagship Program · Ages 13–18
            </span>
          </motion.div>

          <p className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.3em] text-[#7a7a7a]">
            Rupantaram Presents
          </p>

          <h1 className="font-heading text-5xl font-black leading-[0.98] tracking-tight text-[#18463b] sm:text-6xl lg:text-7xl">
            <MaskedLine started={started} delay={0.25}>
              Discover <span className="text-brand-gradient">Yourself.</span>
            </MaskedLine>
            <MaskedLine started={started} delay={0.38}>
              Build Confidence.
            </MaskedLine>
            <MaskedLine started={started} delay={0.51}>
              Create Your <span className="text-brand-gradient">Future.</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-[#555] sm:text-lg"
            data-testid="hero-subtitle"
          >
            <span className="font-heading font-bold text-[#18463b]">Youth Transform</span> — a
            3-day life skills & personality development program that turns teenagers into
            confident, disciplined, purpose-driven young leaders. No lectures. Pure experiential
            learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.86 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-enroll-button"
              onClick={onEnroll}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#18463b] hover:bg-[#18463b] hover:shadow-[0_5px_20px_rgba(0,0,0,0.2)] active:scale-95"
            >
              Enroll Now
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="hero-brochure-button"
              onClick={() => scrollToId("#program")}
              className="inline-flex items-center gap-2 rounded-full border border-[#18463b]/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f68a4a] active:scale-95"
            >
              <Download size={16} />
              Download Brochure
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={started ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-[#e1dfdf] pt-8 sm:grid-cols-4"
            data-testid="hero-stats"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-black text-[#18463b]">{s.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#999]">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="hidden lg:col-span-5 lg:block" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
            data-testid="hero-image-card"
          >
            <div className="absolute -inset-3 rounded-3xl border border-[#f68a4a]/30" />
            <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf] shadow-[0_30px_70px_rgba(24,70,59,0.18)]">
              <img
                src={HERO_IMG}
                alt="Confident students of the Youth Transform program"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(24,70,59,0.55)_100%)]" />
            </div>

            <motion.div
              style={{ transform: "translateZ(50px)" }}
              className="absolute -left-8 bottom-10 flex items-center gap-3 rounded-xl border border-[#e1dfdf] bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(24,70,59,0.14)] backdrop-blur-md"
              data-testid="hero-float-certificate"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f68a4a]/15 text-[#f68a4a]">
                <GraduationCap size={20} />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold text-[#18463b]">Day 3 Finale</span>
                <span className="block text-xs text-[#7a7a7a]">Graduation & Certificate</span>
              </span>
            </motion.div>

            <motion.div
              style={{ transform: "translateZ(40px)" }}
              className="absolute -right-5 top-8 flex items-center gap-3 rounded-xl border border-[#e1dfdf] bg-white/95 px-4 py-3 shadow-[0_16px_40px_rgba(24,70,59,0.14)] backdrop-blur-md"
              data-testid="hero-float-batch"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18463b]/10 text-[#18463b]">
                <Users size={20} />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold text-[#18463b]">Small Batches</span>
                <span className="block text-xs text-[#7a7a7a]">Personal Mentoring</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
