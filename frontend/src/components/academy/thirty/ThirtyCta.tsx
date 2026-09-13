import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { useLang } from "@/lib/lang";

interface ThirtyCtaProps {
  onEnroll: () => void;
}

export const ThirtyCta = ({ onEnroll }: ThirtyCtaProps) => {
  const { t } = useLang();
  return (
    <section data-testid="thirty-final-cta" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="font-heading text-3xl font-black tracking-tight text-[#18463b] sm:text-4xl lg:text-5xl">
            {t("Your Best Version Starts with", "तुमच्या सर्वोत्तम रूपाची सुरुवात")}{" "}
            <span className="text-brand-gradient">{t("One Decision", "एका निर्णयाने")}</span>{" "}
            {t("", "होते")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#7a7a7a] sm:text-lg">
            {t(
              "“30-Day Transform” — because big changes don't happen in a single day… they are built through small daily actions and change your life forever!",
              "“३० दिवसांचा रूपांतर” — कारण मोठे बदल एका दिवसात होत नाहीत… ते दररोजच्या छोट्या कृतीतून घडतात आणि आयुष्य कायमचे बदलून टाकतात!"
            )}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              data-testid="thirty-cta-register-button"
              onClick={onEnroll}
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#18463b] hover:bg-[#18463b] hover:shadow-[0_5px_20px_rgba(0,0,0,0.2)] active:scale-95"
            >
              {t("Register Now", "आत्ताच नोंदणी करा")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              data-testid="thirty-cta-contact-button"
              href="tel:+919011658888"
              className="inline-flex items-center gap-2 rounded-full border border-[#18463b]/25 px-9 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:-translate-y-[3px] hover:border-[#f68a4a] hover:text-[#f68a4a] active:scale-95"
            >
              <Phone size={16} />
              {t("Contact Our Team", "आमच्या टीमशी संपर्क करा")}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
