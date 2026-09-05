import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const FAQS = [
  {
    q: "What is the fee?",
    a: "Fees vary by program and location. The exact fee for the current batch is shared over a phone call — there are no hidden charges of any kind.",
  },
  {
    q: "Which age groups are the programs for?",
    a: "Kids Transform is for ages 6–12, Youth Transform for ages 13–18, Young Adult Transform for 19+, and Parenting 360° is for parents. The 30-Day Transformation Program is open to all age groups.",
  },
  {
    q: "How many students are in a batch?",
    a: "Batches are deliberately kept small so discussions stay personal and every participant gets a chance to speak.",
  },
  {
    q: "Where are the workshops held?",
    a: "Regular sessions run in Karjat, Alibag, Pen, and Lonavala. We also conduct sessions at your location for schools, housing societies, and companies.",
  },
  {
    q: "How long are the programs?",
    a: "Parenting 360° is a single day (4 hours). Kids, Youth, and Young Adult Transform are 3 days each, and the flagship program runs for 30 days.",
  },
  {
    q: "Do parents have to participate?",
    a: "Parent participation is not mandatory for a child's program — but change at home lasts much longer when parents complete Parenting 360°.",
  },
  {
    q: "Which language are sessions conducted in?",
    a: "Sessions are primarily conducted in Marathi; English is used as needed depending on the group.",
  },
  {
    q: "Is there follow-up after the program?",
    a: "Yes. Habit tracking, contact with mentors, and progress reports for parents continue after the program ends.",
  },
];

export const AcademyFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" data-testid="academy-faq-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="10"
          eyebrow="FAQs"
          title="Questions Parents Ask Us"
          align="center"
        />

        <div className="mt-14 flex flex-col gap-4" data-testid="academy-faq-list">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
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
