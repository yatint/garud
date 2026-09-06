import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { ThirtyHero } from "@/components/academy/thirty/ThirtyHero";
import { ThirtyAboutWhy } from "@/components/academy/thirty/ThirtyAboutWhy";
import { ThirtyJourney } from "@/components/academy/thirty/ThirtyJourney";
import { ThirtyDailyCore } from "@/components/academy/thirty/ThirtyDailyCore";
import { ThirtyExperienceOutcomes } from "@/components/academy/thirty/ThirtyExperienceOutcomes";
import { ThirtyCta } from "@/components/academy/thirty/ThirtyCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function ThirtyDayTransform() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Join Rupantaram's flagship 30-Day Transform Program and build lifelong habits through daily activities, mentorship, leadership, communication, discipline, and personal growth."
      );
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

  const openEnquiry = useCallback(() => setEnquiryOpen(true), []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <div className="grain-overlay" />
      <SlimNavbar onEnquire={openEnquiry} />
      <main>
        <ThirtyHero onEnroll={openEnquiry} />
        <ThirtyAboutWhy />
        <ThirtyJourney />
        <ThirtyDailyCore />
        <ThirtyExperienceOutcomes />
        <ThirtyCta onEnroll={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
