import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Crown,
  HeartHandshake,
  Home,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Feature {
  icon: LucideIcon;
  title: string;
  text: string;
  slug: string;
}

const FEATURES: Feature[] = [
  { icon: Zap, title: "Practical Learning", text: "Activity-based sessions instead of theoretical lectures.", slug: "practical" },
  { icon: Users, title: "Age-Specific Programs", text: "Separate curriculum for Kids, Youth, Parents & Young Adults.", slug: "age-specific" },
  { icon: HeartHandshake, title: "Emotional Intelligence", text: "Learn to manage emotions and relationships.", slug: "emotional" },
  { icon: Smartphone, title: "Digital Discipline", text: "Healthy use of mobile & social media.", slug: "digital" },
  { icon: Compass, title: "Career Clarity", text: "Goal setting and future planning.", slug: "career" },
  { icon: Crown, title: "Leadership Development", text: "Build confidence and decision-making ability.", slug: "leadership" },
  { icon: Home, title: "Parent Partnership", text: "Parents become active participants in growth.", slug: "parents" },
  { icon: ShieldCheck, title: "Character Building", text: "Values, respect, integrity and responsibility.", slug: "character" },
];

export const TrustFeatures = () => {
  return (
    <section data-testid="why-trust-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="Trusted by Families"
          title="Why Thousands of Families Trust Our Approach"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 4) * 0.07}>
              <div
                data-testid={`trust-card-${f.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <f.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
