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
    <section id="education" className="py-20 bg-gray-900 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          {getTranslation(language, "education")}
        </h2>
        <div className="max-w-3xl mx-auto">
          {educationData[language].map((item, index) => (
            <div
              key={index}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-px bg-primary">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 rounded-full bg-primary"></div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg shadow-md p-6 ml-8">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Calendar size={20} />
                  <span className="text-white">{item.period}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <div className="flex items-center gap-2 text-gray-300 mb-4">
                  <GraduationCap size={20} />
                  <span>{item.institution}</span>
                </div>
                <p className="text-gray-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;