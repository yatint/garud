import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const STEPS = [
  {
    enNum: "Step 1",
    mrNum: "पायरी १",
    enTitle: "Discover Yourself",
    mrTitle: "स्वतःला ओळखा",
    enText: "Understand strengths, emotions and personality.",
    mrText: "शक्ती, भावना आणि व्यक्तिमत्त्व समजून घ्या.",
    slug: "discover",
  },
  {
    enNum: "Step 2",
    mrNum: "पायरी २",
    enTitle: "Build Better Habits",
    mrTitle: "चांगल्या सवयी घडवा",
    enText: "Discipline, focus, communication and healthy routines.",
    mrText: "शिस्त, एकाग्रता, संवाद आणि निरोगी दिनक्रम.",
    slug: "habits",
  },
  {
    enNum: "Step 3",
    mrNum: "पायरी ३",
    enTitle: "Practice Real Skills",
    mrTitle: "प्रत्यक्ष कौशल्यांचा सराव",
    enText: "Activities, role play, teamwork, leadership and presentations.",
    mrText: "उपक्रम, भूमिका-अभिनय, संघकार्य, नेतृत्व आणि सादरीकरणे.",
    slug: "practice",
  },
  {
    enNum: "Step 4",
    mrNum: "पायरी ४",
    enTitle: "Become Future Ready",
    mrTitle: "भविष्यासाठी सज्ज व्हा",
    enText: "Confidence, character and career direction for lifelong success.",
    mrText: "आजीवन यशासाठी आत्मविश्वास, चारित्र्य आणि करिअर दिशा.",
    slug: "future",
  },
];

export const MethodSteps = () => {
  const { t } = useLang();
  return (
    <section data-testid="why-method-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="04"
          eyebrow={t("Our Transformation Method", "आमची परिवर्तन पद्धत")}
          title={t("A Proven Four-Step Process", "सिद्ध झालेली चार-पायरी प्रक्रिया")}
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.1}>
              <div className="relative h-full" data-testid={`method-step-card-${s.slug}`}>
                <div className="card-glow-hover group flex h-full flex-col rounded-[10px] border border-[#e1dfdf] border-t-2 border-t-[#f68a4a] bg-[#fbfafa] p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e0701f]">
                    {t(s.enNum, s.mrNum)}
                  </p>
                  <h3 className="mt-3 font-heading text-xl font-bold text-[#18463b]">{t(s.enTitle, s.mrTitle)}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#555]">{t(s.enText, s.mrText)}</p>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="absolute -right-5 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#f68a4a] text-white shadow-md lg:flex">
                    <ArrowRight size={15} />
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
