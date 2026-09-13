import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const DAYS = [
  {
    num: "01",
    enDay: "Day 1",
    mrDay: "दिवस १",
    enTitle: "Self-Discovery & Purpose",
    mrTitle: "स्वतःची ओळख आणि उद्देश शोध",
    img: "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: [
      { en: "Knowing yourself", mr: "स्वतःची ओळख" },
      { en: "Purpose discovery", mr: "उद्देश शोध" },
      { en: "Positive mindset", mr: "सकारात्मक मानसिकता" },
    ],
    slug: "day-1",
  },
  {
    num: "02",
    enDay: "Day 2",
    mrDay: "दिवस २",
    enTitle: "Leadership & Communication",
    mrTitle: "नेतृत्व विकास आणि संवाद",
    img: "https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: [
      { en: "Leadership development", mr: "नेतृत्व विकास" },
      { en: "Communication skills", mr: "संवाद कौशल्ये" },
      { en: "Emotional balance", mr: "भावनिक संतुलन" },
    ],
    slug: "day-2",
  },
  {
    num: "03",
    enDay: "Day 3",
    mrDay: "दिवस ३",
    enTitle: "Career Direction & Action Plan",
    mrTitle: "करिअर दिशा आणि कृती आराखडा",
    img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: [
      { en: "Career direction", mr: "करिअर दिशा" },
      { en: "Decision-making ability", mr: "निर्णयक्षमता" },
      { en: "Action plan for success", mr: "यशासाठी कृती आराखडा" },
      { en: "Graduation & certificate", mr: "पदवी व प्रमाणपत्र" },
    ],
    slug: "day-3",
  },
];

export const YoungJourney = () => {
  const { t } = useLang();
  return (
    <section data-testid="young-journey-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Program Structure", "कार्यक्रम रचना")}
          title={t("Three Days, One Transformation", "३ दिवस, एक रूपांतर")}
          description={t(
            "Three intensive days — from discovering your purpose to a concrete action plan for success.",
            "तीन प्रगाढ दिवस — उद्देश शोधण्यापासून ते यशाच्या ठोस कृती आराखड्यापर्यंत."
          )}
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-[linear-gradient(90deg,transparent,#f68a4a_20%,#f68a4a_80%,transparent)] lg:block" />
          {DAYS.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.15}>
              <article
                data-testid={`young-timeline-${d.slug}`}
                className="card-glow-hover group relative h-full rounded-2xl border border-[#e1dfdf] bg-[#fbfafa] p-7"
              >
                <div className="relative mb-7 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f68a4a] font-heading text-lg font-black text-white shadow-[0_8px_20px_rgba(246,138,74,0.35)]">
                    {d.num}
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e0701f]">
                      {t(d.enDay, d.mrDay)}
                    </p>
                    <h3 className="font-heading text-xl font-black leading-tight text-[#18463b]">{t(d.enTitle, d.mrTitle)}</h3>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#e1dfdf]">
                  <img
                    src={d.img}
                    alt={t(`${d.enDay} — ${d.enTitle}`, `${d.mrDay} — ${d.mrTitle}`)}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {d.items.map((item) => (
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
