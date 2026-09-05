import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1719857646553-92342880175d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const AcademyAbout = () => {
  return (
    <section id="about" data-testid="academy-about-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="01"
              eyebrow="About Garud Zep – Rupantaram"
              title="Change That Comes From Within"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                Rupantaram means change that comes from within. Today's children are full of
                information but short on direction. Plenty of places prepare them for exams; very
                few prepare them for life. Garud Zep – Rupantaram is exactly that place — where a
                child learns to know themselves, control themselves, and choose their own
                direction.
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                Our workshops are not lectures. Skills turn into behaviour through activity, group
                work, lived experience, guided reflection, and daily practice. And when behaviour
                changes, life changes.
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                This is not teaching — this is transformation.
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={ABOUT_IMG}
                  alt="A mentor guiding a student in conversation"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.55)_100%)]" />
                <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                  Mentorship, Not Lectures
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
