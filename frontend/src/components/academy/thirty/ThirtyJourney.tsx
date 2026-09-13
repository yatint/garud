import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const STAGES = [
  {
    num: "01",
    enStage: "Stage 1 · Days 1–10",
    mrStage: "पहिला टप्पा · दिवस १–१०",
    enTitle: "Self-Discovery & Discipline",
    mrTitle: "स्वतःची ओळख आणि शिस्त",
    items: [
      { en: "Knowing yourself", mr: "स्वतःची ओळख" },
      { en: "Discipline", mr: "शिस्त" },
      { en: "Building core habits", mr: "मूलभूत सवयींची सुरुवात" },
    ],
    slug: "stage-1",
  },
  {
    num: "02",
    enStage: "Stage 2 · Days 11–20",
    mrStage: "दुसरा टप्पा · दिवस ११–२०",
    enTitle: "Mindset & Consistency",
    mrTitle: "मानसिकता विकास आणि सातत्य",
    items: [
      { en: "Mindset development", mr: "मानसिकता विकास" },
      { en: "Emotional balance", mr: "भावनिक संतुलन" },
      { en: "Consistency", mr: "सातत्य" },
    ],
    slug: "stage-2",
  },
  {
    num: "03",
    enStage: "Stage 3 · Days 21–30",
    mrStage: "तिसरा टप्पा · दिवस २१–३०",
    enTitle: "Leadership & Lifelong Habits",
    mrTitle: "नेतृत्व आणि दीर्घकालीन सवयी",
    items: [
      { en: "Leadership", mr: "नेतृत्व" },
      { en: "Responsibility", mr: "जबाबदारी" },
      { en: "Locking in lifelong habits", mr: "दीर्घकालीन सवयींची दृढता" },
    ],
    slug: "stage-3",
  },
];

export const ThirtyJourney = () => {
  const { t } = useLang();
  return (
    <section data-testid="thirty-journey-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Program Structure", "कार्यक्रम रचना")}
          title={t("Thirty Days, Three Stages", "३० दिवस, तीन टप्पे")}
          description={t(
            "Each ten-day stage builds on the last — until new habits become your lifestyle.",
            "प्रत्येक दहा-दिवसांचा टप्पा मागील टप्प्यावर भर घालतो — नव्या सवयी तुमची जीवनशैली बनेपर्यंत."
          )}
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-[linear-gradient(90deg,transparent,#f68a4a_20%,#f68a4a_80%,transparent)] lg:block" />
          {STAGES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.15}>
              <article
                data-testid={`thirty-timeline-${s.slug}`}
                className="card-glow-hover group relative h-full rounded-2xl border border-[#e1dfdf] bg-[#fbfafa] p-7"
              >
                <div className="relative mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f68a4a] font-heading text-lg font-black text-white shadow-[0_8px_20px_rgba(246,138,74,0.35)]">
                    {s.num}
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e0701f]">
                      {t(s.enStage, s.mrStage)}
                    </p>
                    <h3 className="font-heading text-xl font-black leading-tight text-[#18463b]">
                      {t(s.enTitle, s.mrTitle)}
                    </h3>
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {s.items.map((item) => (
                    <li key={item.en} className="flex items-center gap-3 text-sm text-[#555]">
                      <span className="h-1.5 w-1.5 rotate-45 bg-[#f68a4a]" />
                      {t(item.en, item.mr)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
