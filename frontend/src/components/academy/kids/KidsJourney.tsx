import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const DAYS = [
  {
    num: "01",
    day: "Day 1",
    title: "Discover Myself",
    img: "https://images.unsplash.com/photo-1625865020971-581242d0ead6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: ["Self-confidence activities", "Fun icebreakers", "Understanding strengths", "Positive thinking"],
    slug: "day-1",
  },
  {
    num: "02",
    day: "Day 2",
    title: "Build Good Habits",
    img: "https://images.unsplash.com/photo-1650999413667-764ae1366b3c?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: ["Discipline", "Communication", "Team games", "Respect & responsibility", "Yoga & mindfulness"],
    slug: "day-2",
  },
  {
    num: "03",
    day: "Day 3",
    title: "Shine with Confidence",
    img: "https://images.unsplash.com/photo-1612542795178-ef13feed5ddd?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    items: ["Leadership activities", "Creative expression", "Goal setting", "Celebration & certificate"],
    slug: "day-3",
  },
];

export const KidsJourney = () => {
  return (
    <section data-testid="kids-journey-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="The 3-Day Learning Journey"
          title="Three Joyful Days of Growth"
          description="Each day builds gently on the last — from self-discovery to shining on stage."
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-[linear-gradient(90deg,transparent,#f68a4a_20%,#f68a4a_80%,transparent)] lg:block" />
          {DAYS.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.15}>
              <article
                data-testid={`kids-timeline-${d.slug}`}
                className="card-glow-hover group relative h-full rounded-2xl border border-[#e1dfdf] bg-[#fbfafa] p-7"
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
