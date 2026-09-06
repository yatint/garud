import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { YouthHero } from "@/components/academy/youth/YouthHero";
import { YouthAbout } from "@/components/academy/youth/YouthAbout";
import { YouthOutcomes } from "@/components/academy/youth/YouthOutcomes";
import { YouthJourney } from "@/components/academy/youth/YouthJourney";
import { YouthMethod } from "@/components/academy/youth/YouthMethod";
import { YouthIdeal } from "@/components/academy/youth/YouthIdeal";
import { YouthBenefits } from "@/components/academy/youth/YouthBenefits";
import { YouthCertificate } from "@/components/academy/youth/YouthCertificate";
import { YouthTestimonials } from "@/components/academy/youth/YouthTestimonials";
import { YouthFaq } from "@/components/academy/youth/YouthFaq";
import { YouthCta } from "@/components/academy/youth/YouthCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function YouthTransform() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Youth Transform is a 3-day life skills and personality transformation program for teenagers aged 13–18, building confidence, discipline, leadership, emotional intelligence, and career direction."
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
        <YouthHero onEnroll={openEnquiry} />
        <YouthAbout />
        <YouthOutcomes />
        <YouthJourney />
        <YouthMethod />
        <YouthIdeal />
        <YouthBenefits />
        <YouthCertificate />
        <YouthTestimonials />
        <YouthFaq />
        <YouthCta onEnroll={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
