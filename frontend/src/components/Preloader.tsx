import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/lang";

interface PreloaderProps {
  onDone: () => void;
}

export const Preloader = ({ onDone }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const { t } = useLang();

  useEffect(() => {
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (time: number) => {
      const p = Math.min(100, Math.round(((time - start) / duration) * 100));
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[linear-gradient(135deg,#18463b_0%,#0b5d3b_100%)]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center px-6 text-center"
      >
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 font-heading text-3xl font-black text-[#f8b183]">
          R
        </div>
        <p className="font-heading text-xs font-bold uppercase tracking-[0.35em] text-white/80">
          Garud Zep Rupantaram
        </p>
        <h1 className="mt-3 font-heading text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
          {t("Rupantaram", "रूपांतरम्")}
        </h1>
        <p className="mt-2 text-sm font-semibold text-white/70">
          {t(
            "Chala Manus Ghadvu Ya — Let's Build Better Human Beings",
            "चला माणूस घडवू या — चांगली माणसे घडवूया"
          )}
        </p>
      </motion.div>

      <div className="mt-12 w-64 max-w-[80vw]">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/20">
          <div
            data-testid="preloader-progress-bar"
            className="h-full rounded-full bg-[#f68a4a] transition-[width] duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex items-center justify-between font-heading text-xs font-bold uppercase tracking-[0.25em] text-white">
          <span>{t("Loading Experience", "लोड होत आहे")}</span>
          <span data-testid="preloader-progress-text">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
