import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/lang";

const OUTCOMES = [
  { en: "Greater self-confidence", mr: "अधिक आत्मविश्वास" },
  { en: "Clear personal goals", mr: "स्पष्ट वैयक्तिक ध्येये" },
  { en: "Better communication", mr: "चांगला संवाद" },
  { en: "Leadership mindset", mr: "नेतृत्व विचारसरणी" },
  { en: "Stronger emotional balance", mr: "दृढ भावनिक संतुलन" },
  { en: "Practical life skills", mr: "व्यावहारिक जीवनकौशल्ये" },
  { en: "Improved discipline", mr: "सुधारलेली शिस्त" },
  { en: "Future-ready personality", mr: "भविष्यासाठी सज्ज व्यक्तिमत्त्व" },
];

export const YoungWhyOutcomes = () => {
  const { t } = useLang();
  return (
    <>
      <section
        data-testid="young-why-section"
        className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">
              {t("Why This Program Matters", "हा कार्यक्रम का महत्त्वाचा")}
            </p>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              {t("The Skills That Schools", "शाळा क्वचितच")}{" "}
              <span className="text-brand-gradient">{t("Rarely Teach", "शिकवतात ती कौशल्ये")}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t(
                "Success in adulthood depends on communication, emotional balance, leadership, discipline, responsible decision making, and lifelong learning — not academic knowledge alone. Young Adult Transform trains exactly those muscles.",
                "प्रौढत्वातील यश केवळ अकादमिक ज्ञानावर नव्हे, तर संवाद, भावनिक संतुलन, नेतृत्व, शिस्त, जबाबदार निर्णय आणि आजीवन शिकण्यावर अवलंबून असते. Young Adult Transform नेमकी तीच सवय घडवतो."
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="young-outcomes-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0701f]">{t("Outcomes", "यशाचे निकष")}</p>
            <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-[#18463b] sm:text-4xl lg:text-5xl">
              {t("Participants Leave With", "सहभागी घेऊन जातात")}
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map((o, i) => (
              <Reveal key={o.en} delay={(i % 4) * 0.06}>
                <div
                  data-testid={`young-outcome-${i + 1}`}
                  className="group flex items-center gap-3 rounded-xl border border-[#e1dfdf] bg-[#fbfafa] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#f68a4a]/60 hover:bg-white"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-[#f68a4a] transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className="text-sm font-semibold text-[#333]">{t(o.en, o.mr)}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
