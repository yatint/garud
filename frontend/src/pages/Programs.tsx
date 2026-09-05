import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { ProgramsHero } from "@/components/academy/programs/ProgramsHero";
import { ProgramsGrid } from "@/components/academy/programs/ProgramsGrid";
import { ProgramFinder } from "@/components/academy/programs/ProgramFinder";
import { DevelopsGrid } from "@/components/academy/programs/DevelopsGrid";
import { ExperienceGrid } from "@/components/academy/programs/ExperienceGrid";
import { ProgramsLocations } from "@/components/academy/programs/ProgramsLocations";
import { ProgramsCta } from "@/components/academy/programs/ProgramsCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function Programs() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document.title = "Our Programs | Rupantaram Life Skills Academy";
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
        <ProgramsHero />
        <ProgramsGrid onEnquire={openEnquiry} />
        <ProgramFinder />
        <DevelopsGrid />
        <ExperienceGrid />
        <ProgramsLocations />
        <ProgramsCta onEnquire={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
