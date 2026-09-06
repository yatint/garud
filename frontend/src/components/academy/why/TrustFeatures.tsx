import type { LucideIcon } from "lucide-react";
import {
  Compass,
  Crown,
  HeartHandshake,
  Home,
  ShieldCheck,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Feature {
  icon: LucideIcon;
  enTitle: string;
  mrTitle: string;
  enText: string;
  mrText: string;
  slug: string;
}

const FEATURES: Feature[] = [
  { icon: Zap, enTitle: "Practical Learning", mrTitle: "प्रायोगिक शिक्षण", enText: "Activity-based sessions instead of theoretical lectures.", mrText: "सैद्धांतिक भाषणांऐवजी उपक्रमाधारित सत्रे.", slug: "practical" },
  { icon: Users, enTitle: "Age-Specific Programs", mrTitle: "वयानुसार कार्यक्रम", enText: "Separate curriculum for Kids, Youth, Parents & Young Adults.", mrText: "मुले, तरुण, पालक आणि युवकांसाठी वेगळा अभ्यासक्रम.", slug: "age-specific" },
  { icon: HeartHandshake, enTitle: "Emotional Intelligence", mrTitle: "भावनिक बुद्धिमत्ता", enText: "Learn to manage emotions and relationships.", mrText: "भावना आणि नाती सांभाळायला शिका.", slug: "emotional" },
  { icon: Smartphone, enTitle: "Digital Discipline", mrTitle: "डिजिटल शिस्त", enText: "Healthy use of mobile & social media.", mrText: "मोबाईल आणि सोशल मीडियाचा निरोगी वापर.", slug: "digital" },
  { icon: Compass, enTitle: "Career Clarity", mrTitle: "करिअर स्पष्टता", enText: "Goal setting and future planning.", mrText: "ध्येय निश्चिती आणि भविष्याचे नियोजन.", slug: "career" },
  { icon: Crown, enTitle: "Leadership Development", mrTitle: "नेतृत्व विकास", enText: "Build confidence and decision-making ability.", mrText: "आत्मविश्वास आणि निर्णयक्षमता वाढवा.", slug: "leadership" },
  { icon: Home, enTitle: "Parent Partnership", mrTitle: "पालक भागीदारी", enText: "Parents become active participants in growth.", mrText: "पालक प्रगतीमध्ये सक्रिय सहभागी होतात.", slug: "parents" },
  { icon: ShieldCheck, enTitle: "Character Building", mrTitle: "चारित्र्य घडण", enText: "Values, respect, integrity and responsibility.", mrText: "मूल्ये, आदर, प्रामाणिकपणा आणि जबाबदारी.", slug: "character" },
];

export const TrustFeatures = () => {
  const { t } = useLang();
  return (
    <section data-testid="why-trust-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow={t("Trusted by Families", "कुटुंबांचा विश्वास")}
          title={t("Why Thousands of Families Trust Our Approach", "हजारो कुटुंबे आमच्या पद्धतीवर का विश्वास ठेवतात")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 4) * 0.07}>
              <div
                data-testid={`trust-card-${f.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-6"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                  <f.icon size={22} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{t(f.enTitle, f.mrTitle)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{t(f.enText, f.mrText)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
