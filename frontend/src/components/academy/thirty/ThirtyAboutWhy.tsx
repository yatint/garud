import { CalendarCheck, GraduationCap, TrendingUp, Wrench } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const WHY = [
  {
    icon: CalendarCheck,
    title: "Daily Habit Building",
    text: "Small actions repeated daily rewire behaviour — motivation fades, habits stay.",
    slug: "habits",
  },
  {
    icon: GraduationCap,
    title: "Consistent Mentorship",
    text: "Mentors review progress every week, so no participant drifts off track.",
    slug: "mentorship",
  },
  {
    icon: Wrench,
    title: "Practical Life Skills",
    text: "Every concept is practiced in daily life, not just discussed in a hall.",
    slug: "skills",
  },
  {
    icon: TrendingUp,
    title: "Measurable Personal Growth",
    text: "Habit trackers and reviews make your progress visible week by week.",
    slug: "growth",
  },
];

export const ThirtyAboutWhy = () => {
  return (
    <>
      <section id="thirty-about" data-testid="thirty-about-section" className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <SectionHeading
            index="01"
            eyebrow="About the Program"
            title="Transformation Doesn't Happen in One Day"
            align="center"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-[#555] sm:text-lg">
              The 30-Day Transform Program is Rupantaram's flagship journey designed to create
              lasting behavioral change. Instead of temporary motivation, participants develop
              consistent habits through daily activities, mentor guidance, reflection, and
              practical life skill implementation.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#555] sm:text-lg">
              This program encourages continuous growth in character, discipline, communication,
              leadership, and responsible living.
            </p>
          </Reveal>
        </div>
      </section>

      <section data-testid="thirty-why-section" className="bg-[#fbfafa] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            index="02"
            eyebrow="Why 30 Days?"
            title="Small Daily Actions, Lasting Change"
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.08}>
                <div
                  data-testid={`thirty-why-card-${w.slug}`}
                  className="card-glow-hover group h-full rounded-[10px] border border-[#e1dfdf] bg-white p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f6f7f0] text-[#18463b] transition-all duration-300 group-hover:bg-[#f68a4a] group-hover:text-white">
                    <w.icon size={22} />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-[#18463b]">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#555]">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
