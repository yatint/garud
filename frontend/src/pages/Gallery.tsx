import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { AcademyNavbar } from "@/components/academy/AcademyNavbar";
import { AcademyFooter } from "@/components/academy/AcademyFooter";
import { EnquiryDialog } from "@/components/academy/EnquiryDialog";
import { useLang } from "@/lib/lang";
import { destroyLenis, initLenis, startLenis, stopLenis } from "@/lib/scroll";

type Category = "Workshops" | "Yoga & Mindfulness" | "Stage & Speaking" | "Team Activities";

const CATEGORY_MR: Record<"All" | Category, string> = {
  All: "सर्व",
  Workshops: "कार्यशाळा",
  "Yoga & Mindfulness": "योग आणि माइंडफुलनेस",
  "Stage & Speaking": "मंच आणि भाषण",
  "Team Activities": "संघ उपक्रम",
};

const FILTERS: Array<"All" | Category> = [
  "All",
  "Workshops",
  "Yoga & Mindfulness",
  "Stage & Speaking",
  "Team Activities",
];

interface Photo {
  src: string;
  enCaption: string;
  mrCaption: string;
  category: Category;
}

const PHOTOS: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1722573783625-eceb04251036?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Full-house workshop session with activities",
    mrCaption: "उपक्रमांसह गृहपूर्ण कार्यशाळा सत्र",
    category: "Workshops",
  },
  {
    src: "https://images.unsplash.com/photo-1529693662653-9d480530a697?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Morning meditation practice",
    mrCaption: "सकाळची ध्यान साधना",
    category: "Yoga & Mindfulness",
  },
  {
    src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Speaking with confidence in front of a crowd",
    mrCaption: "प्रेक्षकांसमोर आत्मविश्वासाने भाषण",
    category: "Stage & Speaking",
  },
  {
    src: "https://images.unsplash.com/photo-1630068846062-3ffe78aa5049?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "One team, one goal — hands together",
    mrCaption: "एक संघ, एक ध्येय — हातात हात",
    category: "Team Activities",
  },
  {
    src: "https://images.unsplash.com/photo-1686624386665-4cd01b96d0f6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Goal-setting and written reflection exercises",
    mrCaption: "ध्येय निश्चिती आणि लेखी आत्मपरिक्षण सराव",
    category: "Workshops",
  },
  {
    src: "https://images.pexels.com/photos/8436738/pexels-photo-8436738.jpeg?auto=compress&cs=tinysrgb&w=1000",
    enCaption: "Mindfulness practice on the mat",
    mrCaption: "मॅटवर माइंडफुलनेस साधना",
    category: "Yoga & Mindfulness",
  },
  {
    src: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "An attentive audience at a seminar",
    mrCaption: "चर्चासत्रातील एकाग्र प्रेक्षक",
    category: "Stage & Speaking",
  },
  {
    src: "https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Circle-time group discussion",
    mrCaption: "वर्तुळ बैठकीतील समूह चर्चा",
    category: "Workshops",
  },
  {
    src: "https://images.unsplash.com/photo-1752650735509-58f11eaa2e10?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Celebrating a team challenge win",
    mrCaption: "संघ आव्हानातील विजयाचा उत्सव",
    category: "Team Activities",
  },
  {
    src: "https://images.unsplash.com/photo-1683056255281-e52a141924f0?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Group yoga session in the hall",
    mrCaption: "सभागृहातील सामूहिक योग सत्र",
    category: "Yoga & Mindfulness",
  },
  {
    src: "https://images.unsplash.com/photo-1564522365984-c08ed1f78893?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Owning the mic on stage",
    mrCaption: "मंचावर माईक स्वतःचा करताना",
    category: "Stage & Speaking",
  },
  {
    src: "https://images.unsplash.com/photo-1682962232755-f1d051ddb638?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Laughter during a group activity",
    mrCaption: "समूह उपक्रमातील हास्य",
    category: "Team Activities",
  },
  {
    src: "https://images.unsplash.com/photo-1774438533919-b291cd800c45?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85&w=1000",
    enCaption: "Energy and colour at a group celebration",
    mrCaption: "सामूहिक उत्सवातील उर्जा आणि रंग",
    category: "Team Activities",
  },
];

export default function Gallery() {
  const { t } = useLang();
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  useEffect(() => {
    const lenis = initLenis();
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      destroyLenis();
    };
  }, []);

  useEffect(() => {
    if (lightbox !== null) {
      stopLenis();
      document.body.style.overflow = "hidden";
    } else {
      startLenis();
      document.body.style.overflow = "";
    }
  }, [lightbox]);

  const visible = useMemo(
    () => (filter === "All" ? PHOTOS : PHOTOS.filter((p) => p.category === filter)),
    [filter]
  );

  const step = useCallback(
    (dir: 1 | -1) => {
      setLightbox((cur) =>
        cur === null ? cur : (cur + dir + visible.length) % visible.length
      );
    },
    [visible.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, step]);

  const openEnquiry = useCallback(() => setEnquiryOpen(true), []);

  return (
    <div className="min-h-screen bg-white font-sans text-[#222]">
      <div className="grain-overlay" />

      <AcademyNavbar onEnquire={openEnquiry} />

      <main>
        <section className="relative overflow-hidden bg-[#f6f7f0] pb-14 pt-36 lg:pt-44">          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(246,138,74,0.14),transparent_70%)]" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-12 bg-[#f68a4a]/50" />
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#e0701f]">
                  {t("Gallery", "गॅलरी")}
                </span>
              </div>
              <h1 className="mt-5 font-heading text-4xl font-black tracking-tight text-[#18463b] sm:text-5xl lg:text-6xl">
                {t("Moments of", "परिवर्तनाचे")}{" "}
                <span className="text-brand-gradient">{t("Transformation", "क्षण")}</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#7a7a7a] sm:text-lg">
                {t(
                  "Glimpses from our workshops, yoga sessions, stage challenges, and team activities across Karjat, Alibag, Pen, and Lonavala.",
                  "कर्जत, अलिबाग, पेन आणि लोणावळा येथील आमच्या कार्यशाळा, योग सत्रे, मंच आव्हाने आणि संघ उपक्रमांची झलक."
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-wrap gap-3"
              data-testid="gallery-filters"
            >
              {FILTERS.map((f) => (
                <button
                  key={f}
                  data-testid={`gallery-filter-${f.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                  onClick={() => {
                    setFilter(f);
                    setLightbox(null);
                  }}
                  className={`rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition-all duration-300 ${
                    filter === f
                      ? "border-[#18463b] bg-[#18463b] text-white"
                      : "border-[#e1dfdf] bg-white text-[#555] hover:border-[#f68a4a] hover:text-[#f68a4a]"
                  }`}
                >
                  {t(f, CATEGORY_MR[f])}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-14 lg:py-20" data-testid="gallery-grid-section">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3" data-testid="gallery-grid">
              {visible.map((p, i) => (
                <motion.button
                  key={p.src}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                  onClick={() => setLightbox(i)}
                  data-testid={`gallery-item-${i + 1}`}
                  className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-xl border border-[#e1dfdf] text-left"
                >
                  <img
                    src={p.src}
                    alt={t(p.enCaption, p.mrCaption)}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(180deg,transparent_50%,rgba(24,70,59,0.8)_100%)] p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="mb-2 inline-flex w-fit items-center gap-2 rounded-full bg-[#f68a4a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                      <Expand size={11} />
                      {t(p.category, CATEGORY_MR[p.category])}
                    </span>
                    <p className="font-heading text-sm font-bold text-white">{t(p.enCaption, p.mrCaption)}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AcademyFooter />

      <AnimatePresence>
        {lightbox !== null && visible[lightbox] && (
          <motion.div
            data-testid="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0b1d12]/90 p-4 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          >
            <button
              data-testid="gallery-lightbox-close"
              onClick={() => setLightbox(null)}
              aria-label={t("Close", "बंद करा")}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#f68a4a] hover:text-[#f68a4a]"
            >
              <X size={20} />
            </button>
            <button
              data-testid="gallery-lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              aria-label={t("Previous photo", "मागील फोटो")}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#f68a4a] hover:text-[#f68a4a] sm:left-6"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              data-testid="gallery-lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              aria-label={t("Next photo", "पुढील फोटो")}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-[#f68a4a] hover:text-[#f68a4a] sm:right-6"
            >
              <ChevronRight size={22} />
            </button>

            <motion.figure
              key={visible[lightbox].src}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={visible[lightbox].src}
                alt={t(visible[lightbox].enCaption, visible[lightbox].mrCaption)}
                className="max-h-[75vh] w-auto rounded-xl border border-white/10 object-contain"
              />
              <figcaption className="mt-4 text-center">
                <span className="mr-3 rounded-full bg-[#f68a4a] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                  {t(visible[lightbox].category, CATEGORY_MR[visible[lightbox].category])}
                </span>
                <span className="text-sm font-semibold text-white/80">
                  {t(visible[lightbox].enCaption, visible[lightbox].mrCaption)}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>

      <EnquiryDialog open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <Toaster position="top-center" richColors />
    </div>
  );
}
