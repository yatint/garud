import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const STORIES = [
  {
    quote:
      "My son used to be afraid of going on stage. After the workshop, he anchored our school's annual gathering.",
    author: "Mother of a 10-year-old",
    program: "Kids Transform",
  },
  {
    quote:
      "I stopped blaming my mobile and started writing a daily plan. My studies improved on their own.",
    author: "10th-grade student",
    program: "30-Day Transformation Program",
  },
  {
    quote:
      "After Parenting 360°, I learned to listen. The daily arguments stopped and real conversation began.",
    author: "Mother of a 15-year-old",
    program: "Parenting 360°",
  },
];

export const AcademyStories = () => {
  return (
    <section id="stories" data-testid="academy-stories-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Success Stories"
          title="The Change Seen at Home Is the Real Result"
          description="Report cards don't capture transformation. These moments, shared by parents and students, do."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.author} delay={i * 0.1}>
              <figure
                data-testid={`story-card-${i + 1}`}
                className="card-glow-hover flex h-full flex-col rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-7"
              >
                <Quote size={28} className="text-[#f68a4a]" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-[#444]">
                  "{s.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-[#e1dfdf] pt-4">
                  <p className="font-heading text-sm font-bold text-[#18463b]">{s.author}</p>
                  <span className="mt-2 inline-block rounded-full bg-[#f68a4a]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#e0701f]">
                    {s.program}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
