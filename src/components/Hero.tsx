
import { Button } from "@/components/ui/button";
import { Github, Gitlab, Twitter, Linkedin, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen w-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left max-w-2xl animate-fade-in">
            <p className="uppercase tracking-wider text-primary mb-2">
              {language === 'fr' ? 'Bienvenue' : 'Welcome'}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text font-playfair">Yann FELIX</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              {language === 'fr' 
                ? 'Étudiant en réseaux et télécommunications' 
                : 'Student in networks and telecommunications'}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 md:items-center mb-8">
              <Button className="gradient-button">
                <Download size={18} className="mr-2" />
                {language === "fr" ? "Télécharger CV" : "Download CV"}
              </Button>
              <div className="h-px md:h-6 md:w-px bg-border my-4 md:my-0 md:mx-4"></div>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://gitlab.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Gitlab size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {["TCP/IP", "Network Security", "Python", "Linux", "Cloud"].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex-1 max-w-md animate-fade-in relative">
            <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border-4 border-accent/20 relative">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                alt="Data Center"
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 bg-card rounded-lg shadow-lg">
              <p className="font-semibold text-primary">IUT de La Réunion</p>
              <p className="text-sm text-muted-foreground">Réseaux & Télécommunications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
