import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Globe, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLang } from "@/lib/lang";

const CARDS = [
  {
    icon: Phone,
    enTitle: "Phone",
    mrTitle: "फोन",
    lines: ["+91 90116 58888", "+91 90116 78888"],
    enSub: "Call us for admissions & program enquiries",
    mrSub: "प्रवेश आणि कार्यक्रम चौकशीसाठी कॉल करा",
    href: "tel:+919011658888",
    slug: "phone",
  },
  {
    icon: Mail,
    enTitle: "Email",
    mrTitle: "ईमेल",
    lines: ["info@garudzeprupantaram.com"],
    enSub: "We'll respond within one business day",
    mrSub: "एका कामकाजाच्या दिवसात उत्तर देऊ",
    href: "mailto:info@garudzeprupantaram.com",
    slug: "email",
  },
  {
    icon: Globe,
    enTitle: "Website",
    mrTitle: "वेबसाइट",
    lines: ["www.garudzeprupantaram.com"],
    enSub: "Explore programs and upcoming batches",
    mrSub: "कार्यक्रम आणि आगामी तुकड्या पहा",
    href: "https://www.garudzeprupantaram.com",
    slug: "website",
  },
];

const PROGRAM_OPTIONS: Array<[string, string]> = [
  ["Kids Transform (Ages 6–13)", "बाल रूपांतर (६–१३ वर्षे)"],
  ["Youth Transform (Ages 13–18)", "किशोर रूपांतर (१३–१८ वर्षे)"],
  ["Young Adult Transform (Ages 19+)", "युवा रूपांतर (१९+)"],
  ["Parenting 360° (1 Day)", "पालकत्व 360° (१ दिवस)"],
  ["30-Day Transform (30 Days)", "३० दिवसांचा रूपांतर (३० दिवस)"],
];

const fieldClass =
  "border-[#e1dfdf] bg-white text-[#222] placeholder:text-[#999] focus-visible:border-[#f68a4a]";

export const ContactInfoForm = () => {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section data-testid="contact-info-section" className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {CARDS.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.08}>
                <a
                  href={c.href}
                  data-testid={`contact-card-${c.slug}`}
                  className="card-glow-hover group flex h-full flex-col items-center rounded-[18px] border border-[#e1dfdf] bg-[#fbfafa] p-8 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#18463b] text-[#f5c253] transition-colors duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    <c.icon size={24} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{t(c.enTitle, c.mrTitle)}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1.5 text-sm font-semibold text-[#333]">
                      {l}
                    </p>
                  ))}
                  <p className="mt-3 text-xs text-[#7a7a7a]">{t(c.enSub, c.mrSub)}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="enquiry-form" data-testid="contact-form-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="01"
            eyebrow={t("Send an Enquiry", "चौकशी पाठवा")}
            title={t("Tell Us About Your Journey", "तुमच्या प्रवासाबद्दल सांगा")}
            description={t(
              "Share your details and our mentors will call you back with the right program, batch, and center.",
              "तुमचा तपशील शेअर करा — आमचे मार्गदर्शक योग्य कार्यक्रम, तुकडी आणि केंद्रासह तुम्हाला परत कॉल करतील."
            )}
            align="center"
          />

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-[18px] border border-[#e1dfdf] bg-white p-7 shadow-[0_20px_50px_rgba(24,70,59,0.08)] sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center" data-testid="enquiry-success">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#18463b] text-white">
                    <CheckCircle2 size={30} />
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-black text-[#18463b]">
                    {t("Enquiry Received!", "चौकशी मिळाली!")}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#555]">
                    {t(
                      `Thank you${name ? `, ${name}` : ""}. Our team will call you back within one business day with program, batch, and venue details.`,
                      `धन्यवाद${name ? `, ${name}` : ""}. कार्यक्रम, तुकडी आणि ठिकाणाच्या माहितीसह आमची टीम एका कामकाजाच्या दिवसात तुम्हाला परत कॉल करेल.`
                    )}
                  </p>
                  <button
                    data-testid="enquiry-another-button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-[#18463b]/25 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:border-[#f68a4a] hover:text-[#f68a4a]"
                  >
                    {t("Send Another Enquiry", "आणखी एक चौकशी पाठवा")}
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5" data-testid="contact-enquiry-form">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cf-name" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                        {t("Full Name", "पूर्ण नाव")}
                      </Label>
                      <Input id="cf-name" data-testid="contact-name-input" required value={name} onChange={(e) => setName(e.target.value)} placeholder={t("Your full name", "तुमचे पूर्ण नाव")} className={fieldClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cf-mobile" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                        {t("Mobile Number", "मोबाईल क्रमांक")}
                      </Label>
                      <Input id="cf-mobile" data-testid="contact-mobile-input" required type="tel" placeholder="+91 ..." className={fieldClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cf-email" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                        {t("Email Address", "ईमेल पत्ता")}
                      </Label>
                      <Input id="cf-email" data-testid="contact-email-input" type="email" placeholder="you@example.com" className={fieldClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cf-city" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                        {t("City", "शहर")}
                      </Label>
                      <Input id="cf-city" data-testid="contact-city-input" placeholder={t("e.g. Karjat", "उदा. कर्जत")} className={fieldClass} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="cf-program" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                      {t("Select Program", "कार्यक्रम निवडा")}
                    </Label>
                    <select
                      id="cf-program"
                      data-testid="contact-program-select"
                      className="h-10 w-full rounded-md border border-[#e1dfdf] bg-white px-3 text-sm text-[#222] focus:border-[#f68a4a] focus:outline-none"
                      defaultValue={PROGRAM_OPTIONS[1][0]}
                    >
                      {PROGRAM_OPTIONS.map((p) => (
                        <option key={p[0]} value={p[0]}>
                          {t(p[0], p[1])}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="cf-message" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                      {t("Message", "संदेश")}
                    </Label>
                    <textarea
                      id="cf-message"
                      data-testid="contact-message-input"
                      rows={4}
                      placeholder={t("Anything that helps us guide you better", "तुम्हाला अधिक चांगले मार्गदर्शन करण्यास मदत होईल असे काहीही")}
                      className="w-full rounded-md border border-[#e1dfdf] bg-white px-3 py-2 text-sm text-[#222] placeholder:text-[#999] focus:border-[#f68a4a] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    data-testid="contact-form-submit-button"
                    className="mt-1 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
                  >
                    {t("Submit Enquiry", "चौकशी सबमिट करा")}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};
