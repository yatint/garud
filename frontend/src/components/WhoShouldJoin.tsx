import { CheckCircle2, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const TRAITS = [
  "Lack confidence in expressing themselves",
  "Spend excessive time on mobile & social media",
  "Need clarity about career and future direction",
  "Want sharper focus and better study habits",
  "Want to improve communication & leadership",
  "Want discipline, values, and positive habits",
];

const TRAIT_IMG =
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const WhoShouldJoin = () => {
  return (
    <section id="who" data-testid="who-should-join-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="03"
              eyebrow="Who Should Join"
              title="Made for Students Who Are Ready for More"
              description="If any of these sound like you — or your child — Youth Transform was built exactly for this moment of life."
            />
            <ul className="mt-10 flex flex-col gap-4" data-testid="who-checklist">
              {TRAITS.map((t, i) => (
                <Reveal key={t} delay={0.08 * i}>
                  <li
                    data-testid={`who-trait-${i + 1}`}
                    className="group flex items-center gap-4 rounded-xl border border-[#e1dfdf] bg-white px-5 py-4 transition-all duration-300 hover:border-[#f68a4a]/60 hover:bg-[#fbfafa]"
                  >
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-[#f68a4a] transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-sm font-semibold text-[#333] sm:text-base">{t}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={TRAIT_IMG}
                  alt="Students laughing and learning together"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_60%,rgba(24,70,59,0.25)_100%)]" />
              </div>
              <div
                data-testid="who-parent-quote"
                className="relative -mt-16 ml-6 mr-2 rounded-xl border border-[#e1dfdf] bg-white p-6 shadow-[0_20px_50px_rgba(24,70,59,0.12)] sm:ml-12"
              >
                <Quote size={26} className="text-[#f68a4a]" />
                <p className="mt-3 text-sm leading-relaxed text-[#444] sm:text-base">
                  "My son came back a different person — focused, polite, and full of purpose. He
                  finally put his phone down on his own."
                </p>
                <p className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-[#18463b]">
                  A Youth Transform Parent
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
