import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const PLACEHOLDERS = [
  { label: "Parent Testimonial", slug: "parent-1" },
  { label: "Student Transformation Story", slug: "student-1" },
  { label: "Parent Testimonial", slug: "parent-2" },
];

export const KidsTestimonials = () => {
  return (
    <section data-testid="kids-testimonials-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="Stories"
          title="What Parents Will Tell You"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLACEHOLDERS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <figure
                data-testid={`kids-testimonial-${p.slug}`}
                className="flex h-full flex-col items-center rounded-[10px] border border-dashed border-[#e1dfdf] bg-[#fbfafa] p-8 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a]">
                  <Quote size={22} />
                </span>
                <div className="mt-5 flex flex-col gap-2">
                  <span className="h-2.5 w-48 rounded-full bg-[#eceae6]" />
                  <span className="h-2.5 w-40 rounded-full bg-[#eceae6]" />
                  <span className="mx-auto h-2.5 w-32 rounded-full bg-[#eceae6]" />
                </div>
                <figcaption className="mt-6 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#999]">
                  {p.label} — Coming Soon
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
