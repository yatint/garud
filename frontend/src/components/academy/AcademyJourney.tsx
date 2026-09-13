import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const STEPS = [
  {
    num: "01",
    en: "Know Yourself",
    mr: "स्वतःला ओळखा",
    textEn: "Understanding your strengths, limits, emotions, and reactions — honestly.",
    textMr: "स्वतःची ताकद, मर्यादा, भावना आणि प्रतिक्रिया प्रामाणिकपणे समजून घेणे.",
    slug: "know-yourself",
  },
  {
    num: "02",
    en: "Build Character",
    mr: "चारित्र्य घडवा",
    textEn: "Bringing honesty, responsibility, and respect into everyday habits.",
    textMr: "प्रामाणिकपणा, जबाबदारी आणि आदर रोजच्या सवयींत उतरवणे.",
    slug: "build-character",
  },
  {
    num: "03",
    en: "Develop Life Skills",
    mr: "जीवनकौशल्ये विकसित करा",
    textEn: "Practicing communication, decision making, time planning, and emotional balance.",
    textMr: "संवाद, निर्णयक्षमता, वेळ नियोजन आणि भावनिक संतुलनाचा सराव.",
    slug: "life-skills",
  },
  {
    num: "04",
    en: "Create Discipline",
    mr: "शिस्त निर्माण करा",
    textEn: "Building the habit where a chosen routine — not mood — runs the day.",
    textMr: "मूड नव्हे — ठरवलेली दिनचर्या दिवस चालवते, अशी सवय बनवणे.",
    slug: "discipline",
  },
  {
    num: "05",
    en: "Find Your Goal",
    mr: "आपले ध्येय शोधा",
    textEn: "Choosing a career and life direction from clarity, not pressure.",
    textMr: "दबावातून नव्हे, स्पष्टतेतून करिअर व आयुष्याची दिशा निवडणे.",
    slug: "goal",
  },
  {
    num: "06",
    en: "Live Meaningfully",
    mr: "अर्थपूर्ण जगा",
    textEn: "Building success while staying responsible to family, society, and yourself.",
    textMr: "कुटुंब, समाज आणि स्वतःप्रति जबाबदार राहून यशस्वी होणे.",
    slug: "meaningful",
  },
];

export const AcademyJourney = () => {
  const { t } = useLang();
  return (
    <section id="journey" data-testid="academy-journey-section" className="bg-[#f6f7f0] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow={t("The Transformation Journey", "रूपांतराचा प्रवास")}
          title={t("The Six Steps Every Participant Follows", "प्रत्येक सहभागी अनुसरतो हे सहा टप्पे")}
          description={t(
            "Whatever the program, the path is the same — from self-awareness to a purposeful, disciplined life.",
            "कार्यक्रम कोणताही असो, वाटचाल तीच असते — आत्मजाणिवेपासून उद्देशपूर्ण, शिस्तबद्ध आयुष्यापर्यंत."
          )}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.08}>
              <div
                data-testid={`journey-step-${s.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-7"
              >
                <span className="font-heading text-4xl font-black text-[#f68a4a]/25 transition-colors duration-300 group-hover:text-[#f68a4a]">
                  {s.num}
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-[#18463b]">{t(s.en, s.mr)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{t(s.textEn, s.textMr)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
