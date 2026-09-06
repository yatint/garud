import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1719857646553-92342880175d?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const AcademyAbout = () => {
  const { t } = useLang();
  return (
    <section id="about" data-testid="academy-about-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="01"
              eyebrow={t("About Garud Zep – Rupantaram", "गरुड झेप – रूपांतरम् विषयी")}
              title={t("Change That Comes From Within", "आतून येणारे रूपांतर")}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "Rupantaram means change that comes from within. Today's children are full of information but short on direction. Plenty of places prepare them for exams; very few prepare them for life. Garud Zep – Rupantaram is exactly that place — where a child learns to know themselves, control themselves, and choose their own direction.",
                  "रूपांतरम् म्हणजे आतून येणारा बदल. आजच्या मुलांकडे माहिती भरपूर आहे, पण दिशा नाही. परीक्षांची तयारी करणारी ठिकाणे बरीच आहेत; आयुष्याची तयारी करणारी फार कमी. गरुड झेप – रूपांतरम् अचूक तीच जागा — जिथे मूल स्वतःला ओळखायला, स्वतःला सांभाळायला आणि स्वतःची दिशा निवडायला शिकते."
                )}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "Our workshops are not lectures. Skills turn into behaviour through activity, group work, lived experience, guided reflection, and daily practice. And when behaviour changes, life changes.",
                  "आमच्या कार्यशाळा उपदेश नसतात. उपक्रम, गटकार्य, प्रत्यक्ष अनुभव, मार्गदर्शित चिंतन आणि दैनिक सरावाद्वारे कौशल्ये वर्तनात उतरतात. आणि वर्तन बदलले की आयुष्य बदलते."
                )}
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                {t("This is not teaching — this is transformation.", "हे शिकवणे नाही — हे रूपांतर आहे.")}
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={ABOUT_IMG}
                  alt={t("A mentor guiding a student in conversation", "विद्यार्थ्याला मार्गदर्शन करताना मार्गदर्शक")}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.55)_100%)]" />
                <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {t("Mentorship, Not Lectures", "मार्गदर्शन, उपदेश नव्हे")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
