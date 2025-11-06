import { BrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

import Education from "./components/sections/Education";
import Footer from "./components/Footer";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    document.title = config.html.title;
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        {/* Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>

        {/* Main Sections */}
        <About />
        <Experience />
        <Education />
        <Tech />
        <Works />
        <Feedbacks />

        {/* Contact & Footer */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas /> {/* Keep stars background effect behind Contact */}
          <Footer /> {/* ✅ Footer placed last, below stars */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
