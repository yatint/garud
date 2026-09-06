import type { LucideIcon } from "lucide-react";
import { GraduationCap, Home, Lightbulb, Scale, Sparkles, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Feature {
  icon: LucideIcon;
  en: string;
  mr: string;
  textEn: string;
  textMr: string;
  slug: string;
}

const FEATURES: Feature[] = [
  { icon: Lightbulb, en: "Life Skills First", mr: "आधी जीवनकौशल्ये", textEn: "Practical skills beyond textbooks.", textMr: "पुस्तकांच्या पलीकडची व्यावहारिक कौशल्ये.", slug: "life-skills-first" },
  { icon: Sparkles, en: "Personality Development", mr: "व्यक्तिमत्त्व विकास", textEn: "Confidence, communication & leadership.", textMr: "आत्मविश्वास, संवाद व नेतृत्व.", slug: "personality" },
  { icon: Scale, en: "Value-Based Learning", mr: "मूल्याधारित शिक्षण", textEn: "Character and ethical decision making.", textMr: "चारित्र्य आणि नीतिमूल्यांचे निर्णय.", slug: "values" },
  { icon: Home, en: "Parent Involvement", mr: "पालकांचा सहभाग", textEn: "Families participate in transformation.", textMr: "रूपांतरात कुटुंब सहभागी असते.", slug: "parents" },
  { icon: GraduationCap, en: "Experienced Mentorship", mr: "अनुभवी मार्गदर्शन", textEn: "Guided by trained facilitators.", textMr: "प्रशिक्षित मार्गदर्शकांचे मार्गदर्शन.", slug: "mentorship" },
  { icon: Zap, en: "Activity-Based Training", mr: "उपक्रम-आधारित प्रशिक्षण", textEn: "Learning through experience, not lectures.", textMr: "उपदेशांनी नव्हे, अनुभवातून शिक्षण.", slug: "activity" },
];

export const Difference = () => {
  const { t } = useLang();
  return (
    <section data-testid="about-difference-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("What Makes Us Different", "आमची खासियत")}
          title={t("Built Around the Whole Person", "संपूर्ण व्यक्तिमत्त्वाचा विचार")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 3) * 0.08}>
              <div
                data-testid={`difference-card-${f.slug}`}
                className="card-glow-hover group flex h-full items-start gap-5 rounded-[10px] border border-[#e1dfdf] bg-white p-7"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <f.icon size={22} />
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#18463b]">{t(f.en, f.mr)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555]">{t(f.textEn, f.textMr)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
