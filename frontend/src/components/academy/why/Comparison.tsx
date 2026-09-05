import { Check, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ROWS = [
  { ordinary: "Focus on marks", rupantaram: "Focus on life skills & personality" },
  { ordinary: "One-way teaching", rupantaram: "Interactive workshops & activities" },
  { ordinary: "Limited communication training", rupantaram: "Public speaking & confidence building" },
  { ordinary: "No parent involvement", rupantaram: "Dedicated Parenting 360° program" },
  { ordinary: "Academic pressure", rupantaram: "Emotional balance & mental resilience" },
  { ordinary: "Theory based", rupantaram: "Practical implementation in daily life" },
];

export const Comparison = () => {
  return (
    <section data-testid="why-comparison-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="The Rupantaram Difference"
          title="Not a Coaching Class. A Transformation Academy."
          align="center"
        />

        <Reveal delay={0.1}>
          <div
            className="mt-14 overflow-hidden rounded-2xl border border-[#e1dfdf] shadow-[0_20px_50px_rgba(24,70,59,0.08)]"
            data-testid="comparison-table"
          >
            <div className="grid grid-cols-2">
              <div className="bg-[#fbfafa] px-6 py-5 text-center">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-[#999]">
                  Ordinary Coaching
                </p>
              </div>
              <div className="bg-[#18463b] px-6 py-5 text-center">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-[#f8b183]">
                  Rupantaram
                </p>
              </div>
            </div>

            {ROWS.map((r, i) => (
              <div
                key={r.ordinary}
                data-testid={`comparison-row-${i + 1}`}
                className={`grid grid-cols-2 ${i % 2 === 0 ? "" : "bg-[#fdfdfb]"}`}
              >
                <div className="flex items-center gap-3 border-t border-[#e1dfdf] px-5 py-5 sm:px-7">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f1f1ef] text-[#aaa]">
                    <X size={14} strokeWidth={3} />
                  </span>
                  <p className="text-sm font-medium text-[#7a7a7a] sm:text-base">{r.ordinary}</p>
                </div>
                <div className="flex items-center gap-3 border-l border-t border-[#0b5d3b] bg-[#18463b] px-5 py-5 sm:px-7">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f68a4a] text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="text-sm font-semibold text-white sm:text-base">{r.rupantaram}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
