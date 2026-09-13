import type { LucideIcon } from "lucide-react";
import { Flame, HeartHandshake, ShieldCheck, Target, Users } from "lucide-react";
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
  { icon: Flame, enTitle: "Build self-confidence in teenagers", mrTitle: "किशोरवयीन मुलांमध्ये आत्मविश्वास वाढवणे", slug: "confidence", tint: "bg-[#f68a4a]" },
  { icon: ShieldCheck, enTitle: "Instil discipline and responsibility", mrTitle: "शिस्त आणि जबाबदारीची जाणीव निर्माण करणे", slug: "discipline", tint: "bg-[#18463b]" },
  { icon: HeartHandshake, enTitle: "Develop emotional intelligence", mrTitle: "भावनिक बुद्धिमत्ता (Emotional Intelligence) विकसित करणे", slug: "emotional", tint: "bg-[#f0a500]" },
  { icon: Users, enTitle: "Strengthen leadership and teamwork", mrTitle: "नेतृत्वगुण आणि टीमवर्क कौशल्ये वाढवणे", slug: "leadership", tint: "bg-[#0b5d3b]" },
  { icon: Target, enTitle: "Guide towards clear goals and direction", mrTitle: "जीवनात स्पष्ट ध्येय आणि दिशा निश्चित करण्यास मार्गदर्शन करणे", slug: "goals", tint: "bg-[#e0701f]" },
];

export const YouthObjectives = () => {
  const { t } = useLang();
  return (
    <section data-testid="youth-objectives-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("Program Objectives", "कार्यक्रमाची उद्दिष्टे")}
          title={t("What This Journey Sets Out to Do", "या प्रवासाची उद्दिष्टे")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.slug} delay={i * 0.08}>
              <div
                data-testid={`youth-objective-${o.slug}`}
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
