
import { GraduationCap, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center gradient-text">
            {language === 'fr' ? 'Formation' : 'Education'}
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-12 mx-auto"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in">
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="/lovable-uploads/c41845dc-caef-4e8f-9e72-c644b0d3f241.png" 
                  alt="IUT de La Réunion"
                  className="w-full h-auto object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-medium text-xl text-white">IUT de La Réunion</p>
                  <p className="text-sm text-white/70 flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Saint-Pierre, La Réunion</span>
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-5 bg-card rounded-lg border border-border shadow-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {language === 'fr' ? 'Objectifs académiques' : 'Academic Goals'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-foreground/80">
                      {language === 'fr' 
                        ? "Obtenir mon BUT avec une spécialisation en cybersécurité" 
                        : "Obtain my Bachelor's degree with a specialization in cybersecurity"}
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-foreground/80">
                      {language === 'fr' 
                        ? "Poursuivre en Master Sécurité des Systèmes d'Information" 
                        : "Continue to a Master's degree in Information Systems Security"}
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                    <p className="text-foreground/80">
                      {language === 'fr' 
                        ? "Réaliser des projets concrets en lien avec l'industrie" 
                        : "Complete concrete projects linked to the industry"}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              {educationData[language].map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-6 border border-border hover:border-accent/50 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
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
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
              
              <div className="p-6 border-l-2 border-primary bg-card/50 rounded-r-lg animate-fade-in" style={{ animationDelay: '400ms' }}>
                <h3 className="text-xl font-semibold mb-2 text-accent">
                  {language === 'fr' ? 'Formation continue' : 'Continuing Education'}
                </h3>
                <p className="text-foreground/80">
                  {language === 'fr' 
                    ? "En parallèle de mes études, je suis des formations en ligne dans les domaines suivants:" 
                    : "Alongside my studies, I'm taking online courses in the following areas:"}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">Cisco Networking</div>
                  <div className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">Ethical Hacking</div>
                  <div className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground">Linux Administration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
