import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const WORKSHOP_IMG =
  "https://static.prod-images.emergentagent.com/jobs/02ef60ff-e687-423a-b4e6-3c742b985c0b/images/7b60618b753a568145fe899a1a43a46f738c60f2bfcb3af320745f7f428dd371.jpeg";

const PILLARS = [
  {
    title: "Experiential, Not Lectures",
    text: "Every concept is learned through activities, role play, challenges, and reflection — never boring classroom theory.",
  },
  {
    title: "Built for the Teenage Mind",
    text: "Designed around how 13–18 year olds actually learn: high energy, peer interaction, gamified growth, and real mentorship.",
  },
  {
    title: "Values at the Core",
    text: "Character, discipline, family values, and responsibility are woven into every session — skills with a soul.",
  },
];

export const AboutProgram = () => {
  return (
    <section id="program" data-testid="about-section" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow="The Program"
          title="Three Days That Rewire a Lifetime"
          description="Youth Transform is an intensive 3-day experiential workshop by Rupantaram — Garud Zep Group's Life Skills & Personality Transformation Academy. Students build confidence, discipline, emotional intelligence, communication, leadership, and career clarity through practical activities rather than classroom lectures."
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-[#e6a635]/30" />
              <div className="relative overflow-hidden rounded-2xl border border-[#1e3a5f]">
                <img
                  src={WORKSHOP_IMG}
                  alt="Students collaborating during a Youth Transform workshop"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(7,19,40,0.75)_100%)]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                    Live Workshop Session
                  </p>
                  <span className="rounded-full bg-[#e6a635] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#071328]">
                    Karjat · Alibag · Pen · Lonavala
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.1}>
                <div
                  data-testid={`about-pillar-${i + 1}`}
                  className="card-glow-hover rounded-xl border border-[#1e293b] border-l-2 border-l-[#e6a635] bg-[#0b1d3a] p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e6a635]/15 text-[#f5c253]">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
