import type { LucideIcon } from "lucide-react";
import {
  Crown,
  Flame,
  Heart,
  Mic,
  ShieldCheck,
  Smartphone,
  Target,
  Timer,
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
}

const ITEMS: Item[] = [
  { icon: Flame, enTitle: "Self Confidence", mrTitle: "आत्मविश्वास", enText: "Believe in yourself, anywhere.", mrText: "कुठेही स्वतःवर विश्वास ठेवा.", slug: "confidence" },
  { icon: Mic, enTitle: "Communication", mrTitle: "संवाद", enText: "Express ideas clearly and listen well.", mrText: "कल्पना स्पष्ट मांडा आणि व्यवस्थित ऐका.", slug: "communication" },
  { icon: Crown, enTitle: "Leadership", mrTitle: "नेतृत्व", enText: "Take initiative and guide others.", mrText: "पुढाकार घ्या आणि इतरांना मार्गदर्शन करा.", slug: "leadership" },
  { icon: Target, enTitle: "Goal Setting", mrTitle: "ध्येय निश्चिती", enText: "Know where you're going and why.", mrText: "कुठे आणि का जायचेय ते जाणा.", slug: "goals" },
  { icon: Heart, enTitle: "Emotional Balance", mrTitle: "भावनिक संतुलन", enText: "Stay calm, respond with maturity.", mrText: "शांत राहा, परिपक्वतेने प्रत्युत्तर द्या.", slug: "emotional" },
  { icon: Timer, enTitle: "Time Management", mrTitle: "वेळ व्यवस्थापन", enText: "Make every hour count.", mrText: "प्रत्येक तास सार्थकी लावा.", slug: "time" },
  { icon: Smartphone, enTitle: "Digital Responsibility", mrTitle: "डिजिटल जबाबदारी", enText: "Use screens with control and purpose.", mrText: "स्क्रीन ताब्यात आणि हेतूने वापरा.", slug: "digital" },
  { icon: ShieldCheck, enTitle: "Character & Values", mrTitle: "चारित्र्य आणि मूल्ये", enText: "Honesty, respect, and responsibility for life.", mrText: "आयुष्यभरासाठी प्रामाणिकपणा, आदर आणि जबाबदारी.", slug: "character" },
];

export const DevelopsGrid = () => {
  const { t } = useLang();
  return (
    <section data-testid="programs-develops-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="03"
          eyebrow={t("What Every Program Develops", "प्रत्येक कार्यक्रम काय घडवतो")}
          title={t("One Toolkit, Every Program", "एकच कौशल्य-संच, प्रत्येक कार्यक्रम")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.07}>
              <div
                data-testid={`develops-card-${it.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <it.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{t(it.enTitle, it.mrTitle)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{t(it.enText, it.mrText)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
