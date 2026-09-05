import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Program {
  title: string;
  audience: string;
  duration: string;
  focus: string;
  img: string;
  slug: string;
  link?: string;
  flagship?: boolean;
}

const PROGRAMS: Program[] = [
  {
    title: "Kids Transform",
    audience: "Ages 6–12",
    duration: "3 Days",
    focus: "Confidence, discipline, communication, values, creativity, study habits.",
    img: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "kids",
  },
  {
    title: "Youth Transform",
    audience: "Ages 13–18",
    duration: "3 Days",
    focus: "Leadership, emotional intelligence, goal setting, digital discipline, career awareness, public speaking.",
    img: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "youth",
    link: "/youth-transform",
  },
  {
    title: "Young Adult Transform",
    audience: "Ages 19+",
    duration: "3 Days",
    focus: "Career planning, financial awareness, communication, self-leadership, decision making.",
    img: "https://images.unsplash.com/photo-1758613171176-ea64579c2dcf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "young-adult",
  },
  {
    title: "Parenting 360°",
    audience: "Parents & Guardians",
    duration: "1 Day",
    focus: "Child psychology, communication, emotional bonding, positive parenting, digital parenting.",
    img: "https://images.unsplash.com/photo-1783873231697-3909aeda2381?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "parenting",
  },
  {
    title: "30-Day Transformation Program",
    audience: "Students & Families",
    duration: "30 Days",
    focus: "Daily habits, mentorship, life skills, reflection, leadership, measurable personal growth.",
    img: "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "thirty-day",
    flagship: true,
  },
];

interface ProgramsGridProps {
  onEnquire: () => void;
}

export const ProgramsGrid = ({ onEnquire }: ProgramsGridProps) => {
  return (
    <>
      <section data-testid="programs-intro-section" className="bg-white pb-4 pt-20 lg:pt-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            index="01"
            eyebrow="Introduction"
            title="Programs Designed for Every Stage of Life"
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
              At Rupantaram, we understand that the challenges of a 7-year-old, a teenager, a young
              adult, and a parent are completely different. That's why each program is carefully
              designed with age-appropriate activities, practical learning, mentorship, and
              transformational experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="programs-cards-section" className="bg-white pb-20 pt-12 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PROGRAMS.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <article
                  data-testid={`programs-card-${p.slug}`}
                  className={`card-glow-hover group flex h-full flex-col overflow-hidden rounded-[10px] border bg-white ${
                    p.flagship ? "border-[#f68a4a] shadow-[0_18px_44px_rgba(246,138,74,0.15)]" : "border-[#e1dfdf]"
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {p.flagship && (
                      <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#f68a4a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                        <Star size={11} />
                        Flagship Program
                      </span>
                    )}
                    <div className="absolute bottom-3 left-4 flex gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#18463b]">
                        {p.audience}
                      </span>
                      <span className="rounded-full bg-[#18463b]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                        {p.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-[#18463b]">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555]">{p.focus}</p>
                    {p.link ? (
                      <Link
                        to={p.link}
                        data-testid={`programs-card-link-${p.slug}`}
                        className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                      >
                        View Details
                        <ArrowUpRight size={15} />
                      </Link>
                    ) : (
                      <button
                        data-testid={`programs-card-link-${p.slug}`}
                        onClick={onEnquire}
                        className="mt-6 inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                      >
                        View Details
                        <ArrowRight size={15} />
                      </button>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
