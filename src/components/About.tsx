
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Mail, 
  Download, 
  Languages, 
  Car, 
  Activity, 
  Mountain, 
  Music, 
  Laptop, 
  Plane, 
  CarFront 
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const About = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const textRevealClass = (delay: number) => {
    return isVisible ? `animate-text-reveal [animation-delay:${delay}ms]` : "opacity-0";
  };
  
  return (
    <div ref={sectionRef} className="min-h-screen w-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-playfair font-bold mb-4 text-center gradient-text ${textRevealClass(100)}`}>
            {language === 'fr' ? 'À propos de moi' : 'About me'}
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-6 sm:mb-8 mx-auto"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className={`space-y-4 ${textRevealClass(200)}`}>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Profile"
                className="rounded-lg shadow-lg w-full h-auto object-cover hover-card interactive-element"
              />
              
              <div className="grid grid-cols-3 gap-2">
                <div className="content-card p-3 border border-border hover:border-primary transition-colors hover-card group interactive-element">
                  <div className="flex items-center gap-2 mb-2">
                    <Languages className="text-primary group-hover:scale-110 transition-transform" size={18} />
                    <h3 className="font-semibold text-primary">{language === 'fr' ? 'Langues' : 'Languages'}</h3>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between items-center">
                      <span>Français</span>
                      <span>Natif</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>English</span>
                      <span>B2</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>Español</span>
                      <span>B1</span>
                    </li>
                  </ul>
                </div>
                
                <div className="content-card p-3 border border-border hover:border-accent transition-colors hover-card group interactive-element">
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="text-accent group-hover:scale-110 transition-transform" size={18} />
                    <h3 className="font-semibold text-accent">{language === 'fr' ? 'Mobilité' : 'Mobility'}</h3>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between items-center">
                      <span>Permis B</span>
                      <span>✓</span>
                    </li>
                  </ul>
                </div>

                <div className="content-card p-3 border border-border hover:border-secondary transition-colors hover-card group interactive-element">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="text-secondary group-hover:scale-110 transition-transform" size={18} />
                    <h3 className="font-semibold text-secondary">{language === 'fr' ? 'Intérêts' : 'Interests'}</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-1">
                    <div className="interest-tag">
                      <Activity size={10} />
                      <span>Sport</span>
                    </div>
                    <div className="interest-tag">
                      <Mountain size={10} />
                      <span>{language === 'fr' ? 'Rando' : 'Hiking'}</span>
                    </div>
                    <div className="interest-tag">
                      <Music size={10} />
                      <span>Music</span>
                    </div>
                    <div className="interest-tag">
                      <Laptop size={10} />
                      <span>Tech</span>
                    </div>
                    <div className="interest-tag">
                      <Plane size={10} />
                      <span>Voyage</span>
                    </div>
                    <div className="interest-tag">
                      <CarFront size={10} />
                      <span>Auto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`space-y-5 ${textRevealClass(300)}`}>
              <div className="content-card p-5 space-y-4 text-foreground/90">
                <p className="mb-2">
                  Actuellement étudiant en BUT Réseaux et Télécommunications à l'IUT de La Réunion,
                  je suis passionné par les nouvelles technologies et particulièrement intéressé
                  par la gestion des réseaux et la cybersécurité.
                </p>
                <p className="mb-2">
                  Mon objectif est de me spécialiser dans ces domaines et d'obtenir des certifications
                  reconnues comme CCNA et CCNP. Je suis constamment à la recherche de nouvelles
                  opportunités d'apprentissage et de défis techniques.
                </p>
                <p>
                  Je suis enthousiaste à l'idée de collaborer sur des projets innovants et d'échanger
                  des idées avec d'autres passionnés du domaine.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <Button className="nav-button group focus-visible-outline interactive-element">
                  <Download size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  {language === "fr" ? "Télécharger CV" : "Download CV"}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", inline: "start" })}
                  className="hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500 group focus-visible-outline interactive-element"
                >
                  <Mail size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  {language === "fr" ? "Me contacter" : "Contact me"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
