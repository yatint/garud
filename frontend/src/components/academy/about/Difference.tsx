import type { LucideIcon } from "lucide-react";
import { GraduationCap, Home, Lightbulb, Scale, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
}

const FEATURES: Feature[] = [
  {
    icon: Lightbulb,
    title: "Life Skills First",
    text: "Practical skills beyond textbooks.",
    slug: "life-skills-first",
  },
  {
    icon: Sparkles,
    title: "Personality Development",
    text: "Confidence, communication & leadership.",
    slug: "personality",
  },
  {
    icon: Scale,
    title: "Value-Based Learning",
    text: "Character and ethical decision making.",
    slug: "values",
  },
  {
    icon: Home,
    title: "Parent Involvement",
    text: "Families participate in transformation.",
    slug: "parents",
  },
  {
    icon: GraduationCap,
    title: "Experienced Mentorship",
    text: "Guided by trained facilitators.",
    slug: "mentorship",
  },
  {
    icon: Zap,
    title: "Activity-Based Training",
    text: "Learning through experience, not lectures.",
    slug: "activity",
  },
];

export const Difference = () => {
  return (
    <section data-testid="about-difference-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="What Makes Us Different"
          title="Built Around the Whole Person"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 3) * 0.08}>
              <div
                data-testid={`difference-card-${f.slug}`}
                className="card-glow-hover group flex h-full items-start gap-5 rounded-[10px] border border-[#e1dfdf] bg-white p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <f.icon size={22} />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#18463b]">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555]">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
