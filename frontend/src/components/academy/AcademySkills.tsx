import type { LucideIcon } from "lucide-react";
import { Compass, HeartHandshake, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface SkillGroup {
  icon: LucideIcon;
  title: string;
  skills: string[];
  slug: string;
}

const GROUPS: SkillGroup[] = [
  {
    icon: Target,
    title: "Self-Mastery & Study Skills",
    slug: "self-mastery",
    skills: [
      "Goal Setting",
      "Self-Discipline",
      "Perseverance",
      "Emotional Balance",
      "Decision Making",
      "Study Discipline",
      "Reading Habit",
      "Writing Skills",
      "Critical Thinking",
      "Information Analysis",
      "Public Speaking",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Character, Leadership & Relationships",
    slug: "character",
    skills: [
      "Listening Skills",
      "Teamwork",
      "Leadership",
      "Conflict Resolution",
      "Respect for Parents",
      "Healthy Friendships",
      "Values & Character",
      "Relationship Awareness",
    ],
  },
  {
    icon: Compass,
    title: "Future Readiness",
    slug: "future",
    skills: [
      "Social Responsibility",
      "Career Direction",
      "Digital Literacy",
      "Cyber Safety",
      "Financial Literacy",
      "Environmental Responsibility",
    ],
  },
];

export const AcademySkills = () => {
  return (
    <section id="skills" data-testid="academy-skills-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="What We Teach"
          title="25 Life Skills Schools Don't Cover"
          description="Three carefully designed tracks that shape self-mastery, character, and readiness for the real world."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.1}>
              <div
                data-testid={`skill-group-${g.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <g.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#18463b]">{g.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      data-testid={`skill-pill-${s.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className="rounded-full border border-[#e1dfdf] bg-[#fbfafa] px-3.5 py-1.5 text-xs font-semibold text-[#444] transition-colors duration-300 hover:border-[#f68a4a] hover:text-[#e0701f]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
