import { useLang } from "@/lib/lang";

interface LangToggleProps {
  dark?: boolean;
}

export const LangToggle = ({ dark }: LangToggleProps) => {
  const { lang, setLang } = useLang();
  return (
    <button
      data-testid="lang-toggle"
      onClick={() => setLang(lang === "mr" ? "en" : "mr")}
      className={`rounded-full border px-4 py-1.5 text-xs font-bold tracking-wide transition-all duration-300 hover:-translate-y-[1px] ${
        dark
          ? "border-white/40 text-white hover:border-[#f68a4a] hover:text-[#f8b183]"
          : "border-[#18463b]/40 text-[#18463b] hover:border-[#f68a4a] hover:text-[#f68a4a]"
      }`}
      aria-label="Switch language"
    >
      {lang === "mr" ? "English" : "मराठी"}
    </button>
  );
};
