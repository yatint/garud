import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const FOUNDER_IMG =
  "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900";

export const AcademyFounder = () => {
  return (
    <section data-testid="academy-founder-section" className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-3 rounded-full border border-[#f68a4a]/40" />
              <img
                src={FOUNDER_IMG}
                alt="Founder of Garud Zep Rupantaram"
                className="aspect-square w-full rounded-full border-4 border-white/10 object-cover"
                data-testid="founder-portrait"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-4">
                <span className="font-heading text-sm font-black tracking-[0.2em] text-[#f68a4a]">03</span>
                <span className="h-px w-12 bg-[#f68a4a]/60" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">
                  Founder's Note
                </span>
              </div>
              <Quote size={36} className="mt-8 text-[#f68a4a]" />
              <blockquote className="mt-6 font-heading text-2xl font-bold leading-snug text-white sm:text-3xl" data-testid="founder-quote">
                "Children have plenty of information — but no one has taught them the language of
                speaking to themselves. Garud Zep – Rupantaram exists to fill exactly that gap."
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                Our measure is not a report card. Does the child start talking to their parents
                again after returning home? Do they follow the routine they decided for themselves?
                When they make a mistake, do they admit it instead of hiding it? Those are our real
                results.
              </p>
              <p className="mt-8 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f8b183]">
                Founder, Garud Zep – Rupantaram
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
