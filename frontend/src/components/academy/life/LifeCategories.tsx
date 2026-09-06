import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Crown,
  Globe,
  HeartHandshake,
  Target,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { useLang } from "@/lib/lang";

interface Skill {
  enTitle: string;
  mrTitle: string;
  enText: string;
  mrText: string;
}

interface Category {
  icon: LucideIcon;
  enName: string;
  mrName: string;
  enNote: string;
  mrNote: string;
  skills: Skill[];
  slug: string;
}

const CATEGORIES: Category[] = [
  {
    icon: Target,
    enName: "Self Mastery",
    mrName: "आत्मस्वातंत्र्य",
    enNote: "Command over your own mind and actions.",
    mrNote: "स्वतःच्या मनावर आणि कृतीवर ताबा.",
    slug: "self-mastery",
    skills: [
      { enTitle: "Goal Setting", mrTitle: "ध्येय निश्चिती", enText: "Turn wishes into written, trackable targets.", mrText: "इच्छांना लेखी, मोजता येणाऱ्या लक्ष्यांत बदला." },
      { enTitle: "Decision Making", mrTitle: "निर्णयक्षमता", enText: "Choose with clarity, not impulse.", mrText: "आवेगाने नव्हे, स्पष्टतेने निवडा." },
      { enTitle: "Problem Solving", mrTitle: "प्रश्नसोडवणूक", enText: "Break any challenge into next steps.", mrText: "कोणतेही आव्हान पुढील पायऱ्यांत विभाजा." },
      { enTitle: "Self Discipline", mrTitle: "आत्मशिस्त", enText: "Do what matters, even when it's hard.", mrText: "अवघड असतानाही महत्त्वाचे करा." },
      { enTitle: "Perseverance", mrTitle: "चिकाटी", enText: "Keep going when motivation runs out.", mrText: "उत्साह संपला तरी थांबू नका." },
    ],
  },
  {
    icon: HeartHandshake,
    enName: "Emotional Intelligence",
    mrName: "भावनिक बुद्धिमत्ता",
    enNote: "Understand and manage emotions responsibly.",
    mrNote: "भावना जबाबदारीने समजून घ्या आणि सांभाळा.",
    slug: "emotional",
    skills: [
      { enTitle: "Emotional Balance", mrTitle: "भावनिक संतुलन", enText: "Respond calmly instead of reacting.", mrText: "प्रतिक्रिया देण्याऐवजी शांततेने प्रत्युत्तर द्या." },
      { enTitle: "Positive Thinking", mrTitle: "सकारात्मक विचार", enText: "See possibilities before problems.", mrText: "अडचणींपूर्वी शक्यता पहा." },
      { enTitle: "Self Awareness", mrTitle: "आत्मजाणीव", enText: "Know your patterns, strengths, and triggers.", mrText: "स्वतःच्या सवयी, शक्ती आणि भावनिक प्रवर्तक ओळखा." },
      { enTitle: "Stress Management", mrTitle: "ताण व्यवस्थापन", enText: "Handle pressure without burning out.", mrText: "थकव्याशिवाय दबाव सांभाळा." },
    ],
  },
  {
    icon: Crown,
    enName: "Communication & Leadership",
    mrName: "संवाद आणि नेतृत्व",
    enNote: "Confidence, collaboration, and responsible leadership.",
    mrNote: "आत्मविश्वास, सहकार्य आणि जबाबदार नेतृत्व.",
    slug: "communication",
    skills: [
      { enTitle: "Communication Skills", mrTitle: "संवाद कौशल्ये", enText: "Express clearly, connect deeply.", mrText: "स्पष्ट व्यक्त व्हा, खोलवर जोडले जा." },
      { enTitle: "Public Speaking", mrTitle: "सार्वजनिक भाषण", enText: "Own every stage and room.", mrText: "प्रत्येक मंच तुमचा करा." },
      { enTitle: "Listening Skills", mrTitle: "श्रवण कौशल्य", enText: "Hear to understand, not to reply.", mrText: "उत्तर देण्यासाठी नव्हे, समजून घेण्यासाठी ऐका." },
      { enTitle: "Teamwork", mrTitle: "संघकार्य", enText: "Win with people, not against them.", mrText: "लोकांविरुद्ध नव्हे, लोकांसोबत जिंका." },
      { enTitle: "Leadership", mrTitle: "नेतृत्व", enText: "Take responsibility and inspire action.", mrText: "जबाबदारी घ्या आणि कृतीला प्रेरणा द्या." },
    ],
  },
  {
    icon: Brain,
    enName: "Learning & Critical Thinking",
    mrName: "शिक्षण आणि चिकित्सक विचार",
    enNote: "Thoughtful learning, not memorization.",
    mrNote: "विचारपूर्वक शिक्षण, पाठांतर नव्हे.",
    slug: "learning",
    skills: [
      { enTitle: "Reading Habit", mrTitle: "वाचनाची सवय", enText: "A daily habit that compounds forever.", mrText: "रोजची सवय जी आयुष्यभर चक्रवाढीने फायदा देते." },
      { enTitle: "Writing Skills", mrTitle: "लेखन कौशल्य", enText: "Think clearly by writing clearly.", mrText: "स्पष्ट लिहा, स्पष्ट विचार करा." },
      { enTitle: "Critical Thinking", mrTitle: "चिकित्सक विचार", enText: "Question, analyse, then conclude.", mrText: "प्रश्न विचारा, विश्लेषण करा, मग निष्कर्ष काढा." },
      { enTitle: "Information Analysis", mrTitle: "माहिती विश्लेषण", enText: "Separate signal from noise.", mrText: "खरी माहिती गोंधळापासून वेगळी करा." },
    ],
  },
  {
    icon: Globe,
    enName: "Responsible Living",
    mrName: "जबाबदार जीवन",
    enNote: "Skills for modern life and society.",
    mrNote: "आधुनिक आयुष्य आणि समाजासाठी कौशल्ये.",
    slug: "responsible",
    skills: [
      { enTitle: "Digital Literacy", mrTitle: "डिजिटल साक्षरता", enText: "Use technology as a tool, not a trap.", mrText: "तंत्रज्ञान साधन म्हणून वापरा, सापळा म्हणून नव्हे." },
      { enTitle: "Cyber Safety", mrTitle: "सायबर सुरक्षा", enText: "Stay safe, private, and smart online.", mrText: "ऑनलाइन सुरक्षित, खाजगी आणि सजग राहा." },
      { enTitle: "Financial Awareness", mrTitle: "आर्थिक जाणीव", enText: "Understand money, saving, and priorities.", mrText: "पैसे, बचत आणि प्राधान्ये समजून घ्या." },
      { enTitle: "Environmental Responsibility", mrTitle: "पर्यावरणीय जबाबदारी", enText: "Care for the world you'll inherit.", mrText: "तुम्हाला मिळणाऱ्या जगाची काळजी घ्या." },
      { enTitle: "Social Responsibility", mrTitle: "सामाजिक जबाबदारी", enText: "Contribute to family, society, and nation.", mrText: "कुटुंब, समाज आणि राष्ट्रासाठी योगदान द्या." },
    ],
  },
];

export const LifeCategories = () => {
  const { t } = useLang();
  return (
    <section data-testid="life-categories-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow={t("The 21 Life Skills", "२१ जीवनकौशल्ये")}
          title={t("Organized Into Five Life Areas", "पाच जीवनक्षेत्रांत विभागलेली")}
          description={t(
            "Not a random list — a complete system covering the mind, emotions, relationships, learning, and citizenship.",
            "कोणतीही यादृच्छिक यादी नव्हे — मन, भावना, नाती, शिक्षण आणि नागरी जबाबदारी व्यापणारी संपूर्ण प्रणाली."
          )}
          align="center"
        />

        <div className="mt-16 flex flex-col gap-14">
          {CATEGORIES.map((cat, ci) => (
            <Reveal key={cat.slug} delay={0.05}>
              <div data-testid={`life-category-${cat.slug}`}>
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#18463b] text-[#f5c253] transition-colors duration-300">
                    <cat.icon size={22} />
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-black text-[#18463b] sm:text-2xl">
                      <span className="mr-2 text-[#f68a4a]">{String(ci + 1).padStart(2, "0")}</span>
                      {t(cat.enName, cat.mrName)}
                    </h3>
                    <p className="text-sm text-[#7a7a7a]">{t(cat.enNote, cat.mrNote)}</p>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                  {cat.skills.map((s) => (
                    <div
                      key={s.enTitle}
                      data-testid={`life-skill-${s.enTitle.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                      className="group rounded-[10px] border border-[#e1dfdf] border-l-2 border-l-[#f68a4a] bg-[#fbfafa] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#f68a4a]/60 hover:bg-white hover:shadow-[0_12px_30px_rgba(24,70,59,0.08)]"
                    >
                      <h4 className="font-heading text-sm font-bold text-[#18463b]">{t(s.enTitle, s.mrTitle)}</h4>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#7a7a7a]">{t(s.enText, s.mrText)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
