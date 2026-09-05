import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import YouthTransform from "@/pages/YouthTransform";
import Gallery from "@/pages/Gallery";

// One <Route> per page in src/pages; BrowserRouter already wraps this in main.tsx.
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/youth-transform" element={<YouthTransform />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
