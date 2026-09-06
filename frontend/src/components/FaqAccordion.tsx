import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/lang";

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLang();

  const FAQS = [
    {
      q: t("Who is this program for?", "हा कार्यक्रम कोणासाठी आहे?"),
      a: t(
        "Youth Transform is designed for teenagers and young adults aged 13–18 who want to build confidence, discipline, communication skills, and a clear sense of direction — whether they are struggling with focus and screen habits, or simply ready to unlock their full potential.",
        "Youth Transform १३–१८ वयोगटातील किशोरवयीन मुलांसाठी आहे — आत्मविश्वास, शिस्त, संवाद कौशल्ये आणि स्पष्ट दिशा हवी असलेल्यांसाठी; एकाग्रता व स्क्रीन सवयींमध्ये अडचण असो किंवा क्षमता विकसित करायची असो."
      ),
    },
    {
      q: t("Is prior experience required?", "पूर्वअनुभव आवश्यक आहे का?"),
      a: t(
        "None at all. There are no prerequisites, tests, or preparation needed. Every activity is guided step-by-step by trained mentors, and students of all personality types — shy, outspoken, sporty, studious — thrive in the program.",
        "अजिबात नाही. कोणतीही पूर्वतयारी किंवा परीक्षा नाही. प्रत्येक उपक्रम प्रशिक्षित मार्गदर्शक पायरी-पायरीने करवतात — लाजाळू, बोलका, खेळाडू किंवा शिक्षणप्रेमी प्रत्येक विद्यार्थी यशस्वी होतो."
      ),
    },
    {
      q: t("What should students bring?", "विद्यार्थ्यांनी काय आणावे?"),
      a: t(
        "Just a notebook, a pen, a water bottle, comfortable clothing suitable for light yoga and activities, and an open mind. All workshop materials, activity kits, and learning resources are provided by Rupantaram.",
        "फक्त वही, पेन, पाण्याची बाटली, हलक्या योग व उपक्रमांसाठी सोयीस्कर कपडे आणि खुले मन. सर्व साहित्य व उपक्रम सामग्री रूपांतरम् पुरवते."
      ),
    },
    {
      q: t("Will parents receive progress updates?", "पालकांना प्रगतीची माहिती मिळेल का?"),
      a: t(
        "Yes. Parents are an integral part of the Rupantaram ecosystem. You receive mentor feedback, observation notes, and a summary of your child's growth areas and breakthroughs — plus guidance on how to continue the transformation at home.",
        "हो. पालक रूपांतरम्च्या व्यवस्थेचा अविभाज्य भाग आहेत — मार्गदर्शकांचा अभिप्राय, निरीक्षण नोंदी आणि मुलाच्या प्रगतीचा सारांश मिळतो; घरी रूपांतर कसे पुढे न्यावे याचे मार्गदर्शनही."
      ),
    },
    {
      q: t("Is a certificate provided?", "प्रमाणपत्र मिळते का?"),
      a: t(
        "Absolutely. Day 3 concludes with a graduation ceremony where every student presents their personal action plan and receives an official Youth Transform certificate of completion from Rupantaram Academy.",
        "नक्की. तिसऱ्या दिवशी पदवी समारंभ होतो — प्रत्येक विद्यार्थी आपला वैयक्तिक कृती आराखडा सादर करतो आणि रूपांतरम् अकादमीचे अधिकृत प्रमाणपत्र मिळवतो."
      ),
    },
    {
      q: t("How do I enroll?", "नोंदणी कशी करावी?"),
      a: t(
        "Click the Enroll Now button anywhere on this page and share your details — our team will call you back with upcoming batch dates, venue options (Karjat, Alibag, Pen, Lonavala), and fee details. Seats are limited per batch to keep mentoring personal.",
        "पृष्ठावरील 'नोंदणी करा' बटण दाबा आणि तुमची माहिती द्या — आमची टीम पुढील बॅचच्या तारखा, ठिकाणे (कर्जत, आलिबाग, पेन, लोणावळा) आणि फीची माहिती देईल. वैयक्तिक मार्गदर्शनासाठी प्रत्येक बॅचमधील जागा मर्यादित."
      ),
    },
  ];

  return (
    <section id="faq" data-testid="faq-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow={t("FAQs", "प्रश्न")}
          title={t("Questions Parents & Students Ask", "पालक व विद्यार्थी विचारतात ते प्रश्न")}
          align="center"
        />

        <div className="mt-14 flex flex-col gap-4" data-testid="faq-list">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  data-testid={`faq-item-${i + 1}`}
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    open ? "border-[#f68a4a]/60 bg-white shadow-[0_10px_30px_rgba(24,70,59,0.08)]" : "border-[#e1dfdf] bg-[#fbfafa]"
                  }`}
                >
                  <button
                    data-testid={`faq-toggle-${i + 1}`}
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
                          data-testid={`faq-answer-${i + 1}`}
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
      </div>
    </section>
  );
};
