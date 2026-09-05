import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Philosophy = () => {
  return (
    <section data-testid="why-philosophy-section" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f68a4a]/12 text-[#f68a4a]">
            <Quote size={26} />
          </span>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-[#e0701f]">
            Our Philosophy
          </p>
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-[#18463b] sm:text-4xl lg:text-5xl">
            Education Beyond Academics
          </h2>
          <p className="mt-7 text-base leading-relaxed text-[#555] sm:text-lg">
            At Rupantaram, we believe success is not defined only by marks or degrees. A truly
            successful person possesses confidence, emotional stability, discipline, communication
            skills, leadership qualities, and strong moral values.
          </p>
          <p className="mt-5 font-heading text-xl font-bold leading-relaxed text-[#18463b] sm:text-2xl">
            Our mission is to prepare individuals for life — not just examinations.
          </p>
          <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-[#f68a4a]" />
        </Reveal>
      </div>
    </section>
  );
};
