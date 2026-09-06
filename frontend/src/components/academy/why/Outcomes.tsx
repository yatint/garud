import type { LucideIcon } from "lucide-react";
import { Briefcase, CheckCircle2, Home, Smile, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface OutcomeGroup {
  icon: LucideIcon;
  enAudience: string;
  mrAudience: string;
  outcomes: Array<{ en: string; mr: string }>;
  slug: string;
  accent: string;
}

const GROUPS: OutcomeGroup[] = [
  {
    icon: Smile,
    enAudience: "For Children",
    mrAudience: "मुलांसाठी",
    slug: "children",
    accent: "border-t-[#f68a4a]",
    outcomes: [
      { en: "Better concentration", mr: "अधिक एकाग्रता" },
      { en: "Improved confidence", mr: "वाढलेला आत्मविश्वास" },
      { en: "Respectful behaviour", mr: "आदरयुक्त वागणूक" },
      { en: "Healthy habits", mr: "निरोगी सवयी" },
    ],
  },
  {
    icon: Zap,
    enAudience: "For Teenagers",
    mrAudience: "तरुणांसाठी",
    slug: "teenagers",
    accent: "border-t-[#18463b]",
    outcomes: [
      { en: "Career clarity", mr: "करिअर स्पष्टता" },
      { en: "Leadership qualities", mr: "नेतृत्व गुण" },
      { en: "Emotional maturity", mr: "भावनिक परिपक्वता" },
      { en: "Screen discipline", mr: "स्क्रीन शिस्त" },
    ],
  },
  {
    icon: Home,
    enAudience: "For Parents",
    mrAudience: "पालकांसाठी",
    slug: "parents",
    accent: "border-t-[#f0a500]",
    outcomes: [
      { en: "Better communication", mr: "चांगला संवाद" },
      { en: "Stronger family bonding", mr: "दृढ कौटुंबिक बंध" },
      { en: "Understanding child psychology", mr: "बालमानसशास्त्राची समज" },
      { en: "Positive parenting approach", mr: "सकारात्मक पालकत्व दृष्टीकोन" },
    ],
  },
  {
    icon: Briefcase,
    enAudience: "For Young Adults",
    mrAudience: "युवकांसाठी",
    slug: "young-adults",
    accent: "border-t-[#0b5d3b]",
    outcomes: [
      { en: "Goal-oriented mindset", mr: "ध्येयाभिमुख विचारसरणी" },
      { en: "Professional communication", mr: "व्यावसायिक संवाद" },
      { en: "Financial awareness", mr: "आर्थिक जाणीव" },
      { en: "Responsible decision making", mr: "जबाबदार निर्णयक्षमता" },
    ],
  },
];

export const Outcomes = () => {
  const { t } = useLang();
  return (
    <section data-testid="why-outcomes-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Outcomes We Create", "आम्ही घडवतो ते बदल")}
          title={t("Visible Change for Every Member of the Family", "कुटुंबातील प्रत्येक सदस्यासाठी दिसणारा बदल")}
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
                <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{t(g.enAudience, g.mrAudience)}</h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {g.outcomes.map((o) => (
                    <li key={o.en} className="flex items-start gap-2.5 text-sm text-[#555]">
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#f68a4a]" />
                      {t(o.en, o.mr)}
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
