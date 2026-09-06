import { motion } from "framer-motion";
import { PenLine, Phone } from "lucide-react";
import { useLang } from "@/lib/lang";
import { scrollToId } from "@/lib/scroll";

const HERO_IMG =
  "https://images.unsplash.com/photo-1572826950513-003ec3caf259?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1600";

export const ContactHero = () => {
  const { t } = useLang();
  return (
    <section id="top" data-testid="contact-hero" className="relative">
      <div className="relative flex min-h-[64vh] items-center justify-center overflow-hidden [border-radius:0_0_50%_50%/0_0_72px_72px]">
        <img
          src={HERO_IMG}
          alt={t("A mentor guiding a family", "कुटुंबाला मार्गदर्शन करत असलेला मार्गदर्शक")}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,70,59,0.55)_0%,rgba(24,70,59,0.72)_60%,rgba(24,70,59,0.85)_100%)]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-40 text-center sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-6 inline-flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#f68a4a]" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#f8b183]">
              {t("Contact Us", "संपर्क")}
            </span>
            <span className="h-px w-10 bg-[#f68a4a]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-3xl font-extrabold uppercase leading-tight tracking-wide text-white sm:text-5xl lg:text-[3.4rem]"
            data-testid="contact-hero-title"
          >
            {t("Let's Begin Your", "चला, तुमच्या")}{" "}
            <span className="text-brand-gradient">{t("Transformation Journey", "परिवर्तन प्रवासाची")}</span>{" "}
            {t("", "सुरुवात करूया")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
            data-testid="contact-hero-subtitle"
          >
            {t(
              "Whether you're a parent, student, or educational institution, our team is here to guide you toward the right Rupantaram program.",
              "तुम्ही पालक, विद्यार्थी किंवा शैक्षणिक संस्था असाल — योग्य रूपांतरम् कार्यक्रमाकडे मार्गदर्शन करण्यासाठी आमची टीम तयार आहे."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              data-testid="contact-hero-call-button"
              href="tel:+919011658888"
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-white hover:bg-white hover:text-[#18463b] active:scale-95"
            >
              <Phone size={16} />
              {t("Call Now", "आत्ताच कॉल करा")}
            </a>
            <button
              data-testid="contact-hero-enquiry-button"
              onClick={() => scrollToId("#enquiry-form", -88)}
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-8 py-4 font-heading text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f8b183] active:scale-95"
            >
              <PenLine size={16} />
              {t("Send Enquiry", "चौकशी पाठवा")}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
