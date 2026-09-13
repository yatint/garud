import type { LucideIcon } from "lucide-react";
import { Heart, Home, MessagesSquare, Search, Smartphone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Objective {
  icon: LucideIcon;
  enTitle: string;
  mrTitle: string;
  slug: string;
  tint: string;
}

const OBJECTIVES: Objective[] = [
  { icon: Search, enTitle: "Understand children's thoughts and emotions deeply", mrTitle: "मुलांच्या विचारविश्व आणि भावनांचा सखोल अभ्यास समजून घेणे", slug: "understand", tint: "bg-[#f68a4a]" },
  { icon: MessagesSquare, enTitle: "Make parent–child communication more effective", mrTitle: "पालक–मुलांमधील संवाद अधिक प्रभावी बनवणे", slug: "communication", tint: "bg-[#18463b]" },
  { icon: Home, enTitle: "Build trust and emotional closeness at home", mrTitle: "घरात विश्वास आणि भावनिक जवळीक निर्माण करणे", slug: "bonding", tint: "bg-[#f0a500]" },
  { icon: Heart, enTitle: "Adopt positive parenting", mrTitle: "सकारात्मक पालकत्व (Positive Parenting) अंगीकारणे", slug: "positive", tint: "bg-[#0b5d3b]" },
  { icon: Smartphone, enTitle: "Develop aware, safe parenting in the digital age", mrTitle: "डिजिटल युगात जाणीवपूर्वक आणि सुरक्षित पालकत्व विकसित करणे", slug: "digital", tint: "bg-[#e0701f]" },
];

export const ParentingObjectives = () => {
  const { t } = useLang();
  return (
    <section data-testid="parenting-objectives-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("Workshop Objectives", "कार्यशाळेची उद्दिष्टे")}
          title={t("What These 4 Hours Set Out to Do", "या ४ तासांची उद्दिष्टे")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {OBJECTIVES.map((o, i) => (
            <Reveal key={o.slug} delay={i * 0.08}>
              <div
                data-testid={`parenting-objective-${o.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${o.tint}`}
                >
                  <o.icon size={24} />
                </span>
                <h3 className="mt-4 text-sm font-semibold leading-snug text-[#18463b]">
                  {t(o.enTitle, o.mrTitle)}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
