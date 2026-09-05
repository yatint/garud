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

export const EditorialMarquee = () => {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      data-testid="editorial-marquee"
      className="relative overflow-hidden border-y border-[#1e3a5f] bg-[#0b1d3a] py-5"
    >
      <div className="animate-marquee flex w-max items-center">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span className="whitespace-nowrap px-8 font-heading text-sm font-bold uppercase tracking-[0.3em] text-slate-300">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-[#e6a635]" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
