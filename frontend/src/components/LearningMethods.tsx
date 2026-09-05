import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Flower2,
  GraduationCap,
  MessagesSquare,
  Presentation,
  Trophy,
  VenetianMask,
  Wrench,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface Method {
  icon: LucideIcon;
  title: string;
  slug: string;
}

const METHODS: Method[] = [
  { icon: Presentation, title: "Interactive Workshops", slug: "workshops" },
  { icon: MessagesSquare, title: "Group Discussions", slug: "discussions" },
  { icon: VenetianMask, title: "Role Play", slug: "role-play" },
  { icon: Trophy, title: "Team Challenges", slug: "team-challenges" },
  { icon: Flower2, title: "Yoga & Meditation", slug: "yoga-meditation" },
  { icon: BookOpen, title: "Reflection Sessions", slug: "reflection" },
  { icon: GraduationCap, title: "Mentor Guidance", slug: "mentorship" },
  { icon: Wrench, title: "Practical Activities", slug: "practical" },
];

export const LearningMethods = () => {
  return (
    <section id="method" data-testid="method-section" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Learning Method"
          title="Zero Lectures. 100% Experience."
          description="Rupantaram's pedagogy is activity-based to the core — students learn by doing, failing, reflecting, and trying again."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METHODS.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 0.08}>
              <div
                data-testid={`method-card-${m.slug}`}
                className="card-glow-hover group flex h-full flex-col items-center rounded-xl border border-[#1e293b] bg-[#0b1d3a] p-7 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e6a635]/40 bg-[#071328] text-[#f5c253] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#e6a635] group-hover:text-[#071328]">
                  <m.icon size={24} />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-white sm:text-lg">
                  {m.title}
                </h3>
                <span className="mt-3 h-px w-8 bg-[#e6a635]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#e6a635]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
