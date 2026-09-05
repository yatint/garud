import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Crown,
  Eye,
  Heart,
  HeartHandshake,
  Hourglass,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Value {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
}

const VALUES: Value[] = [
  { icon: Eye, title: "Self Awareness", text: "Know your strengths, emotions, and purpose.", slug: "self-awareness" },
  { icon: Hourglass, title: "Discipline", text: "Small daily habits build big character.", slug: "discipline" },
  { icon: HeartHandshake, title: "Respect", text: "For parents, teachers, others, and self.", slug: "respect" },
  { icon: ShieldCheck, title: "Integrity", text: "Do the right thing, even when unseen.", slug: "integrity" },
  { icon: Crown, title: "Leadership", text: "Take responsibility and inspire others.", slug: "leadership" },
  { icon: Heart, title: "Service", text: "Contribute to family, society, and nation.", slug: "service" },
  { icon: Users, title: "Teamwork", text: "Achieve more together than alone.", slug: "teamwork" },
  { icon: BookOpen, title: "Lifelong Learning", text: "Stay curious, keep growing.", slug: "learning" },
];

export const CoreValues = () => {
  return (
    <section data-testid="about-values-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow="Our Core Values"
          title="The Values We Live By"
          description="Eight principles woven into every activity, every session, and every mentorship conversation."
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 4) * 0.07}>
              <div
                data-testid={`value-card-${v.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-[#fbfafa] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#f68a4a]/50 hover:shadow-[0_16px_40px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#18463b]/15 bg-white text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                  <v.icon size={30} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-[#18463b] sm:text-lg">
                  {v.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a] sm:text-sm">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
