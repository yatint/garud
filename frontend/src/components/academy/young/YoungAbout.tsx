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
              title={t("Preparing You for Life Beyond College", "कॉलेजच्या पलीकडच्या आयुष्यासाठी तयारी")}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "Young Adult Transform is designed for individuals entering the most important phase of life. While education prepares us for careers, this program prepares us for life by developing confidence, decision-making ability, emotional maturity, communication, leadership, and responsible living.",
                  "Young Adult Transform आयुष्याच्या सर्वात महत्त्वाच्या टप्प्यात पदार्पण करणाऱ्या तरुणांसाठी आहे. शिक्षण करिअरसाठी तयार करते, पण हा कार्यक्रम आयुष्यासाठी तयार करतो — आत्मविश्वास, निर्णयक्षमता, भावनिक परिपक्वता, संवाद, नेतृत्व आणि जबाबदार जीवन घडवून."
                )}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "The program focuses on practical life skills that help participants become capable individuals in both personal and professional life.",
                  "हा कार्यक्रम अशा व्यावहारिक जीवनकौशल्यांवर लक्ष देतो ज्यामुळे सहभागी वैयक्तिक आणि व्यावसायिक दोन्ही आयुष्यात सक्षम बनतात."
                )}
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                {t("Purpose · Leadership · Real-Life Readiness", "ध्येय · नेतृत्व · खऱ्या आयुष्याची तयारी")}
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
