import { MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const CENTERS = [
  { name: "Karjat", district: "Dist. Raigad, Maharashtra", slug: "karjat" },
  { name: "Alibag", district: "Dist. Raigad, Maharashtra", slug: "alibag" },
  { name: "Pen", district: "Dist. Raigad, Maharashtra", slug: "pen" },
  { name: "Lonavala", district: "Dist. Pune, Maharashtra", slug: "lonavala" },
];

interface AcademyCentersProps {
  onEnquire: () => void;
}

export const AcademyCenters = ({ onEnquire }: AcademyCentersProps) => {
  return (
    <section id="centers" data-testid="academy-centers-section" className="bg-[#fbfafa] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="09"
          eyebrow="Training Centers"
          title="Regular Workshops Across Four Locations"
          description="We also conduct sessions at your location for schools, housing societies, and companies."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CENTERS.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}>
              <div
                data-testid={`center-card-${c.slug}`}
                className="card-glow-hover flex h-full flex-col rounded-[10px] border border-[#e1dfdf] bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a]">
                  <MapPin size={20} />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-[#18463b]">{c.name}</h3>
                <p className="mt-1 text-sm text-[#7a7a7a]">{c.district}</p>
                <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#444]">
                  <Phone size={14} className="text-[#f68a4a]" />
                  +91 90116 58888
                </p>
                <div className="mt-5 flex gap-2">
                  <a
                    data-testid={`center-call-${c.slug}`}
                    href="tel:+919011658888"
                    className="flex-1 rounded-full border border-[#f68a4a] bg-[#f68a4a] px-4 py-2.5 text-center text-xs font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:border-[#18463b] hover:bg-[#18463b]"
                  >
                    Call
                  </a>
                  <button
                    data-testid={`center-enquire-${c.slug}`}
                    onClick={onEnquire}
                    className="flex-1 rounded-full border border-[#18463b]/30 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#18463b] transition-all duration-300 hover:border-[#f68a4a] hover:text-[#f68a4a]"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
