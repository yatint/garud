import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const TRAITS = [
  { en: "Teenage students aged 13–18", mr: "१३ ते १८ वयोगटातील किशोरवयीन विद्यार्थी" },
  { en: "Students who want to bring positive change in themselves", mr: "स्वतःमध्ये सकारात्मक बदल घडवू इच्छिणारे विद्यार्थी" },
  { en: "Youngsters confused about their career", mr: "करिअरबाबत संभ्रमित असलेले युवक" },
];

export const YouthIdeal = () => {
  const { t } = useLang();
  return (
    <section data-testid="youth-ideal-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow={t("Who Should Join", "कोणासाठी उपयुक्त?")}
          title={t("This Program Is Made For…", "हा कार्यक्रम त्यांच्यासाठी…")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4" data-testid="youth-ideal-checklist">
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
