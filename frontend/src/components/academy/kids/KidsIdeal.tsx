import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const TRAITS = [
  "Need confidence in speaking",
  "Struggle with discipline",
  "Spend too much time on mobile devices",
  "Need better study habits",
  "Want to improve communication",
  "Enjoy activity-based learning",
];

export const KidsIdeal = () => {
  return (
    <section data-testid="kids-ideal-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Ideal For"
          title="This Program Is Perfect for Children Who…"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-testid="kids-ideal-checklist">
          {TRAITS.map((t, i) => (
            <Reveal key={t} delay={0.06 * i}>
              <div
                data-testid={`kids-ideal-${i + 1}`}
                className="group flex items-center gap-4 rounded-xl border border-[#e1dfdf] bg-[#fbfafa] px-5 py-4 transition-all duration-300 hover:border-[#f68a4a]/60 hover:bg-white"
              >
                <CheckCircle2
                  size={22}
                  className="shrink-0 text-[#f68a4a] transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-semibold text-[#333] sm:text-base">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
