import type { LucideIcon } from "lucide-react";
import { Compass, HeartHandshake, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface SkillGroup {
  icon: LucideIcon;
  en: string;
  mr: string;
  leadEn: string;
  leadMr: string;
  skills: Array<{ en: string; mr: string }>;
  slug: string;
}

const GROUPS: SkillGroup[] = [
  {
    icon: Target,
    en: "Self-Discipline & Study Skills",
    mr: "आत्मसंयम आणि अभ्यास कौशल्ये",
    leadEn: "For all-round growth — from personal discipline to intellectual ability —",
    leadMr: "विद्यार्थ्यांच्या वैयक्तिक शिस्तीपासून ते बौद्धिक क्षमतेपर्यंत सर्वांगीण विकास घडवण्यासाठी —",
    slug: "self-mastery",
    skills: [
      { en: "Goal Setting", mr: "ध्येय निश्चिती" },
      { en: "Self-Discipline", mr: "स्वयंशिस्त" },
      { en: "Perseverance", mr: "चिकाटी" },
      { en: "Emotional Balance", mr: "भावनिक समतोल" },
      { en: "Decision Making", mr: "निर्णयक्षमता" },
      { en: "Study Discipline", mr: "अभ्यासाची शिस्त" },
      { en: "Reading Habit", mr: "वाचनाची सवय" },
      { en: "Writing Skills", mr: "लेखन कौशल्य" },
      { en: "Critical Thinking", mr: "चिकित्सक विचार" },
      { en: "Information Analysis", mr: "माहिती विश्लेषण" },
      { en: "Public Speaking", mr: "सार्वजनिक भाषण" },
    ],
  },
  {
    icon: HeartHandshake,
    en: "Character, Leadership & Relationships",
    mr: "चारित्र्य, नेतृत्व आणि नातेसंबंध",
    leadEn: "To shape not just successful, but cultured and responsible personalities —",
    leadMr: "फक्त यशस्वी नव्हे तर सुसंस्कृत आणि जबाबदार व्यक्तिमत्त्व घडवण्यासाठी —",
    slug: "character",
    skills: [
      { en: "Listening Skills", mr: "ऐकण्याचे कौशल्य" },
      { en: "Teamwork", mr: "सांघिक कार्य" },
      { en: "Leadership", mr: "नेतृत्व" },
      { en: "Conflict Resolution", mr: "संघर्ष निराकरण" },
      { en: "Respect for Parents", mr: "पालकांचा आदर" },
      { en: "Healthy Friendships", mr: "निरोगी मैत्री" },
      { en: "Values & Character", mr: "मूल्ये आणि चारित्र्य" },
      { en: "Relationship Awareness", mr: "नातेसंबंधांची जाण" },
    ],
  },
  {
    icon: Compass,
    en: "Readiness for the Future",
    mr: "भविष्यासाठी सज्जता",
    leadEn: "To stand confident in today's changing world —",
    leadMr: "आजच्या बदलत्या जगात आत्मविश्वासाने उभे राहण्यासाठी —",
    slug: "future",
    skills: [
      { en: "Social Responsibility", mr: "सामाजिक जबाबदारी" },
      { en: "Clear Career Direction", mr: "स्पष्ट करिअर दिशा" },
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
          title={t("25 Life Skills Not Taught in School", "शाळेत न शिकवली जाणारी २५ जीवनकौशल्ये")}
          description={t(
            "At Garud Zep – Rupantaram, we don't just teach academics — we prepare students for life. Our entire training stands on three strong pillars: self-discipline, character, and readiness for the real world.",
            "गरुडझेप – रूपांतरम् मध्ये आम्ही केवळ अभ्यास शिकवत नाही, तर आयुष्य जगण्याची तयारी घडवतो. आत्मसंयम, चारित्र्य आणि प्रत्यक्ष जगासाठी सज्जता या तीन ठोस आधारस्तंभांवर आमचे संपूर्ण प्रशिक्षण उभे आहे."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {GROUPS.map((g, i) => (
            <Reveal key={g.slug} delay={i * 0.1}>
              <div
                data-testid={`skill-group-${g.slug}`}
                className="card-glow-hover group flex h-full flex-col rounded-[10px] border border-[#e1dfdf] bg-white p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <g.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-bold text-[#18463b]">
                  {t(`${i + 1}. ${g.en}`, `${["१", "२", "३"][i]}. ${g.mr}`)}
                </h3>
                <p className="mt-2 text-sm italic leading-relaxed text-[#999]">{t(g.leadEn, g.leadMr)}</p>
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

        <Reveal delay={0.2}>
          <div className="mx-auto mt-14 max-w-3xl text-center" data-testid="skills-closing-note">
            <p className="text-base leading-relaxed text-[#555] sm:text-lg">
              {t(
                "At Garud Zep – Rupantaram, every skill is not merely understood — it is embedded into students' behaviour through real action, experience, and consistent practice.",
                "गरुडझेप – रूपांतरम् मध्ये प्रत्येक कौशल्य केवळ समजून घेतले जात नाही, तर प्रत्यक्ष कृती, अनुभव आणि सातत्यपूर्ण सरावातून ते विद्यार्थ्यांच्या वर्तनात रुजवले जाते."
              )}
            </p>
            <p className="mt-5 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
              {t("This is not just education — this is transformation that shapes life.", "हे केवळ शिक्षण नाही — हे आयुष्य घडवणारे परिवर्तन आहे.")}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
