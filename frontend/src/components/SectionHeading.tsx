import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}

export const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
}: SectionHeadingProps) => {
  const onDark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span className="font-heading text-sm font-black tracking-[0.2em] text-[#f68a4a]">
          {index}
        </span>
        <span className="h-px w-12 bg-[#f68a4a]/50" />
        <span
          className={`text-xs font-bold uppercase tracking-[0.28em] ${
            onDark ? "text-[#f8b183]" : "text-[#e0701f]"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-5 font-heading text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          onDark ? "text-white" : "text-[#18463b]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            onDark ? "text-white/70" : "text-[#7a7a7a]"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};
