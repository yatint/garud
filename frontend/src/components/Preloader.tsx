import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface PreloaderProps {
  onDone: () => void;
}

export const Preloader = ({ onDone }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, Math.round(((t - start) / duration) * 100));
      setProgress(p);
      if (p < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(onDone, 300);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      data-testid="preloader"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[linear-gradient(135deg,#c8102e_0%,#f0a500_100%)]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center px-6 text-center"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1b2a4a] font-heading text-3xl font-black text-[#f5c253]">
          R
        </div>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-[#1b2a4a]/80">
          Garud Zep Rupantaram
        </p>
        <h1 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight text-[#1b2a4a] sm:text-5xl">
          Youth Transform
        </h1>
        <p className="mt-2 text-sm font-semibold text-[#1b2a4a]/70">
          Chala Manus Ghadvu Ya — Let's Build Better Human Beings
        </p>
      </motion.div>

      <div className="mt-12 w-64 max-w-[80vw]">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-[#1b2a4a]/20">
          <div
            data-testid="preloader-progress-bar"
            className="h-full rounded-full bg-[#1b2a4a] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between font-heading text-xs font-bold uppercase tracking-[0.25em] text-[#1b2a4a]">
          <span>Loading Experience</span>
          <span data-testid="preloader-progress-text">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
