import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Flower2,
  Gamepad2,
  GraduationCap,
  MessagesSquare,
  Palette,
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
  { icon: Gamepad2, title: "Interactive Games", text: "Every lesson begins as a game.", slug: "games" },
  { icon: Palette, title: "Creative Activities", text: "Art, craft, and imagination at work.", slug: "creative" },
  { icon: MessagesSquare, title: "Group Discussions", text: "Every child gets heard.", slug: "discussions" },
  { icon: Flower2, title: "Yoga & Meditation", text: "Calm minds and healthy bodies.", slug: "yoga" },
  { icon: BookOpen, title: "Story-Based Learning", text: "Values taught through stories.", slug: "stories" },
  { icon: GraduationCap, title: "Mentor Guidance", text: "Caring mentors for every child.", slug: "mentors" },
];

export const KidsMethod = () => {
  return (
    <section data-testid="kids-method-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Our Learning Method"
          title="Designed for How Children Actually Learn"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={i * 0.06}>
              <div
                data-testid={`kids-method-card-${it.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
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
