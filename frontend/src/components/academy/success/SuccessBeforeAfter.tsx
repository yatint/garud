import { ArrowRight, MapPin, Quote, UserRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ROWS = [
  { before: "Low Confidence", after: "Speaks with Confidence" },
  { before: "Poor Discipline", after: "Consistent Daily Habits" },
  { before: "Communication Gap", after: "Stronger Family Bonding" },
  { before: "No Clear Goals", after: "Purpose & Direction" },
  { before: "Excessive Screen Time", after: "Better Time Management" },
  { before: "Fear of Public Speaking", after: "Improved Communication" },
];

const PARENTS = [
  { program: "Kids Transform", slug: "parent-1" },
  { program: "Youth Transform", slug: "parent-2" },
  { program: "Parenting 360°", slug: "parent-3" },
];

export const SuccessBeforeAfter = () => {
  return (
    <>
      <section data-testid="success-before-after-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="03"
            eyebrow="Before & After"
            title="The Transformation Framework"
            description="This is the change our programs are designed to create — a framework, not a testimonial."
            align="center"
          />

          <Reveal delay={0.1}>
            <div
              className="mt-12 overflow-hidden rounded-2xl border border-[#e1dfdf] shadow-[0_20px_50px_rgba(24,70,59,0.08)]"
              data-testid="before-after-table"
            >
              <div className="grid grid-cols-[1fr_auto_1fr] bg-[#18463b]">
                <p className="px-5 py-4 text-center font-heading text-xs font-bold uppercase tracking-[0.18em] text-white/60 sm:text-sm">
                  Before
                </p>
                <span className="w-10" />
                <p className="px-5 py-4 text-center font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#f8b183] sm:text-sm">
                  After
                </p>
              </div>
              {ROWS.map((r, i) => (
                <div
                  key={r.before}
                  data-testid={`before-after-row-${i + 1}`}
                  className={`grid grid-cols-[1fr_auto_1fr] items-center border-t border-[#e1dfdf] ${i % 2 === 0 ? "bg-white" : "bg-[#fdfdfb]"}`}
                >
                  <p className="px-5 py-4 text-center text-sm font-medium text-[#999]">{r.before}</p>
                  <span className="flex h-8 w-10 items-center justify-center text-[#f68a4a]">
                    <ArrowRight size={18} />
                  </span>
                  <p className="px-5 py-4 text-center text-sm font-bold text-[#18463b]">{r.after}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="success-parents-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow="Parent Experiences"
            title="What Parents Share"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PARENTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <figure
                  data-testid={`parent-testimonial-${p.slug}`}
                  className="flex h-full flex-col items-center rounded-2xl border border-dashed border-[#d8d5d0] bg-[#fbfafa] p-8 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e1dfdf] bg-white text-[#bbb]">
                    <UserRound size={28} strokeWidth={1.5} />
                  </span>
                  <Quote size={22} className="mt-5 text-[#f68a4a]" />
                  <div className="mt-4 flex w-full flex-col items-center gap-2">
                    <span className="h-2.5 w-48 max-w-full rounded-full bg-[#eceae6]" />
                    <span className="h-2.5 w-40 max-w-full rounded-full bg-[#eceae6]" />
                    <span className="h-2.5 w-32 max-w-full rounded-full bg-[#eceae6]" />
                  </div>
                  <figcaption className="mt-6">
                    <p className="font-heading text-sm font-bold text-[#18463b]">
                      Parent Name (Placeholder)
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#999]">{p.program}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#bbb]">
                      <MapPin size={11} />
                      Location (Placeholder)
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
