import { ArrowRight, Award, Crown, Eye, ImagePlus, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

const MOMENTS = [
  { enLabel: "Group Activities", mrLabel: "समूह उपक्रम", slug: "group" },
  { enLabel: "Leadership Sessions", mrLabel: "नेतृत्व सत्रे", slug: "leadership" },
  { enLabel: "Public Speaking", mrLabel: "सार्वजनिक भाषण", slug: "speaking" },
  { enLabel: "Team Challenges", mrLabel: "संघ आव्हाने", slug: "team" },
  { enLabel: "Yoga & Mindfulness", mrLabel: "योग आणि माइंडफुलनेस", slug: "yoga" },
  { enLabel: "Certificate Ceremony", mrLabel: "प्रमाणपत्र समारंभ", slug: "certificate" },
];

const TIMELINE = [
  { icon: Eye, enDay: "Day 1", mrDay: "दिवस १", enTitle: "Self Discovery", mrTitle: "स्व-शोध", enText: "Meeting yourself honestly.", mrText: "स्वतःशी प्रामाणिक भेट.", slug: "day-1" },
  { icon: Wrench, enDay: "Day 2", mrDay: "दिवस २", enTitle: "Skill Development", mrTitle: "कौशल्य विकास", enText: "Practicing what matters.", mrText: "महत्त्वाच्या गोष्टींचा सराव.", slug: "day-2" },
  { icon: Crown, enDay: "Day 3", mrDay: "दिवस ३", enTitle: "Confidence & Leadership", mrTitle: "आत्मविश्वास आणि नेतृत्व", enText: "Stepping up and speaking out.", mrText: "पुढे येणे आणि मोकळे बोलणे.", slug: "day-3" },
  { icon: Award, enDay: "Graduation", mrDay: "समारंभ", enTitle: "Certificate & Celebration", mrTitle: "प्रमाणपत्र आणि उत्सव", enText: "The journey is honoured.", mrText: "प्रवासाचा सन्मान.", slug: "graduation" },
];

export const SuccessGalleryMoments = () => {
  const { t } = useLang();
  return (
    <>
      <section data-testid="success-gallery-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="05"
            eyebrow={t("Student Journey Gallery", "विद्यार्थी प्रवास गॅलरी")}
            title={t("Moments From the Journey", "प्रवासातील क्षण")}
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid="journey-gallery">
            {MOMENTS.map((m, i) => (
              <Reveal key={m.slug} delay={(i % 3) * 0.07}>
                <div
                  data-testid={`journey-photo-${m.slug}`}
                  className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-[#d8d5d0] bg-[#f0efe9] text-[#999] ${
                    i % 3 === 0 ? "aspect-[4/3]" : "aspect-[16/10]"
                  }`}
                >
                  <ImagePlus size={28} strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">{t(m.enLabel, m.mrLabel)}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 text-center">
            <Link
              to="/gallery"
              data-testid="view-full-gallery-button"
              className="group inline-flex items-center gap-2 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-8 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[3px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
            >
              {t("View Full Gallery", "संपूर्ण गॅलरी पहा")}
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section data-testid="success-moments-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="06"
            eyebrow={t("Moments That Matter", "महत्त्वाचे क्षण")}
            title={t("The Arc of Every Program", "प्रत्येक कार्यक्रमाचा प्रवास")}
            align="center"
          />
          <div className="relative mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div className="absolute left-0 right-0 top-8 hidden h-0.5 bg-[linear-gradient(90deg,transparent,#f68a4a_15%,#f68a4a_85%,transparent)] lg:block" />
            {TIMELINE.map((tl, i) => (
              <Reveal key={tl.slug} delay={i * 0.1}>
                <div data-testid={`moment-${tl.slug}`} className="group relative text-center">
                  <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#18463b] text-[#f5c253] shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <tl.icon size={26} />
                  </span>
                  <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#e0701f]">
                    {t(tl.enDay, tl.mrDay)}
                  </p>
                  <h3 className="mt-1.5 font-heading text-lg font-bold text-[#18463b]">{t(tl.enTitle, tl.mrTitle)}</h3>
                  <p className="mx-auto mt-2 max-w-[220px] text-sm text-[#7a7a7a]">{t(tl.enText, tl.mrText)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
