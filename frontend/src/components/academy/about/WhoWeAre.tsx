import { Eye, Target } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const WHO_IMG =
  "https://images.unsplash.com/photo-1761966754621-af9428b874ef?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const WhoWeAre = () => {
  return (
    <section data-testid="about-who-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading index="01" eyebrow="Who We Are" title="More Than an Academy" />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                Rupantaram is a life skills and personality transformation academy dedicated to
                nurturing children, youth, parents, and young adults through structured
                developmental programs.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                We believe academic education alone is not enough. True success comes from
                emotional intelligence, discipline, communication, leadership, character, and the
                ability to make wise decisions in real life.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                Our programs combine practical activities, group discussions, mentorship,
                mindfulness, leadership exercises, and value-based learning to create lasting
                behavioral transformation.
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={WHO_IMG}
                  alt="Children exploring nature during an outdoor session"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.5)_100%)]" />
                <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                  Learning Beyond Classrooms
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div
              data-testid="mission-card"
              className="group h-full rounded-2xl border border-[#18463b] bg-[#18463b] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_44px_rgba(24,70,59,0.25)]"
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-full bg-[#f68a4a] p-3.5 text-white">
                <Target size={24} />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-black text-white">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-white/75">
                To develop individuals who are confident, emotionally balanced, value-driven, and
                capable of contributing positively to their family, society, and nation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              data-testid="vision-card"
              className="group h-full rounded-2xl border border-[#f68a4a]/50 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#f68a4a] hover:shadow-[0_18px_44px_rgba(246,138,74,0.15)]"
            >
              <span className="flex h-13 w-13 items-center justify-center rounded-full bg-[#f68a4a]/12 p-3.5 text-[#f68a4a]">
                <Eye size={24} />
              </span>
              <h3 className="mt-6 font-heading text-2xl font-black text-[#18463b]">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-[#555]">
                To become Maharashtra's most trusted life skills academy by creating a generation
                of responsible leaders with strong character, clear purpose, and meaningful life
                direction.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
