import type { LucideIcon } from "lucide-react";
import { Briefcase, CheckCircle2, Home, Smile, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface OutcomeGroup {
  icon: LucideIcon;
  audience: string;
  outcomes: string[];
  slug: string;
  accent: string;
}

const GROUPS: OutcomeGroup[] = [
  {
    icon: Smile,
    audience: "For Children",
    slug: "children",
    accent: "border-t-[#f68a4a]",
    outcomes: ["Better concentration", "Improved confidence", "Respectful behaviour", "Healthy habits"],
  },
  {
    icon: Zap,
    audience: "For Teenagers",
    slug: "teenagers",
    accent: "border-t-[#18463b]",
    outcomes: ["Career clarity", "Leadership qualities", "Emotional maturity", "Screen discipline"],
  },
  {
    icon: Home,
    audience: "For Parents",
    slug: "parents",
    accent: "border-t-[#f0a500]",
    outcomes: ["Better communication", "Stronger family bonding", "Understanding child psychology", "Positive parenting approach"],
  },
  {
    icon: Briefcase,
    audience: "For Young Adults",
    slug: "young-adults",
    accent: "border-t-[#0b5d3b]",
    outcomes: ["Goal-oriented mindset", "Professional communication", "Financial awareness", "Responsible decision making"],
  },
];

export const Outcomes = () => {
  return (
    <section data-testid="why-outcomes-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Outcomes We Create"
          title="Visible Change for Every Member of the Family"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {GROUPS.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.08}>
              <div
                data-testid={`outcome-group-${g.slug}`}
                className={`card-glow-hover h-full rounded-[10px] border border-[#e1dfdf] border-t-2 bg-white p-7 ${g.accent}`}
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#18463b] text-white">
                  <g.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{g.audience}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {g.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#f68a4a]" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
