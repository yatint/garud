import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { YoungHero } from "@/components/academy/young/YoungHero";
import { YoungAbout } from "@/components/academy/young/YoungAbout";
import { YoungDevelop } from "@/components/academy/young/YoungDevelop";
import { YoungJourney } from "@/components/academy/young/YoungJourney";
import { YoungIdeal } from "@/components/academy/young/YoungIdeal";
import { YoungExperience } from "@/components/academy/young/YoungExperience";
import { YoungWhyOutcomes } from "@/components/academy/young/YoungWhyOutcomes";
import { YoungCertificate } from "@/components/academy/young/YoungCertificate";
import { YoungCta } from "@/components/academy/young/YoungCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function YoungAdultTransform() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Young Adult Transform is a 3-day personality and life skills program for individuals aged 19+, focusing on leadership, communication, career direction, emotional maturity, and responsible living."
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
        <YoungHero onEnroll={openEnquiry} />
        <YoungAbout />
        <YoungDevelop />
        <YoungJourney />
        <YoungIdeal />
        <YoungExperience />
        <YoungWhyOutcomes />
        <YoungCertificate />
        <YoungCta onEnroll={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
