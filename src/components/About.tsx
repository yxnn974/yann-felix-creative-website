import { User, Mail, MapPin, Download, Send, Languages, Bike, Basketball } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          À propos de moi
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="Profile"
              className="rounded-lg shadow-lg max-w-md mx-auto"
            />
          </div>
          <div className="flex-1 space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Actuellement étudiant en BUT Réseaux et Télécommunications à l'IUT de La Réunion,
              je suis passionné par les nouvelles technologies et particulièrement intéressé
              par la gestion des réseaux et la cybersécurité.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mon objectif est de me spécialiser dans ces domaines et d'obtenir des certifications
              reconnues comme CCNA et CCNP. Je suis constamment à la recherche de nouvelles
              opportunités d'apprentissage et de défis techniques.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Je suis enthousiaste à l'idée de collaborer sur des projets innovants et d'échanger
              des idées avec d'autres passionnés du domaine.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement
              pour échanger sur nos passions communes dans le domaine des réseaux !
            </p>

            {/* Sections collapsibles */}
            <div className="space-y-4 mt-8">
              {/* Langues */}
              <Collapsible className="border rounded-lg p-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Languages className="text-primary" size={20} />
                    <span className="font-semibold">Langues</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Français</span>
                    <span className="text-gray-500">Langue maternelle</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Anglais</span>
                    <span className="text-gray-500">B1</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Centres d'intérêts */}
              <Collapsible className="border rounded-lg p-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Basketball className="text-primary" size={20} />
                    <span className="font-semibold">Centre d'intérêts</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Sports</span>
                    <span className="text-gray-500">Judo</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Nouvelles technologies</span>
                    <span className="text-gray-500">Veille technologique</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>

              {/* Déplacements */}
              <Collapsible className="border rounded-lg p-4">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Bike className="text-primary" size={20} />
                    <span className="font-semibold">Déplacements</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Permis B</span>
                    <span className="text-gray-500">Véhiculé</span>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-gray-600">
                <User size={20} className="text-primary" />
                <span>Yann FELIX</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <Mail size={20} className="text-primary" />
                <span>yann.felix@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600">
                <MapPin size={20} className="text-primary" />
                <span>IUT de La Réunion</span>
              </div>
            </div>
            <div className="flex gap-4 pt-6">
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="gap-2">
                <Send size={20} />
                Me contacter
              </Button>
              <Button variant="outline" className="gap-2">
                <Download size={20} />
                Télécharger mon CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;