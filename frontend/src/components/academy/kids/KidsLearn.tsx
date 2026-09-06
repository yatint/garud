import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarCheck,
  Flame,
  Heart,
  HeartHandshake,
  Mic,
  Palette,
  Users,
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
  tint: string;
}

const ITEMS: Item[] = [
  { icon: Flame, enTitle: "Self Confidence", mrTitle: "आत्मविश्वास", enText: "Speak up, try new things, believe in yourself.", mrText: "मोकळे बोला, नवीन गोष्टी करून पहा, स्वतःवर विश्वास ठेवा.", slug: "confidence", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: CalendarCheck, enTitle: "Good Habits", mrTitle: "चांगल्या सवयी", enText: "Small daily routines that stick for life.", mrText: "आयुष्यभर टिकणारे छोटे दैनिक दिनक्रम.", slug: "habits", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: HeartHandshake, enTitle: "Respect & Values", mrTitle: "आदर आणि मूल्ये", enText: "Respect for parents, teachers, and friends.", mrText: "पालक, शिक्षक आणि मित्रांचा आदर.", slug: "respect", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
  { icon: Mic, enTitle: "Communication Skills", mrTitle: "संवाद कौशल्ये", enText: "Express thoughts clearly and listen well.", mrText: "विचार स्पष्ट मांडा आणि व्यवस्थित ऐका.", slug: "communication", tint: "bg-[#0b5d3b]/10 text-[#0b5d3b] group-hover:bg-[#0b5d3b]" },
  { icon: Palette, enTitle: "Creativity", mrTitle: "सर्जनशीलता", enText: "Imagine, create, and think freely.", mrText: "कल्पना करा, निर्माण करा आणि मोकळे विचार करा.", slug: "creativity", tint: "bg-[#e0701f]/10 text-[#e0701f] group-hover:bg-[#e0701f]" },
  { icon: Users, enTitle: "Teamwork", mrTitle: "संघकार्य", enText: "Share, cooperate, and win together.", mrText: "वाटून घ्या, सहकार्य करा आणि मिळून जिंका.", slug: "teamwork", tint: "bg-[#f68a4a]/12 text-[#f68a4a] group-hover:bg-[#f68a4a]" },
  { icon: BookOpen, enTitle: "Study Discipline", mrTitle: "अभ्यास शिस्त", enText: "Focus better and enjoy learning daily.", mrText: "अधिक एकाग्र राहा आणि रोज शिकण्याचा आनंद घ्या.", slug: "study", tint: "bg-[#18463b]/10 text-[#18463b] group-hover:bg-[#18463b]" },
  { icon: Heart, enTitle: "Emotional Awareness", mrTitle: "भावनिक जाणीव", enText: "Understand feelings and handle them kindly.", mrText: "भावना समजून घ्या आणि शांततेने सामना करा.", slug: "emotions", tint: "bg-[#f0a500]/12 text-[#c98a0a] group-hover:bg-[#f0a500]" },
];

export const KidsLearn = () => {
  const { t } = useLang();
  return (
    <section data-testid="kids-learn-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("What Children Learn", "मुले काय शिकतात")}
          title={t("Eight Building Blocks of a Confident Child", "आत्मविश्वासू मुलाचे आठ घटक")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <Reveal key={it.slug} delay={(i % 4) * 0.06}>
              <div
                data-testid={`kids-learn-card-${it.slug}`}
                className="group flex h-full items-start gap-4 rounded-2xl border border-[#e1dfdf] bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 group-hover:text-white ${it.tint}`}
                >
                  <it.icon size={20} />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-[#18463b]">{t(it.enTitle, it.mrTitle)}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#7a7a7a] sm:text-sm">{t(it.enText, it.mrText)}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
