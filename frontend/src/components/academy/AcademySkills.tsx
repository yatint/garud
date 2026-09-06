import type { LucideIcon } from "lucide-react";
import { Compass, HeartHandshake, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface SkillGroup {
  icon: LucideIcon;
  en: string;
  mr: string;
  skills: Array<{ en: string; mr: string }>;
  slug: string;
}

const GROUPS: SkillGroup[] = [
  {
    icon: Target,
    en: "Self-Mastery & Study Skills",
    mr: "स्वयं-प्रभुत्व व अध्ययन कौशल्य",
    slug: "self-mastery",
    skills: [
      { en: "Goal Setting", mr: "ध्येय निश्चिती" },
      { en: "Self-Discipline", mr: "आत्मशिस्त" },
      { en: "Perseverance", mr: "चिकाटी" },
      { en: "Emotional Balance", mr: "भावनिक संतुलन" },
      { en: "Decision Making", mr: "निर्णयक्षमता" },
      { en: "Study Discipline", mr: "अभ्यासाची शिस्त" },
      { en: "Reading Habit", mr: "वाचनाची सवय" },
      { en: "Writing Skills", mr: "लेखन कौशल्य" },
      { en: "Critical Thinking", mr: "चिकित्सक विचार" },
      { en: "Information Analysis", mr: "माहितीचे विश्लेषण" },
      { en: "Public Speaking", mr: "सार्वजनिक भाषण" },
    ],
  },
  {
    icon: HeartHandshake,
    en: "Character, Leadership & Relationships",
    mr: "चारित्र्य, नेतृत्व व नातेसंबंध",
    slug: "character",
    skills: [
      { en: "Listening Skills", mr: "ऐकण्याचे कौशल्य" },
      { en: "Teamwork", mr: "संघभावना" },
      { en: "Leadership", mr: "नेतृत्व" },
      { en: "Conflict Resolution", mr: "मतभेद सोडवणे" },
      { en: "Respect for Parents", mr: "पालकांचा आदर" },
      { en: "Healthy Friendships", mr: "चांगली मैत्री" },
      { en: "Values & Character", mr: "मूल्ये व चारित्र्य" },
      { en: "Relationship Awareness", mr: "नात्यांची जाणीव" },
    ],
  },
  {
    icon: Compass,
    en: "Future Readiness",
    mr: "भविष्यासाठी सज्जता",
    slug: "future",
    skills: [
      { en: "Social Responsibility", mr: "सामाजिक जबाबदारी" },
      { en: "Career Direction", mr: "करिअरची दिशा" },
      { en: "Digital Literacy", mr: "डिजिटल साक्षरता" },
      { en: "Cyber Safety", mr: "सायबर सुरक्षा" },
      { en: "Financial Literacy", mr: "आर्थिक साक्षरता" },
      { en: "Environmental Responsibility", mr: "पर्यावरणीय जबाबदारी" },
    ],
  },
];

export const AcademySkills = () => {
  const { t } = useLang();
  return (
    <section id="skills" data-testid="academy-skills-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("What We Teach", "आम्ही काय शिकवतो")}
          title={t("25 Life Skills Schools Don't Cover", "शाळा न शिकवलेली २५ जीवनकौशल्ये")}
          description={t(
            "Three carefully designed tracks that shape self-mastery, character, and readiness for the real world.",
            "आत्म-प्रभुत्व, चारित्र्य आणि खऱ्या जगासाठी सज्जता घडवणारे तीन नियोजित मार्ग."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.1}>
              <div
                data-testid={`skill-group-${g.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <g.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#18463b]">{t(g.en, g.mr)}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s.en}
                      data-testid={`skill-pill-${s.en.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className="rounded-full border border-[#e1dfdf] bg-[#fbfafa] px-3.5 py-1.5 text-xs font-semibold text-[#444] transition-colors duration-300 hover:border-[#f68a4a] hover:text-[#e0701f]"
                    >
                      {t(s.en, s.mr)}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
