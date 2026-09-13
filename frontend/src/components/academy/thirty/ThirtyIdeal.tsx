import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const TRAITS = [
  { en: "Students who want to build discipline and consistency", mr: "शिस्त आणि सातत्य विकसित करू इच्छिणारे विद्यार्थी" },
  { en: "Youth seeking confidence and a clear outlook on life", mr: "आत्मविश्वास आणि स्पष्ट जीवनदृष्टी हवी असलेले तरुण" },
  { en: "Family members who want to bring positive change at home", mr: "कुटुंबामध्ये सकारात्मक बदल घडवू इच्छिणारे सदस्य" },
  { en: "Anyone who wants to transform their life through lasting habits", mr: "दीर्घकालीन सवयी निर्माण करून आयुष्य बदलू इच्छिणारी कोणतीही व्यक्ती" },
];

export const ThirtyIdeal = () => {
  const { t } = useLang();
  return (
    <section data-testid="thirty-ideal-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow={t("Who Should Join", "कोणासाठी उपयुक्त?")}
          title={t("This Program Is Made For…", "हा कार्यक्रम त्यांच्यासाठी…")}
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-testid="thirty-ideal-checklist">
          {TRAITS.map((tr, i) => (
            <Reveal key={tr.en} delay={0.06 * i}>
              <div
                data-testid={`thirty-ideal-${i + 1}`}
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
