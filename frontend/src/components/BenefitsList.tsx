import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Compass,
  Crown,
  Mic,
  MonitorSmartphone,
  Scale,
  Sparkles,
  Sun,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/lang";

interface Benefit {
  icon: LucideIcon;
  en: string;
  mr: string;
  slug: string;
}

const BENEFITS: Benefit[] = [
  { icon: Sparkles, en: "Improved self-confidence", mr: "वाढलेला आत्मविश्वास", slug: "confidence" },
  { icon: BookOpen, en: "Better study focus", mr: "अभ्यासातील एकाग्रता", slug: "study-focus" },
  { icon: Mic, en: "Strong communication skills", mr: "बळकट संवाद कौशल्ये", slug: "communication" },
  { icon: Crown, en: "Leadership qualities", mr: "नेतृत्व गुण", slug: "leadership" },
  { icon: MonitorSmartphone, en: "Reduced screen dependency", mr: "स्क्रीनचा ताबा कमी", slug: "screen" },
  { icon: Sun, en: "Positive mindset", mr: "सकारात्मक विचारसरणी", slug: "mindset" },
  { icon: Compass, en: "Clear career direction", mr: "स्पष्ट करिअर दिशा", slug: "career" },
  { icon: Scale, en: "Responsible decision making", mr: "जबाबदार निर्णय", slug: "decisions" },
];

export const BenefitsList = () => {
  const { t } = useLang();
  return (
    <section id="benefits" data-testid="benefits-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow={t("Measurable Benefits", "मोजता येणारे फायदे")}
          title={t("What Parents Notice Within Weeks", "काही आठवड्यांत पालकांना दिसणारा बदल")}
          description={t(
            "The transformation doesn't stay in the classroom — it shows up at the study table, at home, and in every decision your child makes.",
            "रूपांतर वर्गखोल्यात थांबत नाही — तो अभ्यासाच्या टेबलावर, घरी आणि मुलाच्या प्रत्येक निर्णयात दिसतो."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.slug} delay={(i % 4) * 0.08}>
              <div
                data-testid={`benefit-card-${b.slug}`}
                className="group flex h-full items-center gap-4 rounded-[10px] border border-[#e1dfdf] bg-white px-5 py-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a] hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#18463b] text-white transition-colors duration-300 group-hover:bg-[#f68a4a]">
                  <b.icon size={20} />
                </span>
                <span className="font-heading text-sm font-bold text-[#18463b] sm:text-base">
                  {t(b.en, b.mr)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
