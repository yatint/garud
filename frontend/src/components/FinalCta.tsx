import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { scrollToId } from "@/lib/scroll";

interface FinalCtaProps {
  onEnroll: () => void;
}

export const FinalCta = ({ onEnroll }: FinalCtaProps) => {
  return (
    <section
      id="register"
      data-testid="final-cta-section"
      className="relative overflow-hidden bg-[#18463b] py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(246,138,74,0.18),transparent_70%)]" />
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f8b183]">
            Limited Seats Per Batch
          </p>
          <h2 className="mt-5 font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Transform <span className="text-brand-gradient">Your Future?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
            Join the next Youth Transform batch and begin your journey toward confidence,
            character, and success. Three days. One turning point.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              data-testid="cta-register-button"
              onClick={onEnroll}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-[#18463b] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] active:scale-95"
            >
              Register Now
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              data-testid="cta-contact-button"
              onClick={() => scrollToId("#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f8b183] active:scale-95"
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
