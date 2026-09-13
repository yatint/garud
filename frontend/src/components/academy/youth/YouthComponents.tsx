import type { LucideIcon } from "lucide-react";
import { Compass, Crown, Heart, Sparkles, Timer } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Item {
  icon: LucideIcon;
  num: string;
  enTitle: string;
  mrTitle: string;
  enText: string;
  mrText: string;
  slug: string;
  tint: string;
}

const ITEMS: Item[] = [
  {
    icon: Sparkles,
    num: "१",
    enTitle: "Self-Confidence & Personality Development",
    mrTitle: "आत्मविश्वास आणि व्यक्तिमत्त्व विकास",
    enText: "Activities that build the habit of self-belief, positive thinking, and an impactful personality.",
    mrText: "स्वतःवर विश्वास ठेवण्याची सवय, सकारात्मक विचारसरणी आणि प्रभावी व्यक्तिमत्त्व घडवण्यासाठी विविध उपक्रम.",
    slug: "confidence",
    tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]",
  },
  {
    icon: Timer,
    num: "२",
    enTitle: "Discipline & Time Management",
    mrTitle: "शिस्त आणि वेळेचे व्यवस्थापन",
    enText: "Training on bringing discipline into daily life and making the right use of time.",
    mrText: "दैनंदिन जीवनात शिस्त कशी आणावी आणि वेळेचा योग्य उपयोग कसा करावा याचे प्रशिक्षण.",
    slug: "discipline",
    tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]",
  },
  {
    icon: Heart,
    num: "३",
    enTitle: "Emotional Balance & Mental Strength",
    mrTitle: "भावनिक संतुलन आणि मानसिक ताकद",
    enText: "Learning to manage anger, fear, and self-doubt to build a calm and capable mind.",
    mrText: "राग, भीती, न्यूनगंड यांसारख्या भावनांवर नियंत्रण ठेवून स्थिर आणि सक्षम मन तयार करणे.",
    slug: "emotional",
    tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]",
  },
  {
    icon: Crown,
    num: "४",
    enTitle: "Leadership & Communication Skills",
    mrTitle: "नेतृत्व आणि संवाद कौशल्ये",
    enText: "The ability to work in teams, make decisions, and communicate with real impact.",
    mrText: "टीममध्ये काम करण्याची क्षमता, निर्णयक्षमता आणि प्रभावी संवाद साधण्याची कला.",
    slug: "leadership",
    tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]",
  },
  {
    icon: Compass,
    num: "५",
    enTitle: "Career Awareness & Life Vision",
    mrTitle: "करिअर जागरूकता आणि जीवनदृष्टी",
    enText: "Guided discovery of a clear answer to the question — “What do I want to become in life?”",
    mrText: "“मला आयुष्यात काय बनायचे आहे?” या प्रश्नाचे स्पष्ट उत्तर शोधण्यासाठी योग्य मार्गदर्शन.",
    slug: "career",
    tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]",
  },
];

export const YouthComponents = () => {
  const { t } = useLang();
  return (
    <section data-testid="youth-components-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow={t("Key Components", "कार्यक्रमातील मुख्य घटक")}
          title={t("Five Pillars of the Program", "कार्यक्रमाचे पाच घटक")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 3) * 0.07}>
              <div
                data-testid={`youth-component-${it.slug}`}
                className="card-glow-hover group flex h-full items-start gap-4 rounded-2xl border border-[#e1dfdf] bg-[#fbfafa] p-6"
              >
                <span
                  className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white ${it.tint}`}
                >
                  <it.icon size={22} />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#18463b] text-[10px] font-black text-white">
                    {t(String(i + 1), it.num)}
                  </span>
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#18463b]">{t(it.enTitle, it.mrTitle)}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#7a7a7a] sm:text-sm">{t(it.enText, it.mrText)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
