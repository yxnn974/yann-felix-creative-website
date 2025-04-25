
import { GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

const Education = () => {
  const { language } = useLanguage();

  const educationData = {
    fr: [
      {
        period: "2024-2027",
        title: "BUT Réseaux et Télécommunications",
        institution: "IUT de La Réunion",
        description:
          "Formation approfondie en protocoles réseau, sécurité, administration système et télécommunications.",
      },
      {
        period: "2024",
        title: "Baccalauréat Scientifique",
        institution: "Lycée Roland Garros",
        description:
          "Spécialités Mathématiques et Sciences de l'Ingénieur, obtenu avec mention.",
      },
    ],
    en: [
      {
        period: "2024-2027",
        title: "Bachelor's in Networks and Telecommunications",
        institution: "IUT de La Réunion",
        description:
          "Advanced training in network protocols, security, system administration, and telecommunications.",
      },
      {
        period: "2024",
        title: "Scientific Baccalaureate",
        institution: "Roland Garros High School",
        description:
          "Specialization in Mathematics and Engineering Sciences, obtained with honors.",
      },
    ],
  };

  return (
    <div className="min-h-screen w-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 gradient-text">
            {getTranslation(language, "education")}
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/c41845dc-caef-4e8f-9e72-c644b0d3f241.png" 
                alt="IUT de La Réunion"
                className="rounded-lg shadow-lg w-full object-cover h-64"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <p className="font-medium text-lg text-white">IUT de La Réunion</p>
                <p className="text-sm text-white/70">Saint-Pierre, La Réunion</p>
              </div>
            </div>
            
            <div className="space-y-8">
              {educationData[language].map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Calendar size={18} />
                    <span>{item.period}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <GraduationCap size={18} />
                    <span>{item.institution}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
