import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  ClipboardCheck,
  Crown,
  Dumbbell,
  Flower2,
  Heart,
  HeartHandshake,
  Home,
  Hourglass,
  Mic,
  NotebookPen,
  ShieldCheck,
  Sun,
  Target,
  Timer,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const DAILY: Array<{ icon: LucideIcon; enTitle: string; mrTitle: string; slug: string }> = [
  { icon: ClipboardCheck, enTitle: "Habit Tracking", mrTitle: "सवयींचा मागोवा", slug: "habit-tracking" },
  { icon: NotebookPen, enTitle: "Reflection Journal", mrTitle: "आत्मपरिक्षण वही", slug: "journal" },
  { icon: BookOpen, enTitle: "Reading", mrTitle: "वाचन", slug: "reading" },
  { icon: Flower2, enTitle: "Meditation & Mindfulness", mrTitle: "ध्यान आणि माइंडफुलनेस", slug: "meditation" },
  { icon: Dumbbell, enTitle: "Physical Activity", mrTitle: "शारीरिक व्यायाम", slug: "physical" },
  { icon: Home, enTitle: "Family Communication", mrTitle: "कौटुंबिक संवाद", slug: "family" },
  { icon: Target, enTitle: "Goal Review", mrTitle: "ध्येय आढावा", slug: "goal-review" },
  { icon: Heart, enTitle: "Gratitude Practice", mrTitle: "कृतज्ञता साधना", slug: "gratitude" },
];

const CORE: Array<{ icon: LucideIcon; enTitle: string; mrTitle: string; enText: string; mrText: string; slug: string }> = [
  { icon: Hourglass, enTitle: "Self Discipline", mrTitle: "आत्मशिस्त", enText: "Routine over mood, every single day.", mrText: "रोज, मूडपेक्षा दिनक्रम महत्त्वाचा.", slug: "discipline" },
  { icon: Target, enTitle: "Goal Setting", mrTitle: "ध्येय निश्चिती", enText: "Clear targets with daily review.", mrText: "दैनिक आढाव्यासह स्पष्ट लक्ष्ये.", slug: "goals" },
  { icon: Crown, enTitle: "Leadership", mrTitle: "नेतृत्व", enText: "Take charge of yourself and others.", mrText: "स्वतःची आणि इतरांची जबाबदारी घ्या.", slug: "leadership" },
  { icon: Mic, enTitle: "Communication", mrTitle: "संवाद", enText: "Speak and listen with confidence.", mrText: "आत्मविश्वासाने बोला आणि ऐका.", slug: "communication" },
  { icon: HeartHandshake, enTitle: "Emotional Intelligence", mrTitle: "भावनिक बुद्धिमत्ता", enText: "Understand and manage emotions.", mrText: "भावना समजून घ्या आणि सांभाळा.", slug: "emotional" },
  { icon: Sun, enTitle: "Positive Thinking", mrTitle: "सकारात्मक विचार", enText: "Train a resilient, hopeful mind.", mrText: "लवचिक, आशावादी मन घडवा.", slug: "positive" },
  { icon: Timer, enTitle: "Time Management", mrTitle: "वेळ व्यवस्थापन", enText: "A place for everything in your day.", mrText: "तुमच्या दिवसातील प्रत्येक गोष्टीला ठिकाण.", slug: "time" },
  { icon: ShieldCheck, enTitle: "Character & Values", mrTitle: "चारित्र्य आणि मूल्ये", enText: "Integrity that outlasts the program.", mrText: "कार्यक्रमापलीकडे टिकणारे प्रामाणिकपणा.", slug: "character" },
];

export const ThirtyDailyCore = () => {
  const { t } = useLang();
  return (
    <>
      <section data-testid="thirty-daily-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow={t("What You'll Practice Daily", "रोज काय साधना कराल")}
            title={t("Your Daily Transformation Toolkit", "तुमचा दैनिक परिवर्तन संच")}
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {DAILY.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 4) * 0.06}>
                <div
                  data-testid={`thirty-daily-${d.slug}`}
                  className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    <d.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b] sm:text-base">
                    {t(d.enTitle, d.mrTitle)}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="thirty-core-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="05"
            eyebrow={t("Core Areas of Transformation", "परिवर्तनाचे मुख्य घटक")}
            title={t("Eight Areas That Change Together", "एकत्र बदलणारे आठ घटक")}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.06}>
                <div
                  data-testid={`thirty-core-card-${c.slug}`}
                  className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    <c.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-[#18463b]">{t(c.enTitle, c.mrTitle)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#555]">{t(c.enText, c.mrText)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
