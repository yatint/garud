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
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/lang";

interface Outcome {
  icon: LucideIcon;
  en: string;
  mr: string;
  textEn: string;
  textMr: string;
  slug: string;
}

const OUTCOMES: Outcome[] = [
  { icon: Target, en: "Goal Setting", mr: "ध्येय निश्चिती", textEn: "Turn vague dreams into written, achievable targets with a personal action map.", textMr: "अस्पष्ट स्वप्नांचे लेखी, साध्य उद्दिष्टांत वैयक्तिक कृती-नकाशासह रूपांतर.", slug: "goal-setting" },
  { icon: Flame, en: "Confidence Building", mr: "आत्मविश्वास निर्मिती", textEn: "Walk into any room, stage, or interview with unshakable self-belief.", textMr: "कोणत्याही सभेत, मंचावर किंवा मुलाखतीत खंबीर आत्मविश्वासाने जा.", slug: "confidence-building" },
  { icon: Crown, en: "Leadership Skills", mr: "नेतृत्व कौशल्ये", textEn: "Learn to take responsibility, lead teams, and inspire people around you.", textMr: "जबाबदारी घेणे, संघ चालवणे आणि आजूबाजूच्यांना प्रेरित करणे शिका.", slug: "leadership-skills" },
  { icon: Mic, en: "Communication", mr: "संवाद", textEn: "Speak clearly, listen deeply, and express ideas with real impact.", textMr: "स्पष्ट बोला, खोलात ऐका आणि कल्पना प्रभावीपणे मांडा.", slug: "communication" },
  { icon: Timer, en: "Time Management", mr: "वेळ व्यवस्थापन", textEn: "Master your day with planning, priorities, and distraction-free focus.", textMr: "नियोजन, प्राधान्ये आणि एकाग्रतेने दिवसाचे स्वामित्व मिळवा.", slug: "time-management" },
  { icon: HeartHandshake, en: "Emotional Intelligence", mr: "भावनिक बुद्धिमत्ता", textEn: "Understand emotions and manage anger, stress, and anxiety with maturity.", textMr: "भावना समजून घ्या; राग, तणाव आणि चिंता परिपक्वतेने सांभाळा.", slug: "emotional-intelligence" },
  { icon: Smartphone, en: "Digital Discipline", mr: "डिजिटल शिस्त", textEn: "Break free from mobile and social-media addiction; build healthy screen habits.", textMr: "मोबाईल व सोशल मीडियाच्या अति-वापरातून मुक्ती; निरोगी स्क्रीन सवयी.", slug: "digital-discipline" },
  { icon: Compass, en: "Career Direction", mr: "करिअरची दिशा", textEn: "Discover your strengths and design a clear, confident career roadmap.", textMr: "स्वतःची ताकद ओळखा आणि स्पष्ट करिअर नकाशा तयार करा.", slug: "career-direction" },
];

export const OutcomesGrid = () => {
  const { t } = useLang();
  return (
    <section id="outcomes" data-testid="outcomes-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("Key Outcomes", "महत्त्वाचे परिणाम")}
          title={t("Eight Transformations in Three Days", "तीन दिवसांत आठ रूपांतरे")}
          description={t(
            "Every activity maps to a measurable life outcome. Students don't just hear about these skills — they practice them until they stick.",
            "प्रत्येक उपक्रम एका मोजता येणाऱ्या परिणामाशी जोडलेला असतो. विद्यार्थी ही कौशल्ये फक्त ऐकत नाहीत — ती रुजेपर्यंत सरावतात."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.slug} delay={(i % 4) * 0.08}>
              <div
                data-testid={`outcome-card-${o.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <o.icon size={22} />
                </span>
                <p className="mt-5 font-heading text-[11px] font-bold uppercase tracking-[0.24em] text-[#999]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-heading text-xl font-bold text-[#18463b]">{t(o.en, o.mr)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#555]">{t(o.textEn, o.textMr)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
