
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useProjects } from "@/hooks/useProjects";
import { Tables } from "@/integrations/supabase/types";

type Project = Tables<'projects'>;

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const { language } = useLanguage();
  const { projects, loading, error } = useProjects();

  const filterProjectsByCategory = (category: string) => {
    if (category === "all") return projects;
    return projects.filter(project => project.category === category);
  };

  const getProjectsByCategory = (category: string) => {
    return filterProjectsByCategory(category);
  };

  const renderProjects = (projectList: Project[]) => {
    if (loading) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">{language === 'fr' ? 'Chargement...' : 'Loading...'}</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-red-500">
            {language === 'fr' ? 'Erreur lors du chargement des projets' : 'Error loading projects'}
          </div>
        </div>
      );
    }

    if (projectList.length === 0) {
      return (
        <div className="flex justify-center items-center h-64">
          <div className="text-lg text-muted-foreground">
            {language === 'fr' ? 'Aucun projet trouvé' : 'No projects found'}
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 border border-border hover:border-primary/50"
          >
            <img
              src={project.image_url}
              alt={language === 'fr' ? project.title_fr : project.title_en}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {language === 'fr' ? project.title_fr : project.title_en}
              </h3>
              <p className="text-foreground/70 mb-4">
                {language === 'fr' ? project.description_fr : project.description_en}
              </p>
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
                {project.github_url && project.github_url !== '#' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => window.open(project.github_url, '_blank')}
                  >
                    <Github size={16} />
                    {language === 'fr' ? 'Code' : 'Code'}
                  </Button>
                )}
                {project.demo_url && project.demo_url !== '#' && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2"
                    onClick={() => window.open(project.demo_url, '_blank')}
                  >
                    <ExternalLink size={16} />
                    {language === 'fr' ? 'Démo' : 'Demo'}
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

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
              {renderProjects(getProjectsByCategory("all"))}
            </TabsContent>
            <TabsContent value="academic">
              {renderProjects(getProjectsByCategory("academic"))}
            </TabsContent>
            <TabsContent value="professional">
              {renderProjects(getProjectsByCategory("professional"))}
            </TabsContent>
            <TabsContent value="personal">
              {renderProjects(getProjectsByCategory("personal"))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Projects;
