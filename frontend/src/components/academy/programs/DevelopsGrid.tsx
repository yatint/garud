import type { LucideIcon } from "lucide-react";
import {
  Crown,
  Flame,
  Heart,
  Mic,
  ShieldCheck,
  Smartphone,
  Target,
  Timer,
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
  { icon: Flame, title: "Self Confidence", text: "Believe in yourself, anywhere.", slug: "confidence" },
  { icon: Mic, title: "Communication", text: "Express ideas clearly and listen well.", slug: "communication" },
  { icon: Crown, title: "Leadership", text: "Take initiative and guide others.", slug: "leadership" },
  { icon: Target, title: "Goal Setting", text: "Know where you're going and why.", slug: "goals" },
  { icon: Heart, title: "Emotional Balance", text: "Stay calm, respond with maturity.", slug: "emotional" },
  { icon: Timer, title: "Time Management", text: "Make every hour count.", slug: "time" },
  { icon: Smartphone, title: "Digital Responsibility", text: "Use screens with control and purpose.", slug: "digital" },
  { icon: ShieldCheck, title: "Character & Values", text: "Honesty, respect, and responsibility for life.", slug: "character" },
];

export const DevelopsGrid = () => {
  return (
    <section data-testid="programs-develops-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="What Every Program Develops"
          title="One Toolkit, Every Program"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.07}>
              <div
                data-testid={`develops-card-${it.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <it.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
