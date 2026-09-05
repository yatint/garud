import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  MessagesSquare,
  Presentation,
  Trophy,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const METHODS: Array<{ icon: LucideIcon; title: string; text: string; slug: string }> = [
  { icon: Presentation, title: "Interactive Workshops", text: "Skills learned by doing.", slug: "workshops" },
  { icon: MessagesSquare, title: "Group Discussions", text: "Ideas sharpened together.", slug: "discussions" },
  { icon: Trophy, title: "Practical Activities", text: "Real scenarios, real practice.", slug: "activities" },
  { icon: BookOpen, title: "Reflection Journals", text: "Writing that turns experience into insight.", slug: "journals" },
  { icon: GraduationCap, title: "Mentor Guidance", text: "Trained mentors beside every participant.", slug: "mentors" },
  { icon: ClipboardCheck, title: "Habit Building Challenges", text: "Daily challenges that make skills stick.", slug: "challenges" },
];

const TABLE = [
  { program: "Kids Transform", focus: "Confidence, habits, values, communication", href: "/programs/kids-transform" },
  { program: "Youth Transform", focus: "Leadership, discipline, emotional intelligence", href: "/youth-transform" },
  { program: "Young Adult Transform", focus: "Career direction, decision making, responsibility", href: "/programs/young-adult-transform" },
  { program: "Parenting 360°", focus: "Positive parenting and family communication", href: "/programs" },
  { program: "30-Day Transform", focus: "Daily habit formation and lifelong transformation", href: "/programs/30-day-transform" },
];

const JOURNEY = [
  { title: "Discover Yourself", text: "Honest self-awareness is the first skill.", slug: "discover" },
  { title: "Build Better Habits", text: "Daily discipline turns intention into routine.", slug: "habits" },
  { title: "Strengthen Character", text: "Values practiced until they become identity.", slug: "character" },
  { title: "Lead with Confidence", text: "Communication and leadership in action.", slug: "lead" },
  { title: "Live with Purpose", text: "A meaningful, responsible, directed life.", slug: "purpose" },
];

export const LifeMethodTableJourney = () => {
  return (
    <>
      <section data-testid="life-method-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="03"
            eyebrow="How We Teach Life Skills"
            title="Experience First, Theory Last"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {METHODS.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.06}>
                <div
                  data-testid={`life-method-card-${m.slug}`}
                  className="group flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
                >
                  <span className="flex h-13 w-13 items-center justify-center rounded-full border border-[#18463b]/20 bg-[#fbfafa] p-3.5 text-[#18463b] transition-all duration-300 group-hover:border-[#f68a4a] group-hover:bg-[#f68a4a] group-hover:text-white">
                    <m.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b]">{m.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#7a7a7a]">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="life-table-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow="Skills Across Every Age Group"
            title="The Same Skills, Tuned to Every Age"
            align="center"
          />
          <Reveal delay={0.1}>
            <div
              className="mt-12 overflow-hidden rounded-2xl border border-[#e1dfdf] shadow-[0_20px_50px_rgba(24,70,59,0.08)]"
              data-testid="life-skills-table"
            >
              <div className="grid grid-cols-[1fr_1.4fr] bg-[#18463b]">
                <p className="px-6 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#f8b183] sm:text-sm">
                  Program
                </p>
                <p className="px-6 py-4 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#f8b183] sm:text-sm">
                  Primary Focus
                </p>
              </div>
              {TABLE.map((row, i) => (
                <Link
                  key={row.program}
                  to={row.href}
                  data-testid={`life-table-row-${i + 1}`}
                  className={`group grid grid-cols-[1fr_1.4fr] items-center border-t border-[#e1dfdf] transition-colors hover:bg-[#f6f7f0] ${i % 2 === 0 ? "bg-white" : "bg-[#fdfdfb]"}`}
                >
                  <span className="flex items-center gap-2 px-6 py-4 font-heading text-sm font-bold text-[#18463b] sm:text-base">
                    {row.program}
                    <ArrowRight size={14} className="text-[#f68a4a] opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                  <span className="px-6 py-4 text-sm text-[#555]">{row.focus}</span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="life-journey-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="05"
            eyebrow="The Transformation Journey"
            title="Five Steps to a Skilled Life"
            align="center"
          />
          <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(90deg,transparent,#f68a4a_15%,#f68a4a_85%,transparent)] lg:block" />
            {JOURNEY.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.08}>
                <div data-testid={`life-journey-step-${s.slug}`} className="group relative text-center">
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#f68a4a] bg-white font-heading text-base font-black text-[#f68a4a] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold text-[#18463b] sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-[#7a7a7a]">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
