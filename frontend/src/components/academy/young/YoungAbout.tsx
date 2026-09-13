import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1701834951900-b31c99da66f8?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const YoungAbout = () => {
  const { t } = useLang();
  return (
    <section id="young-about" data-testid="young-about-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="01"
              eyebrow={t("About the Program", "कार्यक्रमाविषयी")}
              title={t("A Conscious Change, From Self to Self", "स्वतःपासून स्वतःपर्यंतचा जाणीवपूर्वक बदल")}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "Today's young adult is no longer limited to education; they are searching for the meaning of their life, the direction of their career, and their own identity. But confusion, lack of confidence, shortage of the right guidance, and the struggle to adapt to a changing world often hold them back. Against this backdrop, Yuva Rupantar has been designed as a deep and impactful 3-day transformation journey.",
                  "आजचा तरुण केवळ शिक्षणापुरता मर्यादित राहिलेला नाही; तो आपल्या आयुष्याचा अर्थ, करिअरची दिशा आणि स्वतःची ओळख शोधत आहे. पण अनेकदा संभ्रम, आत्मविश्वासाचा अभाव, योग्य मार्गदर्शनाची कमतरता आणि बदलत्या जगाशी जुळवून घेण्याची धडपड यामुळे तो मागे पडतो. याच पार्श्वभूमीवर “युवा रूपांतर” हा ३ दिवसांचा सखोल आणि प्रभावी परिवर्तन प्रवास तयार करण्यात आला आहे."
                )}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "This program empowers young adults to live a purposeful life, develop leadership qualities, communicate with impact, and prepare themselves for real success. It is not just training — it is an experience that creates a conscious change, from self to self.",
                  "हा कार्यक्रम तरुणांना उद्देशपूर्ण जीवन जगण्यासाठी, नेतृत्वगुण विकसित करण्यासाठी, प्रभावी संवाद साधण्यासाठी आणि वास्तविक यशासाठी स्वतःला तयार करण्यासाठी सक्षम करतो. हा केवळ प्रशिक्षण नाही, तर स्वतःपासून स्वतःपर्यंतचा एक जाणीवपूर्वक बदल घडवणारा अनुभव आहे."
                )}
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                {t("Purpose · Leadership · Real Success", "उद्देश · नेतृत्व · वास्तविक यश")}
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={ABOUT_IMG}
                  alt={t("Young adults learning together in a group session", "समूह सत्रात एकत्र शिकणारे तरुण")}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.5)_100%)]" />
                <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {t("Skills for the Real World", "खऱ्या जगासाठी कौशल्ये")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
