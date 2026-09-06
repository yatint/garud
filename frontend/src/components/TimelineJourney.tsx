import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/lang";

export const TimelineJourney = () => {
  const { t } = useLang();

  const DAYS = [
    {
      num: "01",
      day: t("Day 1", "दिवस १"),
      title: t("Discover Yourself", "स्वतःला ओळखा"),
      img: "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
      items: [
        t("Self-awareness", "स्व-जाणीव"),
        t("Goal identification", "ध्येय ओळख"),
        t("Confidence activities", "आत्मविश्वासाचे उपक्रम"),
        t("Personality assessment", "व्यक्तिमत्त्व मूल्यमापन"),
      ],
      slug: "day-1",
    },
    {
      num: "02",
      day: t("Day 2", "दिवस २"),
      title: t("Build Your Skills", "कौशल्ये घडवा"),
      img: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
      items: [
        t("Communication", "संवाद"),
        t("Leadership", "नेतृत्व"),
        t("Team activities", "सांघिक उपक्रम"),
        t("Emotional intelligence", "भावनिक बुद्धिमत्ता"),
        t("Time management", "वेळ व्यवस्थापन"),
      ],
      slug: "day-2",
    },
    {
      num: "03",
      day: t("Day 3", "दिवस ३"),
      title: t("Design Your Future", "भविष्य रचा"),
      img: "https://images.pexels.com/photos/8348466/pexels-photo-8348466.jpeg?auto=compress&cs=tinysrgb&w=1000",
      items: [
        t("Career clarity", "करिअर स्पष्टता"),
        t("Decision making", "निर्णयक्षमता"),
        t("Public speaking", "सार्वजनिक भाषण"),
        t("Personal action plan", "वैयक्तिक कृती आराखडा"),
        t("Graduation & certificate", "पदवी व प्रमाणपत्र"),
      ],
      slug: "day-3",
    },
  ];

  return (
    <section id="journey" data-testid="journey-section" className="bg-[#f6f7f0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("The 3-Day Journey", "३ दिवसांचा प्रवास")}
          title={t("A Carefully Engineered Transformation Arc", "सुविचारित रूपांतर प्रवास")}
          description={t(
            "Each day builds on the last — from self-discovery, to skill mastery, to a concrete future blueprint.",
            "प्रत्येक दिवस मागील दिवसावर बांधला जातो — स्व-शोधापासून कौशल्य-प्रभुत्वातून ठोस भविष्य-आराखड्यापर्यंत."
          )}
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-[linear-gradient(90deg,transparent,#f68a4a_20%,#f68a4a_80%,transparent)] lg:block" />
          {DAYS.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.15}>
              <article
                data-testid={`timeline-${d.slug}`}
                className="card-glow-hover group relative h-full rounded-2xl border border-[#e1dfdf] bg-white p-7"
              >
                <div className="relative mb-7 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f68a4a] font-heading text-lg font-black text-white shadow-[0_8px_20px_rgba(246,138,74,0.35)]">
                    {d.num}
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#e0701f]">
                      {d.day}
                    </p>
                    <h3 className="font-heading text-2xl font-black text-[#18463b]">{d.title}</h3>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-[#e1dfdf]">
                  <img
                    src={d.img}
                    alt={`${d.day} — ${d.title}`}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#555]">
                      <span className="h-1.5 w-1.5 rotate-45 bg-[#f68a4a]" />
                      {item}
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
