
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Server,
  Shield,
  Network,
  Code,
  Database,
  Radio,
  Laptop,
  Users,
  BrainCircuit,
  Lightbulb,
  Target,
  BarChart3
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const { language } = useLanguage();
  
  const technicalSkills = [
    { name: "TCP/IP", value: 90, icon: <Network className="w-5 h-5" /> },
    { name: "Network Security", value: 85, icon: <Shield className="w-5 h-5" /> },
    { name: "Linux", value: 80, icon: <Server className="w-5 h-5" /> },
    { name: "Python", value: 75, icon: <Code className="w-5 h-5" /> },
    { name: "SQL", value: 70, icon: <Database className="w-5 h-5" /> },
    { name: "Wireshark", value: 85, icon: <Radio className="w-5 h-5" /> },
    { name: "Windows Server", value: 75, icon: <Laptop className="w-5 h-5" /> },
    { name: "Cisco Packet Tracer", value: 90, icon: <BarChart3 className="w-5 h-5" /> },
  ];
  
  const softSkills = [
    { name: language === 'fr' ? "Travail d'équipe" : "Teamwork", icon: <Users className="w-5 h-5" /> },
    { name: language === 'fr' ? "Résolution de problèmes" : "Problem Solving", icon: <BrainCircuit className="w-5 h-5" /> },
    { name: language === 'fr' ? "Créativité" : "Creativity", icon: <Lightbulb className="w-5 h-5" /> },
    { name: language === 'fr' ? "Organisation" : "Organization", icon: <Target className="w-5 h-5" /> },
  ];
  
  const SkillBar = ({ name, value, icon }) => (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="text-primary">{icon}</div>
          <h3 className="font-medium">{name}</h3>
        </div>
        <span className="text-sm text-muted-foreground">{value}%</span>
      </div>
      <Progress value={value} className="h-2" />
    </div>
  );
  
  const SoftSkillCard = ({ name, icon }) => (
    <div className="bg-card rounded-lg p-5 border border-border text-center hover:border-primary transition-colors hover:transform hover:scale-105 duration-200">
      <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
        {icon}
      </div>
      <h3 className="font-medium">{name}</h3>
    </div>
  );

  return (
    <div className="min-h-screen w-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center gradient-text">
            {language === 'fr' ? 'Compétences' : 'Skills'}
          </h2>
          
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mb-12 mx-auto"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8 animate-fade-in">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code className="text-primary" />
                {language === 'fr' ? 'Compétences techniques' : 'Technical Skills'}
              </h3>
              
              <div>
                {technicalSkills.map((skill, index) => (
                  <SkillBar 
                    key={index} 
                    name={skill.name} 
                    value={skill.value} 
                    icon={skill.icon} 
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-8 animate-fade-in delay-200">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Users className="text-accent" />
                {language === 'fr' ? 'Compétences personnelles' : 'Soft Skills'}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <SoftSkillCard 
                    key={index} 
                    name={skill.name} 
                    icon={skill.icon} 
                  />
                ))}
              </div>
              
              <div className="mt-8 bg-card rounded-lg border border-border p-6 hover:border-accent transition-colors">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {language === 'fr' ? 'Certifications visées' : 'Target Certifications'}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Cisco CCNA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Cisco CCNP</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>CompTIA Security+</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
