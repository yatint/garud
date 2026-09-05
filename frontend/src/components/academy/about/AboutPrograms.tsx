import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

interface Program {
  title: string;
  age: string;
  text: string;
  img: string;
  slug: string;
  link?: string;
}

const PROGRAMS: Program[] = [
  {
    title: "Kids Transform",
    age: "6–12 Years",
    text: "Building confidence, habits, discipline, values, and communication.",
    img: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "kids",
  },
  {
    title: "Youth Transform",
    age: "13–18 Years",
    text: "Career clarity, emotional intelligence, leadership, digital discipline, and personality development.",
    img: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "youth",
    link: "/youth-transform",
  },
  {
    title: "Young Adult Transform",
    age: "19+ Years",
    text: "Career planning, financial awareness, leadership, communication, and life management.",
    img: "https://images.unsplash.com/photo-1758613171176-ea64579c2dcf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "young-adult",
  },
  {
    title: "Parenting 360°",
    age: "For Parents",
    text: "Helping parents understand child psychology, communication, emotional bonding, and positive parenting.",
    img: "https://images.unsplash.com/photo-1783873231697-3909aeda2381?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "parenting",
  },
];

interface AboutProgramsProps {
  onEnquire: () => void;
}

export const AboutPrograms = ({ onEnquire }: AboutProgramsProps) => {
  return (
    <section id="about-programs" data-testid="about-programs-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow="Our Programs"
          title="A Path for Every Age"
          description="Four specialized programs, each designed around the realities of that stage of life."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <article
                data-testid={`about-program-card-${p.slug}`}
                className="card-glow-hover group flex h-full flex-col overflow-hidden rounded-[10px] border border-[#e1dfdf] bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#18463b]">
                    {p.age}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-[#18463b]">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">{p.text}</p>
                  {p.link ? (
                    <Link
                      to={p.link}
                      data-testid={`about-program-link-${p.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      Learn More
                      <ArrowUpRight size={15} />
                    </Link>
                  ) : (
                    <button
                      data-testid={`about-program-link-${p.slug}`}
                      onClick={onEnquire}
                      className="mt-5 inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      Learn More
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
  );
};
