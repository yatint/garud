import { ArrowRight, ImagePlus } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { scrollToId } from "@/lib/scroll";

const STORIES = [
  { badge: "Kids Transform", title: "Student Transformation Story", name: "Student Name (Placeholder)", slug: "student" },
  { badge: "Youth Transform", title: "Youth Transformation Story", name: "Student Name (Placeholder)", slug: "youth" },
  { badge: "Parenting 360°", title: "Parenting Transformation Story", name: "Parent Name (Placeholder)", slug: "parenting" },
];

export const SuccessStoriesGrid = () => {
  return (
    <>
      <section data-testid="success-intro-section" className="bg-white pb-4 pt-20 lg:pt-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            index="01"
            eyebrow="Introduction"
            title="Real Growth. Real Transformation."
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
              At Rupantaram, success is measured by positive change in character, confidence,
              communication, discipline, and relationships. Every participant begins with different
              challenges, but each journey is guided by practical learning, mentorship, and
              consistent habit building.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="success-stories-section" className="bg-white pb-20 pt-12 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="02"
            eyebrow="Featured Transformation Stories"
            title="Stories We Will Proudly Share Soon"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {STORIES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <article
                  data-testid={`story-feature-${s.slug}`}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-dashed border-[#d8d5d0] bg-[#fbfafa]"
                >
                  <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-[#f0efe9] text-[#999]">
                    <ImagePlus size={30} strokeWidth={1.5} />
                    <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                      Photo Placeholder
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#f68a4a]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#e0701f]">
                      {s.badge}
                    </span>
                    <h3 className="mt-4 font-heading text-lg font-bold text-[#18463b]">{s.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-[#999]">{s.name}</p>

                    <div className="mt-5 flex flex-col gap-2 rounded-xl border border-[#e1dfdf] bg-white p-4">
                      <div className="flex items-center gap-3">
                        <span className="w-14 text-[10px] font-bold uppercase tracking-[0.14em] text-[#999]">Before</span>
                        <span className="h-2 flex-1 rounded-full bg-[#eceae6]" />
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-14 text-[10px] font-bold uppercase tracking-[0.14em] text-[#e0701f]">After</span>
                        <span className="h-2 flex-1 rounded-full bg-[#f68a4a]/30" />
                      </div>
                    </div>

                    <button
                      data-testid={`story-read-${s.slug}`}
                      onClick={() => scrollToId("#share-story", -88)}
                      className="mt-6 inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      Read Full Story
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
