import type { LucideIcon } from "lucide-react";
import { CalendarCheck, Home, NotebookPen, Zap } from "lucide-react";
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
}

const ITEMS: Item[] = [
  { icon: CalendarCheck, enTitle: "A Structured, Guided 30-Day Plan", mrTitle: "३० दिवसांचे संरचित आणि मार्गदर्शित नियोजन", enText: "Every day is planned — no guesswork, no drifting.", mrText: "दररोजची प्रत्येक कृती आधीच नियोजित.", slug: "plan" },
  { icon: NotebookPen, enTitle: "Daily Actions, Reflection & Feedback", mrTitle: "दैनंदिन कृती, चिंतन आणि फीडबॅक प्रणाली", enText: "Daily action plus reflection plus mentor feedback.", mrText: "दररोज कृती + चिंतन + मार्गदर्शकांचा अभिप्राय.", slug: "feedback" },
  { icon: Zap, enTitle: "Experiential, Result-Oriented Methods", mrTitle: "अनुभवाधारित आणि परिणामकारक पद्धती", enText: "Experience over lectures — change you can see.", mrText: "उपदेशापेक्षा अनुभव — दिसणारे बदल.", slug: "methods" },
  { icon: Home, enTitle: "Change at Individual & Family Level", mrTitle: "वैयक्तिक आणि कुटुंबीय स्तरावर बदल", enText: "Transformation that travels from the individual to the family.", mrText: "व्यक्तीपासून कुटुंबापर्यंत पोहोचणारा बदल.", slug: "family" },
];

export const ThirtyFeatures = () => {
  const { t } = useLang();
  return (
    <section data-testid="thirty-features-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Program Highlights", "कार्यक्रमाची वैशिष्ट्ये")}
          title={t("Why These 30 Days Actually Work", "हे ३० दिवस का प्रभावी ठरतात")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`thirty-feature-${it.slug}`}
                className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-[#fbfafa] p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                  <it.icon size={22} />
                </span>
                <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b]">{t(it.enTitle, it.mrTitle)}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a]">{t(it.enText, it.mrText)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
