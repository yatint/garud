import { Check, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const ROWS = [
  { enOrdinary: "Focus on marks", mrOrdinary: "गुणांवर भर", enRupantaram: "Focus on life skills & personality", mrRupantaram: "जीवनकौशल्ये आणि व्यक्तिमत्त्वावर भर" },
  { enOrdinary: "One-way teaching", mrOrdinary: "एकमुखी शिकवण", enRupantaram: "Interactive workshops & activities", mrRupantaram: "परस्पर संवादी कार्यशाळा आणि उपक्रम" },
  { enOrdinary: "Limited communication training", mrOrdinary: "मर्यादित संवाद प्रशिक्षण", enRupantaram: "Public speaking & confidence building", mrRupantaram: "सार्वजनिक भाषण आणि आत्मविश्वास वाढ" },
  { enOrdinary: "No parent involvement", mrOrdinary: "पालकांचा सहभाग नाही", enRupantaram: "Dedicated Parenting 360° program", mrRupantaram: "स्वतंत्र पालकत्व 360° कार्यक्रम" },
  { enOrdinary: "Academic pressure", mrOrdinary: "अभ्यासाचा ताण", enRupantaram: "Emotional balance & mental resilience", mrRupantaram: "भावनिक संतुलन आणि मानसिक लवचिकता" },
  { enOrdinary: "Theory based", mrOrdinary: "सैद्धांतिक आधारित", enRupantaram: "Practical implementation in daily life", mrRupantaram: "दैनंदिन आयुष्यात प्रत्यक्ष अंमलबजावणी" },
];

export const Comparison = () => {
  const { t } = useLang();
  return (
    <section data-testid="why-comparison-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("The Rupantaram Difference", "रूपांतरम् चा फरक")}
          title={t("Not a Coaching Class. A Transformation Academy.", "कोचिंग क्लास नव्हे. परिवर्तन अकादमी.")}
          align="center"
        />

        <Reveal delay={0.1}>
          <div
            className="mt-14 overflow-hidden rounded-2xl border border-[#e1dfdf] shadow-[0_20px_50px_rgba(24,70,59,0.08)]"
            data-testid="comparison-table"
          >
            <div className="grid grid-cols-2">
              <div className="bg-[#fbfafa] px-6 py-5 text-center">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-[#999]">
                  {t("Ordinary Coaching", "सामान्य कोचिंग")}
                </p>
              </div>
              <div className="bg-[#18463b] px-6 py-5 text-center">
                <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-[#f8b183]">
                  {t("Rupantaram", "रूपांतरम्")}
                </p>
              </div>
            </div>

            {ROWS.map((r, i) => (
              <div
                key={r.enOrdinary}
                data-testid={`comparison-row-${i + 1}`}
                className={`grid grid-cols-2 ${i % 2 === 0 ? "" : "bg-[#fdfdfb]"}`}
              >
                <div className="flex items-center gap-3 border-t border-[#e1dfdf] px-5 py-5 sm:px-7">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f1f1ef] text-[#aaa]">
                    <X size={14} strokeWidth={3} />
                  </span>
                  <p className="text-sm font-medium text-[#7a7a7a] sm:text-base">{t(r.enOrdinary, r.mrOrdinary)}</p>
                </div>
                <div className="flex items-center gap-3 border-l border-t border-[#0b5d3b] bg-[#18463b] px-5 py-5 sm:px-7">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f68a4a] text-white">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <p className="text-sm font-semibold text-white sm:text-base">{t(r.enRupantaram, r.mrRupantaram)}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
