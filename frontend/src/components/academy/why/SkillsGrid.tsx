import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Compass,
  Crown,
  Heart,
  Hourglass,
  Lightbulb,
  Mic,
  Puzzle,
  Scale,
  Smartphone,
  Target,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Skill {
  icon: LucideIcon;
  enTitle: string;
  mrTitle: string;
  enText: string;
  mrText: string;
  slug: string;
  tint: "orange" | "green" | "cream";
}

const SKILLS: Skill[] = [
  { icon: Target, enTitle: "Goal Setting", mrTitle: "ध्येय निश्चिती", enText: "Turn dreams into clear, written targets.", mrText: "स्वप्नांना स्पष्ट, लेखी लक्ष्यांमध्ये बदला.", slug: "goal-setting", tint: "orange" },
  { icon: Scale, enTitle: "Decision Making", mrTitle: "निर्णयक्षमता", enText: "Choose wisely, even under pressure.", mrText: "ताणाखालीही शहाणपणाने निवडा.", slug: "decision-making", tint: "green" },
  { icon: Puzzle, enTitle: "Problem Solving", mrTitle: "प्रश्नसोडवणूक", enText: "Break challenges into solvable steps.", mrText: "आव्हानांचे सोडवता येणाऱ्या पायऱ्यांत विभाजन करा.", slug: "problem-solving", tint: "cream" },
  { icon: Lightbulb, enTitle: "Creative Thinking", mrTitle: "सर्जनशील विचार", enText: "Find fresh ideas beyond the obvious.", mrText: "ठराविक उत्तरांच्या पलीकडे नव्या कल्पना शोधा.", slug: "creative", tint: "orange" },
  { icon: Hourglass, enTitle: "Self Discipline", mrTitle: "आत्मशिस्त", enText: "Let routine, not mood, run the day.", mrText: "मूडने नव्हे, दिनक्रमाने दिवस चालवा.", slug: "discipline", tint: "green" },
  { icon: Heart, enTitle: "Emotional Balance", mrTitle: "भावनिक संतुलन", enText: "Respond calmly instead of reacting.", mrText: "प्रतिक्रिया देण्याऐवजी शांततेने प्रत्युत्तर द्या.", slug: "emotional", tint: "cream" },
  { icon: Users, enTitle: "Teamwork", mrTitle: "संघकार्य", enText: "Win together, not alone.", mrText: "एकटे नव्हे, मिळून जिंका.", slug: "teamwork", tint: "orange" },
  { icon: Crown, enTitle: "Leadership", mrTitle: "नेतृत्व", enText: "Take charge and inspire others.", mrText: "जबाबदारी घ्या आणि इतरांना प्रेरणा द्या.", slug: "leadership", tint: "green" },
  { icon: Mic, enTitle: "Public Speaking", mrTitle: "सार्वजनिक भाषण", enText: "Speak with clarity and courage.", mrText: "स्पष्टतेने आणि धैर्याने बोला.", slug: "speaking", tint: "cream" },
  { icon: Brain, enTitle: "Critical Thinking", mrTitle: "चिकित्सक विचार", enText: "Question, analyse, then conclude.", mrText: "प्रश्न विचारा, विश्लेषण करा, मग निष्कर्ष काढा.", slug: "critical", tint: "orange" },
  { icon: Compass, enTitle: "Time Management", mrTitle: "वेळ व्यवस्थापन", enText: "Give every hour a purpose.", mrText: "प्रत्येक तासाला हेतू द्या.", slug: "time", tint: "green" },
  { icon: Smartphone, enTitle: "Digital Responsibility", mrTitle: "डिजिटल जबाबदारी", enText: "Control the screen, not the reverse.", mrText: "स्क्रीनवर ताबा ठेवा, उलट नव्हे.", slug: "digital", tint: "cream" },
];

const TINTS = {
  orange: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]",
  green: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]",
  cream: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]",
};

export const SkillsGrid = () => {
  const { t } = useLang();
  return (
    <section data-testid="why-skills-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow={t("Skills Every Student Develops", "प्रत्येक विद्यार्थ्यात घडणारी कौशल्ये")}
          title={t("Twelve Skills for Life", "आयुष्यासाठी बारा कौशल्ये")}
          description={t(
            "Every program at Rupantaram trains this complete life-skills toolkit.",
            "रूपांतरम्मधील प्रत्येक कार्यक्रम हा संपूर्ण जीवनकौशल्य-संच शिकवतो."
          )}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`skill-card-${s.slug}`}
                className="group flex h-full items-start gap-4 rounded-[10px] border border-[#e1dfdf] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white ${TINTS[s.tint]}`}
                >
                  <s.icon size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#18463b]">{t(s.enTitle, s.mrTitle)}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#7a7a7a] sm:text-sm">{t(s.enText, s.mrText)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
