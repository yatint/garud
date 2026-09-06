import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const CENTERS = [
  { nameEn: "Karjat", nameMr: "कर्जत", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "karjat" },
  { nameEn: "Alibag", nameMr: "आलिबाग", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "alibag" },
  { nameEn: "Pen", nameMr: "पेन", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "pen" },
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
          eyebrow={t("Training Centers", "प्रशिक्षण ठिकाणे")}
          title={t("Regular Workshops Across Four Locations", "चार ठिकाणी नियमित कार्यशाळा")}
          description={t(
            "We also conduct sessions at your location for schools, housing societies, and companies.",
            "शाळा, सोसायटी व कंपन्यांसाठी आम्ही तुमच्या ठिकाणीही सत्रे घेतो."
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
                    {t("Enquire", "चौकशी")}
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
