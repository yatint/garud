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
              eyebrow={t("Garud Zep – Rupantaram", "गरुडझेप – रूपांतरम्")}
              title={t("Change That Forms Within… A Journey That Shapes Life", "आतून घडणारा बदल… आयुष्य घडवणारा प्रवास")}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "Today's generation is rich in information, yet searching for the right direction. There are many institutions that coach for competitive exams; but very few platforms that shape life with values. Garud Zep – Rupantaram is exactly such a distinct, impactful platform.",
                  "आजची पिढी माहितीने समृद्ध आहे, पण योग्य दिशेच्या शोधात आहे. स्पर्धा परीक्षांसाठी मार्गदर्शन देणाऱ्या संस्था अनेक आहेत; मात्र आयुष्य घडवणारे संस्कार देणारे व्यासपीठ मोजकेच. गरुडझेप – रूपांतरम् हे असेच एक वेगळे, परिणामकारक व्यासपीठ आहे."
                )}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "Here, we don't just teach — personalities are shaped. Through action, group work, real experiences, guided reflection, and consistent practice, students' skills are transformed into their behaviour. Because when behaviour changes, thinking changes… and when thinking changes, life itself changes.",
                  "येथे केवळ शिकवले जात नाही, तर व्यक्तिमत्त्व घडवले जाते. कृती, गटकार्य, प्रत्यक्ष अनुभव, मार्गदर्शित चिंतन आणि सातत्यपूर्ण सराव यांच्या माध्यमातून विद्यार्थ्यांच्या कौशल्यांचे रूपांतर त्यांच्या वर्तनात केले जाते. कारण वर्तन बदलले की विचार बदलतो… आणि विचार बदलला की आयुष्यही बदलते."
                )}
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                {t("This is not just education — this is true transformation.", "हे केवळ शिक्षण नाही — हे खऱ्या अर्थाने परिवर्तन आहे")}
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
