import { CalendarCheck, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const LOCATIONS = [
  { name: "Karjat", district: "Dist. Raigad, Maharashtra", slug: "karjat" },
  { name: "Alibag", district: "Dist. Raigad, Maharashtra", slug: "alibag" },
  { name: "Pen", district: "Dist. Raigad, Maharashtra", slug: "pen" },
  { name: "Lonavala", district: "Dist. Pune, Maharashtra", slug: "lonavala" },
];

export const ProgramsLocations = () => {
  return (
    <section data-testid="programs-locations-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="05"
          eyebrow="Our Training Locations"
          title="Close to Home, Wherever You Are"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.07}>
              <div
                data-testid={`programs-location-${l.slug}`}
                className="card-glow-hover flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-[#fbfafa] p-7 text-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a]">
                  <MapPin size={22} />
                </span>
                <h3 className="mt-4 font-heading text-xl font-bold text-[#18463b]">{l.name}</h3>
                <p className="mt-1 text-sm text-[#7a7a7a]">{l.district}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p
            data-testid="programs-locations-note"
            className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-3 rounded-full border border-[#e1dfdf] bg-[#fbfafa] px-6 py-4 text-center text-sm font-semibold text-[#555]"
          >
            <CalendarCheck size={18} className="shrink-0 text-[#f68a4a]" />
            Workshops are conducted across our training centers with scheduled batches throughout
            the year.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
