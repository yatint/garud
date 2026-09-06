import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

export const AcademyFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLang();

  const FAQS = [
    {
      q: t("What is the fee?", "फी किती आहे?"),
      a: t(
        "Fees vary by program and location. The exact fee for the current batch is shared over a phone call — there are no hidden charges of any kind.",
        "फी कार्यक्रम व ठिकाणानुसार बदलते. चालू बॅचची नेमकी फी फोनवर सांगितली जाते — कोणतेही छुपे शुल्क नाही."
      ),
    },
    {
      q: t("Which age groups are the programs for?", "कोणत्या वयोगटांसाठी कार्यक्रम आहेत?"),
      a: t(
        "Kids Transform is for ages 6–12, Youth Transform for ages 13–18, Young Adult Transform for 19+, and Parenting 360° is for parents. The 30-Day Transformation Program is open to all age groups.",
        "Kids Transform ६–१२, Youth Transform १३–१८, Young Adult Transform १९+ आणि Parenting 360° पालकांसाठी. ३० दिवसांचा कार्यक्रम सर्व वयोगटांसाठी खुला आहे."
      ),
    },
    {
      q: t("How many students are in a batch?", "एका बॅचमध्ये किती विद्यार्थी असतात?"),
      a: t(
        "Batches are deliberately kept small so discussions stay personal and every participant gets a chance to speak.",
        "बॅच मुद्दाम छोट्या ठेवल्या जातात, म्हणजे चर्चा वैयक्तिक राहते आणि प्रत्येकाला बोलण्याची संधी मिळते."
      ),
    },
    {
      q: t("Where are the workshops held?", "कार्यशाळा कोठे होतात?"),
      a: t(
        "Regular sessions run in Karjat, Alibag, Pen, and Lonavala. We also conduct sessions at your location for schools, housing societies, and companies.",
        "कर्जत, आलिबाग, पेन आणि लोणावळा येथे नियमित सत्रे होतात. शाळा, सोसायटी व कंपन्यांसाठी तुमच्या ठिकाणीही सत्रे घेतो."
      ),
    },
    {
      q: t("How long are the programs?", "कार्यक्रम किती दिवसांचे असतात?"),
      a: t(
        "Parenting 360° is a single day (4 hours). Kids, Youth, and Young Adult Transform are 3 days each, and the flagship program runs for 30 days.",
        "Parenting 360° एका दिवसाचा (४ तास). Kids, Youth व Young Adult Transform प्रत्येकी ३ दिवस आणि प्रमुख कार्यक्रम ३० दिवसांचा."
      ),
    },
    {
      q: t("Do parents have to participate?", "पालकांचा सहभाग आवश्यक आहे का?"),
      a: t(
        "Parent participation is not mandatory for a child's program — but change at home lasts much longer when parents complete Parenting 360°.",
        "मुलाच्या कार्यक्रमात पालकांचा सहभाग बंधनकारक नाही — पण Parenting 360° केल्यास घरातील बदल खूप टिकतो."
      ),
    },
    {
      q: t("Which language are sessions conducted in?", "सत्रे कोणत्या भाषेत होतात?"),
      a: t(
        "Sessions are primarily conducted in Marathi; English is used as needed depending on the group.",
        "सत्रे प्रामुख्याने मराठीत होतात; गटानुसार गरजेनुसार इंग्रजी वापरली जाते."
      ),
    },
    {
      q: t("Is there follow-up after the program?", "कार्यक्रमानंतर पाठपुरावा होतो का?"),
      a: t(
        "Yes. Habit tracking, contact with mentors, and progress reports for parents continue after the program ends.",
        "हो. कार्यक्रम संपल्यानंतरही सवयींचा मागोवा, मार्गदर्शकांचा संपर्क आणि पालकांना प्रगती अहवाल चालू राहतो."
      ),
    },
  ];

  return (
    <section id="faq" data-testid="academy-faq-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="10"
          eyebrow={t("FAQs", "प्रश्न")}
          title={t("Questions Parents Ask Us", "पालक विचारतात ते प्रश्न")}
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
      </div>
    </section>
  );
};
