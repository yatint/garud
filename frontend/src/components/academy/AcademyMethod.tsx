import type { LucideIcon } from "lucide-react";
import { CalendarCheck, Home, TrendingUp, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Method {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
}

const METHODS: Method[] = [
  {
    icon: Zap,
    title: "Learning Through Experience",
    text: "No sermons. Real experience through activities, games, role play, and discussion.",
    slug: "experiential",
  },
  {
    icon: Users,
    title: "Age-Wise Design",
    text: "A six-year-old and a nineteen-year-old learn in different languages and methods.",
    slug: "age-wise",
  },
  {
    icon: Home,
    title: "Parents as Partners",
    text: "A child doesn't change unless home changes — so parents get their own workshops.",
    slug: "parents",
  },
  {
    icon: TrendingUp,
    title: "Consistent Follow-Up",
    text: "Habit tracking, mentor contact, and progress reports for parents after the program.",
    slug: "follow-up",
  },
  {
    icon: CalendarCheck,
    title: "Fixed Small Batches",
    text: "Limited seats and fixed dates, so every participant gets a chance to speak.",
    slug: "batches",
  },
];

export const AcademyMethod = () => {
  return (
    <section id="method" data-testid="academy-method-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="How We Teach"
          title="Activity-Based. Never Lecture-Based."
          description="Skills become behaviour only through practice — so every Rupantaram session is built around doing, reflecting, and repeating."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {METHODS.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.07}>
              <div
                data-testid={`method-card-${m.slug}`}
                className="card-glow-hover group flex h-full flex-col rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#18463b]/25 bg-white text-[#18463b] transition-all duration-300 group-hover:rotate-6 group-hover:border-[#18463b] group-hover:bg-[#18463b] group-hover:text-white">
                  <m.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-[#18463b]">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{m.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
