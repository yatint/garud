import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Program {
  title: string;
  titleMr: string;
  ageEn: string;
  ageMr: string;
  durEn: string;
  durMr: string;
  img: string;
  points: Array<{ en: string; mr: string }>;
  slug: string;
  link?: string;
  flagship?: boolean;
}

const PROGRAMS: Program[] = [
  {
    title: "Kids Transform",
    titleMr: "बाल रूपांतर",
    ageEn: "Ages 6–13",
    ageMr: "६–१३ वर्षे",
    durEn: "3 Days",
    durMr: "३ दिवस",
    img: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=1000",
    points: [
      { en: "Confidence & study habits", mr: "आत्मविश्वास व अभ्यासाच्या सवयी" },
      { en: "Communication & teamwork", mr: "संवाद व संघभावना" },
      { en: "Yoga & digital awareness", mr: "योग व डिजिटल जागरूकता" },
    ],
    slug: "kids-transform",
    link: "/programs/kids-transform",
  },
  {
    title: "Youth Transform",
    titleMr: "किशोर रूपांतर",
    ageEn: "Ages 13–18",
    ageMr: "१३–१८ वर्षे",
    durEn: "3 Days",
    durMr: "३ दिवस",
    img: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    points: [
      { en: "Career direction & goal setting", mr: "करिअरची दिशा व ध्येय निश्चिती" },
      { en: "Leadership & time management", mr: "नेतृत्व व वेळ व्यवस्थापन" },
      { en: "Emotional intelligence & confidence", mr: "भावनिक बुद्धिमत्ता व आत्मविश्वास" },
    ],
    slug: "youth-transform",
    link: "/youth-transform",
  },
  {
    title: "Young Adult Transform",
    titleMr: "युवा रूपांतर",
    ageEn: "Ages 19+",
    ageMr: "१९+ वर्षे",
    durEn: "3 Days",
    durMr: "३ दिवस",
    img: "https://images.unsplash.com/photo-1758613171176-ea64579c2dcf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    points: [
      { en: "Self-discovery & career planning", mr: "स्व-शोध व करिअर नियोजन" },
      { en: "Financial awareness", mr: "आर्थिक जागरूकता" },
      { en: "Mental wellness & digital discipline", mr: "मानसिक तणाव व्यवस्थापन व डिजिटल शिस्त" },
    ],
    slug: "young-adult-transform",
    link: "/programs/young-adult-transform",
  },
  {
    title: "Parenting 360°",
    titleMr: "पालकत्व 360°",
    ageEn: "For Parents",
    ageMr: "पालकांसाठी",
    durEn: "1 Day",
    durMr: "१ दिवस",
    img: "https://images.unsplash.com/photo-1783873231697-3909aeda2381?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    points: [
      { en: "Communication & emotional bonding", mr: "संवाद व भावनिक जवळीक" },
      { en: "Discipline without fear", mr: "भीतीशिवाय शिस्त" },
      { en: "Value-based parenting", mr: "मूल्याधारित पालकत्व" },
    ],
    slug: "parenting-360",
  },
  {
    title: "30-Day Transformation",
    titleMr: "३० दिवसांचा रूपांतर",
    ageEn: "All Ages",
    ageMr: "सर्वांसाठी",
    durEn: "Flagship · 30 Days",
    durMr: "प्रमुख · ३० दिवस",
    img: "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    points: [
      { en: "Daily habit-building activities", mr: "रोजच्या सवयींचे बांधणी" },
      { en: "Mentoring & parent involvement", mr: "मार्गदर्शन व पालक सहभाग" },
      { en: "Measurable personal growth", mr: "मोजता येणारी वैयक्तिक प्रगती" },
    ],
    slug: "thirty-day",
    link: "/programs/30-day-transform",
    flagship: true,
  },
];

interface AcademyProgramsProps {
  onEnquire: () => void;
}

export const AcademyPrograms = ({ onEnquire }: AcademyProgramsProps) => {
  const { t } = useLang();
  return (
    <section id="programs" data-testid="academy-programs-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow={t("Our Programs", "आमचे कार्यक्रम")}
          title={t("Five Age-Wise Transformation Paths", "वयानुसार पाच रूपांतर मार्ग")}
          description={t(
            "Separate, purpose-built journeys for children, teenagers, young adults, and parents — because a six-year-old and a nineteen-year-old speak different languages.",
            "लहान मुलं, किशोरवयीन, तरुण आणि पालक — प्रत्येकासाठी वेगळा, हेतूपूरक प्रवास. कारण सहा वर्षांचे मूल आणि एकोणीस वर्षांचा तरुण वेगळ्या भाषा बोलतात."
          )}
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
                      {t("Flagship", "प्रमुख")}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4 flex gap-2">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#18463b]">
                      {t(p.ageEn, p.ageMr)}
                    </span>
                    <span className="rounded-full bg-[#18463b]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                      {t(p.durEn, p.durMr)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-[#18463b]">{t(p.title, p.titleMr)}</h3>
                  <ul className="mt-4 flex flex-1 flex-col gap-2">
                    {p.points.map((pt) => (
                      <li key={pt.en} className="flex items-start gap-2.5 text-sm text-[#555]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#f68a4a]" />
                        {t(pt.en, pt.mr)}
                      </li>
                    ))}
                  </ul>
                  {p.link ? (
                    <Link
                      to={p.link}
                      data-testid={`program-link-${p.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      {t("View Program", "कार्यक्रम पहा")}
                      <ArrowUpRight size={16} />
                    </Link>
                  ) : (
                    <button
                      data-testid={`program-enquire-${p.slug}`}
                      onClick={onEnquire}
                      className="mt-6 inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                    >
                      {t("Enquire", "चौकशी करा")}
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
                  {t("Not Sure Which Program?", "कोणता कार्यक्रम योग्य ठरेल?")}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-black text-white">
                  {t("Talk to a Mentor", "मार्गदर्शकांशी बोला")}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {t(
                    "Tell us about your child or yourself — we will guide you to the right batch, center, and program. No obligation.",
                    "तुमच्या मुलाविषयी किंवा स्वतःविषयी सांगा — आम्ही योग्य बॅच, केंद्र आणि कार्यक्रम दाखवू. कोणतीही अट नाही."
                  )}
                </p>
              </div>
              <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#18463b]">
                {t("Enquire Now", "चौकशी करा")}
                <ArrowRight size={14} />
              </span>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
