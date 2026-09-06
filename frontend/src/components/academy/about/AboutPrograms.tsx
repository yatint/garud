import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Program {
  title: string;
  ageEn: string;
  ageMr: string;
  textEn: string;
  textMr: string;
  img: string;
  slug: string;
  link?: string;
}

const PROGRAMS: Program[] = [
  {
    title: "Kids Transform",
    ageEn: "6–12 Years",
    ageMr: "६–१२ वर्षे",
    textEn: "Building confidence, habits, discipline, values, and communication.",
    textMr: "आत्मविश्वास, सवयी, शिस्त, संस्कार आणि संवाद घडवणे.",
    img: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "kids",
    link: "/programs/kids-transform",
  },
  {
    title: "Youth Transform",
    ageEn: "13–18 Years",
    ageMr: "१३–१८ वर्षे",
    textEn: "Career clarity, emotional intelligence, leadership, digital discipline, and personality development.",
    textMr: "करिअर स्पष्टता, भावनिक बुद्धिमत्ता, नेतृत्व, डिजिटल शिस्त आणि व्यक्तिमत्त्व विकास.",
    img: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "youth",
    link: "/youth-transform",
  },
  {
    title: "Young Adult Transform",
    ageEn: "19+ Years",
    ageMr: "१९+ वर्षे",
    textEn: "Career planning, financial awareness, leadership, communication, and life management.",
    textMr: "करिअर नियोजन, आर्थिक जागरूकता, नेतृत्व, संवाद आणि जीवन व्यवस्थापन.",
    img: "https://images.unsplash.com/photo-1758613171176-ea64579c2dcf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "young-adult",
    link: "/programs/young-adult-transform",
  },
  {
    title: "Parenting 360°",
    ageEn: "For Parents",
    ageMr: "पालकांसाठी",
    textEn: "Helping parents understand child psychology, communication, emotional bonding, and positive parenting.",
    textMr: "पालकांना बालमानसशास्त्र, संवाद, भावनिक जवळीक आणि सकारात्मक पालकत्व समजून घेण्यास मदत.",
    img: "https://images.unsplash.com/photo-1783873231697-3909aeda2381?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "parenting",
  },
];

interface AboutProgramsProps {
  onEnquire: () => void;
}

export const AboutPrograms = ({ onEnquire }: AboutProgramsProps) => {
  const { t } = useLang();
  return (
    <section id="about-programs" data-testid="about-programs-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Our Programs", "आमचे कार्यक्रम")}
          title={t("A Path for Every Age", "प्रत्येक वयासाठी वेगळा मार्ग")}
          description={t(
            "Four specialized programs, each designed around the realities of that stage of life.",
            "चार विशेष कार्यक्रम — प्रत्येक आयुष्याच्या त्या टप्प्याच्या गरजांनुसार रचलेले."
          )}
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
                    {t(p.ageEn, p.ageMr)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-[#18463b]">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">{t(p.textEn, p.textMr)}</p>
                  {p.link ? (
                    <Link
                      to={p.link}
                      data-testid={`about-program-link-${p.slug}`}
                      className="mt-5 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      {t("Learn More", "अधिक जाणून घ्या")}
                      <ArrowUpRight size={15} />
                    </Link>
                  ) : (
                    <button
                      data-testid={`about-program-link-${p.slug}`}
                      onClick={onEnquire}
                      className="mt-5 inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      {t("Learn More", "अधिक जाणून घ्या")}
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
