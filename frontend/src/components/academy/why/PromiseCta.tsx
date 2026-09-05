import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";

interface PromiseCtaProps {
  onEnquire: () => void;
}

export const PromiseCta = ({ onEnquire }: PromiseCtaProps) => {
  return (
    <>
      <section data-testid="why-promise-section" className="relative overflow-hidden bg-[#18463b] py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(246,138,74,0.16),transparent_70%)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#f8b183]">
              Our Core Promise
            </p>
            <p
              className="mt-7 font-heading text-3xl font-black leading-snug tracking-tight text-white sm:text-4xl lg:text-[2.8rem]"
              data-testid="promise-statement"
            >
              We don't promise instant success. We promise{" "}
              <span className="text-brand-gradient">lifelong transformation</span> through
              discipline, values, self-awareness and continuous growth.
            </p>
            <div className="mx-auto mt-9 h-1 w-20 rounded-full bg-[#f68a4a]" />
          </Reveal>
        </div>
      </section>

      <section data-testid="why-final-cta" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-3xl font-black tracking-tight text-[#18463b] sm:text-4xl lg:text-5xl">
              Ready to Begin Your <span className="text-brand-gradient">Transformation?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#7a7a7a] sm:text-lg">
              Join one of our structured life skills programs and take the first step toward a
              confident, responsible and successful future.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <button
                data-testid="why-cta-join-button"
                onClick={onEnquire}
                className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#18463b] hover:bg-[#18463b] hover:shadow-[0_5px_20px_rgba(0,0,0,0.2)] active:scale-95"
              >
                Join Rupantaram
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <a
                data-testid="why-cta-contact-button"
                href="tel:+919860775149"
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
