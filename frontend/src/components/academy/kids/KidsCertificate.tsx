import { Award } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const KidsCertificate = () => {
  return (
    <section data-testid="kids-certificate-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="06"
          eyebrow="Certificate"
          title="Celebrate Every Child's Transformation"
          description="Every participant receives a Rupantaram Certificate of Completion after successfully completing the program."
          align="center"
        />

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-14 max-w-2xl">
            <div className="absolute -inset-3 -rotate-1 rounded-2xl bg-[#f68a4a]/15" />
            <div
              data-testid="certificate-mockup"
              className="relative rotate-1 rounded-xl border border-[#d9c58a] bg-white p-2 shadow-[0_28px_60px_rgba(24,70,59,0.18)] transition-transform duration-500 hover:rotate-0"
            >
              <div className="rounded-lg border-2 border-[#18463b]/70 px-6 py-10 text-center sm:px-12">
                <img src="/assets/logo.webp" alt="Rupantaram" className="mx-auto h-14 w-auto" />
                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#7a7a7a]">
                  Rupantaram Life Skills Academy
                </p>
                <h3 className="mt-3 font-heading text-3xl font-black tracking-wide text-[#18463b]">
                  Certificate of Completion
                </h3>
                <div className="mx-auto mt-4 h-0.5 w-24 bg-[#f68a4a]" />
                <p className="mt-6 text-sm text-[#555]">This certificate is proudly presented to</p>
                <p className="mx-auto mt-4 max-w-xs border-b border-dashed border-[#999] pb-2 font-heading text-xl font-bold text-[#18463b]">
                  Your Child's Name
                </p>
                <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#555]">
                  for successfully completing <strong>Kids Transform</strong> — a 3-day life skills
                  and personality development journey.
                </p>
                <div className="mt-8 flex items-end justify-between">
                  <div className="text-left">
                    <p className="w-28 border-b border-[#999] pb-1 text-[10px] text-[#999]">Date</p>
                  </div>
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f68a4a]/40 bg-[#f68a4a] text-white shadow-lg">
                    <Award size={28} />
                  </span>
                  <div className="text-right">
                    <p className="w-28 border-b border-[#999] pb-1 text-[10px] text-[#999]">
                      Program Director
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
