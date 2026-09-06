import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const CountUp = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const duration = 1500;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
};

export const MethodCounters = () => {
  const { t } = useLang();

  const STEPS = [
    { num: "01", en: "Self Discovery", mr: "स्व-शोध", textEn: "Understand strengths, emotions, and aspirations.", textMr: "ताकद, भावना आणि आकांक्षा समजून घ्या.", slug: "self-discovery" },
    { num: "02", en: "Skill Development", mr: "कौशल्य विकास", textEn: "Learn communication, leadership, and time skills.", textMr: "संवाद, नेतृत्व आणि वेळ कौशल्ये शिका.", slug: "skill-development" },
    { num: "03", en: "Behavioral Practice", mr: "वर्तन सराव", textEn: "Build daily habits through activities and challenges.", textMr: "उपक्रम व आव्हानांतून रोजच्या सवयी बनवा.", slug: "behavioral-practice" },
    { num: "04", en: "Mentorship & Reflection", mr: "मार्गदर्शन व चिंतन", textEn: "Guided feedback and honest self-review.", textMr: "मार्गदर्शकांचा अभिप्राय व प्रामाणिक आत्मपरिक्षण.", slug: "mentorship" },
    { num: "05", en: "Real-Life Transformation", mr: "खरे रूपांतर", textEn: "Visible change at home, school, and work.", textMr: "घरी, शाळेत व कामावर दिसणारा बदल.", slug: "transformation" },
  ];

  const COUNTERS = [
    { value: 4, suffix: "", en: "Training Centers", mr: "प्रशिक्षण केंद्रे", slug: "centers" },
    { value: 4, suffix: "", en: "Specialized Programs", mr: "विशेष कार्यक्रम", slug: "programs" },
    { value: 25, suffix: "+", en: "Life Skills Modules", mr: "जीवनकौशल्य घटक", slug: "modules" },
    { value: 100, suffix: "%", en: "Practical Learning Approach", mr: "उपक्रम-आधारित शिक्षण", slug: "practical" },
  ];

  return (
    <>
      <section data-testid="about-methodology-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="05"
            eyebrow={t("Our Training Methodology", "आमची प्रशिक्षण पद्धत")}
            title={t("How Transformation Happens", "रूपांतर कसे घडते")}
            align="center"
          />

          <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-[linear-gradient(90deg,transparent,#f68a4a_15%,#f68a4a_85%,transparent)] lg:block" />
            {STEPS.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <div data-testid={`method-step-${s.slug}`} className="group relative text-center">
                  <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#f68a4a] bg-white font-heading text-base font-black text-[#f68a4a] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(246,138,74,0.4)]">
                    {s.num}
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold text-[#18463b] sm:text-lg">
                    {t(s.en, s.mr)}
                  </h3>
                  <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-[#7a7a7a]">
                    {t(s.textEn, s.textMr)}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="about-counters-section" className="relative overflow-hidden bg-[#18463b] py-16 lg:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">
              {t("Why Families Choose Rupantaram", "कुटुंबे रूपांतरम् का निवडतात")}
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-10 lg:grid-cols-4">
            {COUNTERS.map((c) => (
              <div key={c.slug} data-testid={`counter-${c.slug}`} className="text-center">
                <p className="font-heading text-5xl font-black text-[#f68a4a] lg:text-6xl">
                  <CountUp to={c.value} suffix={c.suffix} />
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-sm">
                  {t(c.en, c.mr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
