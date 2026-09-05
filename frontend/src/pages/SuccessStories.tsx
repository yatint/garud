import { useCallback, useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { SlimNavbar } from "@/components/academy/SlimNavbar";
import { SuccessHero } from "@/components/academy/success/SuccessHero";
import { SuccessStoriesGrid } from "@/components/academy/success/SuccessStoriesGrid";
import { SuccessBeforeAfter } from "@/components/academy/success/SuccessBeforeAfter";
import { SuccessGalleryMoments } from "@/components/academy/success/SuccessGalleryMoments";
import { ShareStory } from "@/components/academy/success/ShareStory";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function SuccessStories() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document.title = "Success Stories | Rupantaram Life Skills Academy";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Explore inspiring transformation journeys from students and parents who have experienced Rupantaram's life skills and personality development programs."
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
        <SuccessHero onEnquire={openEnquiry} />
        <SuccessStoriesGrid />
        <SuccessBeforeAfter />
        <SuccessGalleryMoments />
        <ShareStory onEnquire={openEnquiry} />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
