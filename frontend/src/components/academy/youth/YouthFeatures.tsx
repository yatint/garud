import type { LucideIcon } from "lucide-react";
import { Flower2, GraduationCap, MessagesSquare, Zap } from "lucide-react";
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
  { icon: MessagesSquare, enTitle: "Experiential & Interactive Learning", mrTitle: "अनुभवाधारित आणि संवादात्मक शिक्षण पद्धती", enText: "Zero lectures — every skill is experienced, not just explained.", mrText: "उपदेश नव्हे — प्रत्येक कौशल्य अनुभवून शिकवले जाते.", slug: "experiential" },
  { icon: Zap, enTitle: "Inspiring Sessions & Real Activities", mrTitle: "प्रेरणादायी सत्रे आणि प्रत्यक्ष उपक्रम", enText: "Energy-filled sessions with hands-on challenges.", mrText: "ऊर्जाने भरलेली सत्रे आणि प्रात्यक्षिक आव्हाने.", slug: "inspiring" },
  { icon: GraduationCap, enTitle: "Guidance from Expert Mentors", mrTitle: "तज्ज्ञ मार्गदर्शकांचे मार्गदर्शन", enText: "Personal attention and feedback from trained mentors.", mrText: "प्रशिक्षित मार्गदर्शकांचे वैयक्तिक लक्ष आणि अभिप्राय.", slug: "mentors" },
  { icon: Flower2, enTitle: "Focus on All-Round Development", mrTitle: "विद्यार्थ्यांच्या सर्वांगीण विकासावर भर", enText: "Mind, thoughts, behaviour, and values — all grow together.", mrText: "मन, विचार, वर्तन आणि संस्कार — सर्व एकत्र घडतात.", slug: "allround" },
];

export const YouthFeatures = () => {
  const { t } = useLang();
  return (
    <section data-testid="youth-features-section" className="bg-[#fbfafa] py-20 lg:py-28">
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
                data-testid={`youth-feature-${it.slug}`}
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
