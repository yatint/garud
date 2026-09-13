import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  MessagesSquare,
  Presentation,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const METHODS: Array<{ icon: LucideIcon; enTitle: string; mrTitle: string; enText: string; mrText: string; slug: string }> = [
  { icon: Presentation, enTitle: "Interactive Workshops", mrTitle: "परस्पर संवादी कार्यशाळा", enText: "Skills learned by doing.", mrText: "करून शिकलेली कौशल्ये.", slug: "workshops" },
  { icon: MessagesSquare, enTitle: "Group Discussions", mrTitle: "समूह चर्चा", enText: "Ideas sharpened together.", mrText: "कल्पना एकत्र घडतात.", slug: "discussions" },
  { icon: Trophy, enTitle: "Practical Activities", mrTitle: "प्रात्यक्षिक उपक्रम", enText: "Real scenarios, real practice.", mrText: "खऱ्या परिस्थिती, खरा सराव.", slug: "activities" },
  { icon: BookOpen, enTitle: "Reflection Journals", mrTitle: "आत्मपरिक्षण वह्या", enText: "Writing that turns experience into insight.", mrText: "अनुभवाचे आकलनात रूपांतर करणारे लेखन.", slug: "journals" },
  { icon: GraduationCap, enTitle: "Mentor Guidance", mrTitle: "मार्गदर्शकांचे मार्गदर्शन", enText: "Trained mentors beside every participant.", mrText: "प्रत्येक सहभागीच्या पाठीशी प्रशिक्षित मार्गदर्शक.", slug: "mentors" },
  { icon: ClipboardCheck, enTitle: "Habit Building Challenges", mrTitle: "सवय निर्मिती आव्हाने", enText: "Daily challenges that make skills stick.", mrText: "दैनिक आव्हाने जी कौशल्ये टिकवतात.", slug: "challenges" },
];

const TABLE = [
  { program: "Kids Transform", programMr: "बाल रूपांतर", enFocus: "Confidence, habits, values, communication", mrFocus: "आत्मविश्वास, सवयी, मूल्ये, संवाद", href: "/programs/kids-transform" },
  { program: "Youth Transform", programMr: "किशोर रूपांतर", enFocus: "Leadership, discipline, emotional intelligence", mrFocus: "नेतृत्व, शिस्त, भावनिक बुद्धिमत्ता", href: "/youth-transform" },
  { program: "Young Adult Transform", programMr: "युवा रूपांतर", enFocus: "Career direction, decision making, responsibility", mrFocus: "करिअर दिशा, निर्णयक्षमता, जबाबदारी", href: "/programs/young-adult-transform" },
  { program: "Parenting 360°", programMr: "पालकत्व 360°", enFocus: "Positive parenting and family communication", mrFocus: "सकारात्मक पालकत्व आणि कौटुंबिक संवाद", href: "/programs/parenting-360" },
  { program: "30-Day Transform", programMr: "३० दिवसांचा रूपांतर", enFocus: "Daily habit formation and lifelong transformation", mrFocus: "दैनिक सवय निर्मिती आणि आजीवन परिवर्तन", href: "/programs/30-day-transform" },
];

const JOURNEY = [
  { enTitle: "Discover Yourself", mrTitle: "स्वतःला ओळखा", enText: "Honest self-awareness is the first skill.", mrText: "प्रामाणिक आत्मजाणीव हे पहिले कौशल्य.", slug: "discover" },
  { enTitle: "Build Better Habits", mrTitle: "चांगल्या सवयी घडवा", enText: "Daily discipline turns intention into routine.", mrText: "दैनिक शिस्त हेतूला दिनक्रमात बदलते.", slug: "habits" },
  { enTitle: "Strengthen Character", mrTitle: "चारित्र्य बळकट करा", enText: "Values practiced until they become identity.", mrText: "मूल्यांची अशी साधना की ती ओळख बनतात.", slug: "character" },
  { enTitle: "Lead with Confidence", mrTitle: "आत्मविश्वासाने नेतृत्व करा", enText: "Communication and leadership in action.", mrText: "कृतीतून संवाद आणि नेतृत्व.", slug: "lead" },
  { enTitle: "Live with Purpose", mrTitle: "ध्येयाने जगा", enText: "A meaningful, responsible, directed life.", mrText: "सार्थक, जबाबदार आणि दिशादर्शी आयुष्य.", slug: "purpose" },
];

export const LifeMethodTableJourney = () => {
  const { t } = useLang();
  return (
    <>
      <section data-testid="life-method-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="03"
            eyebrow={t("How We Teach Life Skills", "आम्ही जीवनकौशल्ये कशी शिकवतो")}
            title={t("Experience First, Theory Last", "आधी अनुभव, शेवटी सिद्धांत")}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {METHODS.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.06}>
                <div
                  data-testid={`life-method-card-${m.slug}`}
                  className="group flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-[#fbfafa] p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                    <m.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b]">{t(m.enTitle, m.mrTitle)}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a]">{t(m.enText, m.mrText)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="life-table-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow={t("Skills Across Every Age Group", "प्रत्येक वयोगटातील कौशल्ये")}
            title={t("The Same Skills, Tuned to Every Age", "तीच कौशल्ये, प्रत्येक वयाला साजेशी")}
            align="center"
          />
          <Reveal delay={0.1}>
            <div
              className="mt-12 overflow-hidden rounded-2xl border border-[#e1dfdf] shadow-[0_20px_50px_rgba(24,70,59,0.08)]"
              data-testid="life-skills-table"
            >
              <div className="grid grid-cols-[1fr_1.4fr] bg-[#18463b]">
                <p className="px-6 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#f8b183] sm:text-sm">
                  {t("Program", "कार्यक्रम")}
                </p>
                <p className="px-6 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#f8b183] sm:text-sm">
                  {t("Primary Focus", "मुख्य लक्ष")}
                </p>
              </div>
              {TABLE.map((row, i) => (
                <Link
                  key={row.program}
                  to={row.href}
                  data-testid={`life-table-row-${i + 1}`}
                  className={`group grid grid-cols-[1fr_1.4fr] items-center border-t border-[#e1dfdf] transition-colors hover:bg-[#f6f7f0] ${i % 2 === 0 ? "bg-white" : "bg-[#fdfdfb]"}`}
                >
                  <span className="flex items-center gap-2 px-6 py-4 font-heading text-sm font-bold text-[#18463b] sm:text-base">
                    {t(row.program, row.programMr)}
                    <ArrowRight size={14} className="text-[#f68a4a] opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                  <span className="px-6 py-4 text-sm text-[#555]">{t(row.enFocus, row.mrFocus)}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="life-journey-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="05"
            eyebrow={t("The Transformation Journey", "परिवर्तन प्रवास")}
            title={t("Five Steps to a Skilled Life", "कुशल आयुष्याच्या पाच पायऱ्या")}
            align="center"
          />
          <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(90deg,transparent,#f68a4a_15%,#f68a4a_85%,transparent)] lg:block" />
            {JOURNEY.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <div data-testid={`life-journey-step-${s.slug}`} className="group relative text-center">
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#f68a4a] bg-white font-heading text-base font-black text-[#f68a4a] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold text-[#18463b] sm:text-lg">
                    {t(s.enTitle, s.mrTitle)}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-[#7a7a7a]">
                    {t(s.enText, s.mrText)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
