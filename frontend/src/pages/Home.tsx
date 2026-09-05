import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { EditorialMarquee } from "@/components/EditorialMarquee";
import { AboutProgram } from "@/components/AboutProgram";
import { OutcomesGrid } from "@/components/OutcomesGrid";
import { WhoShouldJoin } from "@/components/WhoShouldJoin";
import { TimelineJourney } from "@/components/TimelineJourney";
import { LearningMethods } from "@/components/LearningMethods";
import { BenefitsList } from "@/components/BenefitsList";
import { FaqAccordion } from "@/components/FaqAccordion";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { EnrollDialog } from "@/components/EnrollDialog";
import { destroyLenis, initLenis, startLenis, stopLenis } from "@/lib/scroll";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [enrollOpen, setEnrollOpen] = useState(false);

  useEffect(() => {
    const lenis = initLenis();
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    if (loading) {
      stopLenis();
      document.body.style.overflow = "hidden";
    } else {
      startLenis();
      document.body.style.overflow = "";
    }
  }, [loading]);

  const finishLoading = useCallback(() => setLoading(false), []);
  const openEnroll = useCallback(() => setEnrollOpen(true), []);

  return (
    <div className="min-h-screen bg-[#071328] font-sans text-white">
      <div className="grain-overlay" />
      <AnimatePresence>{loading && <Preloader onDone={finishLoading} />}</AnimatePresence>

      <Navbar onEnroll={openEnroll} />
      <main>
        <HeroSection started={!loading} onEnroll={openEnroll} />
        <EditorialMarquee />
        <AboutProgram />
        <OutcomesGrid />
        <WhoShouldJoin />
        <TimelineJourney />
        <LearningMethods />
        <BenefitsList />
        <FaqAccordion />
        <FinalCta onEnroll={openEnroll} />
      </main>
      <Footer />

      <EnrollDialog open={enrollOpen} onOpenChange={setEnrollOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
