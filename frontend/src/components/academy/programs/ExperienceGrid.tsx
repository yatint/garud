import type { LucideIcon } from "lucide-react";
import {
  Flower2,
  GraduationCap,
  MessagesSquare,
  Presentation,
  Trophy,
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
  { icon: Presentation, enTitle: "Interactive Workshops", mrTitle: "परस्पर संवादी कार्यशाळा", enText: "Learn by doing, not listening.", mrText: "ऐकून नव्हे, करून शिका.", slug: "workshops" },
  { icon: MessagesSquare, enTitle: "Group Discussions", mrTitle: "समूह चर्चा", enText: "Every voice gets heard.", mrText: "प्रत्येक आवाज ऐकला जातो.", slug: "discussions" },
  { icon: Wrench, enTitle: "Practical Activities", mrTitle: "प्रात्यक्षिक उपक्रम", enText: "Skills practiced in real scenarios.", mrText: "प्रत्यक्ष परिस्थितीत कौशल्यांचा सराव.", slug: "activities" },
  { icon: Flower2, enTitle: "Yoga & Mindfulness", mrTitle: "योग आणि माइंडफुलनेस", enText: "A calm mind powers a focused day.", mrText: "शांत मन एकाग्र दिवसाची ताकद.", slug: "yoga" },
  { icon: Trophy, enTitle: "Team Challenges", mrTitle: "संघ आव्हाने", enText: "Compete, cooperate, celebrate.", mrText: "स्पर्धा करा, सहकार्य करा, साजरे करा.", slug: "challenges" },
  { icon: GraduationCap, enTitle: "Mentor Guidance", mrTitle: "मार्गदर्शकांचे मार्गदर्शन", enText: "Personal feedback from trained mentors.", mrText: "प्रशिक्षित मार्गदर्शकांचा वैयक्तिक अभिप्राय.", slug: "mentors" },
];

export const ExperienceGrid = () => {
  const { t } = useLang();
  return (
    <section data-testid="programs-experience-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Learning Experience", "शिक्षण अनुभव")}
          title={t("How Every Session Feels", "प्रत्येक सत्र कसे असते")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={i * 0.06}>
              <div
                data-testid={`experience-card-${it.slug}`}
                className="group flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
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
