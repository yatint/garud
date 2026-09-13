import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

export const AcademyStories = () => {
  const { t } = useLang();

  const STORIES = [
    {
      quote: t(
        "My son used to be afraid of going on stage. After the workshop, he anchored our school's annual gathering.",
        "माझा मुलगा स्टेजवर जायला घाबरायचा. कार्यशाळेनंतर त्याने शाळेच्या वार्षिक सणासमारंभाचे सूत्रसंचालन केले."
      ),
      author: t("Mother of a 10-year-old", "१० वर्षीय मुलाची आई"),
      program: t("Kids Transform", "बाल रूपांतर"),
    },
    {
      quote: t(
        "I stopped blaming my mobile and started writing a daily plan. My studies improved on their own.",
        "मी मोबाईलला दोष देणे सोडले आणि रोजची योजना लिहायला सुरुवात केली. अभ्यास आपोआप सुधारला."
      ),
      author: t("10th-grade student", "दहावीचा विद्यार्थी"),
      program: t("30-Day Transformation Program", "३० दिवसांचा रूपांतर कार्यक्रम"),
    },
    {
      quote: t(
        "After Parenting 360°, I learned to listen. The daily arguments stopped and real conversation began.",
        "पालकत्व 360° नंतर मी ऐकायला शिकले. रोजची भांडणे थांबली आणि खरा संवाद सुरू झाला."
      ),
      author: t("Mother of a 15-year-old", "१५ वर्षीय मुलाची आई"),
      program: t("Parenting 360°", "पालकत्व 360°"),
    },
  ];

  return (
    <section id="stories" data-testid="academy-stories-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Success Stories", "यशोगाथा")}
          title={t("The Change Seen at Home Is the Real Result", "घरी दिसणारा बदल हेच खरे यश")}
          description={t(
            "Report cards don't capture transformation. These moments, shared by parents and students, do.",
            "गुणपत्रिकेत रूपांतर दिसत नाही. पालक व विद्यार्थ्यांनी सांगितलेल्या या क्षणांतून ते दिसते."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STORIES.map((s, i) => (
            <Reveal key={s.program + i} delay={i * 0.1}>
              <figure
                data-testid={`story-card-${i + 1}`}
                className="card-glow-hover flex h-full flex-col rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-7"
              >
                <Quote size={28} className="text-[#f68a4a]" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-[#444]">
                  "{s.quote}"
                </blockquote>
                <figcaption className="mt-6 border-t border-[#e1dfdf] pt-4">
                  <p className="font-heading text-sm font-bold text-[#18463b]">{s.author}</p>
                  <span className="mt-2 inline-block rounded-full bg-[#f68a4a]/12 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#e0701f]">
                    {s.program}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
