
import { useEffect, useRef, useState } from "react";
import HorizontalNav from "@/components/HorizontalNav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSection, setCurrentSection] = useState("hero");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { toast } = useToast();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setIsTransitioning(true);
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", inline: "start" });
          setTimeout(() => setIsTransitioning(false), 500);
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Handle form submission feedback
    if (location.search.includes("message=sent")) {
      toast({
        title: "Message envoyé!",
        description: "Votre message a bien été envoyé. Je vous répondrai bientôt.",
        variant: "default",
      });
    }

    const handleWheel = (e: WheelEvent) => {
      if (containerRef.current && !isTransitioning) {
        // Only if not mobile, handle horizontal scrolling with the wheel
        if (!isMobile) {
          if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            setIsTransitioning(true);
            containerRef.current.scrollLeft += e.deltaY;
            setTimeout(() => setIsTransitioning(false), 500);
          }
        }
      }
    };

    const handleScrollEnd = () => {
      if (containerRef.current) {
        const scrollLeft = containerRef.current.scrollLeft;
        const width = containerRef.current.clientWidth;
        
        const sectionIndex = Math.round(scrollLeft / width);
        const sections = ["hero", "about", "education", "skills", "projects", "contact"];
        setCurrentSection(sections[sectionIndex] || "hero");
      }
    };

    const container = containerRef.current;
    if (container) {
      // Use passive: false only on desktop
      if (!isMobile) {
        container.addEventListener("wheel", handleWheel, { passive: false });
      }
      container.addEventListener("scroll", handleScrollEnd, { passive: true });
    }

    return () => {
      if (container) {
        if (!isMobile) {
          container.removeEventListener("wheel", handleWheel);
        }
        container.removeEventListener("scroll", handleScrollEnd);
      }
    };
  }, [location, toast, isMobile, isTransitioning]);

  const scrollToSection = (sectionId: string) => {
    if (isTransitioning) return;
    
    const element = document.getElementById(sectionId);
    if (element) {
      setIsTransitioning(true);
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <HorizontalNav />
      
      <div 
        ref={containerRef} 
        className={`flex overflow-x-auto overflow-y-hidden horizontal-snap section-transition ${isTransitioning ? 'transition-all duration-500 ease-in-out' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <section id="hero" className="section-slide">
          <Hero />
        </section>
        
        <section id="about" className="section-slide">
          <About />
        </section>
        
        <section id="education" className="section-slide">
          <Education />
        </section>
        
        <section id="skills" className="section-slide">
          <Skills />
        </section>
        
        <section id="projects" className="section-slide">
          <Projects />
        </section>
        
        <section id="contact" className="section-slide">
          <Contact />
        </section>
      </div>
      
      <Footer />
      
      {/* Page indicator dots */}
      <div className="fixed bottom-16 left-0 right-0 flex justify-center gap-2 z-40">
        {["hero", "about", "education", "skills", "projects", "contact"].map((section) => (
          <button 
            key={section}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all focus-visible-outline ${
              currentSection === section 
                ? "bg-blue-500 btn-pulse" 
                : "bg-gray-500/50 hover:bg-gray-400"
            }`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
