import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const FAQS = [
  {
    enQ: "Who is this program for?",
    mrQ: "हा कार्यक्रम कोणासाठी आहे?",
    enA: "Youth Transform is designed for teenagers aged 13–18 who want to build confidence, discipline, communication skills, and a clear sense of direction — whether they struggle with focus and screen habits, or are ready to unlock their full potential.",
    mrA: "Youth Transform १३–१८ वयोगटातील किशोरवयीन मुलांसाठी आहे — आत्मविश्वास, शिस्त, संवाद कौशल्ये आणि स्पष्ट दिशा हवी असलेल्यांसाठी; एकाग्रता व स्क्रीन सवयींमध्ये अडचण असो किंवा क्षमता विकसित करायची असो.",
  },
  {
    enQ: "Is prior experience required?",
    mrQ: "पूर्वअनुभव आवश्यक आहे का?",
    enA: "None at all. There are no prerequisites, tests, or preparation needed. Every activity is guided step-by-step by trained mentors, and students of all personality types — shy, outspoken, sporty, studious — thrive in the program.",
    mrA: "अजिबात नाही. कोणतीही पूर्वतयारी किंवा परीक्षा नाही. प्रत्येक उपक्रम प्रशिक्षित मार्गदर्शक पायरी-पायरीने करवतात — लाजाळू, बोलका, खेळाडू किंवा शिक्षणप्रेमी प्रत्येक विद्यार्थी यशस्वी होतो.",
  },
  {
    enQ: "What should students bring?",
    mrQ: "विद्यार्थ्यांनी काय आणावे?",
    enA: "Just a notebook, a pen, a water bottle, comfortable clothing suitable for light yoga and activities, and an open mind. All workshop materials, activity kits, and learning resources are provided by Rupantaram.",
    mrA: "फक्त वही, पेन, पाण्याची बाटली, हलक्या योग व उपक्रमांसाठी सोयीस्कर कपडे आणि खुले मन. सर्व साहित्य व उपक्रम सामग्री रूपांतरम् पुरवते.",
  },
  {
    enQ: "Will parents receive progress updates?",
    mrQ: "पालकांना प्रगतीची माहिती मिळेल का?",
    enA: "Yes. Parents are an integral part of the Rupantaram ecosystem. You receive mentor feedback, observation notes, and a summary of your child's growth areas and breakthroughs — plus guidance on how to continue the transformation at home.",
    mrA: "हो. पालक रूपांतरम्च्या व्यवस्थेचा अविभाज्य भाग आहेत — मार्गदर्शकांचा अभिप्राय, निरीक्षण नोंदी आणि मुलाच्या प्रगतीचा सारांश मिळतो; घरी रूपांतर कसे पुढे न्यावे याचे मार्गदर्शनही.",
  },
  {
    enQ: "Is a certificate provided?",
    mrQ: "प्रमाणपत्र मिळते का?",
    enA: "Absolutely. Day 3 concludes with a graduation ceremony where every student presents their personal action plan and receives an official Youth Transform certificate of completion from Rupantaram Academy.",
    mrA: "नक्की. तिसऱ्या दिवशी पदवी समारंभ होतो — प्रत्येक विद्यार्थी आपला वैयक्तिक कृती आराखडा सादर करतो आणि रूपांतरम् अकादमीचे अधिकृत प्रमाणपत्र मिळवतो.",
  },
  {
    enQ: "How do I enroll?",
    mrQ: "नोंदणी कशी करावी?",
    enA: "Click the Register Now button anywhere on this page and share your details — our team will call you back with upcoming batch dates, venue options (Karjat, Alibag, Pen, Lonavala), and fee details. Seats are limited per batch to keep mentoring personal.",
    mrA: "पृष्ठावरील 'नोंदणी करा' बटण दाबा आणि तुमची माहिती द्या — आमची टीम पुढील बॅचच्या तारखा, ठिकाणे (कर्जत, अलिबाग, पेन, लोणावळा) आणि फीची माहिती देईल. वैयक्तिक मार्गदर्शनासाठी प्रत्येक बॅचमधील जागा मर्यादित.",
  },
];

export const YouthFaq = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="youth-faq" data-testid="youth-faq-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="09"
          eyebrow={t("FAQs", "वारंवार विचारले जाणारे प्रश्न")}
          title={t("Questions Parents & Students Ask", "पालक व विद्यार्थी विचारतात ते प्रश्न")}
          align="center"
        />

        <div className="mt-14 flex flex-col gap-4" data-testid="youth-faq-list">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={f.enQ} delay={i * 0.04}>
                <div
                  data-testid={`youth-faq-item-${i + 1}`}
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    open
                      ? "border-[#f68a4a]/60 bg-white shadow-[0_10px_30px_rgba(24,70,59,0.08)]"
                      : "border-[#e1dfdf] bg-white"
                  }`}
                >
                  <button
                    data-testid={`youth-faq-toggle-${i + 1}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-bold text-[#18463b] sm:text-lg">
                      {t(f.enQ, f.mrQ)}
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
                          data-testid={`youth-faq-answer-${i + 1}`}
                          className="px-6 pb-6 text-sm leading-relaxed text-[#555] sm:text-base"
                        >
                          {t(f.enA, f.mrA)}
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
