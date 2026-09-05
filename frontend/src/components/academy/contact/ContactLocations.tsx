import { Clock, MapPin, Navigation } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const LOCATIONS = [
  { name: "Karjat", subtitle: "Life Skills Training Center", slug: "karjat", query: "Karjat, Maharashtra" },
  { name: "Alibag", subtitle: "Transformation Workshop Center", slug: "alibag", query: "Alibag, Maharashtra" },
  { name: "Pen", subtitle: "Personality Development Center", slug: "pen", query: "Pen, Maharashtra" },
  { name: "Lonavala", subtitle: "Leadership & Life Skills Center", slug: "lonavala", query: "Lonavala, Maharashtra" },
];

export const ContactLocations = () => {
  return (
    <section data-testid="contact-locations-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Training Centers"
          title="Our Training Locations"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.07}>
              <div
                data-testid={`contact-location-${l.slug}`}
                className="card-glow-hover flex h-full flex-col overflow-hidden rounded-[18px] border border-[#e1dfdf] bg-white"
              >
                <div className="flex aspect-[16/9] flex-col items-center justify-center gap-2 bg-[#f0efe9] text-[#999]">
                  <MapPin size={26} strokeWidth={1.6} className="text-[#f68a4a]" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">
                    Map Placeholder — {l.name}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-bold text-[#18463b]">{l.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-[#7a7a7a]">{l.subtitle}</p>
                  <a
                    data-testid={`contact-directions-${l.slug}`}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(l.query)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-[#18463b]/25 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#18463b] transition-all duration-300 hover:border-[#f68a4a] hover:bg-[#f68a4a] hover:text-white"
                  >
                    <Navigation size={13} />
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div
            data-testid="office-hours-card"
            className="mx-auto mt-14 max-w-xl rounded-[18px] border border-[#e1dfdf] bg-[#fbfafa] p-8"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a]">
                <Clock size={20} />
              </span>
              <h3 className="font-heading text-xl font-bold text-[#18463b]">Office Hours</h3>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-center justify-between border-b border-[#e1dfdf] pb-3">
                <span className="text-sm font-semibold text-[#555]">Monday – Saturday</span>
                <span className="font-heading text-sm font-bold text-[#18463b]">9:00 AM – 6:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#555]">Sunday</span>
                <span className="font-heading text-sm font-bold text-[#e0701f]">
                  Workshop Schedule Only
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
