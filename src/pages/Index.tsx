
import { useEffect, useRef } from "react";
import HorizontalNav from "@/components/HorizontalNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", inline: "start" });
      }
    } else {
      window.scrollTo(0, 0);
    }

    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          containerRef.current.scrollLeft += e.deltaY;
        }
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [location]);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <HorizontalNav />
      
      <div 
        ref={containerRef} 
        className="flex overflow-x-auto overflow-y-hidden horizontal-snap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <section id="hero" className="section-slide flex items-center">
          <Hero />
        </section>
        
        <section id="about" className="section-slide flex items-center">
          <About />
        </section>
        
        <section id="education" className="section-slide flex items-center">
          <Education />
        </section>
        
        <section id="skills" className="section-slide flex items-center">
          <Skills />
        </section>
        
        <section id="projects" className="section-slide flex items-center">
          <Projects />
        </section>
        
        <section id="contact" className="section-slide flex items-center">
          <Contact />
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
