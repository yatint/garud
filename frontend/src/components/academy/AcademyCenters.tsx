import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const CENTERS = [
  { nameEn: "Karjat", nameMr: "कर्जत", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "karjat" },
  { nameEn: "Alibag", nameMr: "अलिबाग", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "alibag" },
  { nameEn: "Pen", nameMr: "पेण", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "pen" },
  { nameEn: "Lonavala", nameMr: "लोणावळा", distEn: "Dist. Pune, Maharashtra", distMr: "जि. पुणे, महाराष्ट्र", slug: "lonavala" },
];

interface AcademyCentersProps {
  onEnquire: () => void;
}

export const AcademyCenters = ({ onEnquire }: AcademyCentersProps) => {
  const { t } = useLang();
  return (
    <section id="centers" data-testid="academy-centers-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="09"
          eyebrow={t("Our Locations", "आमची ठिकाणे")}
          title={t("Training Centers", "प्रशिक्षण केंद्रे")}
          description={t(
            "Our regular workshops are currently held at four main locations. Additionally, for schools, housing societies, and companies, we also conduct special sessions at your venue.",
            "आमच्या नियमित कार्यशाळा सध्या चार प्रमुख ठिकाणी आयोजित केल्या जातात. याशिवाय, शाळा, गृहनिर्माण संस्था आणि कंपन्यांसाठी आम्ही तुमच्या ठिकाणीही विशेष सत्रे घेण्याची सुविधा उपलब्ध करून देतो."
          )}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CENTERS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}>
              <div
                data-testid={`center-card-${c.slug}`}
                className="card-glow-hover flex h-full flex-col rounded-[10px] border border-[#e1dfdf] bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a]">
                  <MapPin size={20} />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-[#18463b]">{t(c.nameEn, c.nameMr)}</h3>
                <p className="mt-1 text-sm text-[#7a7a7a]">{t(c.distEn, c.distMr)}</p>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#444]">
                  <Phone size={14} className="text-[#f68a4a]" />
                  +91 90116 58888
                </p>
                <div className="mt-5 flex gap-2">
                  <a
                    data-testid={`center-call-${c.slug}`}
                    href="tel:+919011658888"
                    className="flex-1 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-4 py-2.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#18463b] hover:bg-[#18463b]"
                  >
                    {t("Call", "कॉल करा")}
                  </a>
                  <button
                    data-testid={`center-enquire-${c.slug}`}
                    onClick={onEnquire}
                    className="flex-1 rounded-full border border-[#18463b]/30 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#18463b] transition-all duration-300 hover:border-[#f68a4a] hover:text-[#f68a4a]"
                  >
                    {t("Enquire", "चौकशी करा")}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div
            data-testid="centers-onsite-note"
            className="mx-auto mt-12 flex max-w-3xl flex-col items-center gap-5 rounded-2xl border border-[#e1dfdf] bg-white p-8 text-center sm:flex-row sm:justify-between sm:text-left"
          >
            <div>
              <h3 className="font-heading text-xl font-black text-[#18463b]">
                {t("Want a session in your area?", "तुमच्या परिसरातही सत्र हवे आहे?")}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#555] sm:text-base">
                {t(
                  "Contact us today and get a special training session organised for your institution.",
                  "आजच संपर्क करा आणि तुमच्या संस्थेसाठी विशेष प्रशिक्षणाची संधी मिळवा."
                )}
              </p>
            </div>
            <button
              data-testid="centers-onsite-enquire-button"
              onClick={onEnquire}
              className="shrink-0 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
            >
              {t("Enquire Now", "चौकशी करा")}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
