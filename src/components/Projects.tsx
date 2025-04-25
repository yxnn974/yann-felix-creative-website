
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

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
          className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-border hover:border-primary/50"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
            <p className="text-foreground/70 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Github size={16} />
                {language === 'fr' ? 'Code' : 'Code'}
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink size={16} />
                {language === 'fr' ? 'Démo' : 'Demo'}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen w-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center gradient-text">
            {language === 'fr' ? 'Mes Projets' : 'My Projects'}
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-12 mx-auto"></div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="flex justify-center mb-8">
              <TabsTrigger value="all">
                {language === 'fr' ? 'Tous' : 'All'}
              </TabsTrigger>
              <TabsTrigger value="academic">
                {language === 'fr' ? 'Académiques' : 'Academic'}
              </TabsTrigger>
              <TabsTrigger value="professional">
                {language === 'fr' ? 'Professionnels' : 'Professional'}
              </TabsTrigger>
              <TabsTrigger value="personal">
                {language === 'fr' ? 'Personnels' : 'Personal'}
              </TabsTrigger>
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
      </div>
    </div>
  );
};

export default Projects;
