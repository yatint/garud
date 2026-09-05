import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { LifeHero } from "@/components/academy/life/LifeHero";
import { LifeCategories } from "@/components/academy/life/LifeCategories";
import { LifeMethodTableJourney } from "@/components/academy/life/LifeMethodTableJourney";
import { LifeWhyCta } from "@/components/academy/life/LifeWhyCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { destroyLenis, initLenis } from "@/lib/scroll";

const LifeIntro = () => (
  <section data-testid="life-intro-section" className="bg-white pb-4 pt-20 lg:pt-28">
    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
      <SectionHeading
        index="01"
        eyebrow="Introduction"
        title="Why Life Skills Matter"
        align="center"
      />
      <Reveal delay={0.1}>
        <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
          Success in life is not determined only by academic knowledge. The ability to communicate,
          make wise decisions, manage emotions, lead others, respect relationships, and live with
          discipline creates lifelong success.
        </p>
        <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
          At Rupantaram, every program is built around practical life skills that participants apply
          in their daily lives through activities, mentorship, reflection, and habit formation.
        </p>
      </Reveal>
    </div>
  </section>
);

export default function LifeSkills() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document.title = "21 Life Skills | Rupantaram Life Skills Academy";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Discover the 21 life skills taught at Rupantaram, including leadership, communication, emotional intelligence, discipline, decision making, financial awareness, and responsible living."
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
        <LifeHero onEnquire={openEnquiry} />
        <LifeIntro />
        <LifeCategories />
        <LifeMethodTableJourney />
        <LifeWhyCta onEnquire={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
