import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import { AcademyNavbar } from "@/components/academy/AcademyNavbar";
import { ContactHero } from "@/components/academy/contact/ContactHero";
import { ContactInfoForm } from "@/components/academy/contact/ContactInfoForm";
import { ContactLocations } from "@/components/academy/contact/ContactLocations";
import { ContactWhyFaqCta } from "@/components/academy/contact/ContactWhyFaqCta";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { useState, useCallback } from "react";
import { destroyLenis, initLenis } from "@/lib/scroll";

export default function Contact() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        "Contact Rupantaram for admissions, Parenting 360°, Kids Transform, Youth Transform, Young Adult Transform, and 30-Day Transformation programs across Karjat, Alibag, Pen, and Lonavala."
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
      <AcademyNavbar onEnquire={openEnquiry} />
      <main>
        <ContactHero />
        <ContactInfoForm />
        <ContactLocations />
        <ContactWhyFaqCta />
      </main>
      <AcademyFooter />
      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
