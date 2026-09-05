import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    num: "Step 1",
    title: "Discover Yourself",
    text: "Understand strengths, emotions and personality.",
    slug: "discover",
  },
  {
    num: "Step 2",
    title: "Build Better Habits",
    text: "Discipline, focus, communication and healthy routines.",
    slug: "habits",
  },
  {
    num: "Step 3",
    title: "Practice Real Skills",
    text: "Activities, role play, teamwork, leadership and presentations.",
    slug: "practice",
  },
  {
    num: "Step 4",
    title: "Become Future Ready",
    text: "Confidence, character and career direction for lifelong success.",
    slug: "future",
  },
];

export const MethodSteps = () => {
  return (
    <section data-testid="why-method-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Our Transformation Method"
          title="A Proven Four-Step Process"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <div className="relative h-full" data-testid={`method-step-card-${s.slug}`}>
                <div className="card-glow-hover group flex h-full flex-col rounded-[10px] border border-[#e1dfdf] border-t-2 border-t-[#f68a4a] bg-[#fbfafa] p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e0701f]">
                    {s.num}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-bold text-[#18463b]">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">{s.text}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-5 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#f68a4a] text-white shadow-md lg:flex">
                    <ArrowRight size={15} />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
