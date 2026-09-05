import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const DAYS = [
  {
    num: "01",
    day: "Day 1",
    title: "Discover Yourself",
    img: "https://static.prod-images.emergentagent.com/jobs/02ef60ff-e687-423a-b4e6-3c742b985c0b/images/424cd7558d7555dffd855cddb9cce3ac620a5e829ee03db3dd6397e39ad10ed2.jpeg",
    items: ["Self-awareness", "Goal identification", "Confidence activities", "Personality assessment"],
    slug: "day-1",
  },
  {
    num: "02",
    day: "Day 2",
    title: "Build Your Skills",
    img: "https://static.prod-images.emergentagent.com/jobs/02ef60ff-e687-423a-b4e6-3c742b985c0b/images/7ec8e583e8540c09515206e0be8dc366ee384a1e15be53e6bf608dc3f713d5ff.jpeg",
    items: ["Communication", "Leadership", "Team activities", "Emotional intelligence", "Time management"],
    slug: "day-2",
  },
  {
    num: "03",
    day: "Day 3",
    title: "Design Your Future",
    img: "https://static.prod-images.emergentagent.com/jobs/02ef60ff-e687-423a-b4e6-3c742b985c0b/images/c7257c63e239732e1a57b7cacaf86548e1b83090558fb1b3386bec51c39363e6.jpeg",
    items: ["Career clarity", "Decision making", "Public speaking", "Personal action plan", "Graduation & certificate"],
    slug: "day-3",
  },
];

export const TimelineJourney = () => {
  return (
    <section id="journey" data-testid="journey-section" className="bg-[#f6f7f0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="The 3-Day Journey"
          title="A Carefully Engineered Transformation Arc"
          description="Each day builds on the last — from self-discovery, to skill mastery, to a concrete future blueprint."
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
