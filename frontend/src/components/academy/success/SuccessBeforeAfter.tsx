import { ArrowRight, MapPin, Quote, UserRound } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const ROWS = [
  { enBefore: "Low Confidence", mrBefore: "कमी आत्मविश्वास", enAfter: "Speaks with Confidence", mrAfter: "आत्मविश्वासाने बोलते" },
  { enBefore: "Poor Discipline", mrBefore: "शिस्तीचा अभाव", enAfter: "Consistent Daily Habits", mrAfter: "सातत्यपूर्ण दैनिक सवयी" },
  { enBefore: "Communication Gap", mrBefore: "संवादाची तडजोड", enAfter: "Stronger Family Bonding", mrAfter: "दृढ कौटुंबिक बंध" },
  { enBefore: "No Clear Goals", mrBefore: "स्पष्ट ध्येय नाही", enAfter: "Purpose & Direction", mrAfter: "ध्येय आणि दिशा" },
  { enBefore: "Excessive Screen Time", mrBefore: "जास्त स्क्रीन वेळ", enAfter: "Better Time Management", mrAfter: "चांगले वेळ व्यवस्थापन" },
  { enBefore: "Fear of Public Speaking", mrBefore: "मंचाभय", enAfter: "Improved Communication", mrAfter: "सुधारलेला संवाद" },
];

const PARENTS = [
  { enProgram: "Kids Transform", mrProgram: "बाल रूपांतर", slug: "parent-1" },
  { enProgram: "Youth Transform", mrProgram: "किशोर रूपांतर", slug: "parent-2" },
  { enProgram: "Parenting 360°", mrProgram: "पालकत्व 360°", slug: "parent-3" },
];

export const SuccessBeforeAfter = () => {
  const { t } = useLang();
  return (
    <>
      <section data-testid="success-before-after-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="03"
            eyebrow={t("Before & After", "आधी आणि नंतर")}
            title={t("The Transformation Framework", "परिवर्तनाची चौकट")}
            description={t(
              "This is the change our programs are designed to create — a framework, not a testimonial.",
              "आमचे कार्यक्रम हा बदल घडवण्यासाठी तयार केले आहेत — ही चौकट आहे, अनुभवकथा नव्हे."
            )}
            align="center"
          />

          <Reveal delay={0.1}>
            <div
              className="mt-12 overflow-hidden rounded-2xl border border-[#e1dfdf] shadow-[0_20px_50px_rgba(24,70,59,0.08)]"
              data-testid="before-after-table"
            >
              <div className="grid grid-cols-[1fr_auto_1fr] bg-[#18463b]">
                <p className="px-5 py-4 text-center font-heading text-xs font-bold uppercase tracking-[0.18em] text-white/60 sm:text-sm">
                  {t("Before", "आधी")}
                </p>
                <span className="w-10" />
                <p className="px-5 py-4 text-center font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#f8b183] sm:text-sm">
                  {t("After", "नंतर")}
                </p>
              </div>
              {ROWS.map((r, i) => (
                <div
                  key={r.enBefore}
                  data-testid={`before-after-row-${i + 1}`}
                  className={`grid grid-cols-[1fr_auto_1fr] items-center border-t border-[#e1dfdf] ${i % 2 === 0 ? "bg-white" : "bg-[#fdfdfb]"}`}
                >
                  <p className="px-5 py-4 text-center text-sm font-medium text-[#999]">{t(r.enBefore, r.mrBefore)}</p>
                  <span className="flex h-8 w-10 items-center justify-center text-[#f68a4a]">
                    <ArrowRight size={18} />
                  </span>
                  <p className="px-5 py-4 text-center text-sm font-bold text-[#18463b]">{t(r.enAfter, r.mrAfter)}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section data-testid="success-parents-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="04"
            eyebrow={t("Parent Experiences", "पालकांचे अनुभव")}
            title={t("What Parents Share", "पालक काय सांगतात")}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {PARENTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <figure
                  data-testid={`parent-testimonial-${p.slug}`}
                  className="flex h-full flex-col items-center rounded-2xl border border-dashed border-[#d8d5d0] bg-[#fbfafa] p-8 text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#e1dfdf] bg-white text-[#bbb]">
                    <UserRound size={28} strokeWidth={1.5} />
                  </span>
                  <Quote size={22} className="mt-5 text-[#f68a4a]" />
                  <div className="mt-4 flex w-full flex-col items-center gap-2">
                    <span className="h-2.5 w-48 max-w-full rounded-full bg-[#eceae6]" />
                    <span className="h-2.5 w-40 max-w-full rounded-full bg-[#eceae6]" />
                    <span className="h-2.5 w-32 max-w-full rounded-full bg-[#eceae6]" />
                  </div>
                  <figcaption className="mt-6">
                    <p className="font-heading text-sm font-bold text-[#18463b]">
                      {t("Parent Name (Placeholder)", "पालकांचे नाव (लवकरच)")}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-[#999]">{t(p.enProgram, p.mrProgram)}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-[#bbb]">
                      <MapPin size={11} />
                      {t("Location (Placeholder)", "ठिकाण (लवकरच)")}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
