import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Crown,
  Globe,
  HeartHandshake,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Skill {
  title: string;
  text: string;
}

interface Category {
  icon: LucideIcon;
  name: string;
  note: string;
  skills: Skill[];
  slug: string;
}

const CATEGORIES: Category[] = [
  {
    icon: Target,
    name: "Self Mastery",
    note: "Command over your own mind and actions.",
    slug: "self-mastery",
    skills: [
      { title: "Goal Setting", text: "Turn wishes into written, trackable targets." },
      { title: "Decision Making", text: "Choose with clarity, not impulse." },
      { title: "Problem Solving", text: "Break any challenge into next steps." },
      { title: "Self Discipline", text: "Do what matters, even when it's hard." },
      { title: "Perseverance", text: "Keep going when motivation runs out." },
    ],
  },
  {
    icon: HeartHandshake,
    name: "Emotional Intelligence",
    note: "Understand and manage emotions responsibly.",
    slug: "emotional",
    skills: [
      { title: "Emotional Balance", text: "Respond calmly instead of reacting." },
      { title: "Positive Thinking", text: "See possibilities before problems." },
      { title: "Self Awareness", text: "Know your patterns, strengths, and triggers." },
      { title: "Stress Management", text: "Handle pressure without burning out." },
    ],
  },
  {
    icon: Crown,
    name: "Communication & Leadership",
    note: "Confidence, collaboration, and responsible leadership.",
    slug: "communication",
    skills: [
      { title: "Communication Skills", text: "Express clearly, connect deeply." },
      { title: "Public Speaking", text: "Own every stage and room." },
      { title: "Listening Skills", text: "Hear to understand, not to reply." },
      { title: "Teamwork", text: "Win with people, not against them." },
      { title: "Leadership", text: "Take responsibility and inspire action." },
    ],
  },
  {
    icon: Brain,
    name: "Learning & Critical Thinking",
    note: "Thoughtful learning, not memorization.",
    slug: "learning",
    skills: [
      { title: "Reading Habit", text: "A daily habit that compounds forever." },
      { title: "Writing Skills", text: "Think clearly by writing clearly." },
      { title: "Critical Thinking", text: "Question, analyse, then conclude." },
      { title: "Information Analysis", text: "Separate signal from noise." },
    ],
  },
  {
    icon: Globe,
    name: "Responsible Living",
    note: "Skills for modern life and society.",
    slug: "responsible",
    skills: [
      { title: "Digital Literacy", text: "Use technology as a tool, not a trap." },
      { title: "Cyber Safety", text: "Stay safe, private, and smart online." },
      { title: "Financial Awareness", text: "Understand money, saving, and priorities." },
      { title: "Environmental Responsibility", text: "Care for the world you'll inherit." },
      { title: "Social Responsibility", text: "Contribute to family, society, and nation." },
    ],
  },
];

export const LifeCategories = () => {
  return (
    <section data-testid="life-categories-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="The 21 Life Skills"
          title="Organized Into Five Life Areas"
          description="Not a random list — a complete system covering the mind, emotions, relationships, learning, and citizenship."
          align="center"
        />

        <div className="mt-16 flex flex-col gap-14">
          {CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.slug} delay={0.05}>
              <div data-testid={`life-category-${cat.slug}`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#18463b] text-[#f5c253] transition-colors duration-300">
                    <cat.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-black text-[#18463b] sm:text-2xl">
                      <span className="mr-2 text-[#f68a4a]">{String(ci + 1).padStart(2, "0")}</span>
                      {cat.name}
                    </h3>
                    <p className="text-sm text-[#7a7a7a]">{cat.note}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {cat.skills.map((s) => (
                    <div
                      key={s.title}
                      data-testid={`life-skill-${s.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className="group rounded-[10px] border border-[#e1dfdf] border-l-2 border-l-[#f68a4a] bg-[#fbfafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f68a4a]/60 hover:bg-white hover:shadow-[0_12px_30px_rgba(24,70,59,0.08)]"
                    >
                      <h4 className="font-heading text-sm font-bold text-[#18463b]">{s.title}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#7a7a7a]">{s.text}</p>
                    </div>
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
