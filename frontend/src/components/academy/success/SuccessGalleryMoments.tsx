import { ArrowRight, Award, Crown, Eye, ImagePlus, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const MOMENTS = [
  { label: "Group Activities", slug: "group" },
  { label: "Leadership Sessions", slug: "leadership" },
  { label: "Public Speaking", slug: "speaking" },
  { label: "Team Challenges", slug: "team" },
  { label: "Yoga & Mindfulness", slug: "yoga" },
  { label: "Certificate Ceremony", slug: "certificate" },
];

const TIMELINE = [
  { icon: Eye, day: "Day 1", title: "Self Discovery", text: "Meeting yourself honestly.", slug: "day-1" },
  { icon: Wrench, day: "Day 2", title: "Skill Development", text: "Practicing what matters.", slug: "day-2" },
  { icon: Crown, day: "Day 3", title: "Confidence & Leadership", text: "Stepping up and speaking out.", slug: "day-3" },
  { icon: Award, day: "Graduation", title: "Certificate & Celebration", text: "The journey is honoured.", slug: "graduation" },
];

export const SuccessGalleryMoments = () => {
  return (
    <>
      <section data-testid="success-gallery-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="05"
            eyebrow="Student Journey Gallery"
            title="Moments From the Journey"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid="journey-gallery">
            {MOMENTS.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 0.07}>
                <div
                  data-testid={`journey-photo-${m.slug}`}
                  className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[#d8d5d0] bg-[#f0efe9] text-[#999] ${
                    i % 3 === 0 ? "aspect-[4/3]" : "aspect-[16/10]"
                  }`}
                >
                  <ImagePlus size={28} strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">{m.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 text-center">
            <Link
              to="/gallery"
              data-testid="view-full-gallery-button"
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
            >
              View Full Gallery
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section data-testid="success-moments-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="06"
            eyebrow="Moments That Matter"
            title="The Arc of Every Program"
            align="center"
          />
          <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-[linear-gradient(90deg,transparent,#f68a4a_15%,#f68a4a_85%,transparent)] lg:block" />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.1}>
                <div data-testid={`moment-${t.slug}`} className="group relative text-center">
                  <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#18463b] text-[#f5c253] shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <t.icon size={26} />
                  </span>
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#e0701f]">
                    {t.day}
                  </p>
                  <h3 className="mt-1.5 font-heading text-lg font-bold text-[#18463b]">{t.title}</h3>
                  <p className="mx-auto mt-2 max-w-[220px] text-sm text-[#7a7a7a]">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
