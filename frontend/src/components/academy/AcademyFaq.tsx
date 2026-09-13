import { AnimatePresence, motion } from "framer-motion";
import { Phone, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

export const AcademyFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLang();

  const FAQS = [
    {
      q: t("How much is the fee?", "फी किती आहे?"),
      a: t(
        "The fee is decided per program — but our emphasis is always on delivering value, not just on the price.",
        "कार्यक्रमानुसार फी ठरते — परंतु आमचा भर नेहमीच “मूल्य” देण्यावर असतो, केवळ शुल्कावर नाही."
      ),
    },
    {
      q: t("Which age groups are these programs for?", "हे कार्यक्रम कोणत्या वयोगटासाठी आहेत?"),
      a: t(
        "Programs crafted differently for various age groups — the right guidance at every stage.",
        "विविध वयोगटांसाठी वेगवेगळ्या पद्धतीने रचलेले कार्यक्रम — प्रत्येक टप्प्यावर योग्य मार्गदर्शन."
      ),
    },
    {
      q: t("How many students are in one batch?", "एका बॅचमध्ये किती विद्यार्थी असतात?"),
      a: t(
        "A limited number of students — so every child gets personal attention.",
        "मर्यादित विद्यार्थीसंख्या — जेणेकरून प्रत्येक मुलावर वैयक्तिक लक्ष देता येईल."
      ),
    },
    {
      q: t("Where are the workshops held?", "कार्यशाळा कुठे होतात?"),
      a: t(
        "At our fixed centers, as well as sessions arranged in schools, institutions, and companies.",
        "आमच्या निश्चित केंद्रांवर तसेच शाळा, संस्था आणि कंपन्यांमध्येही सत्रांची सोय."
      ),
    },
    {
      q: t("How long are the programs?", "कार्यक्रमांचा कालावधी किती आहे?"),
      a: t(
        "Sessions designed with a set duration — enough time to create effective change.",
        "ठराविक कालावधीसह रचलेले सत्र — परिणामकारक बदल घडवण्यासाठी पुरेसा वेळ."
      ),
    },
    {
      q: t("Is it necessary for parents to participate?", "पालकांनी सहभागी होणे आवश्यक आहे का?"),
      a: t(
        "Yes, because real change is the one that lasts at home too — hence special participation for parents.",
        "होय, कारण खरा बदल तोच जो घरातही टिकतो — म्हणून पालकांसाठीही विशेष सहभाग."
      ),
    },
    {
      q: t("In which language are the sessions conducted?", "सत्रे कोणत्या भाषेत घेतली जातात?"),
      a: t(
        "In simple, easy-to-understand, and effective language — so everyone absorbs it comfortably.",
        "सोप्या, समजणाऱ्या आणि प्रभावी भाषेत — जेणेकरून प्रत्येकाला सहज आकलन होईल."
      ),
    },
    {
      q: t("Is there follow-up after the program?", "कार्यक्रमानंतर पाठपुरावा असतो का?"),
      a: t(
        "Absolutely — continuous guidance and progress reviews so the new habits last.",
        "नक्कीच — सवयी टिकून राहाव्यात यासाठी सातत्यपूर्ण मार्गदर्शन आणि प्रगतीचा आढावा."
      ),
    },
  ];

  return (
    <section id="faq" data-testid="academy-faq-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="10"
          eyebrow={t("Frequently Asked Questions", "वारंवार विचारले जाणारे प्रश्न (FAQs)")}
          title={t("Every Question in a Parent's Mind, Answered From the Heart", "पालकांच्या मनातील प्रत्येक प्रश्नाला आम्ही मनापासून उत्तर देतो…")}
          description={t(
            "Parents naturally have many questions when deciding for their child's bright future. Every parent who comes to us is looking not just for information, but for trust.",
            "मुलांच्या उज्ज्वल भविष्यासाठी निर्णय घेताना पालकांच्या मनात अनेक प्रश्न असतात — आणि ते स्वाभाविकही आहे. आमच्याकडे येणारा प्रत्येक पालक फक्त माहिती नाही, तर विश्वास शोधत असतो."
          )}
          align="center"
        />

        <div className="mt-14 flex flex-col gap-4" data-testid="academy-faq-list">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  data-testid={`academy-faq-item-${i + 1}`}
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    open
                      ? "border-[#f68a4a]/60 bg-white shadow-[0_10px_30px_rgba(24,70,59,0.08)]"
                      : "border-[#e1dfdf] bg-[#fbfafa]"
                  }`}
                >
                  <button
                    data-testid={`academy-faq-toggle-${i + 1}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-bold text-[#18463b] sm:text-lg">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                        open
                          ? "border-[#f68a4a] bg-[#f68a4a] text-white"
                          : "border-[#e1dfdf] text-[#f68a4a]"
                      }`}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p
                          data-testid={`academy-faq-answer-${i + 1}`}
                          className="px-6 pb-6 text-sm leading-relaxed text-[#555] sm:text-base"
                        >
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 text-center" data-testid="faq-closing-note">
            <p className="font-heading text-lg font-bold text-[#18463b]">
              {t("Still have questions?", "तुमच्या मनात अजूनही प्रश्न आहेत?")}
            </p>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[#555] sm:text-base">
              {t(
                "We are always ready to listen and guide — because behind every question lies your care for your child's bright future.",
                "आम्ही ऐकण्यासाठी आणि मार्गदर्शनासाठी सदैव तयार आहोत — कारण प्रत्येक प्रश्नाच्या मागे असते तुमच्या मुलाच्या उज्ज्वल भविष्याची काळजी."
              )}
            </p>
            <a
              data-testid="faq-call-button"
              href="tel:+919011658888"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#18463b]/25 px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#f68a4a] hover:text-[#f68a4a]"
            >
              <Phone size={14} />
              {t("Call Us", "कॉल करा")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
