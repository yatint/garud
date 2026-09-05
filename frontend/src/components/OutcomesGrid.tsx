import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Crown,
  Flame,
  HeartHandshake,
  Mic,
  Smartphone,
  Target,
  Timer,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface Outcome {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
}

const OUTCOMES: Outcome[] = [
  {
    icon: Target,
    title: "Goal Setting",
    text: "Turn vague dreams into written, achievable targets with a personal action map.",
    slug: "goal-setting",
  },
  {
    icon: Flame,
    title: "Confidence Building",
    text: "Walk into any room, stage, or interview with unshakable self-belief.",
    slug: "confidence-building",
  },
  {
    icon: Crown,
    title: "Leadership Skills",
    text: "Learn to take responsibility, lead teams, and inspire people around you.",
    slug: "leadership-skills",
  },
  {
    icon: Mic,
    title: "Communication",
    text: "Speak clearly, listen deeply, and express ideas with real impact.",
    slug: "communication",
  },
  {
    icon: Timer,
    title: "Time Management",
    text: "Master your day with planning, priorities, and distraction-free focus.",
    slug: "time-management",
  },
  {
    icon: HeartHandshake,
    title: "Emotional Intelligence",
    text: "Understand emotions and manage anger, stress, and anxiety with maturity.",
    slug: "emotional-intelligence",
  },
  {
    icon: Smartphone,
    title: "Digital Discipline",
    text: "Break free from mobile and social-media addiction; build healthy screen habits.",
    slug: "digital-discipline",
  },
  {
    icon: Compass,
    title: "Career Direction",
    text: "Discover your strengths and design a clear, confident career roadmap.",
    slug: "career-direction",
  },
];

export const OutcomesGrid = () => {
  return (
    <section id="outcomes" data-testid="outcomes-section" className="bg-[#0b1d3a] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Key Outcomes"
          title="Eight Transformations in Three Days"
          description="Every activity maps to a measurable life outcome. Students don't just hear about these skills — they practice them until they stick."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 4) * 0.08}>
              <div
                data-testid={`outcome-card-${o.slug}`}
                className="card-glow-hover group h-full rounded-xl border border-[#1e293b] bg-[#0e2448] p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#14305d] text-[#f5c253] transition-all duration-300 group-hover:bg-[#e6a635] group-hover:text-[#071328]">
                  <o.icon size={22} />
                </span>
                <p className="mt-5 font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-white">{o.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{o.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
