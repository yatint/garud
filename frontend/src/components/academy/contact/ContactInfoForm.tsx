import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Globe, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CARDS = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 90116 58888", "+91 90116 78888"],
    sub: "Call us for admissions & program enquiries",
    href: "tel:+919011658888",
    slug: "phone",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@garudzeprupantaram.com"],
    sub: "We'll respond within one business day",
    href: "mailto:info@garudzeprupantaram.com",
    slug: "email",
  },
  {
    icon: Globe,
    title: "Website",
    lines: ["www.garudzeprupantaram.com"],
    sub: "Explore programs and upcoming batches",
    href: "https://www.garudzeprupantaram.com",
    slug: "website",
  },
];

const PROGRAM_OPTIONS = [
  "Kids Transform",
  "Youth Transform",
  "Young Adult Transform",
  "Parenting 360°",
  "30-Day Transform",
];

const fieldClass =
  "border-[#e1dfdf] bg-white text-[#222] placeholder:text-[#999] focus-visible:border-[#f68a4a]";

export const ContactInfoForm = () => {
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
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p key={l} className="mt-1.5 text-sm font-semibold text-[#333]">
                      {l}
                    </p>
                  ))}
                  <p className="mt-3 text-xs text-[#7a7a7a]">{c.sub}</p>
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
            eyebrow="Send an Enquiry"
            title="Tell Us About Your Journey"
            description="Share your details and our mentors will call you back with the right program, batch, and center."
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
                    Enquiry Received!
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#555]">
                    Thank you{name ? `, ${name}` : ""}. Our team will call you back within one
                    business day with program, batch, and venue details.
                  </p>
                  <button
                    data-testid="enquiry-another-button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 rounded-full border border-[#18463b]/25 px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#18463b] transition-all duration-300 hover:border-[#f68a4a] hover:text-[#f68a4a]"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5" data-testid="contact-enquiry-form">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cf-name" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                        Full Name
                      </Label>
                      <Input id="cf-name" data-testid="contact-name-input" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" className={fieldClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cf-mobile" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                        Mobile Number
                      </Label>
                      <Input id="cf-mobile" data-testid="contact-mobile-input" required type="tel" placeholder="+91 ..." className={fieldClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cf-email" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                        Email Address
                      </Label>
                      <Input id="cf-email" data-testid="contact-email-input" type="email" placeholder="you@example.com" className={fieldClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="cf-city" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                        City
                      </Label>
                      <Input id="cf-city" data-testid="contact-city-input" placeholder="e.g. Karjat" className={fieldClass} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="cf-program" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                      Select Program
                    </Label>
                    <select
                      id="cf-program"
                      data-testid="contact-program-select"
                      className="h-10 w-full rounded-md border border-[#e1dfdf] bg-white px-3 text-sm text-[#222] focus:border-[#f68a4a] focus:outline-none"
                      defaultValue={PROGRAM_OPTIONS[1]}
                    >
                      {PROGRAM_OPTIONS.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="cf-message" className="text-xs font-bold uppercase tracking-[0.14em] text-[#555]">
                      Message
                    </Label>
                    <textarea
                      id="cf-message"
                      data-testid="contact-message-input"
                      rows={4}
                      placeholder="Anything that helps us guide you better"
                      className="w-full rounded-md border border-[#e1dfdf] bg-white px-3 py-2 text-sm text-[#222] placeholder:text-[#999] focus:border-[#f68a4a] focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    data-testid="contact-form-submit-button"
                    className="mt-1 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
                  >
                    Submit Enquiry
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
