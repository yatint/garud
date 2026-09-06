import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLang } from "@/lib/lang";

const WORKSHOP_IMG =
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const AboutProgram = () => {
  const { t } = useLang();

  const PILLARS = [
    {
      title: t("Experiential, Not Lectures", "उपदेश नव्हे, अनुभव"),
      text: t(
        "Every concept is learned through activities, role play, challenges, and reflection — never boring classroom theory.",
        "प्रत्येक संकल्पना उपक्रम, भूमिका, आव्हाने आणि चिंतनातून शिकवली जाते — कंटाळवाण्या वर्गसत्रांनी नव्हे."
      ),
    },
    {
      title: t("Built for the Teenage Mind", "किशोरवयीन मनासाठी"),
      text: t(
        "Designed around how 13–18 year olds actually learn: high energy, peer interaction, gamified growth, and real mentorship.",
        "१३–१८ वयोगट कसा शिकतो यावर आधारित: उर्जा, सहकार्यांचा सहवास, खेळरूप प्रगती आणि खरे मार्गदर्शन."
      ),
    },
    {
      title: t("Values at the Core", "संस्कार केंद्रस्थानी"),
      text: t(
        "Character, discipline, family values, and responsibility are woven into every session — skills with a soul.",
        "प्रत्येक सत्रात चारित्र्य, शिस्त, कौटुंबिक मूल्ये आणि जबाबदारी विणलेली असते — कौशल्यांसोबतच संस्कार."
      ),
    },
  ];

  return (
    <section id="program" data-testid="about-section" className="relative bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="01"
          eyebrow={t("The Program", "कार्यक्रम")}
          title={t("Three Days That Rewire a Lifetime", "आयुष्य बदलणारे तीन दिवस")}
          description={t(
            "Youth Transform is an intensive 3-day experiential workshop by Rupantaram — Garud Zep Group's Life Skills & Personality Transformation Academy. Students build confidence, discipline, emotional intelligence, communication, leadership, and career clarity through practical activities rather than classroom lectures.",
            "Youth Transform हा रूपांतरम्चा ३ दिवसांचा अनुभवात्मक कार्यक्रम — गरुड झेप ग्रुपची जीवनकौशल्य व व्यक्तिमत्त्व परिवर्तन अकादमी. वर्गखोल्यातील उपदेशांऐवजी प्रत्यक्ष उपक्रमांतून विद्यार्थी आत्मविश्वास, शिस्त, भावनिक बुद्धिमत्ता, संवाद, नेतृत्व आणि करिअरची स्पष्टता घडवतात."
          )}
        />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={WORKSHOP_IMG}
                  alt={t("Students collaborating during a Youth Transform workshop", "Youth Transform कार्यशाळेतील विद्यार्थी")}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.6)_100%)]" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3">
                  <p className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                    {t("Live Workshop Session", "थेट कार्यशाळा सत्र")}
                  </p>
                  <span className="rounded-full bg-[#f68a4a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                    {t("Karjat · Alibag · Pen · Lonavala", "कर्जत · आलिबाग · पेन · लोणावळा")}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={0.15 + i * 0.1}>
                <div
                  data-testid={`about-pillar-${i + 1}`}
                  className="card-glow-hover rounded-xl border border-[#e1dfdf] border-l-2 border-l-[#f68a4a] bg-white p-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#18463b]/10 text-[#18463b]">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#18463b]">{p.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#555]">{p.text}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
