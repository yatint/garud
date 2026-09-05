import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Compass,
  Crown,
  Heart,
  Hourglass,
  Lightbulb,
  Mic,
  Puzzle,
  Scale,
  Smartphone,
  Target,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Skill {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
  tint: "orange" | "green" | "cream";
}

const SKILLS: Skill[] = [
  { icon: Target, title: "Goal Setting", text: "Turn dreams into clear, written targets.", slug: "goal-setting", tint: "orange" },
  { icon: Scale, title: "Decision Making", text: "Choose wisely, even under pressure.", slug: "decision-making", tint: "green" },
  { icon: Puzzle, title: "Problem Solving", text: "Break challenges into solvable steps.", slug: "problem-solving", tint: "cream" },
  { icon: Lightbulb, title: "Creative Thinking", text: "Find fresh ideas beyond the obvious.", slug: "creative", tint: "orange" },
  { icon: Hourglass, title: "Self Discipline", text: "Let routine, not mood, run the day.", slug: "discipline", tint: "green" },
  { icon: Heart, title: "Emotional Balance", text: "Respond calmly instead of reacting.", slug: "emotional", tint: "cream" },
  { icon: Users, title: "Teamwork", text: "Win together, not alone.", slug: "teamwork", tint: "orange" },
  { icon: Crown, title: "Leadership", text: "Take charge and inspire others.", slug: "leadership", tint: "green" },
  { icon: Mic, title: "Public Speaking", text: "Speak with clarity and courage.", slug: "speaking", tint: "cream" },
  { icon: Brain, title: "Critical Thinking", text: "Question, analyse, then conclude.", slug: "critical", tint: "orange" },
  { icon: Compass, title: "Time Management", text: "Give every hour a purpose.", slug: "time", tint: "green" },
  { icon: Smartphone, title: "Digital Responsibility", text: "Control the screen, not the reverse.", slug: "digital", tint: "cream" },
];

const TINTS = {
  orange: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]",
  green: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]",
  cream: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]",
};

export const SkillsGrid = () => {
  return (
    <section data-testid="why-skills-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Skills Every Student Develops"
          title="Twelve Skills for Life"
          description="Every program at Rupantaram trains this complete life-skills toolkit."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`skill-card-${s.slug}`}
                className="group flex h-full items-start gap-4 rounded-[10px] border border-[#e1dfdf] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white ${TINTS[s.tint]}`}
                >
                  <s.icon size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#18463b]">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#7a7a7a] sm:text-sm">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
