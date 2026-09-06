import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const WEEKS = [
  {
    num: "W1",
    enWeek: "Week 1",
    mrWeek: "आठवडा १",
    enTitle: "Discover Yourself",
    mrTitle: "स्वतःला ओळखा",
    items: [
      { en: "Self-awareness", mr: "आत्मजाणीव" },
      { en: "Goal setting", mr: "ध्येय निश्चिती" },
      { en: "Understanding strengths", mr: "शक्तींची समज" },
      { en: "Personal reflection", mr: "वैयक्तिक आत्मपरिक्षण" },
    ],
    slug: "week-1",
  },
  {
    num: "W2",
    enWeek: "Week 2",
    mrWeek: "आठवडा २",
    enTitle: "Build Better Habits",
    mrTitle: "चांगल्या सवयी घडवा",
    items: [
      { en: "Discipline", mr: "शिस्त" },
      { en: "Time management", mr: "वेळ व्यवस्थापन" },
      { en: "Study routines", mr: "अभ्यास दिनक्रम" },
      { en: "Digital responsibility", mr: "डिजिटल जबाबदारी" },
    ],
    slug: "week-2",
  },
  {
    num: "W3",
    enWeek: "Week 3",
    mrWeek: "आठवडा ३",
    enTitle: "Lead with Confidence",
    mrTitle: "आत्मविश्वासाने नेतृत्व करा",
    items: [
      { en: "Communication", mr: "संवाद" },
      { en: "Leadership", mr: "नेतृत्व" },
      { en: "Team activities", mr: "संघ उपक्रम" },
      { en: "Emotional balance", mr: "भावनिक संतुलन" },
    ],
    slug: "week-3",
  },
  {
    num: "W4",
    enWeek: "Week 4",
    mrWeek: "आठवडा ४",
    enTitle: "Transform Your Lifestyle",
    mrTitle: "तुमची जीवनशैली बदला",
    items: [
      { en: "Character development", mr: "चारित्र्य विकास" },
      { en: "Responsibility", mr: "जबाबदारी" },
      { en: "Purpose-driven living", mr: "ध्येयपूर्ण जीवन" },
      { en: "Final personal action plan", mr: "अंतिम वैयक्तिक कृती आराखडा" },
    ],
    slug: "week-4",
  },
];

export const ThirtyJourney = () => {
  const { t } = useLang();
  return (
    <section data-testid="thirty-journey-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow={t("The 30-Day Journey", "३०-दिवसांचा प्रवास")}
          title={t("Four Weeks, Four Transformations", "चार आठवडे, चार परिवर्तने")}
          description={t(
            "Each week has a clear theme — building layer upon layer until new habits become your lifestyle.",
            "प्रत्येक आठवड्याला स्पष्ट विषय — नव्या सवयी तुमची जीवनशैली बनेपर्यंत थरावर थर."
          )}
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-[linear-gradient(90deg,transparent,#f68a4a_12%,#18463b_50%,#f68a4a_88%,transparent)] lg:block" />
          {WEEKS.map((w, i) => (
            <Reveal key={w.slug} delay={i * 0.1}>
              <article
                data-testid={`thirty-timeline-${w.slug}`}
                className="card-glow-hover group relative h-full rounded-2xl border border-[#e1dfdf] bg-[#fbfafa] p-7"
              >
                <div className="relative mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f68a4a] font-heading text-base font-black text-white shadow-[0_8px_20px_rgba(246,138,74,0.35)]">
                    {w.num}
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e0701f]">
                      {t(w.enWeek, w.mrWeek)}
                    </p>
                    <h3 className="font-heading text-xl font-black leading-tight text-[#18463b]">
                      {t(w.enTitle, w.mrTitle)}
                    </h3>
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {w.items.map((item) => (
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
