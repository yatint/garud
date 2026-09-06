import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  MessagesSquare,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const EXPERIENCE: Array<{ icon: LucideIcon; enTitle: string; mrTitle: string; enText: string; mrText: string; slug: string }> = [
  { icon: CalendarCheck, enTitle: "Daily Activities", mrTitle: "दैनिक उपक्रम", enText: "Short, guided tasks every day.", mrText: "रोज छोटी, मार्गदर्शित कृती.", slug: "daily" },
  { icon: GraduationCap, enTitle: "Mentor Guidance", mrTitle: "मार्गदर्शकांचे मार्गदर्शन", enText: "Personal direction all 30 days.", mrText: "सर्व ३० दिवस वैयक्तिक दिशा.", slug: "mentors" },
  { icon: MessagesSquare, enTitle: "Group Discussions", mrTitle: "समूह चर्चा", enText: "Share progress and learn together.", mrText: "प्रगती सामायिक करा आणि एकत्र शिका.", slug: "discussions" },
  { icon: Trophy, enTitle: "Practical Challenges", mrTitle: "प्रात्यक्षिक आव्हाने", enText: "Weekly real-life skill challenges.", mrText: "साप्ताहिक खऱ्या आयुष्यातील कौशल्य आव्हाने.", slug: "challenges" },
  { icon: BookOpen, enTitle: "Reflection Sessions", mrTitle: "आत्मपरिक्षण सत्रे", enText: "Process experiences honestly.", mrText: "अनुभवांचे प्रामाणिक मूल्यमापन.", slug: "reflection" },
  { icon: TrendingUp, enTitle: "Weekly Progress Review", mrTitle: "साप्ताहिक प्रगती आढावा", enText: "Track growth, adjust, improve.", mrText: "प्रगती तपासा, सुधारा, वाढा.", slug: "review" },
];

const IDEAL = [
  { en: "Students seeking discipline", mr: "शिस्त हवी असलेले विद्यार्थी" },
  { en: "Teenagers building confidence", mr: "आत्मविश्वास घडवणारे तरुण" },
  { en: "Young adults searching for direction", mr: "दिशा शोधणारे युवक" },
  { en: "Individuals wanting better habits", mr: "चांगल्या सवयी हव्या असणारे" },
  { en: "Families committed to personal growth", mr: "वैयक्तिक प्रगतीसाठी कटिबद्ध कुटुंबे" },
];

const OUTCOMES = [
  { en: "Consistent positive habits", mr: "सातत्यपूर्ण सकारात्मक सवयी" },
  { en: "Greater confidence", mr: "अधिक आत्मविश्वास" },
  { en: "Improved communication", mr: "सुधारलेला संवाद" },
  { en: "Stronger leadership mindset", mr: "दृढ नेतृत्व विचारसरणी" },
  { en: "Better emotional balance", mr: "चांगले भावनिक संतुलन" },
  { en: "Responsible decision making", mr: "जबाबदार निर्णयक्षमता" },
  { en: "Clear personal goals", mr: "स्पष्ट वैयक्तिक ध्येये" },
  { en: "A disciplined daily routine", mr: "शिस्तबद्ध दैनिक दिनक्रम" },
];

export const ThirtyExperienceOutcomes = () => {
  const { t } = useLang();
  return (
    <>
      <section data-testid="thirty-experience-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="06"
            eyebrow={t("Learning Experience", "शिक्षण अनुभव")}
            title={t("Guided Every Single Day", "रोज मार्गदर्शनाखाली")}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.06}>
                <div
                  data-testid={`thirty-experience-card-${e.slug}`}
                  className="group flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-[#fbfafa] p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                    <e.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b]">{t(e.enTitle, e.mrTitle)}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a]">{t(e.enText, e.mrText)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="thirty-ideal-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="07" eyebrow={t("Who Should Join?", "कोणी सहभागी व्हावे?")} title={t("Ideal For", "यांच्यासाठी योग्य")} align="center" />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-testid="thirty-ideal-checklist">
            {IDEAL.map((id, i) => (
              <Reveal key={id.en} delay={0.06 * i}>
                <div
                  data-testid={`thirty-ideal-${i + 1}`}
                  className="group flex items-center gap-4 rounded-xl border border-[#e1dfdf] bg-[#fbfafa] px-5 py-4 transition-all duration-300 hover:border-[#f68a4a]/60 hover:bg-white"
                >
                  <CheckCircle2 size={22} className="shrink-0 text-[#f68a4a] transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm font-semibold text-[#333] sm:text-base">{t(id.en, id.mr)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-testid="thirty-outcomes-section"
        className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">{t("Outcomes", "यशाचे निकष")}</p>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("After 30 Days, Participants Develop", "३० दिवसांनंतर सहभागींमध्ये घडते")}
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o.en} delay={(i % 4) * 0.06}>
                <div
                  data-testid={`thirty-outcome-${i + 1}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f68a4a]/50"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-[#f68a4a]" />
                  <span className="text-sm font-semibold text-white/90">{t(o.en, o.mr)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
