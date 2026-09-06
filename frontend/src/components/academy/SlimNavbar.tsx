import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { LangToggle } from "@/components/LangToggle";
import { useLang } from "@/lib/lang";

interface SlimNavbarProps {
  onEnquire: () => void;
}

export const SlimNavbar = ({ onEnquire }: SlimNavbarProps) => {
  const { t } = useLang();
  return (
    <header
      data-testid="slim-navbar"
      className="fixed inset-x-0 top-0 z-50 border-b border-[#e1dfdf] bg-white/90 shadow-[0_2px_24px_rgba(24,70,59,0.07)] backdrop-blur-xl"
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" data-testid="slim-nav-logo" className="flex items-center gap-3">
          <img
            src="/assets/logo.webp"
            alt="Garud Zep Rupantaram"
            className="h-11 w-auto"
          />
        </Link>

        <div className="flex items-center gap-3">
          <LangToggle />
          <Link
            to="/"
            data-testid="slim-nav-home-link"
            className="hidden items-center gap-1.5 text-sm font-semibold text-[#555] transition-colors hover:text-[#18463b] sm:inline-flex"
          >
            <ArrowLeft size={14} />
            {t("Academy Home", "मुख्यपृष्ठ")}
          </Link>
          <button
            data-testid="slim-nav-enquire-button"
            onClick={onEnquire}
            className="rounded-full border border-[#f68a4a] bg-[#f68a4a] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-[2px] hover:border-[#18463b] hover:bg-[#18463b] active:scale-95"
          >
            {t("Enquire Now", "चौकशी करा")}
          </button>
        </div>
      </div>
    </header>
  );
};
