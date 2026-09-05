import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const WEEKS = [
  {
    num: "W1",
    week: "Week 1",
    title: "Discover Yourself",
    items: ["Self-awareness", "Goal setting", "Understanding strengths", "Personal reflection"],
    slug: "week-1",
  },
  {
    num: "W2",
    week: "Week 2",
    title: "Build Better Habits",
    items: ["Discipline", "Time management", "Study routines", "Digital responsibility"],
    slug: "week-2",
  },
  {
    num: "W3",
    week: "Week 3",
    title: "Lead with Confidence",
    items: ["Communication", "Leadership", "Team activities", "Emotional balance"],
    slug: "week-3",
  },
  {
    num: "W4",
    week: "Week 4",
    title: "Transform Your Lifestyle",
    items: ["Character development", "Responsibility", "Purpose-driven living", "Final personal action plan"],
    slug: "week-4",
  },
];

export const ThirtyJourney = () => {
  return (
    <section data-testid="thirty-journey-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="The 30-Day Journey"
          title="Four Weeks, Four Transformations"
          description="Each week has a clear theme — building layer upon layer until new habits become your lifestyle."
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
                      {w.week}
                    </p>
                    <h3 className="font-heading text-xl font-black leading-tight text-[#18463b]">
                      {w.title}
                    </h3>
                  </div>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {w.items.map((item) => (
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
