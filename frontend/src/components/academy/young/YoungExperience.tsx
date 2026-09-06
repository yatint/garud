import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Flower2,
  GraduationCap,
  Presentation,
  Trophy,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Item {
  icon: LucideIcon;
  enTitle: string;
  mrTitle: string;
  enText: string;
  mrText: string;
  slug: string;
}

const ITEMS: Item[] = [
  { icon: Presentation, enTitle: "Interactive Workshops", mrTitle: "परस्पर संवादी कार्यशाळा", enText: "Hands-on sessions, zero lectures.", mrText: "प्रात्यक्षिक सत्रे, भाषणे शून्य.", slug: "workshops" },
  { icon: Users, enTitle: "Group Activities", mrTitle: "समूह उपक्रम", enText: "Learn with and from your peers.", mrText: "सहकाऱ्यांसोबत आणि त्यांच्याकडून शिका.", slug: "group" },
  { icon: Trophy, enTitle: "Practical Challenges", mrTitle: "प्रात्यक्षिक आव्हाने", enText: "Real scenarios, real decisions.", mrText: "खऱ्या परिस्थिती, खरे निर्णय.", slug: "challenges" },
  { icon: BookOpen, enTitle: "Reflection Sessions", mrTitle: "आत्मपरिक्षण सत्रे", enText: "Pause, process, and internalize.", mrText: "थांबा, विचार करा आणि आत्मसात करा.", slug: "reflection" },
  { icon: GraduationCap, enTitle: "Mentor Guidance", mrTitle: "मार्गदर्शकांचे मार्गदर्शन", enText: "Personal feedback from trained mentors.", mrText: "प्रशिक्षित मार्गदर्शकांचा वैयक्तिक अभिप्राय.", slug: "mentors" },
  { icon: Flower2, enTitle: "Mindfulness & Self Development", mrTitle: "माइंडफुलनेस आणि स्व-विकास", enText: "Build inner calm and focus.", mrText: "आंतरिक शांतता आणि एकाग्रता घडवा.", slug: "mindfulness" },
];

export const YoungExperience = () => {
  const { t } = useLang();
  return (
    <section data-testid="young-experience-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Learning Experience", "शिक्षण अनुभव")}
          title={t("Built for How Adults Actually Grow", "प्रौढ खरोखर जसे वाढतात तशी रचना")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={i * 0.06}>
              <div
                data-testid={`young-experience-card-${it.slug}`}
                className="group flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-white p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                  <it.icon size={22} />
                </span>
                <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b]">{t(it.enTitle, it.mrTitle)}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a]">{t(it.enText, it.mrText)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
