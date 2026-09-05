import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  GraduationCap,
  MessagesSquare,
  TrendingUp,
  Trophy,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const EXPERIENCE: Array<{ icon: LucideIcon; title: string; text: string; slug: string }> = [
  { icon: CalendarCheck, title: "Daily Activities", text: "Short, guided tasks every day.", slug: "daily" },
  { icon: GraduationCap, title: "Mentor Guidance", text: "Personal direction all 30 days.", slug: "mentors" },
  { icon: MessagesSquare, title: "Group Discussions", text: "Share progress and learn together.", slug: "discussions" },
  { icon: Trophy, title: "Practical Challenges", text: "Weekly real-life skill challenges.", slug: "challenges" },
  { icon: BookOpen, title: "Reflection Sessions", text: "Process experiences honestly.", slug: "reflection" },
  { icon: TrendingUp, title: "Weekly Progress Review", text: "Track growth, adjust, improve.", slug: "review" },
];

const IDEAL = [
  "Students seeking discipline",
  "Teenagers building confidence",
  "Young adults searching for direction",
  "Individuals wanting better habits",
  "Families committed to personal growth",
];

const OUTCOMES = [
  "Consistent positive habits",
  "Greater confidence",
  "Improved communication",
  "Stronger leadership mindset",
  "Better emotional balance",
  "Responsible decision making",
  "Clear personal goals",
  "A disciplined daily routine",
];

export const ThirtyExperienceOutcomes = () => {
  return (
    <>
      <section data-testid="thirty-experience-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="06"
            eyebrow="Learning Experience"
            title="Guided Every Single Day"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.06}>
                <div
                  data-testid={`thirty-experience-card-${e.slug}`}
                  className="group flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-[#fbfafa] p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                    <e.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b]">{e.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a]">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="thirty-ideal-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="07" eyebrow="Who Should Join?" title="Ideal For" align="center" />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2" data-testid="thirty-ideal-checklist">
            {IDEAL.map((t, i) => (
              <Reveal key={t} delay={0.06 * i}>
                <div
                  data-testid={`thirty-ideal-${i + 1}`}
                  className="group flex items-center gap-4 rounded-xl border border-[#e1dfdf] bg-[#fbfafa] px-5 py-4 transition-all duration-300 hover:border-[#f68a4a]/60 hover:bg-white"
                >
                  <CheckCircle2 size={22} className="shrink-0 text-[#f68a4a] transition-transform duration-300 group-hover:scale-110" />
                  <span className="text-sm font-semibold text-[#333] sm:text-base">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        data-testid="thirty-outcomes-section"
        className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">Outcomes</p>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              After 30 Days, Participants Develop
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o} delay={(i % 4) * 0.06}>
                <div
                  data-testid={`thirty-outcome-${i + 1}`}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#f68a4a]/50"
                >
                  <CheckCircle2 size={20} className="shrink-0 text-[#f68a4a]" />
                  <span className="text-sm font-semibold text-white/90">{o}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
