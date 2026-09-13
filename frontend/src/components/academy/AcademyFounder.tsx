import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/lang";

const FOUNDER_IMG =
  "https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=900";

export const AcademyFounder = () => {
  const { t } = useLang();

  const MOMENTS = [
    t("when a child starts speaking freely at home again,", "जेव्हा मूल पुन्हा घरात मनमोकळं बोलू लागतं,"),
    t("when it follows the discipline it chose for itself,", "जेव्हा ते स्वतः ठरवलेली शिस्त पाळतं,"),
    t("and when, instead of hiding a mistake, it honestly admits it.", "आणि जेव्हा चूक झाल्यावर ती लपवण्याऐवजी प्रामाणिकपणे स्वीकारतं."),
  ];

  return (
    <section data-testid="academy-founder-section" className="relative overflow-hidden bg-[#18463b] py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <div className="relative mx-auto max-w-xs">
              <div className="absolute -inset-3 rounded-full border border-[#f68a4a]/40" />
              <img
                src={FOUNDER_IMG}
                alt={t("Founder of Garud Zep Rupantaram", "गरुडझेप रूपांतरम्चे संस्थापक")}
                className="aspect-square w-full rounded-full border-4 border-white/10 object-cover"
                data-testid="founder-portrait"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="flex items-center gap-4">
                <span className="font-heading text-sm font-black tracking-[0.2em] text-[#f68a4a]">03</span>
                <span className="h-px w-12 bg-[#f68a4a]/60" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#f8b183]">
                  {t("Founder's Message", "संस्थापकांचा संदेश")}
                </span>
              </div>
              <Quote size={36} className="mt-8 text-[#f68a4a]" />
              <blockquote className="mt-6 font-heading text-2xl font-bold leading-snug text-white sm:text-3xl" data-testid="founder-quote">
                {t(
                  "\u201CToday's children are rich in information; but nobody has taught them the language of conversing with themselves. Garud Zep – Rupantaram was created to fill exactly that void.\u201D",
                  "\u201Cआजची मुलं माहितीने समृद्ध आहेत; पण स्वतःशी संवाद साधण्याची भाषा त्यांना कोणी शिकवलेली नाही. गरुडझेप – रूपांतरम् हीच ती पोकळी भरून काढण्यासाठी निर्माण झाली आहे.\u201D"
                )}
              </blockquote>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
                {t(
                  "For us, the definition of success is not limited to a report card. Real change becomes visible —",
                  "आमच्यासाठी यशाची व्याख्या केवळ गुणपत्रिकेपुरती मर्यादित नाही. खरा बदल तेव्हा दिसतो —"
                )}
              </p>
              <ul className="mt-4 flex max-w-2xl flex-col gap-2.5" data-testid="founder-moments">
                {MOMENTS.map((m) => (
                  <li key={m} className="flex items-start gap-3 text-base leading-relaxed text-white/85">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#f68a4a]" />
                    {m}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-2xl text-base font-semibold leading-relaxed text-[#f8b183]">
                {t(
                  "In these very moments, true education takes shape… and that is where transformation in the truest sense begins.",
                  "याच क्षणांतून घडतं खरं शिक्षण… आणि इथूनच सुरू होतं खऱ्या अर्थाने रूपांतर."
                )}
              </p>
              <p className="mt-8 font-heading text-sm font-bold uppercase tracking-[0.2em] text-white/80">
                {t("— Founder, Garud Zep – Rupantaram", "— संस्थापक, गरुडझेप – रूपांतरम्")}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
