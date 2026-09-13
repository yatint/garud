import type { LucideIcon } from "lucide-react";
import { Brain, Briefcase, Compass, Crown, Mic } from "lucide-react";
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
    icon: Compass,
    num: "१",
    enTitle: "Purpose Discovery",
    mrTitle: "Purpose Discovery (उद्देश शोध)",
    enText: "Creating clarity around the fundamental questions — “Who am I? What do I want to do?” — and giving life a direction.",
    mrText: "“मी कोण आहे? मला काय करायचे आहे?” या मूलभूत प्रश्नांची स्पष्टता निर्माण करून जीवनाला दिशा देणे.",
    slug: "purpose",
    tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]",
  },
  {
    icon: Crown,
    num: "२",
    enTitle: "Leadership & Decision Making",
    mrTitle: "Leadership & Decision Making",
    enText: "Developing impactful leadership, a sense of responsibility, and the ability to make the right decisions.",
    mrText: "प्रभावी नेतृत्व, जबाबदारीची जाणीव आणि योग्य निर्णय घेण्याची क्षमता विकसित करणे.",
    slug: "leadership",
    tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]",
  },
  {
    icon: Mic,
    num: "३",
    enTitle: "Communication & Influence Skills",
    mrTitle: "Communication & Influence Skills",
    enText: "Teaching the art of clear, confident, and result-oriented communication.",
    mrText: "स्पष्ट, आत्मविश्वासपूर्ण आणि परिणामकारक संवाद साधण्याची कला शिकवणे.",
    slug: "communication",
    tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]",
  },
  {
    icon: Brain,
    num: "४",
    enTitle: "Mindset & Emotional Strength",
    mrTitle: "Mindset & Emotional Strength",
    enText: "Overcoming negative thoughts, fear, and confusion to build a strong mindset.",
    mrText: "नकारात्मक विचार, भीती आणि संभ्रम यांवर मात करून मजबूत मानसिकता तयार करणे.",
    slug: "mindset",
    tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]",
  },
  {
    icon: Briefcase,
    num: "५",
    enTitle: "Career & Success Readiness",
    mrTitle: "Career & Success Readiness",
    enText: "Building awareness of career choices, goal setting, and the skills needed to truly succeed.",
    mrText: "करिअर निवड, ध्येय निश्चिती आणि यशस्वी होण्यासाठी आवश्यक कौशल्यांची जाणीव करून देणे.",
    slug: "career",
    tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]",
  },
];

export const YoungComponents = () => {
  const { t } = useLang();
  return (
    <section data-testid="young-components-section" className="bg-white py-20 lg:py-28">
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
                data-testid={`young-component-${it.slug}`}
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
