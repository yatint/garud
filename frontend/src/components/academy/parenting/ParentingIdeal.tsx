import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const TRAITS = [
  { en: "Parents of school-age and teenage children", mr: "शालेय आणि किशोरवयीन मुलांचे पालक" },
  { en: "Parents who want stronger bonds with their children", mr: "मुलांशी नातेसंबंध अधिक मजबूत करू इच्छिणारे पालक" },
  { en: "Those who want to understand parenting in the digital age", mr: "डिजिटल युगातील पालकत्व समजून घेऊ इच्छिणारे" },
  { en: "Those who want positive, lasting change at home", mr: "घरात सकारात्मक आणि टिकाऊ बदल घडवू इच्छिणारे" },
];

export const ParentingIdeal = () => {
  const { t } = useLang();
  return (
    <section data-testid="parenting-ideal-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Who Should Join", "कोणासाठी उपयुक्त?")}
          title={t("This Workshop Is Made For…", "ही कार्यशाळा त्यांच्यासाठी…")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-testid="parenting-ideal-checklist">
          {TRAITS.map((tr, i) => (
            <Reveal key={tr.en} delay={0.06 * i}>
              <div
                data-testid={`parenting-ideal-${i + 1}`}
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
