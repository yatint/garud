import { AnimatePresence, motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { CalendarCheck, ClipboardCheck, Compass, Home, MessageCircle, Phone, Plus } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const WHY: Array<{ icon: LucideIcon; enTitle: string; mrTitle: string; enText: string; mrText: string; slug: string }> = [
  { icon: Compass, enTitle: "Career & Program Counselling", mrTitle: "करिअर आणि कार्यक्रम समुपदेशन", enText: "Find the right program for your goals.", mrText: "तुमच्या ध्येयांसाठी योग्य कार्यक्रम शोधा.", slug: "counselling" },
  { icon: Home, enTitle: "Parent Guidance Sessions", mrTitle: "पालक मार्गदर्शन सत्रे", enText: "One-on-one guidance for parents.", mrText: "पालकांसाठी वैयक्तिक मार्गदर्शन.", slug: "parent-guidance" },
  { icon: ClipboardCheck, enTitle: "Student Assessments", mrTitle: "विद्यार्थी मूल्यमापन", enText: "Understand strengths before you begin.", mrText: "सुरुवातीपूर्वी शक्ती समजून घ्या.", slug: "assessments" },
  { icon: CalendarCheck, enTitle: "Batch Registration", mrTitle: "तुकडी नोंदणी", enText: "Reserve your seat in upcoming batches.", mrText: "आगामी तुकड्यांत तुमची जागा राखीव करा.", slug: "registration" },
];

const FAQS = [
  {
    enQ: "How do I enroll in a program?",
    mrQ: "कार्यक्रमात प्रवेश कसा घ्यावा?",
    enA: "Call us or submit the enquiry form on this page. Our team will call you back with upcoming batch dates, venue options, and the registration process.",
    mrA: "आम्हाला कॉल करा किंवा या पानावरील चौकशी फॉर्म सबमिट करा. आगामी तुकड्यांच्या तारखा, ठिकाण पर्याय आणि नोंदणी प्रक्रियेसह आमची टीम तुम्हाला परत कॉल करेल.",
  },
  {
    enQ: "Which program is suitable for my child?",
    mrQ: "माझ्या मुलासाठी कोणता कार्यक्रम योग्य?",
    enA: "Programs are age-based: Kids Transform (6–13), Youth Transform (13–18), and Young Adult Transform (19+). Our counsellors will help you choose the right fit during a free guidance call.",
    mrA: "कार्यक्रम वयानुसार आहेत: बाल रूपांतर (६–१३), किशोर रूपांतर (१३–१८) आणि युवा रूपांतर (१९+). मोफत मार्गदर्शन कॉलमध्ये आमचे समुपदेशक योग्य पर्याय निवडण्यास मदत करतील.",
  },
  {
    enQ: "Can parents attend counselling before registration?",
    mrQ: "नोंदणीपूर्वी पालक समुपदेशन घेऊ शकतात का?",
    enA: "Yes. Pre-registration counselling for parents is available at all four centers — we encourage it, so expectations are clear on both sides.",
    mrA: "होय. चारही केंद्रांवर नोंदणीपूर्व पालक समुपदेशन उपलब्ध आहे — दोन्ही बाजूंच्या अपेक्षा स्पष्ट व्हाव्यात म्हणून आम्ही त्यास प्रोत्साहन देतो.",
  },
  {
    enQ: "Are programs available in all four locations?",
    mrQ: "चारही ठिकाणी कार्यक्रम उपलब्ध आहेत का?",
    enA: "Yes. Scheduled batches run across Karjat, Alibag, Pen, and Lonavala throughout the year. Dates vary by program and center.",
    mrA: "होय. कर्जत, अलिबाग, पेन आणि लोणावळा येथे वर्षभर नियोजित तुकड्या चालतात. तारखा कार्यक्रम आणि केंद्रानुसार बदलतात.",
  },
  {
    enQ: "How do I receive the brochure?",
    mrQ: "माहितीपत्रक कसे मिळेल?",
    enA: "Share your details through the enquiry form or WhatsApp us, and our team will send the program brochure to you directly.",
    mrA: "चौकशी फॉर्मद्वारे तुमचा तपशील शेअर करा किंवा आम्हाला WhatsApp करा — आमची टीम तुम्हाला थेट कार्यक्रम माहितीपत्रक पाठवेल.",
  },
];

export const ContactWhyFaqCta = () => {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <section data-testid="contact-why-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="03"
            eyebrow={t("Why Visit Rupantaram?", "रूपांतरम्ला का भेट द्यावी?")}
            title={t("More Than Just Admissions", "केवळ प्रवेशापेक्षा बरेच काही")}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.07}>
                <div
                  data-testid={`contact-why-card-${w.slug}`}
                  className="card-glow-hover group h-full rounded-[18px] border border-[#e1dfdf] bg-white p-7 text-center"
                >
                  <span className="mx-auto flex h-13 w-13 items-center justify-center rounded-full bg-[#f6f7f0] p-3.5 text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    <w.icon size={22} />
                  </span>
                  <h3 className="mt-5 font-heading text-base font-bold text-[#18463b]">{t(w.enTitle, w.mrTitle)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555]">{t(w.enText, w.mrText)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section data-testid="contact-faq-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow={t("FAQs", "वारंवार विचारले जाणारे प्रश्न")}
            title={t("Quick Answers Before You Call", "कॉल करण्यापूर्वी जलद उत्तरे")}
            align="center"
          />
          <div className="mt-14 flex flex-col gap-4" data-testid="contact-faq-list">
            {FAQS.map((f, i) => {
              const open = openIndex === i;
              return (
                <Reveal key={f.enQ} delay={i * 0.04}>
                  <div
                    data-testid={`contact-faq-item-${i + 1}`}
                    className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
                      open
                        ? "border-[#f68a4a]/60 bg-white shadow-[0_10px_30px_rgba(24,70,59,0.08)]"
                        : "border-[#e1dfdf] bg-[#fbfafa]"
                    }`}
                  >
                    <button
                      data-testid={`contact-faq-toggle-${i + 1}`}
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
                            data-testid={`contact-faq-answer-${i + 1}`}
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

      <section
        data-testid="contact-final-cta"
        className="relative overflow-hidden bg-[#18463b] py-24 lg:py-32"
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[860px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(246,138,74,0.18),transparent_70%)]" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#f68a4a]/10" />
          <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#0b5d3b]/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <h2 className="font-heading text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("Ready to Take the", "पहिले पाऊल टाकायला")}{" "}
              <span className="text-brand-gradient">{t("First Step?", "तयार?")}</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              {t(
                "Connect with the Rupantaram team and discover the program that's right for your journey of confidence, discipline, and personal transformation.",
                "रूपांतरम् टीमशी संपर्क करा आणि आत्मविश्वास, शिस्त आणि वैयक्तिक परिवर्तनाच्या तुमच्या प्रवासासाठी योग्य कार्यक्रम शोधा."
              )}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                data-testid="contact-cta-call-button"
                href="tel:+919011658888"
                className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-[#18463b] active:scale-95"
              >
                <Phone size={16} />
                {t("Call Us", "कॉल करा")}
              </a>
              <a
                data-testid="contact-cta-whatsapp-button"
                href="https://wa.me/919011658888"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f8b183] active:scale-95"
              >
                <MessageCircle size={16} />
                {t("WhatsApp Us", "WhatsApp वर संदेश पाठवा")}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
