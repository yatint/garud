import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface LifeWhyCtaProps {
  onEnquire: () => void;
}

export const LifeWhyCta = ({ onEnquire }: LifeWhyCtaProps) => {
  return (
    <>
      <section
        data-testid="life-why-section"
        className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">
              Why These Skills Matter
            </p>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Preparing People for Life, <span className="text-brand-gradient">Not Just Examinations</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Rupantaram develops individuals who are capable of making responsible decisions,
              building healthy relationships, leading with integrity, and contributing positively
              to society.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="life-final-cta" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-black tracking-tight text-[#18463b] sm:text-4xl lg:text-5xl">
              Start Building Skills That <span className="text-brand-gradient">Last a Lifetime</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#7a7a7a] sm:text-lg">
              Join Rupantaram and begin your journey toward confidence, discipline, leadership, and
              meaningful personal growth through our structured transformation programs.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                data-testid="life-cta-join-button"
                onClick={onEnquire}
                className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#18463b] hover:bg-[#18463b] hover:shadow-[0_5px_20px_rgba(0,0,0,0.2)] active:scale-95"
              >
                Join a Program
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                data-testid="life-cta-contact-button"
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
    </>
  );
};
