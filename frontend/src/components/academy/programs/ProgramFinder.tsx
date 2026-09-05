import type { LucideIcon } from "lucide-react";
import { Briefcase, Home, Smile, TrendingUp, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Stop {
  icon: LucideIcon;
  age: string;
  program: string;
  slug: string;
  tint: string;
}

const STOPS: Stop[] = [
  { icon: Smile, age: "6–12", program: "Kids Transform", slug: "kids", tint: "bg-[#f68a4a]" },
  { icon: Zap, age: "13–18", program: "Youth Transform", slug: "youth", tint: "bg-[#18463b]" },
  { icon: Briefcase, age: "19+", program: "Young Adult Transform", slug: "young-adult", tint: "bg-[#f0a500]" },
  { icon: Home, age: "Parents", program: "Parenting 360°", slug: "parents", tint: "bg-[#0b5d3b]" },
  { icon: TrendingUp, age: "Complete Growth Journey", program: "30-Day Transformation", slug: "growth", tint: "bg-[#e0701f]" },
];

export const ProgramFinder = () => {
  return (
    <section id="program-finder" data-testid="program-finder-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Which Program Is Right for You?"
          title="Follow the Age, Find the Program"
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-[linear-gradient(90deg,transparent,#f68a4a_12%,#18463b_50%,#f68a4a_88%,transparent)] lg:block" />
          {STOPS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <div data-testid={`finder-stop-${s.slug}`} className="group relative text-center">
                <span
                  className={`relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${s.tint}`}
                >
                  <s.icon size={26} />
                </span>
                <p className="mt-5 font-heading text-sm font-black uppercase tracking-[0.14em] text-[#18463b]">
                  {s.age}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#7a7a7a]">{s.program}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
