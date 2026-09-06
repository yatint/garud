import { AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Preloader } from "@/components/Preloader";
import { EditorialMarquee } from "@/components/EditorialMarquee";
import { AcademyNavbar } from "@/components/academy/AcademyNavbar";
import { AcademyHero } from "@/components/academy/AcademyHero";
import { AcademyAbout } from "@/components/academy/AcademyAbout";
import { AcademySkills } from "@/components/academy/AcademySkills";
import { AcademyFounder } from "@/components/academy/AcademyFounder";
import { AcademyStories } from "@/components/academy/AcademyStories";
import { AcademyPrograms } from "@/components/academy/AcademyPrograms";
import { AcademyMethod } from "@/components/academy/AcademyMethod";
import { AcademyJourney } from "@/components/academy/AcademyJourney";
import { AcademyWhyParents } from "@/components/academy/AcademyWhyParents";
import { AcademyCenters } from "@/components/academy/AcademyCenters";
import { AcademyFaq } from "@/components/academy/AcademyFaq";
import { AcademyCta } from "@/components/academy/AcademyCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis, startLenis, stopLenis } from "@/lib/scroll";
import { useLang } from "@/lib/lang";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const { t } = useLang();

  const PILLARS = [
    t("Thought Transformation", "विचारांचे रूपांतर"),
    t("Habit Transformation", "सवयींचे रूपांतर"),
    t("Character & Values", "चारित्र्य व मूल्ये"),
    t("Leadership & Service", "नेतृत्व व सेवा"),
    t("Purposeful Living", "सुध्येय जीवन"),
  ];

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
  const openEnquiry = useCallback(() => setEnquiryOpen(true), []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <div className="grain-overlay" />
      <AnimatePresence>{loading && <Preloader onDone={finishLoading} />}</AnimatePresence>

      <AcademyNavbar onEnquire={openEnquiry} />
      <main>
        <AcademyHero started={!loading} />
        <EditorialMarquee items={PILLARS} />
        <AcademyAbout />
        <AcademySkills />
        <AcademyFounder />
        <AcademyStories />
        <AcademyPrograms onEnquire={openEnquiry} />
        <AcademyMethod />
        <AcademyJourney />
        <AcademyWhyParents />
        <AcademyCenters onEnquire={openEnquiry} />
        <AcademyFaq />
        <AcademyCta onEnquire={openEnquiry} />
      </main>
      <AcademyFooter />

      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
