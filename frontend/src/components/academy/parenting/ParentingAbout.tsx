import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1659352791239-6a796c124088?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

export const ParentingAbout = () => {
  const { t } = useLang();
  return (
    <section id="parenting-about" data-testid="parenting-about-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading
              index="01"
              eyebrow={t("About the Workshop", "कार्यशाळेविषयी")}
              title={t("Change Begins in the Minds of Parents", "बदल पालकांच्या विचारांतून सुरू होतो")}
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "In today's rapidly changing world, raising children is not just a responsibility — it is a sensitive and mindful journey. The influence of the digital age, rising stress, changing lifestyles, and the generation gap have made it essential to nurture the parent–child relationship more consciously. From this very need, Parenting 360° — an effective one-day (4-hour) workshop — has been designed.",
                  "आजच्या वेगाने बदलणाऱ्या जगात मुलांचे संगोपन ही केवळ जबाबदारी नसून एक संवेदनशील आणि सजग प्रवास आहे. डिजिटल युगाचा प्रभाव, वाढता ताण, बदलती जीवनशैली आणि पिढ्यांमधील अंतर यामुळे पालक आणि मुलांमधील नातेसंबंध अधिक जाणीवपूर्वक जपण्याची गरज निर्माण झाली आहे. याच गरजेतून “पालकत्व 360°” ही एक दिवसाची (४ तासांची) परिणामकारक कार्यशाळा तयार करण्यात आली आहे."
                )}
              </p>
              <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                {t(
                  "This workshop empowers parents to understand child psychology, communicate effectively, deepen emotional bonding, and adopt positive and digital parenting — so that the change at home lasts for years.",
                  "ही कार्यशाळा पालकांना बालमानसशास्त्र समजून घेण्यासाठी, प्रभावी संवाद साधण्यासाठी, भावनिक जवळीक वाढवण्यासाठी आणि सकारात्मक व डिजिटल पालकत्व अंगीकारण्यासाठी सक्षम करते — जेणेकरून घरात घडणारा बदल दीर्घकाळ टिकून राहतो."
                )}
              </p>
              <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
                {t("Understanding · Communication · Bonding", "समज · संवाद · जवळीक")}
              </p>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-6" delay={0.15}>
            <div className="relative">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
              <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                <img
                  src={ABOUT_IMG}
                  alt={t("A family joining hands together", "एकत्र हात घालणारे कुटुंब")}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.5)_100%)]" />
                <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                  {t("Stronger Families, Together", "अधिक बलवत कुटुंबे, एकत्र")}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
