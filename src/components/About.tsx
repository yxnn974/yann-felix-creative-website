
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Download } from "lucide-react";

const About = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen w-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center gradient-text">
            {language === 'fr' ? 'À propos de moi' : 'About me'}
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-12 mx-auto"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="animate-fade-in">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Profile"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-card rounded-lg p-4 border border-border hover:border-primary transition-colors">
                  <h3 className="font-semibold text-primary">Langues</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Français</span>
                      <span>Natif</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Anglais</span>
                      <span>B2</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Espagnol</span>
                      <span>B1</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-card rounded-lg p-4 border border-border hover:border-accent transition-colors">
                  <h3 className="font-semibold text-accent">Mobilité</h3>
                  <ul className="mt-2 space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span>Permis B</span>
                      <span>✓</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Véhicule</span>
                      <span>✓</span>
                    </li>
                  </ul>
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
              
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">Basketball</div>
                <div className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">Randonnée</div>
                <div className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">Musique</div>
                <div className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">Cinéma</div>
                <div className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">Technologie</div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="gradient-button">
                  <Download size={18} className="mr-2" />
                  {language === "fr" ? "Télécharger CV" : "Download CV"}
                </Button>
                <Button variant="outline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", inline: "start" })}>
                  <Mail size={18} className="mr-2" />
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
