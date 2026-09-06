import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Crown,
  Eye,
  Heart,
  HeartHandshake,
  Hourglass,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Value {
  icon: LucideIcon;
  en: string;
  mr: string;
  textEn: string;
  textMr: string;
  slug: string;
}

const VALUES: Value[] = [
  { icon: Eye, en: "Self Awareness", mr: "स्व-जाणीव", textEn: "Know your strengths, emotions, and purpose.", textMr: "स्वतःची ताकद, भावना आणि ध्येय ओळखा.", slug: "self-awareness" },
  { icon: Hourglass, en: "Discipline", mr: "शिस्त", textEn: "Small daily habits build big character.", textMr: "लहान दैनिक सवयी मोठे चारित्र्य घडवतात.", slug: "discipline" },
  { icon: HeartHandshake, en: "Respect", mr: "आदर", textEn: "For parents, teachers, others, and self.", textMr: "पालक, शिक्षक, इतर आणि स्वतःचा आदर.", slug: "respect" },
  { icon: ShieldCheck, en: "Integrity", mr: "प्रामाणिकपणे", textEn: "Do the right thing, even when unseen.", textMr: "कोणी पाहत नसतानाही बरोबर करा.", slug: "integrity" },
  { icon: Crown, en: "Leadership", mr: "नेतृत्व", textEn: "Take responsibility and inspire others.", textMr: "जबाबदारी घ्या आणि इतरांना प्रेरित करा.", slug: "leadership" },
  { icon: Heart, en: "Service", mr: "सेवा", textEn: "Contribute to family, society, and nation.", textMr: "कुटुंब, समाज व राष्ट्रासाठी योगदान.", slug: "service" },
  { icon: Users, en: "Teamwork", mr: "संघभावना", textEn: "Achieve more together than alone.", textMr: "एकट्यापेक्षा एकत्र जास्त साधा.", slug: "teamwork" },
  { icon: BookOpen, en: "Lifelong Learning", mr: "आजीवन शिक्षण", textEn: "Stay curious, keep growing.", textMr: "जिज्ञासू राहा, वाढत राहा.", slug: "learning" },
];

export const CoreValues = () => {
  const { t } = useLang();
  return (
    <section data-testid="about-values-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow={t("Our Core Values", "आमची मूलभूत मूल्ये")}
          title={t("The Values We Live By", "आम्ही जगतो त्या मूल्यांनुसार")}
          description={t(
            "Eight principles woven into every activity, every session, and every mentorship conversation.",
            "प्रत्येक उपक्रम, प्रत्येक सत्र आणि प्रत्येक मार्गदर्शनात विणलेली आठ तत्त्वे."
          )}
          align="center"
        />

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.slug} delay={(i % 4) * 0.07}>
              <div
                data-testid={`value-card-${v.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-[#fbfafa] p-7 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#f68a4a]/50 hover:shadow-[0_16px_40px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#18463b]/15 bg-white text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                  <v.icon size={30} strokeWidth={1.8} />
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-[#18463b] sm:text-lg">
                  {t(v.en, v.mr)}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a] sm:text-sm">{t(v.textEn, v.textMr)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
