import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Crown,
  Eye,
  Heart,
  Mic,
  Scale,
  Timer,
  Wallet,
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
  { icon: Eye, title: "Self Awareness", text: "Understand your strengths, emotions, and patterns.", slug: "self-awareness", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: Compass, title: "Career Direction", text: "Choose a path with clarity, not confusion.", slug: "career", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: Crown, title: "Leadership Skills", text: "Lead yourself first, then others.", slug: "leadership", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
  { icon: Mic, title: "Communication", text: "Speak, present, and connect with impact.", slug: "communication", tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]" },
  { icon: Scale, title: "Decision Making", text: "Make responsible choices under pressure.", slug: "decisions", tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]" },
  { icon: Wallet, title: "Financial Awareness", text: "Understand money, saving, and priorities.", slug: "financial", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: Heart, title: "Emotional Maturity", text: "Handle stress, setbacks, and relationships.", slug: "emotional", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: Timer, title: "Time Management", text: "Own your day before it owns you.", slug: "time", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
];

export const YoungDevelop = () => {
  return (
    <section data-testid="young-develop-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="What You'll Develop"
          title="Eight Capabilities for Adulthood"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`young-develop-card-${it.slug}`}
                className="group flex h-full items-start gap-4 rounded-[10px] border border-[#e1dfdf] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white ${it.tint}`}
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
