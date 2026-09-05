import { Routes, Route } from "react-router-dom";
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

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
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
