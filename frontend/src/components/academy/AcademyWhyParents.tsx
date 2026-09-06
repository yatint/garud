import type { LucideIcon } from "lucide-react";
import { Award, CheckCircle2, HeartHandshake, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Reason {
  icon: LucideIcon;
  en: string;
  mr: string;
  textEn: string;
  textMr: string;
  slug: string;
}

const REASONS: Reason[] = [
  {
    icon: Award,
    en: "People, Not Marks",
    mr: "मार्क नव्हे, माणूस",
    textEn: "Scoring marks is the beginning; building a human being is the goal. Our measure is not the report card.",
    textMr: "मार्क मिळवणे ही सुरुवात; माणूस घडवणे हे लक्ष्य. आमचे मोजमाप गुणपत्रिका नाही.",
    slug: "people-not-marks",
  },
  {
    icon: CheckCircle2,
    en: "Learning Through Action",
    mr: "कृतीतून शिकणे",
    textEn: "No lectures. Skills turn into behaviour through activities, group work, reflection, and daily practice.",
    textMr: "उपदेश नाहीत. उपक्रम, गटकार्य, चिंतन आणि दैनिक सरावातून कौशल्ये वर्तन बनतात.",
    slug: "action",
  },
  {
    icon: Users,
    en: "With the Whole Family",
    mr: "संपूर्ण कुटुंबासह",
    textEn: "Workshops for parents alongside children — because change must stick at home.",
    textMr: "मुलांसोबतच पालकांच्याही कार्यशाळा — कारण बदल घरीही टिकला पाहिजे.",
    slug: "family",
  },
  {
    icon: HeartHandshake,
    en: "Real Results",
    mr: "खरी यशे",
    textEn: "The child talks at home again, follows their chosen routine, and admits mistakes instead of hiding them.",
    textMr: "मूल घरी पुन्हा बोलू लागते, ठरवलेली दिनचर्या पाळते आणि चूक कबूल करते.",
    slug: "results",
  },
];

export const AcademyWhyParents = () => {
  const { t } = useLang();
  return (
    <section data-testid="academy-why-parents-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="08"
          eyebrow={t("Why Parents Choose Us", "पालक आम्हाला का निवडतात")}
          title={t("Trust Built on Visible Change", "दिसणाऱ्या बदलावर बांधलेला विश्वास")}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r, i) => (
            <Reveal key={r.slug} delay={i * 0.07}>
              <div
                data-testid={`why-card-${r.slug}`}
                className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] border-t-2 border-t-[#f68a4a] bg-[#fbfafa] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#18463b] text-white transition-colors duration-300 group-hover:bg-[#f68a4a]">
                  <r.icon size={20} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{t(r.en, r.mr)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#555]">{t(r.textEn, r.textMr)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
