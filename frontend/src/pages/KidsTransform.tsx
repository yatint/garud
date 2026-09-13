import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { KidsHero } from "@/components/academy/kids/KidsHero";
import { KidsAbout } from "@/components/academy/kids/KidsAbout";
import { KidsLearn } from "@/components/academy/kids/KidsLearn";
import { KidsJourney } from "@/components/academy/kids/KidsJourney";
import { KidsMethod } from "@/components/academy/kids/KidsMethod";
import { KidsBenefits } from "@/components/academy/kids/KidsBenefits";
import { KidsIdeal } from "@/components/academy/kids/KidsIdeal";
import { KidsCertificate } from "@/components/academy/kids/KidsCertificate";
import { KidsTestimonials } from "@/components/academy/kids/KidsTestimonials";
import { KidsCta } from "@/components/academy/kids/KidsCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function KidsTransform() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Kids Transform is a 3-day life skills and personality development program for children aged 6–13, focusing on confidence, discipline, communication, values, and positive habits through practical learning."
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
        <KidsHero onEnroll={openEnquiry} />
        <KidsAbout />
        <KidsLearn />
        <KidsJourney />
        <KidsMethod />
        <KidsBenefits />
        <KidsIdeal />
        <KidsCertificate />
        <KidsTestimonials />
        <KidsCta onEnroll={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
