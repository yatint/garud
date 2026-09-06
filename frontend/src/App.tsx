import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import WhyUs from "@/pages/WhyUs";
import Programs from "@/pages/Programs";
import YouthTransform from "@/pages/YouthTransform";
import KidsTransform from "@/pages/KidsTransform";
import YoungAdultTransform from "@/pages/YoungAdultTransform";
import ThirtyDayTransform from "@/pages/ThirtyDayTransform";
import LifeSkills from "@/pages/LifeSkills";
import SuccessStories from "@/pages/SuccessStories";
import Contact from "@/pages/Contact";
import Gallery from "@/pages/Gallery";
import { useLang } from "@/lib/lang";

const TITLES: Record<string, [string, string]> = {
  "/": [
    "Garud Zep Rupantaram | Life Skills & Personality Transformation Academy",
    "गरुड झेप रूपांतरम् | जीवनकौशल्य आणि व्यक्तिमत्त्व परिवर्तन अकादमी",
  ],
  "/about": ["About Rupantaram | Rupantaram Life Skills Academy", "रूपांतरम् विषयी | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/why-us": ["Why Choose Rupantaram | Rupantaram Life Skills Academy", "रूपांतरम् का निवडावे | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/programs": ["Our Programs | Rupantaram Life Skills Academy", "आमचे कार्यक्रम | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/programs/kids-transform": ["Kids Transform | Rupantaram Life Skills Academy", "Kids Transform | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/programs/young-adult-transform": ["Young Adult Transform | Rupantaram Life Skills Academy", "Young Adult Transform | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/programs/30-day-transform": ["30-Day Transform | Rupantaram Life Skills Academy", "30-Day Transform | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/youth-transform": ["Youth Transform | Rupantaram Life Skills Academy", "Youth Transform | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/life-skills": ["21 Life Skills | Rupantaram Life Skills Academy", "२१ जीवनकौशल्ये | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/success-stories": ["Success Stories | Rupantaram Life Skills Academy", "यशोगाथा | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/contact": ["Contact Rupantaram | Rupantaram Life Skills Academy", "संपर्क | रूपांतरम् जीवनकौशल्य अकादमी"],
  "/gallery": ["Gallery | Rupantaram Life Skills Academy", "गॅलरी | रूपांतरम् जीवनकौशल्य अकादमी"],
};

// One <Route> per page in src/pages; HashRouter already wraps this in main.tsx.
export default function App() {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const title = TITLES[pathname] ?? TITLES["/"];
    document.title = lang === "mr" ? title[1] : title[0];
  }, [pathname, lang]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/why-us" element={<WhyUs />} />
      <Route path="/programs" element={<Programs />} />
      <Route path="/programs/kids-transform" element={<KidsTransform />} />
      <Route path="/programs/young-adult-transform" element={<YoungAdultTransform />} />
      <Route path="/programs/30-day-transform" element={<ThirtyDayTransform />} />
      <Route path="/youth-transform" element={<YouthTransform />} />
      <Route path="/life-skills" element={<LifeSkills />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
