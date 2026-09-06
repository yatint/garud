import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const DAYS = [
  {
    num: "01",
    enDay: "Day 1",
    mrDay: "दिवस १",
    enTitle: "Know Yourself",
    mrTitle: "स्वतःला जाणा",
    img: "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: [
      { en: "Self-discovery", mr: "स्व-शोध" },
      { en: "Personality understanding", mr: "व्यक्तिमत्त्वाची समज" },
      { en: "Confidence building", mr: "आत्मविश्वास निर्मिती" },
      { en: "Identifying strengths", mr: "शक्ती ओळखणे" },
    ],
    slug: "day-1",
  },
  {
    num: "02",
    enDay: "Day 2",
    mrDay: "दिवस २",
    enTitle: "Build Your Leadership",
    mrTitle: "तुमचे नेतृत्व घडवा",
    img: "https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: [
      { en: "Communication", mr: "संवाद" },
      { en: "Team collaboration", mr: "संघ सहकार्य" },
      { en: "Leadership activities", mr: "नेतृत्व उपक्रम" },
      { en: "Emotional intelligence", mr: "भावनिक बुद्धिमत्ता" },
      { en: "Responsible decision making", mr: "जबाबदार निर्णयक्षमता" },
    ],
    slug: "day-2",
  },
  {
    num: "03",
    enDay: "Day 3",
    mrDay: "दिवस ३",
    enTitle: "Design Your Future",
    mrTitle: "तुमचे भविष्य रचा",
    img: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: [
      { en: "Career clarity", mr: "करिअर स्पष्टता" },
      { en: "Goal planning", mr: "ध्येय नियोजन" },
      { en: "Public speaking", mr: "सार्वजनिक भाषण" },
      { en: "Personal action plan", mr: "वैयक्तिक कृती आराखडा" },
      { en: "Certificate ceremony", mr: "प्रमाणपत्र समारंभ" },
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
          index="03"
          eyebrow={t("The 3-Day Transformation Journey", "३-दिवसांचा परिवर्तन प्रवास")}
          title={t("From Self-Knowledge to a Future Blueprint", "स्व-जाणीवेपासून भविष्याच्या आराखड्यापर्यंत")}
          description={t(
            "Three intensive days that take you from honest self-discovery to a concrete personal action plan.",
            "तीन प्रगाढ दिवस — प्रामाणिक स्व-शोधापासून ते ठोस वैयक्तिक कृती आराखड्यापर्यंत."
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
                    <h3 className="font-heading text-2xl font-black text-[#18463b]">{t(d.enTitle, d.mrTitle)}</h3>
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
