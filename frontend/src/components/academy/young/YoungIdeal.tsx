import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const TRAITS = [
  "College students",
  "Fresh graduates",
  "Young professionals",
  "Students preparing for their careers",
  "Individuals seeking confidence and direction",
  "Anyone wanting stronger leadership and communication skills",
];

export const YoungIdeal = () => {
  return (
    <section data-testid="young-ideal-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Who Should Join?"
          title="Ideal For"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-testid="young-ideal-checklist">
          {TRAITS.map((t, i) => (
            <Reveal key={t} delay={0.06 * i}>
              <div
                data-testid={`young-ideal-${i + 1}`}
                className="group flex items-center gap-4 rounded-xl border border-[#e1dfdf] bg-white px-5 py-4 transition-all duration-300 hover:border-[#f68a4a]/60 hover:bg-[#fff]"
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
