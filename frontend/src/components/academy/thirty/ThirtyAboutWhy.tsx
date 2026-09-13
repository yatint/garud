import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

export const ThirtyAboutWhy = () => {
  const { t } = useLang();
  return (
    <section id="thirty-about" data-testid="thirty-about-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <SectionHeading
          index="01"
          eyebrow={t("About the Program", "कार्यक्रमाविषयी")}
          title={t("A Journey From Self to Family", "स्वतःपासून कुटुंबापर्यंतचा प्रवास")}
          align="center"
        />
        <Reveal delay={0.1}>
          <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
            {t(
              "In today's fast-paced, competitive, and ever-changing lifestyle, motivation alone is not enough — what is needed is consistent action, the right guidance, and positive habits. With this very purpose, the 30-Day Transform has been designed as a well-planned and effective life-transformation journey.",
              "आजच्या वेगवान, स्पर्धात्मक आणि बदलत्या जीवनशैलीत केवळ प्रेरणा पुरेशी नसते — गरज असते सातत्यपूर्ण कृती, योग्य मार्गदर्शन आणि सकारात्मक सवयींची. याच उद्देशाने “३० दिवसांचा रूपांतर” हा सुनियोजित आणि परिणामकारक जीवनपरिवर्तन प्रवास तयार करण्यात आला आहे."
            )}
          </p>
          <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
            {t(
              "Through daily guided actions, reflection, and habit formation, this program creates positive and lasting change in a person's thoughts, behaviour, and outlook on life. Beginning with the self and carrying transformation all the way to the family — it is a truly unique experience.",
              "हा कार्यक्रम दैनंदिन मार्गदर्शित कृती, चिंतन आणि सवयींच्या निर्मितीच्या माध्यमातून व्यक्तीच्या विचारांमध्ये, वर्तनामध्ये आणि जीवनदृष्टीमध्ये सकारात्मक व टिकाऊ बदल घडवतो. स्वतःपासून सुरुवात करून कुटुंबापर्यंत परिवर्तन पोहोचवणारा हा एक अनोखा अनुभव आहे."
            )}
          </p>
          <p className="mt-6 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#f68a4a]">
            {t("Action · Reflection · Habits", "कृती · चिंतन · सवयी")}
          </p>
        </Reveal>
      </div>
    </section>
  );
};
