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
              title={t("From Self-Discovery to Life Transformation", "स्वतःची ओळख ते जीवनाचे रूपांतर")}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "In today's fast-paced and competitive world, teenagers face many challenges — career uncertainty, emotional instability, the influence of social media, and a lack of self-confidence. Against this backdrop, Youth Transform has been designed as a special 3-day life skills development program.",
                  "आजच्या वेगवान आणि स्पर्धात्मक जगात किशोरवयीन मुलांसमोर अनेक आव्हाने उभी आहेत — करिअरची अनिश्चितता, भावनिक अस्थिरता, सोशल मीडियाचा प्रभाव आणि आत्मविश्वासाचा अभाव. या पार्श्वभूमीवर “किशोर रूपांतर” हा ३ दिवसांचा विशेष जीवनकौशल्य विकास कार्यक्रम तयार करण्यात आला आहे."
                )}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "This journey is not just training — it is a powerful experience that takes students from self-discovery to life transformation. It builds positive change in the mind, thoughts, and behaviour of students, shaping them into successful, capable, and responsible individuals.",
                  "हा प्रवास केवळ प्रशिक्षण नसून, स्वतःची ओळख ते जीवनाचे रूपांतर असा अनुभव देणारा एक सशक्त उपक्रम आहे. यामध्ये विद्यार्थ्यांच्या मन, विचार आणि वर्तनामध्ये सकारात्मक बदल घडवून त्यांना यशस्वी, सक्षम आणि जबाबदार व्यक्तिमत्त्व म्हणून घडवण्याचा प्रयत्न केला जातो."
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
                  alt={t("Students collaborating during a Youth Transform workshop", "किशोर रूपांतर कार्यशाळेतील विद्यार्थी")}
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
