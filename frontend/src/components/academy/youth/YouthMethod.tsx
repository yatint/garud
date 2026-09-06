import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Flower2,
  GraduationCap,
  MessagesSquare,
  Presentation,
  Trophy,
  VenetianMask,
  Wrench,
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
  { icon: Presentation, enTitle: "Interactive Workshops", mrTitle: "परस्पर कार्यशाळा", enText: "Skills learned by doing.", mrText: "करून शिकलेली कौशल्ये.", slug: "workshops" },
  { icon: MessagesSquare, enTitle: "Group Discussions", mrTitle: "गटचर्चा", enText: "Every voice gets heard.", mrText: "प्रत्येक आवाज ऐकला जातो.", slug: "discussions" },
  { icon: VenetianMask, enTitle: "Role Play", mrTitle: "भूमिका अभिनय", enText: "Real situations, rehearsed safely.", mrText: "खऱ्या परिस्थितींचा सुरक्षित सराव.", slug: "role-play" },
  { icon: Trophy, enTitle: "Team Challenges", mrTitle: "सांघिक आव्हाने", enText: "Compete, cooperate, celebrate.", mrText: "स्पर्धा करा, सहकार्य करा, साजरे करा.", slug: "team-challenges" },
  { icon: Flower2, enTitle: "Yoga & Meditation", mrTitle: "योग व ध्यान", enText: "A calm mind powers a focused day.", mrText: "शांत मन एकाग्र दिवसाची ताकद.", slug: "yoga-meditation" },
  { icon: BookOpen, enTitle: "Reflection Sessions", mrTitle: "चिंतन सत्रे", enText: "Pause, process, and internalize.", mrText: "थांबा, विचार करा आणि आत्मसात करा.", slug: "reflection" },
  { icon: GraduationCap, enTitle: "Mentor Guidance", mrTitle: "मार्गदर्शकांचे मार्गदर्शन", enText: "Personal feedback from trained mentors.", mrText: "प्रशिक्षित मार्गदर्शकांचा वैयक्तिक अभिप्राय.", slug: "mentorship" },
  { icon: Wrench, enTitle: "Practical Activities", mrTitle: "प्रयोगशील उपक्रम", enText: "Skills practiced in real scenarios.", mrText: "प्रत्यक्ष परिस्थितीत कौशल्यांचा सराव.", slug: "practical" },
];

export const YouthMethod = () => {
  const { t } = useLang();
  return (
    <section data-testid="youth-method-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Learning Method", "शिकण्याची पद्धत")}
          title={t("Zero Lectures. 100% Experience.", "उपदेश शून्य. अनुभव शंभर टक्के.")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`youth-method-card-${it.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-[#fbfafa] p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
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
