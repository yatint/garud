import type { LucideIcon } from "lucide-react";
import { Brain, ClipboardCheck, Crown, Home, TrendingUp } from "lucide-react";
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
    icon: ClipboardCheck,
    num: "१",
    enTitle: "Daily Guided Actions",
    mrTitle: "Daily Guided Actions (दैनंदिन मार्गदर्शन)",
    enText: "Building discipline and consistency through specific daily actions and habits.",
    mrText: "दररोज ठराविक कृती आणि सवयींच्या माध्यमातून शिस्त आणि सातत्य निर्माण करणे.",
    slug: "daily-actions",
    tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]",
  },
  {
    icon: TrendingUp,
    num: "२",
    enTitle: "Habit Building System",
    mrTitle: "Habit Building System (सवयींची निर्मिती)",
    enText: "A scientific method of creating big change through small, daily habits.",
    mrText: "लहान-लहान सवयींच्या माध्यमातून मोठे बदल घडवण्याची वैज्ञानिक पद्धत.",
    slug: "habit-system",
    tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]",
  },
  {
    icon: Brain,
    num: "३",
    enTitle: "Mindset & Emotional Balance",
    mrTitle: "Mindset & Emotional Balance",
    enText: "Overcoming negative thoughts, stress, and instability to build a positive, steady mind.",
    mrText: "नकारात्मक विचार, ताण आणि अस्थिरता यावर मात करून सकारात्मक आणि स्थिर मन तयार करणे.",
    slug: "mindset",
    tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]",
  },
  {
    icon: Crown,
    num: "४",
    enTitle: "Leadership & Responsibility",
    mrTitle: "Leadership & Responsibility",
    enText: "Starting leadership with yourself and extending your influence to family and society.",
    mrText: "स्वतःपासून नेतृत्वाची सुरुवात करून कुटुंब आणि समाजापर्यंत प्रभाव निर्माण करणे.",
    slug: "leadership",
    tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]",
  },
  {
    icon: Home,
    num: "५",
    enTitle: "Family Involvement",
    mrTitle: "Family Involvement (कुटुंबाचा सहभाग)",
    enText: "Involving the family alongside the individual in the transformation — so the change proves lasting.",
    mrText: "व्यक्तीबरोबरच कुटुंबालाही या परिवर्तन प्रक्रियेत सहभागी करून घेणे — जेणेकरून बदल टिकाऊ ठरतो.",
    slug: "family",
    tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]",
  },
];

export const ThirtyComponents = () => {
  const { t } = useLang();
  return (
    <section data-testid="thirty-components-section" className="bg-white py-20 lg:py-28">
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
                data-testid={`thirty-component-${it.slug}`}
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
