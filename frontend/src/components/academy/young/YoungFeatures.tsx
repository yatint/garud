import type { LucideIcon } from "lucide-react";
import { GraduationCap, MessagesSquare, UserRound, Wrench } from "lucide-react";
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
  { icon: MessagesSquare, enTitle: "Experiential & Interactive Sessions", mrTitle: "अनुभवाधारित आणि संवादात्मक सत्रे", enText: "Participation over lectures — every concept is experienced.", mrText: "उपदेश नव्हे — सहभागातून प्रत्येक संकल्पना अनुभवली जाते.", slug: "experiential" },
  { icon: Wrench, enTitle: "Real-Life Examples & Activities", mrTitle: "वास्तविक जीवनाशी निगडित उदाहरणे आणि उपक्रम", enText: "Learning through examples and activities rooted in real life.", mrText: "दैनंदिन आयुष्यातील प्रत्यक्ष उदाहरणांतून शिक्षण.", slug: "real-life" },
  { icon: GraduationCap, enTitle: "Deep Guidance from Expert Mentors", mrTitle: "तज्ज्ञ मार्गदर्शकांचे सखोल मार्गदर्शन", enText: "Personal, in-depth mentoring for every participant.", mrText: "प्रत्येक सहभागीला तज्ज्ञांचे वैयक्तिक आणि सखोल मार्गदर्शन.", slug: "mentors" },
  { icon: UserRound, enTitle: "Focused on Individual Growth", mrTitle: "वैयक्तिक विकासावर केंद्रित दृष्टिकोन", enText: "Growth at each young person's own pace and needs.", mrText: "प्रत्येक तरुणाच्या स्वतःच्या गरजांनुसार विकास.", slug: "individual" },
];

export const YoungFeatures = () => {
  const { t } = useLang();
  return (
    <section data-testid="young-features-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Program Highlights", "कार्यक्रमाची वैशिष्ट्ये")}
          title={t("Why This Experience Works", "हा अनुभव का प्रभावी ठरतो")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`young-feature-${it.slug}`}
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
