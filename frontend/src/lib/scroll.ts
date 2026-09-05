import Lenis from "lenis";

let lenis: Lenis | null = null;

export const initLenis = (): Lenis => {
  if (lenis) return lenis;
  lenis = new Lenis({ duration: 1.15, smoothWheel: true });
  return lenis;
};

export const destroyLenis = () => {
  lenis?.destroy();
  lenis = null;
};

export const stopLenis = () => lenis?.stop();
export const startLenis = () => lenis?.start();

export const scrollToId = (id: string, offset = -72) => {
  if (lenis) {
    lenis.scrollTo(id, { offset, duration: 1.4 });
  } else {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  }
};
