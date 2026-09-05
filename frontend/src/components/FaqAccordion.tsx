import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    q: "Who is this program for?",
    a: "Youth Transform is designed for teenagers and young adults aged 13–18 who want to build confidence, discipline, communication skills, and a clear sense of direction — whether they are struggling with focus and screen habits, or simply ready to unlock their full potential.",
  },
  {
    q: "Is prior experience required?",
    a: "None at all. There are no prerequisites, tests, or preparation needed. Every activity is guided step-by-step by trained mentors, and students of all personality types — shy, outspoken, sporty, studious — thrive in the program.",
  },
  {
    q: "What should students bring?",
    a: "Just a notebook, a pen, a water bottle, comfortable clothing suitable for light yoga and activities, and an open mind. All workshop materials, activity kits, and learning resources are provided by Rupantaram.",
  },
  {
    q: "Will parents receive progress updates?",
    a: "Yes. Parents are an integral part of the Rupantaram ecosystem. You receive mentor feedback, observation notes, and a summary of your child's growth areas and breakthroughs — plus guidance on how to continue the transformation at home.",
  },
  {
    q: "Is a certificate provided?",
    a: "Absolutely. Day 3 concludes with a graduation ceremony where every student presents their personal action plan and receives an official Youth Transform certificate of completion from Rupantaram Academy.",
  },
  {
    q: "How do I enroll?",
    a: "Click the Enroll Now button anywhere on this page and share your details — our team will call you back with upcoming batch dates, venue options (Karjat, Alibag, Pen, Lonavala), and fee details. Seats are limited per batch to keep mentoring personal.",
  },
];

export const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" data-testid="faq-section" className="py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="07"
          eyebrow="FAQs"
          title="Questions Parents & Students Ask"
          align="center"
        />

        <div className="mt-14 flex flex-col gap-4" data-testid="faq-list">
          {FAQS.map((f, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div
                  data-testid={`faq-item-${i + 1}`}
                  className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                    open ? "border-[#e6a635]/60 bg-[#0e2448]" : "border-[#1e293b] bg-[#0b1d3a]"
                  }`}
                >
                  <button
                    data-testid={`faq-toggle-${i + 1}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-heading text-base font-bold text-white sm:text-lg">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border ${
                        open
                          ? "border-[#e6a635] bg-[#e6a635] text-[#071328]"
                          : "border-[#1e3a5f] text-[#f5c253]"
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
                          className="px-6 pb-6 text-sm leading-relaxed text-slate-400 sm:text-base"
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
