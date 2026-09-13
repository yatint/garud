import type { LucideIcon } from "lucide-react";
import { Crown, HeartHandshake, ShieldCheck, Sparkles, Sprout } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/lang";

interface Benefit {
  icon: LucideIcon;
  enTitle: string;
  mrTitle: string;
  slug: string;
}

const BENEFITS: Benefit[] = [
  { icon: ShieldCheck, enTitle: "More disciplined, consistent, and responsible", mrTitle: "अधिक शिस्तबद्ध, सातत्यपूर्ण आणि जबाबदार", slug: "disciplined" },
  { icon: Sparkles, enTitle: "Noticeable growth in confidence and positivity", mrTitle: "आत्मविश्वास आणि सकारात्मकतेत लक्षणीय वाढ", slug: "confidence" },
  { icon: HeartHandshake, enTitle: "Control over emotions and mental stability", mrTitle: "भावनांवर नियंत्रण आणि मानसिक स्थैर्य", slug: "emotions" },
  { icon: Crown, enTitle: "Leadership qualities and decision-making", mrTitle: "नेतृत्वगुण आणि निर्णयक्षमता", slug: "leadership" },
  { icon: Sprout, enTitle: "Positive habits that last a lifetime", mrTitle: "आयुष्यभर टिकणाऱ्या सकारात्मक सवयी", slug: "habits" },
];

export const ThirtyBenefits = () => {
  const { t } = useLang();
  return (
    <section
      data-testid="thirty-benefits-section"
      className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">
            {t("Expected Outcomes", "अपेक्षित परिणाम")}
          </p>
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
            {t("After These 30 Days, Participants…", "या ३० दिवसांच्या प्रवासानंतर सहभागी…")}
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {BENEFITS.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.06}>
              <div
                data-testid={`thirty-benefit-${b.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a] text-white transition-transform duration-300 group-hover:scale-110">
                  <b.icon size={22} />
                </span>
                <h3 className="mt-4 font-heading text-sm font-bold leading-snug text-white">
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
