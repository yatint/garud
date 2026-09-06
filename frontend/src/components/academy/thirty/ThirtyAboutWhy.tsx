import { CalendarCheck, GraduationCap, TrendingUp, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const WHY = [
  {
    icon: CalendarCheck,
    enTitle: "Daily Habit Building",
    mrTitle: "दैनिक सवय निर्मिती",
    enText: "Small actions repeated daily rewire behaviour — motivation fades, habits stay.",
    mrText: "रोज केलेली छोटी कृती वर्तन बदलते — उत्साह क्षीण होतो, सवयी टिकतात.",
    slug: "habits",
  },
  {
    icon: GraduationCap,
    enTitle: "Consistent Mentorship",
    mrTitle: "सातत्यपूर्ण मार्गदर्शन",
    enText: "Mentors review progress every week, so no participant drifts off track.",
    mrText: "मार्गदर्शक दर आठवड्याला प्रगती तपासतात — कोणीही वाटेवरून भटकत नाही.",
    slug: "mentorship",
  },
  {
    icon: Wrench,
    enTitle: "Practical Life Skills",
    mrTitle: "व्यावहारिक जीवनकौशल्ये",
    enText: "Every concept is practiced in daily life, not just discussed in a hall.",
    mrText: "प्रत्येक संकल्पना सभागृहात चर्चा करून नव्हे, दैनंदिन आयुष्यात अंमलात आणली जाते.",
    slug: "skills",
  },
  {
    icon: TrendingUp,
    enTitle: "Measurable Personal Growth",
    mrTitle: "मोजता येणारी वैयक्तिक प्रगती",
    enText: "Habit trackers and reviews make your progress visible week by week.",
    mrText: "सवयींचे ट्रॅकर आणि आढावे तुमची प्रगती आठवड्याआठवड्याने दिसणारी करतात.",
    slug: "growth",
  },
];

export const ThirtyAboutWhy = () => {
  const { t } = useLang();
  return (
    <>
      <section id="thirty-about" data-testid="thirty-about-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            index="01"
            eyebrow={t("About the Program", "कार्यक्रमाविषयी")}
            title={t("Transformation Doesn't Happen in One Day", "परिवर्तन एका दिवसात होत नाही")}
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
              {t(
                "The 30-Day Transform Program is Rupantaram's flagship journey designed to create lasting behavioral change. Instead of temporary motivation, participants develop consistent habits through daily activities, mentor guidance, reflection, and practical life skill implementation.",
                "30-Day Transform हा रूपांतरम्चा प्रमुख प्रवास आहे — कायमस्वरूपी वर्तन बदल घडवण्यासाठी. तात्पुरत्या उत्साहाऐवजी सहभागी दैनिक उपक्रम, मार्गदर्शन, आत्मपरिक्षण आणि व्यावहारिक जीवनकौशल्य अंमलबजावणीद्वारे सातत्यपूर्ण सवयी विकसित करतात."
              )}
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
              {t(
                "This program encourages continuous growth in character, discipline, communication, leadership, and responsible living.",
                "हा कार्यक्रम चारित्र्य, शिस्त, संवाद, नेतृत्व आणि जबाबदार जीवनात सातत्यपूर्ण प्रगतीला चालना देतो."
              )}
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="thirty-why-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="02"
            eyebrow={t("Why 30 Days?", "३० दिवसच का?")}
            title={t("Small Daily Actions, Lasting Change", "दैनिक छोटी कृती, कायमचा बदल")}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.08}>
                <div
                  data-testid={`thirty-why-card-${w.slug}`}
                  className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    <w.icon size={22} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{t(w.enTitle, w.mrTitle)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555]">{t(w.enText, w.mrText)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
