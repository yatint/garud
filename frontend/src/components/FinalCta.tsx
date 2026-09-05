import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { scrollToId } from "@/lib/scroll";

const CTA_BG =
  "https://static.prod-images.emergentagent.com/jobs/02ef60ff-e687-423a-b4e6-3c742b985c0b/images/6a6c5e8b8c94dd5eb0bba1c2a0c5c2b0e455bce680f94b7c3b22a97b4aa447b8.jpeg";

interface FinalCtaProps {
  onEnroll: () => void;
}

export const FinalCta = ({ onEnroll }: FinalCtaProps) => {
  return (
    <section id="register" data-testid="final-cta-section" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <img src={CTA_BG} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_50%_40%,rgba(10,26,51,0.55),rgba(7,19,40,0.96)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f5c253]">
            Limited Seats Per Batch
          </p>
          <h2 className="mt-5 font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Transform <span className="text-gold-gradient">Your Future?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Join the next Youth Transform batch and begin your journey toward confidence,
            character, and success. Three days. One turning point.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              data-testid="cta-register-button"
              onClick={onEnroll}
              className="group inline-flex items-center gap-2 rounded-full bg-[#e6a635] px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#071328] transition-all duration-300 hover:scale-[1.04] hover:bg-[#f5c253] hover:shadow-[0_10px_40px_rgba(230,166,53,0.45)] active:scale-95"
            >
              Register Now
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="cta-contact-button"
              onClick={() => scrollToId("#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-[#f5c253] hover:text-[#f5c253] active:scale-95"
            >
              <Phone size={16} />
              Contact Us
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
