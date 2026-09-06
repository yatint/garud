import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Crown,
  Eye,
  Heart,
  Mic,
  Scale,
  Timer,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Item {
  icon: LucideIcon;
  enTitle: string;
  mrTitle: string;
  enText: string;
  mrText: string;
  slug: string;
  tint: string;
}

const ITEMS: Item[] = [
  { icon: Eye, enTitle: "Self Awareness", mrTitle: "आत्मजाणीव", enText: "Understand your strengths, emotions, and patterns.", mrText: "स्वतःच्या शक्ती, भावना आणि सवयी समजून घ्या.", slug: "self-awareness", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: Compass, enTitle: "Career Direction", mrTitle: "करिअर दिशा", enText: "Choose a path with clarity, not confusion.", mrText: "गोंधळात नव्हे, स्पष्टतेने मार्ग निवडा.", slug: "career", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: Crown, enTitle: "Leadership Skills", mrTitle: "नेतृत्व कौशल्ये", enText: "Lead yourself first, then others.", mrText: "आधी स्वतःचे, मग इतरांचे नेतृत्व करा.", slug: "leadership", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
  { icon: Mic, enTitle: "Communication", mrTitle: "संवाद", enText: "Speak, present, and connect with impact.", mrText: "प्रभावीपणे बोला, सादर करा आणि जोडले जा.", slug: "communication", tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]" },
  { icon: Scale, enTitle: "Decision Making", mrTitle: "निर्णयक्षमता", enText: "Make responsible choices under pressure.", mrText: "ताणाखालीही जबाबदार निर्णय घ्या.", slug: "decisions", tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]" },
  { icon: Wallet, enTitle: "Financial Awareness", mrTitle: "आर्थिक जाणीव", enText: "Understand money, saving, and priorities.", mrText: "पैसे, बचत आणि प्राधान्ये समजून घ्या.", slug: "financial", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: Heart, enTitle: "Emotional Maturity", mrTitle: "भावनिक परिपक्वता", enText: "Handle stress, setbacks, and relationships.", mrText: "ताण, अपयश आणि नाती सामर्थ्याने सांभाळा.", slug: "emotional", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: Timer, enTitle: "Time Management", mrTitle: "वेळ व्यवस्थापन", enText: "Own your day before it owns you.", mrText: "दिवस तुम्हाला घेण्यापूर्वी तुम्ही दिवसाचे स्वामी व्हा.", slug: "time", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
];

export const YoungDevelop = () => {
  const { t } = useLang();
  return (
    <section data-testid="young-develop-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("What You'll Develop", "तुमच्यात काय घडेल")}
          title={t("Eight Capabilities for Adulthood", "प्रौढत्वासाठी आठ क्षमता")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`young-develop-card-${it.slug}`}
                className="group flex h-full items-start gap-4 rounded-[10px] border border-[#e1dfdf] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:text-white ${it.tint}`}
                >
                  <it.icon size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#18463b]">{t(it.enTitle, it.mrTitle)}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#7a7a7a] sm:text-sm">{t(it.enText, it.mrText)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
