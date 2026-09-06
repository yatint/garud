import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const TRAITS = [
  { en: "Need confidence in speaking", mr: "बोलण्यात आत्मविश्वास हवा असलेली" },
  { en: "Struggle with discipline", mr: "शिस्तीत अडचण असलेली" },
  { en: "Spend too much time on mobile devices", mr: "मोबाईलवर जास्त वेळ घालवणारी" },
  { en: "Need better study habits", mr: "अभ्यासाच्या चांगल्या सवयी हव्या असलेली" },
  { en: "Want to improve communication", mr: "संवाद सुधारू इच्छिणारी" },
  { en: "Enjoy activity-based learning", mr: "उपक्रमांतून शिकण्याचा आनंद घेणारी" },
];

export const KidsIdeal = () => {
  const { t } = useLang();
  return (
    <section data-testid="kids-ideal-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Ideal For", "यांच्यासाठी योग्य")}
          title={t("This Program Is Perfect for Children Who…", "अशा मुलांसाठी हा कार्यक्रम परिपूर्ण…")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-testid="kids-ideal-checklist">
          {TRAITS.map((tr, i) => (
            <Reveal key={tr.en} delay={0.06 * i}>
              <div
                data-testid={`kids-ideal-${i + 1}`}
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
