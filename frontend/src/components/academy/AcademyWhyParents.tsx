import type { LucideIcon } from "lucide-react";
import { Award, CheckCircle2, HeartHandshake, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Reason {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
}

const REASONS: Reason[] = [
  {
    icon: Award,
    title: "People, Not Marks",
    text: "Scoring marks is the beginning; building a human being is the goal. Our measure is not the report card.",
    slug: "people-not-marks",
  },
  {
    icon: CheckCircle2,
    title: "Learning Through Action",
    text: "No lectures. Skills turn into behaviour through activities, group work, reflection, and daily practice.",
    slug: "action",
  },
  {
    icon: Users,
    title: "With the Whole Family",
    text: "Workshops for parents alongside children — because change must stick at home.",
    slug: "family",
  },
  {
    icon: HeartHandshake,
    title: "Real Results",
    text: "The child talks at home again, follows their chosen routine, and admits mistakes instead of hiding them.",
    slug: "results",
  },
];

export const AcademyWhyParents = () => {
  return (
    <section data-testid="academy-why-parents-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="08"
          eyebrow="Why Parents Choose Us"
          title="Trust Built on Visible Change"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.07}>
              <div
                data-testid={`why-card-${r.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] border-t-2 border-t-[#f68a4a] bg-[#fbfafa] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#18463b] text-white transition-colors duration-300 group-hover:bg-[#f68a4a]">
                  <r.icon size={20} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{r.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
