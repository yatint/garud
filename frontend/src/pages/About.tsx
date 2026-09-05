import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { AboutHero } from "@/components/academy/about/AboutHero";
import { WhoWeAre } from "@/components/academy/about/WhoWeAre";
import { Difference } from "@/components/academy/about/Difference";
import { CoreValues } from "@/components/academy/about/CoreValues";
import { AboutPrograms } from "@/components/academy/about/AboutPrograms";
import { MethodCounters } from "@/components/academy/about/MethodCounters";
import { CommunityLocations } from "@/components/academy/about/CommunityLocations";
import { AboutCta } from "@/components/academy/about/AboutCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function About() {
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
      <SlimNavbar onEnquire={openEnquiry} />
      <main>
        <AboutHero />
        <WhoWeAre />
        <Difference />
        <CoreValues />
        <AboutPrograms onEnquire={openEnquiry} />
        <MethodCounters />
        <CommunityLocations />
        <AboutCta onEnquire={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
