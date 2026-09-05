import { ArrowRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { scrollToId } from "@/lib/scroll";

const COMMUNITY_IMG =
  "https://images.unsplash.com/photo-1560220604-1985ebfe28b1?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1200";

const LOCATIONS = [
  { name: "Karjat", district: "Dist. Raigad, Maharashtra", slug: "karjat" },
  { name: "Alibag", district: "Dist. Raigad, Maharashtra", slug: "alibag" },
  { name: "Pen", district: "Dist. Raigad, Maharashtra", slug: "pen" },
  { name: "Lonavala", district: "Dist. Pune, Maharashtra", slug: "lonavala" },
];

export const CommunityLocations = () => {
  return (
    <>
      <section data-testid="community-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-[#f68a4a]/40" />
                <div className="relative overflow-hidden rounded-2xl border border-[#e1dfdf]">
                  <img
                    src={COMMUNITY_IMG}
                    alt="Young volunteers serving their community"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_60%,rgba(24,70,59,0.5)_100%)]" />
                  <p className="absolute bottom-5 left-5 font-heading text-sm font-bold uppercase tracking-[0.18em] text-white">
                    Service in Action
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-6">
              <SectionHeading
                index="06"
                eyebrow="Community Impact"
                title="Creating Responsible Citizens"
              />
              <Reveal delay={0.1}>
                <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
                  Rupantaram is committed to building not only successful individuals but also
                  compassionate human beings. Every program encourages social responsibility,
                  respect for parents, environmental awareness, teamwork, and community
                  contribution.
                </p>
                <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
                  Because a truly transformed student doesn't just change their own life — they
                  lift everyone around them.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section data-testid="about-locations-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="07"
            eyebrow="Our Locations"
            title="Four Centers Across Maharashtra"
            description="Regular workshops run at every center — pick the one closest to you."
            align="center"
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.slug} delay={i * 0.07}>
                <div
                  data-testid={`location-card-${l.slug}`}
                  className="card-glow-hover flex h-full flex-col items-center rounded-[10px] border border-[#e1dfdf] bg-white p-7 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a]">
                    <MapPin size={22} />
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-[#18463b]">{l.name}</h3>
                  <p className="mt-1 flex-1 text-sm text-[#7a7a7a]">{l.district}</p>
                  <button
                    data-testid={`location-programs-${l.slug}`}
                    onClick={() => scrollToId("#about-programs", -88)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#18463b]/25 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#18463b] transition-all duration-300 hover:border-[#f68a4a] hover:bg-[#f68a4a] hover:text-white"
                  >
                    View Programs
                    <ArrowRight size={13} />
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
