import type { LucideIcon } from "lucide-react";
import { Briefcase, Home, Smile, TrendingUp, Zap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Stop {
  icon: LucideIcon;
  enAge: string;
  mrAge: string;
  program: string;
  slug: string;
  tint: string;
}

const STOPS: Stop[] = [
  { icon: Smile, enAge: "6–13", mrAge: "६–१३", program: "Kids Transform", slug: "kids", tint: "bg-[#f68a4a]" },
  { icon: Zap, enAge: "13–18", mrAge: "१३–१८", program: "Youth Transform", slug: "youth", tint: "bg-[#18463b]" },
  { icon: Briefcase, enAge: "19+", mrAge: "१९+", program: "Young Adult Transform", slug: "young-adult", tint: "bg-[#f0a500]" },
  { icon: Home, enAge: "Parents", mrAge: "पालक", program: "Parenting 360°", slug: "parents", tint: "bg-[#0b5d3b]" },
  { icon: TrendingUp, enAge: "Complete Growth Journey", mrAge: "संपूर्ण प्रगती प्रवास", program: "30-Day Transformation", slug: "growth", tint: "bg-[#e0701f]" },
];

export const ProgramFinder = () => {
  const { t } = useLang();
  return (
    <section id="program-finder" data-testid="program-finder-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("Which Program Is Right for You?", "तुमच्यासाठी योग्य कार्यक्रम कोणता?")}
          title={t("Follow the Age, Find the Program", "वय पहा, कार्यक्रम शोधा")}
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-[linear-gradient(90deg,transparent,#f68a4a_12%,#18463b_50%,#f68a4a_88%,transparent)] lg:block" />
          {STOPS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <div data-testid={`finder-stop-${s.slug}`} className="group relative text-center">
                <span
                  className={`relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${s.tint}`}
                >
                  <s.icon size={26} />
                </span>
                <p className="mt-5 font-heading text-sm font-black uppercase tracking-[0.14em] text-[#18463b]">
                  {t(s.enAge, s.mrAge)}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#7a7a7a]">{s.program}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
