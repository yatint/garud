import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Compass,
  Crown,
  Mic,
  MonitorSmartphone,
  Scale,
  Sparkles,
  Sun,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

interface Benefit {
  icon: LucideIcon;
  title: string;
  slug: string;
}

const BENEFITS: Benefit[] = [
  { icon: Sparkles, title: "Improved self-confidence", slug: "confidence" },
  { icon: BookOpen, title: "Better study focus", slug: "study-focus" },
  { icon: Mic, title: "Strong communication skills", slug: "communication" },
  { icon: Crown, title: "Leadership qualities", slug: "leadership" },
  { icon: MonitorSmartphone, title: "Reduced screen dependency", slug: "screen" },
  { icon: Sun, title: "Positive mindset", slug: "mindset" },
  { icon: Compass, title: "Clear career direction", slug: "career" },
  { icon: Scale, title: "Responsible decision making", slug: "decisions" },
];

export const BenefitsList = () => {
  return (
    <section id="benefits" data-testid="benefits-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="Measurable Benefits"
          title="What Parents Notice Within Weeks"
          description="The transformation doesn't stay in the classroom — it shows up at the study table, at home, and in every decision your child makes."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 4) * 0.08}>
              <div
                data-testid={`benefit-card-${b.slug}`}
                className="group flex h-full items-center gap-4 rounded-[10px] border border-[#e1dfdf] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a] hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#18463b] text-white transition-colors duration-300 group-hover:bg-[#f68a4a]">
                  <b.icon size={20} />
                </span>
                <span className="font-heading text-sm font-bold text-[#18463b] sm:text-base">
                  {b.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
