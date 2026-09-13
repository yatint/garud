import type { LucideIcon } from "lucide-react";
import { BookOpen, GraduationCap, Lightbulb, MessagesSquare } from "lucide-react";
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
  { icon: MessagesSquare, enTitle: "Experiential, Easy-to-Follow Presentation", mrTitle: "अनुभवाधारित आणि सहज समजणारी मांडणी", enText: "Complex psychology, explained in simple everyday language.", mrText: "क्लिष्ट मानसशास्त्र, रोजच्या साध्या भाषेत.", slug: "simple" },
  { icon: BookOpen, enTitle: "Guidance Based on Real-Life Examples", mrTitle: "वास्तव जीवनातील उदाहरणांवर आधारित मार्गदर्शन", enText: "Every concept anchored in real family situations.", mrText: "प्रत्येक संकल्पना खऱ्या कौटुंबिक प्रसंगांशी जोडलेली.", slug: "real-life" },
  { icon: GraduationCap, enTitle: "In-Depth Guidance from Experts", mrTitle: "तज्ज्ञांचे सखोल मार्गदर्शन", enText: "Sessions led by trained, experienced mentors.", mrText: "प्रशिक्षित आणि अनुभवी मार्गदर्शकांची सत्रे.", slug: "experts" },
  { icon: Lightbulb, enTitle: "Practical Tips You Can Apply Immediately", mrTitle: "लगेच अमलात आणता येतील अशा व्यावहारिक टिप्स", enText: "Walk out with tools you can use at home the same evening.", mrText: "त्याच संध्याकाळी घरी वापरता येणारी साधने.", slug: "tips" },
];

export const ParentingFeatures = () => {
  const { t } = useLang();
  return (
    <section data-testid="parenting-features-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow={t("Workshop Highlights", "कार्यशाळेची वैशिष्ट्ये")}
          title={t("Why Parents Love This Workshop", "पालकांना ही कार्यशाळा का आवडते")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`parenting-feature-${it.slug}`}
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
