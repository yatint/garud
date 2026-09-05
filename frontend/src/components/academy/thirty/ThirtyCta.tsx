import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface ThirtyCtaProps {
  onEnroll: () => void;
}

export const ThirtyCta = ({ onEnroll }: ThirtyCtaProps) => {
  return (
    <section data-testid="thirty-final-cta" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-heading text-3xl font-black tracking-tight text-[#18463b] sm:text-4xl lg:text-5xl">
            Your Best Version Starts with <span className="text-brand-gradient">One Decision</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#7a7a7a] sm:text-lg">
            Commit to 30 days of guided transformation and begin a lifelong journey of discipline,
            character, confidence, and meaningful growth.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              data-testid="thirty-cta-register-button"
              onClick={onEnroll}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#18463b] hover:bg-[#18463b] hover:shadow-[0_5px_20px_rgba(0,0,0,0.2)] active:scale-95"
            >
              Register Now
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="thirty-cta-contact-button"
              href="tel:+919011658888"
              className="inline-flex items-center gap-2 rounded-full border border-[#18463b]/25 px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f68a4a] active:scale-95"
            >
              <Phone size={16} />
              Contact Our Team
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
