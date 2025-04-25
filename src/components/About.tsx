import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  Mail, 
  Download, 
  Languages, 
  Car, 
  Basketball, 
  Mountain, 
  Music, 
  Laptop, 
  Plane, 
  CarFront 
} from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen w-screen flex items-center">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center gradient-text animate-fade-in">
            {language === 'fr' ? 'À propos de moi' : 'About me'}
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-12 mx-auto"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6 animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Profile"
                className="rounded-lg shadow-lg w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-300"
              />
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors group">
                  <div className="flex items-center gap-2 mb-3">
                    <Languages className="text-primary group-hover:scale-110 transition-transform" size={20} />
                    <h3 className="font-semibold text-primary">{language === 'fr' ? 'Langues' : 'Languages'}</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
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
                
                <div className="bg-card rounded-lg p-4 border border-border hover:border-accent transition-colors group">
                  <div className="flex items-center gap-2 mb-3">
                    <Car className="text-accent group-hover:scale-110 transition-transform" size={20} />
                    <h3 className="font-semibold text-accent">{language === 'fr' ? 'Mobilité' : 'Mobility'}</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between items-center">
                      <span>Permis B</span>
                      <span>✓</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-lg p-4 border border-border hover:border-secondary transition-colors group">
                  <div className="flex items-center gap-2 mb-3">
                    <Basketball className="text-secondary group-hover:scale-110 transition-transform" size={20} />
                    <h3 className="font-semibold text-secondary">{language === 'fr' ? 'Intérêts' : 'Interests'}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
                      <Basketball size={12} />
                      <span>Basketball</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
                      <Mountain size={12} />
                      <span>{language === 'fr' ? 'Randonnée' : 'Hiking'}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
                      <Music size={12} />
                      <span>Musique</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
                      <Laptop size={12} />
                      <span>Tech</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
                      <Plane size={12} />
                      <span>{language === 'fr' ? 'Voyage' : 'Travel'}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground hover:bg-muted/80 transition-colors">
                      <CarFront size={12} />
                      <span>{language === 'fr' ? 'Sport auto' : 'Motorsport'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-fade-in delay-200">
              <div className="space-y-4 text-foreground/90">
                <p>
                  Actuellement étudiant en BUT Réseaux et Télécommunications à l'IUT de La Réunion,
                  je suis passionné par les nouvelles technologies et particulièrement intéressé
                  par la gestion des réseaux et la cybersécurité.
                </p>
                <p>
                  Mon objectif est de me spécialiser dans ces domaines et d'obtenir des certifications
                  reconnues comme CCNA et CCNP. Je suis constamment à la recherche de nouvelles
                  opportunités d'apprentissage et de défis techniques.
                </p>
                <p>
                  Je suis enthousiaste à l'idée de collaborer sur des projets innovants et d'échanger
                  des idées avec d'autres passionnés du domaine.
                </p>
                <p>
                  N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement
                  pour échanger sur nos passions communes dans le domaine des réseaux !
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="gradient-button group">
                  <Download size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                  {language === "fr" ? "Télécharger CV" : "Download CV"}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", inline: "start" })}
                  className="hover:bg-accent/10 group"
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
