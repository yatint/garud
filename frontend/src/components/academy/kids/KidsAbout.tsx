import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const ABOUT_IMG =
  "https://images.pexels.com/photos/8441902/pexels-photo-8441902.jpeg?auto=compress&cs=tinysrgb&w=1200";

export const KidsAbout = () => {
  const { t } = useLang();
  return (
    <section id="kids-about" data-testid="kids-about-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="01"
              eyebrow={t("About the Program", "कार्यक्रमाविषयी")}
              title={t("Growing Better Children Beyond Academics", "अभ्यासाच्या पलीकडे चांगली मुले घडवणे")}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "Kids Transform is designed for children during their most important developmental years. Through interactive games, creative activities, group learning, mindfulness, and value-based experiences, children develop the habits and life skills needed for a confident and responsible future.",
                  "बाल रूपांतर मुलांच्या सर्वात महत्त्वाच्या विकासाच्या वर्षांसाठी तयार केला आहे. परस्पर खेळ, सर्जनशील उपक्रम, सामूहिक शिक्षण, माइंडफुलनेस आणि मूल्याधारित अनुभवांद्वारे मुले आत्मविश्वासू आणि जबाबदार भविष्यासाठी आवश्यक सवयी व जीवनकौशल्ये विकसित करतात."
                )}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "The focus is not on academic marks, but on building character, confidence, discipline, and emotional growth.",
                  "लक्ष केवळ अभ्यासातील गुणांवर नाही, तर चारित्र्य, आत्मविश्वास, शिस्त आणि भावनिक वाढ घडवण्यावर आहे."
                )}
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                {t("Joyful Learning · Real Skills · Lasting Values", "आनंदी शिक्षण · खरी कौशल्ये · कायमची मूल्ये")}
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={ABOUT_IMG}
                  alt={t("Children and mentors enjoying a balloon game activity", "फुग्यांच्या खेळाचा आनंद घेत असलेली मुले आणि मार्गदर्शक")}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.5)_100%)]" />
                <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {t("Learning Through Play", "खेळातून शिक्षण")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
