import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
}

export const SectionHeading = ({
  index,
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
}: SectionHeadingProps) => {
  const isDark = tone === "dark";
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <span
          className={`font-heading text-sm font-black tracking-[0.2em] ${
            isDark ? "text-[#e6a635]" : "text-[#b97f1f]"
          }`}
        >
          {index}
        </span>
        <span className={`h-px w-12 ${isDark ? "bg-[#e6a635]/60" : "bg-[#b97f1f]/50"}`} />
        <span
          className={`text-xs font-bold uppercase tracking-[0.28em] ${
            isDark ? "text-[#f5c253]" : "text-[#b97f1f]"
          }`}
        >
          {eyebrow}
        </span>
      </div>
      <h2
        className={`mt-5 font-heading text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
          isDark ? "text-white" : "text-[#071328]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            isDark ? "text-slate-400" : "text-slate-600"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
};
