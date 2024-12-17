import {
  Server,
  Terminal,
  Shield,
  Network,
  Database,
  Code,
  Monitor,
  Settings,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
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
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">{category.icon}</div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-600"
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
    </section>
  );
};

export default Skills;