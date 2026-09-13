import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { YouthHero } from "@/components/academy/youth/YouthHero";
import { YouthAbout } from "@/components/academy/youth/YouthAbout";
import { YouthObjectives } from "@/components/academy/youth/YouthObjectives";
import { YouthComponents } from "@/components/academy/youth/YouthComponents";
import { YouthJourney } from "@/components/academy/youth/YouthJourney";
import { YouthFeatures } from "@/components/academy/youth/YouthFeatures";
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
        "Youth Transform (किशोर रूपांतर) is a special 3-day life skills development program for teenagers aged 13–18, building confidence, discipline, emotional intelligence, leadership, and a clear direction for life."
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
        <YouthObjectives />
        <YouthComponents />
        <YouthJourney />
        <YouthFeatures />
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
