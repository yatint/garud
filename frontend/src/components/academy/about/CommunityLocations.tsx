import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";
import { scrollToId } from "@/lib/scroll";

const COMMUNITY_IMG =
  "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

const LOCATIONS = [
  { nameEn: "Karjat", nameMr: "कर्जत", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "karjat" },
  { nameEn: "Alibag", nameMr: "आलिबाग", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "alibag" },
  { nameEn: "Pen", nameMr: "पेन", distEn: "Dist. Raigad, Maharashtra", distMr: "जि. रायगड, महाराष्ट्र", slug: "pen" },
  { nameEn: "Lonavala", nameMr: "लोणावळा", distEn: "Dist. Pune, Maharashtra", distMr: "जि. पुणे, महाराष्ट्र", slug: "lonavala" },
];

export const CommunityLocations = () => {
  const { t } = useLang();
  return (
    <>
      <section data-testid="community-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
                <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                  <img
                    src={COMMUNITY_IMG}
                    alt={t("Young volunteers serving their community", "समाजसेवा करणारे तरुण")}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.5)_100%)]" />
                  <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                    {t("Service in Action", "सेवा कृतीत")}
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-6">
              <SectionHeading
                index="06"
                eyebrow={t("Community Impact", "सामाजिक योगदान")}
                title={t("Creating Responsible Citizens", "जबाबदार नागरिक घडवणे")}
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                  {t(
                    "Rupantaram is committed to building not only successful individuals but also compassionate human beings. Every program encourages social responsibility, respect for parents, environmental awareness, teamwork, and community contribution.",
                    "रूपांतरम् फक्त यशस्वी व्यक्ती नव्हे, तर सहानुभूतिपूर्ण माणसे घडवण्यास कटिबद्ध आहे. प्रत्येक कार्यक्रम सामाजिक जबाबदारी, पालकांचा आदर, पर्यावरण जाणीव, संघभावना आणि समाजयोगदानाला प्रोत्साहन देतो."
                  )}
                </p>
                <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                  {t(
                    "Because a truly transformed student doesn't just change their own life — they lift everyone around them.",
                    "कारण खऱ्या अर्थाने रूपांतरित झालेला विद्यार्थी फक्त स्वतःचे आयुष्य बदलत नाही — तो आजूबाजूच्या प्रत्येकाला वर चालतो."
                  )}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="about-locations-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="07"
            eyebrow={t("Our Locations", "आमची ठिकाणे")}
            title={t("Four Centers Across Maharashtra", "महाराष्ट्रातील चार केंद्रे")}
            description={t(
              "Regular workshops run at every center — pick the one closest to you.",
              "प्रत्येक केंद्रावर नियमित कार्यशाळा — तुमच्याजवळचे केंद्र निवडा."
            )}
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.07}>
                <div
                  data-testid={`location-card-${l.slug}`}
                  className="card-glow-hover flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-white p-7 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a]">
                    <MapPin size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-[#18463b]">{t(l.nameEn, l.nameMr)}</h3>
                  <p className="mt-1 flex-1 text-sm text-[#7a7a7a]">{t(l.distEn, l.distMr)}</p>
                  <button
                    data-testid={`location-programs-${l.slug}`}
                    onClick={() => scrollToId("#about-programs", -88)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#18463b]/25 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#18463b] transition-all duration-300 hover:border-[#f68a4a] hover:bg-[#f68a4a] hover:text-white"
                  >
                    {t("View Programs", "कार्यक्रम पहा")}
                    <ArrowRight size={13} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
