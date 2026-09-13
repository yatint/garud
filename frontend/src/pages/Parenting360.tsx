import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { ParentingHero } from "@/components/academy/parenting/ParentingHero";
import { ParentingAbout } from "@/components/academy/parenting/ParentingAbout";
import { ParentingObjectives } from "@/components/academy/parenting/ParentingObjectives";
import { ParentingComponents } from "@/components/academy/parenting/ParentingComponents";
import { ParentingStructure } from "@/components/academy/parenting/ParentingStructure";
import { ParentingIdeal } from "@/components/academy/parenting/ParentingIdeal";
import { ParentingFeatures } from "@/components/academy/parenting/ParentingFeatures";
import { ParentingBenefits } from "@/components/academy/parenting/ParentingBenefits";
import { ParentingCta } from "@/components/academy/parenting/ParentingCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function Parenting360() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Parenting 360° (पालकत्व 360°) is an effective one-day, 4-hour workshop for parents — covering child psychology, effective communication, emotional bonding, positive parenting, and digital parenting."
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
        <ParentingHero onEnroll={openEnquiry} />
        <ParentingAbout />
        <ParentingObjectives />
        <ParentingComponents />
        <ParentingStructure />
        <ParentingIdeal />
        <ParentingFeatures />
        <ParentingBenefits />
        <ParentingCta onEnroll={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
