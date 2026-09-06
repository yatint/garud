import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const PLACEHOLDERS = [
  { enLabel: "Parent Testimonial", mrLabel: "पालकांचा अनुभव", slug: "parent-1" },
  { enLabel: "Student Transformation Story", mrLabel: "विद्यार्थ्याची परिवर्तन कथा", slug: "student-1" },
  { enLabel: "Parent Testimonial", mrLabel: "पालकांचा अनुभव", slug: "parent-2" },
];

export const KidsTestimonials = () => {
  const { t } = useLang();
  return (
    <section data-testid="kids-testimonials-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow={t("Stories", "कथा")}
          title={t("What Parents Will Tell You", "पालक तुम्हाला काय सांगतील")}
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
                  {t(p.enLabel, p.mrLabel)} — {t("Coming Soon", "लवकरच येत आहे")}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
