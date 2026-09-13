import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Program {
  title: string;
  enAudience: string;
  mrAudience: string;
  enDuration: string;
  mrDuration: string;
  enFocus: string;
  mrFocus: string;
  img: string;
  slug: string;
  link?: string;
  flagship?: boolean;
}

const PROGRAMS: Program[] = [
  {
    title: "Kids Transform",
    enAudience: "Ages 6–12",
    mrAudience: "वय ६–१२",
    enDuration: "3 Days",
    mrDuration: "३ दिवस",
    enFocus: "Confidence, discipline, communication, values, creativity, study habits.",
    mrFocus: "आत्मविश्वास, शिस्त, संवाद, मूल्ये, सर्जनशीलता, अभ्यासाच्या सवयी.",
    img: "https://images.pexels.com/photos/3231359/pexels-photo-3231359.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "kids",
  },
  {
    title: "Youth Transform",
    enAudience: "Ages 13–18",
    mrAudience: "वय १३–१८",
    enDuration: "3 Days",
    mrDuration: "३ दिवस",
    enFocus: "Leadership, emotional intelligence, goal setting, digital discipline, career awareness, public speaking.",
    mrFocus: "नेतृत्व, भावनिक बुद्धिमत्ता, ध्येय निश्चिती, डिजिटल शिस्त, करिअर जाणीव, सार्वजनिक भाषण.",
    img: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "youth",
    link: "/youth-transform",
  },
  {
    title: "Young Adult Transform",
    enAudience: "Ages 19+",
    mrAudience: "वय १९+",
    enDuration: "3 Days",
    mrDuration: "३ दिवस",
    enFocus: "Career planning, financial awareness, communication, self-leadership, decision making.",
    mrFocus: "करिअर नियोजन, आर्थिक जाणीव, संवाद, आत्म-नेतृत्व, निर्णयक्षमता.",
    img: "https://images.unsplash.com/photo-1758613171176-ea64579c2dcf?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "young-adult",
  },
  {
    title: "Parenting 360°",
    enAudience: "Parents & Guardians",
    mrAudience: "पालक आणि पालकत्वकर्ते",
    enDuration: "1 Day",
    mrDuration: "१ दिवस",
    enFocus: "Child psychology, communication, emotional bonding, positive parenting, digital parenting.",
    mrFocus: "बालमानसशास्त्र, संवाद, भावनिक जवळीक, सकारात्मक पालकत्व, डिजिटल पालकत्व.",
    img: "https://images.unsplash.com/photo-1783873231697-3909aeda2381?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "parenting",
    link: "/programs/parenting-360",
  },
  {
    title: "30-Day Transformation Program",
    enAudience: "Students & Families",
    mrAudience: "विद्यार्थी आणि कुटुंबे",
    enDuration: "30 Days",
    mrDuration: "३० दिवस",
    enFocus: "Daily habits, mentorship, life skills, reflection, leadership, measurable personal growth.",
    mrFocus: "दैनिक सवयी, मार्गदर्शन, जीवनकौशल्ये, आत्मपरिक्षण, नेतृत्व, मोजता येणारी वैयक्तिक प्रगती.",
    img: "https://images.unsplash.com/photo-1494883759339-0b042055a4ee?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900",
    slug: "thirty-day",
    flagship: true,
  },
];

interface ProgramsGridProps {
  onEnquire: () => void;
}

export const ProgramsGrid = ({ onEnquire }: ProgramsGridProps) => {
  const { t } = useLang();
  return (
    <>
      <section data-testid="programs-intro-section" className="bg-white pb-4 pt-20 lg:pt-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            index="01"
            eyebrow={t("Introduction", "परिचय")}
            title={t("Programs Designed for Every Stage of Life", "आयुष्याच्या प्रत्येक टप्प्यासाठी रचलेले कार्यक्रम")}
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
              {t(
                "At Rupantaram, we understand that the challenges of a 7-year-old, a teenager, a young adult, and a parent are completely different. That's why each program is carefully designed with age-appropriate activities, practical learning, mentorship, and transformational experiences.",
                "रूपांतरम्मध्ये आम्ही जाणतो की ७ वर्षांच्या मुलाची, किशोरवयीन मुलाची, तरुणाची आणि पालकांची आव्हाने पूर्णपणे वेगळी असतात. म्हणूनच प्रत्येक कार्यक्रम वयोयोग्य उपक्रम, प्रायोगिक शिक्षण, मार्गदर्शन आणि परिवर्तनकारी अनुभवांसह काळजीपूर्वक तयार केला आहे."
              )}
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
                        {t("Flagship Program", "प्रमुख कार्यक्रम")}
                      </span>
                    )}
                    <div className="absolute bottom-3 left-4 flex gap-2">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#18463b]">
                        {t(p.enAudience, p.mrAudience)}
                      </span>
                      <span className="rounded-full bg-[#18463b]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                        {t(p.enDuration, p.mrDuration)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-xl font-bold text-[#18463b]">{p.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-[#555]">{t(p.enFocus, p.mrFocus)}</p>
                    {p.link ? (
                      <Link
                        to={p.link}
                        data-testid={`programs-card-link-${p.slug}`}
                        className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                      >
                        {t("View Details", "तपशील पहा")}
                        <ArrowUpRight size={15} />
                      </Link>
                    ) : (
                      <button
                        data-testid={`programs-card-link-${p.slug}`}
                        onClick={onEnquire}
                        className="mt-6 inline-flex items-center gap-2 self-start font-heading text-sm font-bold uppercase tracking-[0.12em] text-[#f68a4a] transition-colors hover:text-[#18463b]"
                      >
                        {t("View Details", "तपशील पहा")}
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
