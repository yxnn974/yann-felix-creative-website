import {
  Server,
  Terminal,
  Shield,
  Network,
  Database,
  Code,
  Monitor,
  Settings,
  Users,
  Brain,
  Target,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

const Skills = () => {
  const { language } = useLanguage();

  const skillsData = {
    fr: {
      technical: [
        {
          title: "Réseaux et Télécommunications",
          icon: <Network className="w-6 h-6" />,
          skills: ["TCP/IP", "Routage", "VLAN", "DNS", "Sécurité réseau"],
        },
        {
          title: "Programmation et Automatisation",
          icon: <Code className="w-6 h-6" />,
          skills: ["Python", "Shell scripting", "SQL", "Ansible"],
        },
        {
          title: "Systèmes et Virtualisation",
          icon: <Server className="w-6 h-6" />,
          skills: ["Linux", "Windows Server", "Docker", "VirtualBox"],
        },
        {
          title: "Outils techniques",
          icon: <Terminal className="w-6 h-6" />,
          skills: ["Cisco Packet Tracer", "Wireshark", "Git"],
        },
      ],
      soft: [
        {
          title: "Travail d'équipe",
          icon: <Users className="w-6 h-6" />,
          skills: ["Communication", "Collaboration", "Leadership"],
        },
        {
          title: "Résolution de problèmes",
          icon: <Brain className="w-6 h-6" />,
          skills: ["Analyse", "Créativité", "Pensée critique"],
        },
        {
          title: "Gestion de projet",
          icon: <Target className="w-6 h-6" />,
          skills: ["Organisation", "Planification", "Suivi"],
        },
        {
          title: "Innovation",
          icon: <Lightbulb className="w-6 h-6" />,
          skills: ["Veille technologique", "Adaptation", "Curiosité"],
        },
      ],
    },
    en: {
      technical: [
        {
          title: "Networks and Telecommunications",
          icon: <Network className="w-6 h-6" />,
          skills: ["TCP/IP", "Routing", "VLAN", "DNS", "Network Security"],
        },
        {
          title: "Programming and Automation",
          icon: <Code className="w-6 h-6" />,
          skills: ["Python", "Shell scripting", "SQL", "Ansible"],
        },
        {
          title: "Systems and Virtualization",
          icon: <Server className="w-6 h-6" />,
          skills: ["Linux", "Windows Server", "Docker", "VirtualBox"],
        },
        {
          title: "Technical Tools",
          icon: <Terminal className="w-6 h-6" />,
          skills: ["Cisco Packet Tracer", "Wireshark", "Git"],
        },
      ],
      soft: [
        {
          title: "Teamwork",
          icon: <Users className="w-6 h-6" />,
          skills: ["Communication", "Collaboration", "Leadership"],
        },
        {
          title: "Problem Solving",
          icon: <Brain className="w-6 h-6" />,
          skills: ["Analysis", "Creativity", "Critical Thinking"],
        },
        {
          title: "Project Management",
          icon: <Target className="w-6 h-6" />,
          skills: ["Organization", "Planning", "Monitoring"],
        },
        {
          title: "Innovation",
          icon: <Lightbulb className="w-6 h-6" />,
          skills: ["Technology Watch", "Adaptation", "Curiosity"],
        },
      ],
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          {getTranslation(language, "skills")}
        </h2>
        
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              {getTranslation(language, "technicalSkills")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillsData[language].technical.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{category.icon}</div>
                    <h3 className="font-semibold text-lg text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 text-primary">
              {getTranslation(language, "softSkills")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {skillsData[language].soft.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{category.icon}</div>
                    <h3 className="font-semibold text-lg text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;