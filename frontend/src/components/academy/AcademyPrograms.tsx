import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Program {
  title: string;
  age: string;
  duration: string;
  img: string;
  points: string[];
  slug: string;
  link?: string;
  flagship?: boolean;
}

const PROGRAMS: Program[] = [
  {
    title: "Kids Transform",
    age: "Ages 6–12",
    duration: "3 Days",
    img: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=1000",
    points: ["Confidence & study habits", "Communication & teamwork", "Yoga & digital awareness"],
    slug: "kids-transform",
  },
  {
    title: "Youth Transform",
    age: "Ages 13–18",
    duration: "3 Days",
    img: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    points: ["Career direction & goal setting", "Leadership & time management", "Emotional intelligence & confidence"],
    slug: "youth-transform",
    link: "/youth-transform",
  },
  {
    title: "Young Adult Transform",
    age: "Ages 19+",
    duration: "3 Days",
    img: "https://images.unsplash.com/photo-1758613171176-ea64579c2dcf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    points: ["Self-discovery & career planning", "Financial awareness", "Mental wellness & digital discipline"],
    slug: "young-adult-transform",
  },
  {
    title: "Parenting 360°",
    age: "For Parents",
    duration: "1 Day",
    img: "https://images.unsplash.com/photo-1783873231697-3909aeda2381?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    points: ["Communication & emotional bonding", "Discipline without fear", "Value-based parenting"],
    slug: "parenting-360",
  },
  {
    title: "30-Day Transformation",
    age: "All Ages",
    duration: "Flagship · 30 Days",
    img: "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    points: ["Daily habit-building activities", "Mentoring & parent involvement", "Measurable personal growth"],
    slug: "thirty-day",
    flagship: true,
  },
];

interface AcademyProgramsProps {
  onEnquire: () => void;
}

export const AcademyPrograms = ({ onEnquire }: AcademyProgramsProps) => {
  return (
    <section id="programs" data-testid="academy-programs-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Our Programs"
          title="Five Age-Wise Transformation Paths"
          description="Separate, purpose-built journeys for children, teenagers, young adults, and parents — because a six-year-old and a nineteen-year-old speak different languages."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <article
                data-testid={`program-card-${p.slug}`}
                className="card-glow-hover group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#e1dfdf] bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {p.flagship && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#f68a4a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                      Flagship
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4 flex gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#18463b]">
                      {p.age}
                    </span>
                    <span className="rounded-full bg-[#18463b]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                      {p.duration}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-[#18463b]">{p.title}</h3>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-[#555]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#f68a4a]" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  {p.link ? (
                    <Link
                      to={p.link}
                      data-testid={`program-link-${p.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      View Program
                      <ArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <button
                      data-testid={`program-enquire-${p.slug}`}
                      onClick={onEnquire}
                      className="mt-6 inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      Enquire
                      <ArrowRight size={16} />
                    </button>
                  )}
                </div>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.16}>
            <button
              data-testid="program-card-guidance"
              onClick={onEnquire}
              className="group flex h-full w-full flex-col items-start justify-between rounded-[10px] border border-[#18463b] bg-[#18463b] p-7 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(24,70,59,0.25)]"
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#f8b183]">
                  Not Sure Which Program?
                </p>
                <h3 className="mt-3 font-heading text-2xl font-black text-white">
                  Talk to a Mentor
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  Tell us about your child or yourself — we will guide you to the right batch,
                  center, and program. No obligation.
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#18463b]">
                Enquire Now
                <ArrowRight size={14} />
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
