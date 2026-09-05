import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Flower2,
  GraduationCap,
  Presentation,
  Trophy,
  Users,
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
  { icon: Presentation, title: "Interactive Workshops", text: "Hands-on sessions, zero lectures.", slug: "workshops" },
  { icon: Users, title: "Group Activities", text: "Learn with and from your peers.", slug: "group" },
  { icon: Trophy, title: "Practical Challenges", text: "Real scenarios, real decisions.", slug: "challenges" },
  { icon: BookOpen, title: "Reflection Sessions", text: "Pause, process, and internalize.", slug: "reflection" },
  { icon: GraduationCap, title: "Mentor Guidance", text: "Personal feedback from trained mentors.", slug: "mentors" },
  { icon: Flower2, title: "Mindfulness & Self Development", text: "Build inner calm and focus.", slug: "mindfulness" },
];

export const YoungExperience = () => {
  return (
    <section data-testid="young-experience-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Learning Experience"
          title="Built for How Adults Actually Grow"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={i * 0.06}>
              <div
                data-testid={`young-experience-card-${it.slug}`}
                className="group flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-white p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
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
