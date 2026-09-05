import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  ClipboardCheck,
  Crown,
  Dumbbell,
  Flower2,
  Heart,
  HeartHandshake,
  Home,
  Hourglass,
  Mic,
  NotebookPen,
  ShieldCheck,
  Sun,
  Target,
  Timer,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const DAILY: Array<{ icon: LucideIcon; title: string; slug: string }> = [
  { icon: ClipboardCheck, title: "Habit Tracking", slug: "habit-tracking" },
  { icon: NotebookPen, title: "Reflection Journal", slug: "journal" },
  { icon: BookOpen, title: "Reading", slug: "reading" },
  { icon: Flower2, title: "Meditation & Mindfulness", slug: "meditation" },
  { icon: Dumbbell, title: "Physical Activity", slug: "physical" },
  { icon: Home, title: "Family Communication", slug: "family" },
  { icon: Target, title: "Goal Review", slug: "goal-review" },
  { icon: Heart, title: "Gratitude Practice", slug: "gratitude" },
];

const CORE: Array<{ icon: LucideIcon; title: string; text: string; slug: string }> = [
  { icon: Hourglass, title: "Self Discipline", text: "Routine over mood, every single day.", slug: "discipline" },
  { icon: Target, title: "Goal Setting", text: "Clear targets with daily review.", slug: "goals" },
  { icon: Crown, title: "Leadership", text: "Take charge of yourself and others.", slug: "leadership" },
  { icon: Mic, title: "Communication", text: "Speak and listen with confidence.", slug: "communication" },
  { icon: HeartHandshake, title: "Emotional Intelligence", text: "Understand and manage emotions.", slug: "emotional" },
  { icon: Sun, title: "Positive Thinking", text: "Train a resilient, hopeful mind.", slug: "positive" },
  { icon: Timer, title: "Time Management", text: "A place for everything in your day.", slug: "time" },
  { icon: ShieldCheck, title: "Character & Values", text: "Integrity that outlasts the program.", slug: "character" },
];

export const ThirtyDailyCore = () => {
  return (
    <>
      <section data-testid="thirty-daily-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow="What You'll Practice Daily"
            title="Your Daily Transformation Toolkit"
            align="center"
          />
          <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
            {DAILY.map((d, i) => (
              <Reveal key={d.slug} delay={(i % 4) * 0.06}>
                <div
                  data-testid={`thirty-daily-${d.slug}`}
                  className="group flex h-full flex-col items-center rounded-2xl border border-[#e1dfdf] bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f68a4a]/50 hover:shadow-[0_14px_34px_rgba(24,70,59,0.1)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    <d.icon size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-sm font-bold text-[#18463b] sm:text-base">
                    {d.title}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="thirty-core-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="05"
            eyebrow="Core Areas of Transformation"
            title="Eight Areas That Change Together"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CORE.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.06}>
                <div
                  data-testid={`thirty-core-card-${c.slug}`}
                  className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    <c.icon size={20} />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold text-[#18463b]">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#555]">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
