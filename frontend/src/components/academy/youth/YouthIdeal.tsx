import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const TRAITS = [
  { en: "Lack confidence in expressing themselves", mr: "स्वतःला व्यक्त करण्यात आत्मविश्वास नसलेल्या विद्यार्थ्यांना" },
  { en: "Spend excessive time on mobile & social media", mr: "मोबाईल व सोशल मीडियावर जास्त वेळ घालवणाऱ्यांना" },
  { en: "Need clarity about career and future direction", mr: "करिअर व भविष्याची दिशा हवी असलेल्यांना" },
  { en: "Want sharper focus and better study habits", mr: "अभ्यासात एकाग्रता व चांगल्या सवयी हव्या असलेल्यांना" },
  { en: "Want to improve communication & leadership", mr: "संवाद व नेतृत्व सुधारू इच्छिणाऱ्यांना" },
  { en: "Want discipline, values, and positive habits", mr: "शिस्त, संस्कार व चांगल्या सवयी हव्या असलेल्यांना" },
];

export const YouthIdeal = () => {
  const { t } = useLang();
  return (
    <section data-testid="youth-ideal-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Who Should Join", "कोणी सहभागी व्हावे")}
          title={t("Made for Students Who Are Ready for More", "आणखी काही मिळवायला तयार असलेल्या विद्यार्थ्यांसाठी")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-testid="youth-ideal-checklist">
          {TRAITS.map((tr, i) => (
            <Reveal key={tr.en} delay={0.06 * i}>
              <div
                data-testid={`youth-ideal-${i + 1}`}
                className="group flex items-center gap-4 rounded-xl border border-[#e1dfdf] bg-[#fbfafa] px-5 py-4 transition-all duration-300 hover:border-[#f68a4a]/60 hover:bg-white"
              >
                <CheckCircle2
                  size={22}
                  className="shrink-0 text-[#f68a4a] transition-transform duration-300 group-hover:scale-110"
                />
                <span className="text-sm font-semibold text-[#333] sm:text-base">{t(tr.en, tr.mr)}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
