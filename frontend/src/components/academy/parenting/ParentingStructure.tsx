import type { LucideIcon } from "lucide-react";
import { CircleHelp, MessagesSquare, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Block {
  icon: LucideIcon;
  num: string;
  enTitle: string;
  mrTitle: string;
  enText: string;
  mrText: string;
  slug: string;
}

const BLOCKS: Block[] = [
  {
    icon: MessagesSquare,
    num: "01",
    enTitle: "Interactive Sessions & Real Examples",
    mrTitle: "संवादात्मक सत्रे आणि वास्तविक उदाहरणे",
    enText: "Core parenting concepts explained through situations every parent recognises.",
    mrText: "प्रत्येक पालकाला परिचित असलेल्या प्रसंगांतून पालकत्वाच्या संकल्पना.",
    slug: "sessions",
  },
  {
    icon: Users,
    num: "02",
    enTitle: "Group Discussions & Experiential Activities",
    mrTitle: "गटचर्चा आणि अनुभवाधारित उपक्रम",
    enText: "Parents learn from each other's experiences through guided activities.",
    mrText: "मार्गदर्शित उपक्रमांतून पालक एकमेकांच्या अनुभवांतून शिकतात.",
    slug: "activities",
  },
  {
    icon: CircleHelp,
    num: "03",
    enTitle: "Q&A & Personal Guidance",
    mrTitle: "प्रश्नोत्तरे आणि वैयक्तिक मार्गदर्शन",
    enText: "Your specific parenting questions answered by expert mentors.",
    mrText: "तुमच्या विशिष्ट पालकत्व प्रश्नांची उत्तरे तज्ज्ञ मार्गदर्शकांकडून.",
    slug: "guidance",
  },
];

export const ParentingStructure = () => {
  const { t } = useLang();
  return (
    <section data-testid="parenting-structure-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Workshop Structure · 1 Day | 4 Hours", "कार्यशाळा रचना · १ दिवस | ४ तास")}
          title={t("Four Focused Hours, Three Powerful Parts", "४ तास, तीन प्रभावी घटक")}
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="absolute left-0 right-0 top-[52px] hidden h-px bg-[linear-gradient(90deg,transparent,#f68a4a_20%,#f68a4a_80%,transparent)] lg:block" />
          {BLOCKS.map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.15}>
              <article
                data-testid={`parenting-structure-${b.slug}`}
                className="card-glow-hover group relative h-full rounded-2xl border border-[#e1dfdf] bg-white p-7"
              >
                <div className="relative mb-6 flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f68a4a] font-heading text-lg font-black text-white shadow-[0_8px_20px_rgba(246,138,74,0.35)]">
                    {b.num}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#18463b] group-hover:text-white">
                    <b.icon size={22} />
                  </span>
                </div>
                <h3 className="font-heading text-xl font-black leading-tight text-[#18463b]">
                  {t(b.enTitle, b.mrTitle)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#555]">{t(b.enText, b.mrText)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
