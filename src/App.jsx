import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { Routes, Route } from "react-router-dom";

export default function App() {
  useEffect(() => {
      document.documentElement.setAttribute("data-theme", "light");
    let lenis;

    const initialize = () => {
      AOS.init();

      lenis = new Lenis();

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    };

    if (!window.lenisInitialized) {
      window.lenisInitialized = true;
      initialize();
    }

    const refreshInterval = setInterval(() => {
      AOS.refresh();
    }, 500);

    return () => {
      if (lenis) lenis.destroy();
      clearInterval(refreshInterval);
      window.lenisInitialized = false;
    };
  }, []);

  return (
    <>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/gallery" element={<Gallery />} />

          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/*"
            element={
              <div className="grid w-full h-[90vh] place-content-center">
                <h1 className="text-6xl uppercase font-black text-[#ff0062]">
                  not found
                </h1>
              </div>
            }
          />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
