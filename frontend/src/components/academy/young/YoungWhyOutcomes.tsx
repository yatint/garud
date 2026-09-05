import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const OUTCOMES = [
  "Greater self-confidence",
  "Clear personal goals",
  "Better communication",
  "Leadership mindset",
  "Stronger emotional balance",
  "Practical life skills",
  "Improved discipline",
  "Future-ready personality",
];

export const YoungWhyOutcomes = () => {
  return (
    <>
      <section
        data-testid="young-why-section"
        className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">
              Why This Program Matters
            </p>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              The Skills That Schools <span className="text-brand-gradient">Rarely Teach</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              Success in adulthood depends on communication, emotional balance, leadership,
              discipline, responsible decision making, and lifelong learning — not academic
              knowledge alone. Young Adult Transform trains exactly those muscles.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="young-outcomes-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0701f]">Outcomes</p>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-[#18463b] sm:text-4xl lg:text-5xl">
              Participants Leave With
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o} delay={(i % 4) * 0.06}>
                <div
                  data-testid={`young-outcome-${i + 1}`}
                  className="group flex items-center gap-3 rounded-xl border border-[#e1dfdf] bg-[#fbfafa] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#f68a4a]/60 hover:bg-white"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#f68a4a] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-sm font-semibold text-[#333]">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
