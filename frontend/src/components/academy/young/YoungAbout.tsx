import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1701834951900-b31c99da66f8?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const YoungAbout = () => {
  return (
    <section id="young-about" data-testid="young-about-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="01"
              eyebrow="About the Program"
              title="Preparing You for Life Beyond College"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                Young Adult Transform is designed for individuals entering the most important phase
                of life. While education prepares us for careers, this program prepares us for life
                by developing confidence, decision-making ability, emotional maturity,
                communication, leadership, and responsible living.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                The program focuses on practical life skills that help participants become capable
                individuals in both personal and professional life.
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                Purpose · Leadership · Real-Life Readiness
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={ABOUT_IMG}
                  alt="Young adults learning together in a group session"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.5)_100%)]" />
                <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                  Skills for the Real World
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
