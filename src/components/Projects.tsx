import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { language } = useLanguage();

  const projects = {
    fr: {
      academic: [
        {
          title: "Simulation Réseau Entreprise",
          description: "Conception et simulation d'une infrastructure réseau complète pour une PME avec Cisco Packet Tracer.",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
          tags: ["Cisco", "VLAN", "Routage", "Sécurité"],
          github: "#",
          demo: "#",
        },
      ],
      professional: [
        {
          title: "Automatisation Réseau",
          description: "Script Python pour l'automatisation de la configuration et la surveillance des équipements réseau.",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
          tags: ["Python", "Ansible", "Networking"],
          github: "#",
          demo: "#",
        },
      ],
      personal: [
        {
          title: "Analyse de Trafic",
          description: "Projet d'analyse de trafic réseau avec Wireshark et développement d'outils de reporting personnalisés.",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
          tags: ["Wireshark", "Python", "Analyse"],
          github: "#",
          demo: "#",
        },
      ],
    },
    en: {
      academic: [
        {
          title: "Enterprise Network Simulation",
          description: "Design and simulation of a complete network infrastructure for an SME using Cisco Packet Tracer.",
          image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
          tags: ["Cisco", "VLAN", "Routing", "Security"],
          github: "#",
          demo: "#",
        },
      ],
      professional: [
        {
          title: "Network Automation",
          description: "Python script for automating the configuration and monitoring of network equipment.",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
          tags: ["Python", "Ansible", "Networking"],
          github: "#",
          demo: "#",
        },
      ],
      personal: [
        {
          title: "Traffic Analysis",
          description: "Network traffic analysis project with Wireshark and development of custom reporting tools.",
          image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
          tags: ["Wireshark", "Python", "Analysis"],
          github: "#",
          demo: "#",
        },
      ],
    },
  };

  const renderProjects = (projectList) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-blue-900 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="gap-2 text-white">
                <Github size={16} />
                {getTranslation(language, "code")}
              </Button>
              <Button variant="outline" size="sm" className="gap-2 text-white">
                <ExternalLink size={16} />
                {getTranslation(language, "demo")}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          {getTranslation(language, "projects")}
        </h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all" className="text-white">{getTranslation(language, "all")}</TabsTrigger>
            <TabsTrigger value="academic" className="text-white">{getTranslation(language, "academic")}</TabsTrigger>
            <TabsTrigger value="professional" className="text-white">{getTranslation(language, "professional")}</TabsTrigger>
            <TabsTrigger value="personal" className="text-white">{getTranslation(language, "personal")}</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {renderProjects([
              ...projects[language].academic,
              ...projects[language].professional,
              ...projects[language].personal,
            ])}
          </TabsContent>
          <TabsContent value="academic">
            {renderProjects(projects[language].academic)}
          </TabsContent>
          <TabsContent value="professional">
            {renderProjects(projects[language].professional)}
          </TabsContent>
          <TabsContent value="personal">
            {renderProjects(projects[language].personal)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;