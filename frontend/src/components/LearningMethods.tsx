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
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/lang";

interface Method {
  icon: LucideIcon;
  en: string;
  mr: string;
  slug: string;
}

const METHODS: Method[] = [
  { icon: Presentation, en: "Interactive Workshops", mr: "परस्पर कार्यशाळा", slug: "workshops" },
  { icon: MessagesSquare, en: "Group Discussions", mr: "गटचर्चा", slug: "discussions" },
  { icon: VenetianMask, en: "Role Play", mr: "भूमिका अभिनय", slug: "role-play" },
  { icon: Trophy, en: "Team Challenges", mr: "सांघिक आव्हाने", slug: "team-challenges" },
  { icon: Flower2, en: "Yoga & Meditation", mr: "योग व ध्यान", slug: "yoga-meditation" },
  { icon: BookOpen, en: "Reflection Sessions", mr: "चिंतन सत्रे", slug: "reflection" },
  { icon: GraduationCap, en: "Mentor Guidance", mr: "मार्गदर्शकांचे मार्गदर्शन", slug: "mentorship" },
  { icon: Wrench, en: "Practical Activities", mr: "प्रयोगशील उपक्रम", slug: "practical" },
];

export const LearningMethods = () => {
  const { t } = useLang();
  return (
    <section id="method" data-testid="method-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Learning Method", "शिकण्याची पद्धत")}
          title={t("Zero Lectures. 100% Experience.", "उपदेश शून्य. अनुभव शंभर टक्के.")}
          description={t(
            "Rupantaram's pedagogy is activity-based to the core — students learn by doing, failing, reflecting, and trying again.",
            "रूपांतरम्ची शिक्षणपद्धत पूर्णपणे उपक्रम-आधारित — विद्यार्थी करून, चुकून, चिंतन करून आणि पुन्हा प्रयत्न करून शिकतात."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METHODS.map((m, i) => (
            <Reveal key={m.slug} delay={(i % 4) * 0.08}>
              <div
                data-testid={`method-card-${m.slug}`}
                className="card-glow-hover group flex h-full flex-col items-center rounded-xl border border-[#e1dfdf] bg-[#fbfafa] p-7 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#18463b]/25 bg-white text-[#18463b] transition-all duration-300 group-hover:rotate-6 group-hover:border-[#18463b] group-hover:bg-[#18463b] group-hover:text-white">
                  <m.icon size={24} />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-[#18463b] sm:text-lg">
                  {t(m.en, m.mr)}
                </h3>
                <span className="mt-3 h-px w-8 bg-[#f68a4a]/40 transition-all duration-300 group-hover:w-14 group-hover:bg-[#f68a4a]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
