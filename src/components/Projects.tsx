import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = {
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
  };

  const renderProjects = (projectList) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="bg-blue-100 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Github size={16} />
                Code
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink size={16} />
                Demo
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Mes Projets
        </h2>
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex justify-center mb-8">
            <TabsTrigger value="all">Tous</TabsTrigger>
            <TabsTrigger value="academic">Académiques</TabsTrigger>
            <TabsTrigger value="professional">Professionnels</TabsTrigger>
            <TabsTrigger value="personal">Personnels</TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            {renderProjects([...projects.academic, ...projects.professional, ...projects.personal])}
          </TabsContent>
          <TabsContent value="academic">
            {renderProjects(projects.academic)}
          </TabsContent>
          <TabsContent value="professional">
            {renderProjects(projects.professional)}
          </TabsContent>
          <TabsContent value="personal">
            {renderProjects(projects.personal)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;