import { useLang } from "@/lib/lang";

const DEFAULT_ITEMS: Array<[string, string]> = [
  ["Goal Setting", "ध्येय निश्चिती"],
  ["Confidence", "आत्मविश्वास"],
  ["Leadership", "नेतृत्व"],
  ["Public Speaking", "सार्वजनिक भाषण"],
  ["Emotional Intelligence", "भावनिक बुद्धिमत्ता"],
  ["Digital Discipline", "डिजिटल शिस्त"],
  ["Time Mastery", "वेळ व्यवस्थापन"],
  ["Career Clarity", "करिअर स्पष्टता"],
];

export const EditorialMarquee = ({ items }: { items?: string[] }) => {
  const { t } = useLang();
  const list = items ?? DEFAULT_ITEMS.map(([en, mr]) => t(en, mr));
  const row = [...list, ...list];
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
