import type { LucideIcon } from "lucide-react";
import {
  Flower2,
  GraduationCap,
  MessagesSquare,
  Presentation,
  Trophy,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Item {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
}

const ITEMS: Item[] = [
  { icon: Presentation, title: "Interactive Workshops", text: "Learn by doing, not listening.", slug: "workshops" },
  { icon: MessagesSquare, title: "Group Discussions", text: "Every voice gets heard.", slug: "discussions" },
  { icon: Wrench, title: "Practical Activities", text: "Skills practiced in real scenarios.", slug: "activities" },
  { icon: Flower2, title: "Yoga & Mindfulness", text: "A calm mind powers a focused day.", slug: "yoga" },
  { icon: Trophy, title: "Team Challenges", text: "Compete, cooperate, celebrate.", slug: "challenges" },
  { icon: GraduationCap, title: "Mentor Guidance", text: "Personal feedback from trained mentors.", slug: "mentors" },
];

export const ExperienceGrid = () => {
  return (
    <section data-testid="programs-experience-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Learning Experience"
          title="How Every Session Feels"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={i * 0.06}>
              <div
                data-testid={`experience-card-${it.slug}`}
                className="group flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-[#fbfafa] p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                  <it.icon size={22} />
                </span>
                <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b]">{it.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a]">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
