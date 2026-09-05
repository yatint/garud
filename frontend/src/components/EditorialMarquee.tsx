const ITEMS = [
  "Goal Setting",
  "Confidence",
  "Leadership",
  "Public Speaking",
  "Emotional Intelligence",
  "Digital Discipline",
  "Time Mastery",
  "Career Clarity",
];

export const EditorialMarquee = ({ items = ITEMS }: { items?: string[] }) => {
  const row = [...items, ...items];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y border-[#0b5d3b] bg-[#18463b] py-5"
    >
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-heading text-sm font-bold uppercase tracking-[0.3em] text-white/85">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-[#f68a4a]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
