import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Crown,
  Flame,
  HeartHandshake,
  Mic,
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
  tint: string;
}

const ITEMS: Item[] = [
  { icon: Target, enTitle: "Goal Setting", mrTitle: "ध्येय निश्चिती", enText: "Turn vague dreams into written, achievable targets.", mrText: "अस्पष्ट स्वप्नांचे लेखी, साध्य उद्दिष्टांत रूपांतर.", slug: "goal-setting", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: Flame, enTitle: "Confidence Building", mrTitle: "आत्मविश्वास निर्मिती", enText: "Walk into any room or stage with self-belief.", mrText: "कोणत्याही सभेत किंवा मंचावर खंबीर आत्मविश्वासाने जा.", slug: "confidence-building", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: Crown, enTitle: "Leadership Skills", mrTitle: "नेतृत्व कौशल्ये", enText: "Take responsibility, lead teams, inspire people.", mrText: "जबाबदारी घ्या, संघ चालवा, लोकांना प्रेरित करा.", slug: "leadership-skills", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
  { icon: Mic, enTitle: "Communication", mrTitle: "संवाद", enText: "Speak clearly, listen deeply, express with impact.", mrText: "स्पष्ट बोला, खोलात ऐका, प्रभावीपणे मांडा.", slug: "communication", tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]" },
  { icon: Timer, enTitle: "Time Management", mrTitle: "वेळ व्यवस्थापन", enText: "Master your day with planning and priorities.", mrText: "नियोजन आणि प्राधान्यांनी दिवसाचे स्वामित्व मिळवा.", slug: "time-management", tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]" },
  { icon: HeartHandshake, enTitle: "Emotional Intelligence", mrTitle: "भावनिक बुद्धिमत्ता", enText: "Manage anger, stress, and anxiety with maturity.", mrText: "राग, तणाव आणि चिंता परिपक्वतेने सांभाळा.", slug: "emotional-intelligence", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: Smartphone, enTitle: "Digital Discipline", mrTitle: "डिजिटल शिस्त", enText: "Break screen addiction; build healthy habits.", mrText: "स्क्रीनच्या अति-वापरातून मुक्ती; निरोगी सवयी.", slug: "digital-discipline", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: Compass, enTitle: "Career Direction", mrTitle: "करिअरची दिशा", enText: "Discover strengths and design a career roadmap.", mrText: "स्वतःची ताकद ओळखा आणि करिअर नकाशा तयार करा.", slug: "career-direction", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
];

export const YouthOutcomes = () => {
  const { t } = useLang();
  return (
    <section data-testid="youth-outcomes-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("Key Outcomes", "महत्त्वाचे परिणाम")}
          title={t("Eight Transformations in Three Days", "तीन दिवसांत आठ रूपांतरे")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`youth-outcome-card-${it.slug}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#e1dfdf] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white ${it.tint}`}
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
