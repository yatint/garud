import type { LucideIcon } from "lucide-react";
import { Brain, Heart, HeartHandshake, MessagesSquare, Smartphone } from "lucide-react";
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
    icon: Brain,
    num: "१",
    enTitle: "Understanding Child Psychology",
    mrTitle: "बालमानसशास्त्र समजून घेणे",
    enText: "A deep study of how children's thoughts, emotions, and behaviour change with age.",
    mrText: "मुलांच्या वयाप्रमाणे बदलणारे विचार, भावना आणि वर्तन यांचा सखोल अभ्यास.",
    slug: "psychology",
    tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]",
  },
  {
    icon: MessagesSquare,
    num: "२",
    enTitle: "Effective Communication Skills",
    mrTitle: "प्रभावी संवाद कौशल्ये",
    enText: "Guidance on building trustworthy, open, and impactful conversations with children.",
    mrText: "मुलांशी विश्वासार्ह, मोकळा आणि परिणामकारक संवाद कसा साधावा याचे मार्गदर्शन.",
    slug: "communication",
    tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]",
  },
  {
    icon: HeartHandshake,
    num: "३",
    enTitle: "Emotional Bonding & Relationships",
    mrTitle: "भावनिक जवळीक आणि नातेसंबंध",
    enText: "Skills to grow trust, love, and understanding between parents and children.",
    mrText: "पालक–मुलांमध्ये विश्वास, प्रेम आणि समज वाढवण्यासाठी आवश्यक कौशल्ये.",
    slug: "bonding",
    tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]",
  },
  {
    icon: Heart,
    num: "४",
    enTitle: "Positive Parenting",
    mrTitle: "सकारात्मक पालकत्व (Positive Parenting)",
    enText: "The right approach for all-round development, balancing discipline with love.",
    mrText: "शिस्त आणि प्रेम यामध्ये संतुलन राखत मुलांच्या सर्वांगीण विकासासाठी योग्य दृष्टिकोन.",
    slug: "positive",
    tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]",
  },
  {
    icon: Smartphone,
    num: "५",
    enTitle: "Digital Parenting",
    mrTitle: "डिजिटल पालकत्व (Digital Parenting)",
    enText: "How to guide and wisely manage mobile, social media, and internet use.",
    mrText: "मोबाईल, सोशल मीडिया आणि इंटरनेटच्या वापरावर योग्य नियंत्रण व मार्गदर्शन कसे ठेवावे.",
    slug: "digital",
    tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]",
  },
];

export const ParentingComponents = () => {
  const { t } = useLang();
  return (
    <section data-testid="parenting-components-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow={t("Key Components", "कार्यशाळेतील मुख्य घटक")}
          title={t("Five Pillars of the Workshop", "कार्यशाळेचे पाच घटक")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 3) * 0.07}>
              <div
                data-testid={`parenting-component-${it.slug}`}
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
