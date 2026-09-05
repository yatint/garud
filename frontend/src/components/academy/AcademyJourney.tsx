import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    num: "01",
    title: "Know Yourself",
    text: "Understanding your strengths, limits, emotions, and reactions — honestly.",
    slug: "know-yourself",
  },
  {
    num: "02",
    title: "Build Character",
    text: "Bringing honesty, responsibility, and respect into everyday habits.",
    slug: "build-character",
  },
  {
    num: "03",
    title: "Develop Life Skills",
    text: "Practicing communication, decision making, time planning, and emotional balance.",
    slug: "life-skills",
  },
  {
    num: "04",
    title: "Create Discipline",
    text: "Building the habit where a chosen routine — not mood — runs the day.",
    slug: "discipline",
  },
  {
    num: "05",
    title: "Find Your Goal",
    text: "Choosing a career and life direction from clarity, not pressure.",
    slug: "goal",
  },
  {
    num: "06",
    title: "Live Meaningfully",
    text: "Building success while staying responsible to family, society, and yourself.",
    slug: "meaningful",
  },
];

export const AcademyJourney = () => {
  return (
    <section id="journey" data-testid="academy-journey-section" className="bg-[#f6f7f0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="The Transformation Journey"
          title="Six Steps Every Participant Walks"
          description="Whatever the program, the arc is the same — from self-awareness to a purposeful, disciplined life."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <div
                data-testid={`journey-step-${s.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-7"
              >
                <span className="font-heading text-4xl font-black text-[#f68a4a]/25 transition-colors duration-300 group-hover:text-[#f68a4a]">
                  {s.num}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-[#18463b]">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
