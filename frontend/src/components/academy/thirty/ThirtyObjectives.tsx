import type { LucideIcon } from "lucide-react";
import { CalendarCheck, Crown, Flame, HeartHandshake, Sprout } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Objective {
  icon: LucideIcon;
  enTitle: string;
  mrTitle: string;
  slug: string;
  tint: string;
}

const OBJECTIVES: Objective[] = [
  { icon: CalendarCheck, enTitle: "Develop a disciplined, consistent lifestyle", mrTitle: "शिस्तबद्ध आणि सातत्यपूर्ण जीवनशैली विकसित करणे", slug: "lifestyle", tint: "bg-[#f68a4a]" },
  { icon: Flame, enTitle: "Strengthen self-confidence and a positive mindset", mrTitle: "आत्मविश्वास आणि सकारात्मक मानसिकता दृढ करणे", slug: "confidence", tint: "bg-[#18463b]" },
  { icon: Crown, enTitle: "Build leadership and a sense of responsibility", mrTitle: "नेतृत्वगुण आणि जबाबदारीची जाणीव निर्माण करणे", slug: "leadership", tint: "bg-[#f0a500]" },
  { icon: HeartHandshake, enTitle: "Grow emotional balance and mental stability", mrTitle: "भावनिक संतुलन आणि मानसिक स्थैर्य वाढवणे", slug: "emotional", tint: "bg-[#0b5d3b]" },
  { icon: Sprout, enTitle: "Shape positive habits that last a lifetime", mrTitle: "आयुष्यभर टिकणाऱ्या सकारात्मक सवयींची जडणघडण करणे", slug: "habits", tint: "bg-[#e0701f]" },
];

export const ThirtyObjectives = () => {
  const { t } = useLang();
  return (
    <section data-testid="thirty-objectives-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("Program Objectives", "कार्यक्रमाची उद्दिष्टे")}
          title={t("What These 30 Days Set Out to Do", "या ३० दिवसांची उद्दिष्टे")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.slug} delay={i * 0.08}>
              <div
                data-testid={`thirty-objective-${o.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${o.tint}`}
                >
                  <o.icon size={24} />
                </span>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-[#18463b]">
                  {t(o.enTitle, o.mrTitle)}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
