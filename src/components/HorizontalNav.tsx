
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

interface NavItem {
  id: string;
  label: string;
}

const HorizontalNav = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("hero");
  const [sections, setSections] = useState<HTMLElement[]>([]);

  const navItems: NavItem[] = [
    { id: "hero", label: language === 'fr' ? 'Accueil' : 'Home' },
    { id: "about", label: language === 'fr' ? 'À propos' : 'About' },
    { id: "education", label: language === 'fr' ? 'Formation' : 'Education' },
    { id: "skills", label: language === 'fr' ? 'Compétences' : 'Skills' },
    { id: "projects", label: language === 'fr' ? 'Projets' : 'Projects' },
    { id: "contact", label: language === 'fr' ? 'Contact' : 'Contact' },
  ];

  useEffect(() => {
    const sectionElements = document.querySelectorAll<HTMLElement>(".section-slide");
    setSections(Array.from(sectionElements));

    const handleScroll = () => {
      const scrollX = window.scrollX;
      const windowWidth = window.innerWidth;
      
      const currentSectionIndex = Math.round(scrollX / windowWidth);
      const currentSection = sections[currentSectionIndex];
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  };

  const scrollNext = () => {
    const currentIndex = sections.findIndex(section => section.id === activeSection);
    if (currentIndex < sections.length - 1) {
      const nextSection = sections[currentIndex + 1];
      scrollToSection(nextSection.id);
    }
  };

  const scrollPrev = () => {
    const currentIndex = sections.findIndex(section => section.id === activeSection);
    if (currentIndex > 0) {
      const prevSection = sections[currentIndex - 1];
      scrollToSection(prevSection.id);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <a href="#hero" className="text-2xl font-playfair italic font-bold gradient-text">
          Felix Yann
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm transition-all duration-300 ${
                activeSection === item.id
                  ? "text-primary font-medium"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <LanguageToggle />
          
          <div className="flex items-center gap-2">
            <button 
              onClick={scrollPrev}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Previous section"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={scrollNext}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
              aria-label="Next section"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNav;
