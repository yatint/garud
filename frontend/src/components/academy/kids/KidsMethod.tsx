import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Flower2,
  Gamepad2,
  GraduationCap,
  MessagesSquare,
  Palette,
} from "lucide-react";
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
  { icon: Gamepad2, enTitle: "Interactive Games", mrTitle: "परस्पर खेळ", enText: "Every lesson begins as a game.", mrText: "प्रत्येक धडा खेळापासून सुरू होतो.", slug: "games" },
  { icon: Palette, enTitle: "Creative Activities", mrTitle: "सर्जनशील उपक्रम", enText: "Art, craft, and imagination at work.", mrText: "कला, हस्तकला आणि कल्पनाशक्ती कामाला.", slug: "creative" },
  { icon: MessagesSquare, enTitle: "Group Discussions", mrTitle: "समूह चर्चा", enText: "Every child gets heard.", mrText: "प्रत्येक मूल ऐकले जाते.", slug: "discussions" },
  { icon: Flower2, enTitle: "Yoga & Meditation", mrTitle: "योग आणि ध्यान", enText: "Calm minds and healthy bodies.", mrText: "शांत मन आणि निरोगी शरीर.", slug: "yoga" },
  { icon: BookOpen, enTitle: "Story-Based Learning", mrTitle: "कथांद्वारे शिक्षण", enText: "Values taught through stories.", mrText: "कथांमधून मूल्यांचा संस्कार.", slug: "stories" },
  { icon: GraduationCap, enTitle: "Mentor Guidance", mrTitle: "मार्गदर्शकांचे सहकार्य", enText: "Caring mentors for every child.", mrText: "प्रत्येक मुलासाठी काळजीवाहू मार्गदर्शक.", slug: "mentors" },
];

export const KidsMethod = () => {
  const { t } = useLang();
  return (
    <section data-testid="kids-method-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Our Learning Method", "आमची शिक्षण पद्धत")}
          title={t("Designed for How Children Actually Learn", "मुले खरोखर जसे शिकतात तसे रचलेले")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={i * 0.06}>
              <div
                data-testid={`kids-method-card-${it.slug}`}
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
