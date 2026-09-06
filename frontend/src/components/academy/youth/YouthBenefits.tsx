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
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/lang";

interface Benefit {
  icon: LucideIcon;
  enTitle: string;
  mrTitle: string;
  slug: string;
}

const BENEFITS: Benefit[] = [
  { icon: Sparkles, enTitle: "Improved self-confidence", mrTitle: "वाढलेला आत्मविश्वास", slug: "confidence" },
  { icon: BookOpen, enTitle: "Better study focus", mrTitle: "अभ्यासातील एकाग्रता", slug: "study-focus" },
  { icon: Mic, enTitle: "Strong communication skills", mrTitle: "बळकट संवाद कौशल्ये", slug: "communication" },
  { icon: Crown, enTitle: "Leadership qualities", mrTitle: "नेतृत्व गुण", slug: "leadership" },
  { icon: MonitorSmartphone, enTitle: "Reduced screen dependency", mrTitle: "स्क्रीनचा ताबा कमी", slug: "screen" },
  { icon: Sun, enTitle: "Positive mindset", mrTitle: "सकारात्मक विचारसरणी", slug: "mindset" },
  { icon: Compass, enTitle: "Clear career direction", mrTitle: "स्पष्ट करिअर दिशा", slug: "career" },
  { icon: Scale, enTitle: "Responsible decision making", mrTitle: "जबाबदार निर्णय", slug: "decisions" },
];

export const YouthBenefits = () => {
  const { t } = useLang();
  return (
    <section
      data-testid="youth-benefits-section"
      className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">
            {t("Measurable Benefits", "मोजता येणारे फायदे")}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("What Parents Notice Within Weeks", "काही आठवड्यांत पालकांना दिसणारा बदल")}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.06}>
              <div
                data-testid={`youth-benefit-${b.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a] text-white transition-transform duration-300 group-hover:scale-110">
                  <b.icon size={22} />
                </span>
                <h3 className="mt-4 font-heading text-sm font-bold text-white sm:text-base">
                  {t(b.enTitle, b.mrTitle)}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
