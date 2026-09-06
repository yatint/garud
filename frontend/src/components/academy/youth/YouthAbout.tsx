import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const YouthAbout = () => {
  const { t } = useLang();
  return (
    <section id="youth-about" data-testid="youth-about-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="01"
              eyebrow={t("About the Program", "कार्यक्रमाविषयी")}
              title={t("Three Days That Rewire a Lifetime", "आयुष्य बदलणारे तीन दिवस")}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "Youth Transform is designed for the most defining years of a student's life. Through experiential activities, honest reflection, teamwork, and mentor guidance, teenagers develop the confidence, discipline, and emotional strength that classrooms rarely teach.",
                  "Youth Transform विद्यार्थ्याच्या आयुष्यातील सर्वात निर्णायक वर्षांसाठी तयार केला आहे. अनुभवाधारित उपक्रम, प्रामाणिक आत्मपरिक्षण, संघकार्य आणि मार्गदर्शनाद्वारे किशोरवयीन मुले वर्गात क्वचित शिकवले जाणारे आत्मविश्वास, शिस्त आणि भावनिक बळकटी विकसित करतात."
                )}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "The program is experiential, not lectures — built for the teenage mind, with values at the core of every activity.",
                  "हा कार्यक्रम उपदेश नव्हे, अनुभव आहे — किशोरवयीन मनासाठी बनवलेला, प्रत्येक उपक्रमाच्या केंद्रात संस्कार."
                )}
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                {t("Confidence · Discipline · Direction", "आत्मविश्वास · शिस्त · दिशा")}
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={ABOUT_IMG}
                  alt={t("Students collaborating during a Youth Transform workshop", "Youth Transform कार्यशाळेतील विद्यार्थी")}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.5)_100%)]" />
                <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {t("Live Workshop Session", "थेट कार्यशाळा सत्र")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
