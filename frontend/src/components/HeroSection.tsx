import type { ReactNode } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download, GraduationCap, Users } from "lucide-react";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG =
  "https://static.prod-images.emergentagent.com/jobs/02ef60ff-e687-423a-b4e6-3c742b985c0b/images/dd769aa382161d14f214bd35278a746e7959b276adbdf0b59787c4c295c2128b.jpeg";

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
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

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
      ref={sectionRef}
      onMouseMove={onMouseMove}
      data-testid="hero-section"
      className="relative overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img src={HERO_IMG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,19,40,0.9)_0%,rgba(7,19,40,0.72)_45%,rgba(7,19,40,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_30%,rgba(230,166,53,0.14),transparent_70%)]" />
      </motion.div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-24 pt-36 sm:px-6 lg:grid-cols-12 lg:px-8 lg:pb-32 lg:pt-44">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#f5c253]/30 bg-[#14305d]/60 px-4 py-2 backdrop-blur-sm"
            data-testid="hero-badge"
          >
            <span className="h-2 w-2 rounded-full bg-[#f5c253] animate-gold-pulse" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#fde68a]">
              3-Day Flagship Program · Ages 13–18
            </span>
          </motion.div>

          <p className="mb-4 font-heading text-sm font-bold uppercase tracking-[0.3em] text-slate-300">
            Rupantaram Presents
          </p>

          <h1 className="font-heading text-5xl font-black leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
            <MaskedLine started={started} delay={0.25}>
              Discover <span className="text-gold-gradient">Yourself.</span>
            </MaskedLine>
            <MaskedLine started={started} delay={0.38}>
              Build Confidence.
            </MaskedLine>
            <MaskedLine started={started} delay={0.51}>
              Create Your <span className="text-gold-gradient">Future.</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={started ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.72 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
            data-testid="hero-subtitle"
          >
            <span className="font-heading font-bold text-white">Youth Transform</span> — a 3-day
            life skills & personality development program that turns teenagers into confident,
            disciplined, purpose-driven young leaders. No lectures. Pure experiential learning.
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
              className="group inline-flex items-center gap-2 rounded-full bg-[#e6a635] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#071328] transition-all duration-300 hover:scale-[1.04] hover:bg-[#f5c253] hover:shadow-[0_10px_36px_rgba(230,166,53,0.4)] active:scale-95"
            >
              Enroll Now
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="hero-brochure-button"
              onClick={() => scrollToId("#program")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#f5c253] hover:text-[#f5c253] active:scale-95"
            >
              <Download size={16} />
              Download Brochure
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={started ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-14 grid max-w-xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
            data-testid="hero-stats"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-3xl font-black text-[#f5c253]">{s.value}</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
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
            <div className="absolute -inset-3 rounded-3xl border border-[#f5c253]/25" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
              <img
                src={HERO_IMG}
                alt="Confident students of the Youth Transform program"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(7,19,40,0.85)_100%)]" />
            </div>

            <motion.div
              style={{ transform: "translateZ(50px)" }}
              className="absolute -left-8 bottom-10 flex items-center gap-3 rounded-xl border border-[#23487a] bg-[#0b1d3a]/90 px-4 py-3 shadow-xl backdrop-blur-md"
              data-testid="hero-float-certificate"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6a635]/15 text-[#f5c253]">
                <GraduationCap size={20} />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold text-white">Day 3 Finale</span>
                <span className="block text-xs text-slate-400">Graduation & Certificate</span>
              </span>
            </motion.div>

            <motion.div
              style={{ transform: "translateZ(40px)" }}
              className="absolute -right-5 top-8 flex items-center gap-3 rounded-xl border border-[#23487a] bg-[#0b1d3a]/90 px-4 py-3 shadow-xl backdrop-blur-md"
              data-testid="hero-float-batch"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b5d3b]/30 text-emerald-300">
                <Users size={20} />
              </span>
              <span>
                <span className="block font-heading text-sm font-bold text-white">Small Batches</span>
                <span className="block text-xs text-slate-400">Personal Mentoring</span>
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
