import type { LucideIcon } from "lucide-react";
import { CalendarCheck, Home, TrendingUp, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Method {
  icon: LucideIcon;
  en: string;
  mr: string;
  textEn: string;
  textMr: string;
  slug: string;
}

const METHODS: Method[] = [
  {
    icon: Zap,
    en: "Learning Through Experience",
    mr: "अनुभवातून शिकणे",
    textEn: "No sermons. Real experience through activities, games, role play, and discussion.",
    textMr: "उपदेश नाहीत. उपक्रम, खेळ, भूमिका आणि चर्चेतून प्रत्यक्ष अनुभव.",
    slug: "experiential",
  },
  {
    icon: Users,
    en: "Age-Wise Design",
    mr: "वयानुसार रचना",
    textEn: "A six-year-old and a nineteen-year-old learn in different languages and methods.",
    textMr: "सहा वर्षांचे मूल आणि एकोणीस वर्षांचा तरुण वेगळ्या भाषेत व पद्धतीने शिकतो.",
    slug: "age-wise",
  },
  {
    icon: Home,
    en: "Parents as Partners",
    mr: "पालक भागीदार",
    textEn: "A child doesn't change unless home changes — so parents get their own workshops.",
    textMr: "घर न बदलल्यास मूल बदलत नाही — म्हणून पालकांसाठीही स्वतंत्र कार्यशाळा.",
    slug: "parents",
  },
  {
    icon: TrendingUp,
    en: "Consistent Follow-Up",
    mr: "सातत्याने पाठपुरावा",
    textEn: "Habit tracking, mentor contact, and progress reports for parents after the program.",
    textMr: "कार्यक्रमानंतरही सवयींचा मागोवा, मार्गदर्शक संपर्क आणि पालकांना प्रगती अहवाल.",
    slug: "follow-up",
  },
  {
    icon: CalendarCheck,
    en: "Fixed Small Batches",
    mr: "मर्यादित संख्येच्या बॅच",
    textEn: "Limited seats and fixed dates, so every participant gets a chance to speak.",
    textMr: "मर्यादित जागा व ठरलेल्या तारखा — प्रत्येक सहभागीला बोलण्याची संधी.",
    slug: "batches",
  },
];

export const AcademyMethod = () => {
  const { t } = useLang();
  return (
    <section id="method" data-testid="academy-method-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow={t("How We Teach", "आम्ही कसे शिकवतो")}
          title={t("Activity-Based. Never Lecture-Based.", "उपक्रमांद्वारे. उपदेशांनी कधीच नाही.")}
          description={t(
            "Skills become behaviour only through practice — so every Rupantaram session is built around doing, reflecting, and repeating.",
            "सरावानेच कौशल्य वर्तन बनते — म्हणून प्रत्येक सत्र करणे, चिंतन आणि पुनरावृत्ती याभोवती रचलेले असते."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {METHODS.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.07}>
              <div
                data-testid={`method-card-${m.slug}`}
                className="card-glow-hover group flex h-full flex-col rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#18463b]/25 bg-white text-[#18463b] transition-all duration-300 group-hover:rotate-6 group-hover:border-[#18463b] group-hover:bg-[#18463b] group-hover:text-white">
                  <m.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-[#18463b]">{t(m.en, m.mr)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{t(m.textEn, m.textMr)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
