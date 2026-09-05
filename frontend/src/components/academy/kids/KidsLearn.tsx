import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarCheck,
  Flame,
  Heart,
  HeartHandshake,
  Mic,
  Palette,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Item {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
  tint: string;
}

const ITEMS: Item[] = [
  { icon: Flame, title: "Self Confidence", text: "Speak up, try new things, believe in yourself.", slug: "confidence", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: CalendarCheck, title: "Good Habits", text: "Small daily routines that stick for life.", slug: "habits", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: HeartHandshake, title: "Respect & Values", text: "Respect for parents, teachers, and friends.", slug: "respect", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
  { icon: Mic, title: "Communication Skills", text: "Express thoughts clearly and listen well.", slug: "communication", tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]" },
  { icon: Palette, title: "Creativity", text: "Imagine, create, and think freely.", slug: "creativity", tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]" },
  { icon: Users, title: "Teamwork", text: "Share, cooperate, and win together.", slug: "teamwork", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: BookOpen, title: "Study Discipline", text: "Focus better and enjoy learning daily.", slug: "study", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: Heart, title: "Emotional Awareness", text: "Understand feelings and handle them kindly.", slug: "emotions", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
];

export const KidsLearn = () => {
  return (
    <section data-testid="kids-learn-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="What Children Learn"
          title="Eight Building Blocks of a Confident Child"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`kids-learn-card-${it.slug}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#e1dfdf] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white ${it.tint}`}
                >
                  <it.icon size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#18463b]">{it.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#7a7a7a] sm:text-sm">{it.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
