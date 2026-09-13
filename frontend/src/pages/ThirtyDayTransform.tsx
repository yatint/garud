import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { ThirtyHero } from "@/components/academy/thirty/ThirtyHero";
import { ThirtyAboutWhy } from "@/components/academy/thirty/ThirtyAboutWhy";
import { ThirtyObjectives } from "@/components/academy/thirty/ThirtyObjectives";
import { ThirtyComponents } from "@/components/academy/thirty/ThirtyComponents";
import { ThirtyJourney } from "@/components/academy/thirty/ThirtyJourney";
import { ThirtyFeatures } from "@/components/academy/thirty/ThirtyFeatures";
import { ThirtyIdeal } from "@/components/academy/thirty/ThirtyIdeal";
import { ThirtyBenefits } from "@/components/academy/thirty/ThirtyBenefits";
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
        "30-Day Transform (३० दिवसांचा रूपांतर) is Rupantaram's flagship 30-day life-transformation program for students, youth, and families — daily guided actions, habit building, mindset, leadership, and family involvement."
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
        <ThirtyObjectives />
        <ThirtyComponents />
        <ThirtyJourney />
        <ThirtyFeatures />
        <ThirtyIdeal />
        <ThirtyBenefits />
        <ThirtyCta onEnroll={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
