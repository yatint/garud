import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Lang = "mr" | "en";

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, mr: string) => string;
}

const LanguageContext = createContext<LangContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("rupantaram-lang");
    return saved === "en" ? "en" : "mr";
  });

  useEffect(() => {
    localStorage.setItem("rupantaram-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.classList.toggle("lang-mr", lang === "mr");
  }, [lang]);

  const t = (en: string, mr: string) => (lang === "mr" ? mr : en);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
