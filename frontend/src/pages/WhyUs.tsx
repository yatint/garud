import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { AcademyNavbar } from "@/components/academy/AcademyNavbar";
import { WhyHero } from "@/components/academy/why/WhyHero";
import { Philosophy } from "@/components/academy/why/Philosophy";
import { TrustFeatures } from "@/components/academy/why/TrustFeatures";
import { Comparison } from "@/components/academy/why/Comparison";
import { SkillsGrid } from "@/components/academy/why/SkillsGrid";
import { MethodSteps } from "@/components/academy/why/MethodSteps";
import { Outcomes } from "@/components/academy/why/Outcomes";
import { PromiseCta } from "@/components/academy/why/PromiseCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function WhyUs() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

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

  const openEnquiry = useCallback(() => setEnquiryOpen(true), []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <div className="grain-overlay" />
      <AcademyNavbar onEnquire={openEnquiry} />
      <main>
        <WhyHero onEnquire={openEnquiry} />
        <Philosophy />
        <TrustFeatures />
        <Comparison />
        <SkillsGrid />
        <MethodSteps />
        <Outcomes />
        <PromiseCta onEnquire={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
