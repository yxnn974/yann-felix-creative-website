import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe, Basketball, Mountains } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">
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
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Actuellement étudiant en BUT Réseaux et Télécommunications à l'IUT de La Réunion,
              je suis passionné par les nouvelles technologies et particulièrement intéressé
              par la gestion des réseaux et la cybersécurité.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mon objectif est de me spécialiser dans ces domaines et d'obtenir des certifications
              reconnues comme CCNA et CCNP. Je suis constamment à la recherche de nouvelles
              opportunités d'apprentissage et de défis techniques.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Je suis enthousiaste à l'idée de collaborer sur des projets innovants et d'échanger
              des idées avec d'autres passionnés du domaine.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              N'hésitez pas à me contacter pour discuter de projets, d'opportunités ou simplement
              pour échanger sur nos passions communes dans le domaine des réseaux !
            </p>

            <div className="space-y-4 mt-8">
              {/* Langues */}
              <Collapsible className="border rounded-lg p-4 dark:border-gray-700">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 dark:text-gray-300" />
                    <span className="font-semibold dark:text-white">Langues</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="french">
                      <AccordionTrigger>Français</AccordionTrigger>
                      <AccordionContent>Langue maternelle (Natif)</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="english">
                      <AccordionTrigger>Anglais</AccordionTrigger>
                      <AccordionContent>Niveau B2</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="spanish">
                      <AccordionTrigger>Espagnol</AccordionTrigger>
                      <AccordionContent>Niveau B1</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CollapsibleContent>
              </Collapsible>

              {/* Centres d'intérêts */}
              <Collapsible className="border rounded-lg p-4 dark:border-gray-700">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <Basketball className="h-5 w-5 dark:text-gray-300" />
                    <span className="font-semibold dark:text-white">Centre d'intérêts</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="basketball">
                      <AccordionTrigger>Basketball</AccordionTrigger>
                      <AccordionContent>Pratique régulière en club</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="hiking">
                      <AccordionTrigger>
                        <div className="flex items-center gap-2">
                          <Mountains className="h-4 w-4" />
                          Randonnée
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>Exploration des sentiers de La Réunion</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CollapsibleContent>
              </Collapsible>

              {/* Déplacements */}
              <Collapsible className="border rounded-lg p-4 dark:border-gray-700">
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold dark:text-white">Déplacements</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pt-4">
                  <Accordion type="single" collapsible>
                    <AccordionItem value="license">
                      <AccordionTrigger>Permis B</AccordionTrigger>
                      <AccordionContent>Véhiculé</AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CollapsibleContent>
              </Collapsible>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <span>Yann FELIX</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <span>yann.felix@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300">
                <span>IUT de La Réunion</span>
              </div>
            </div>
            <div className="flex gap-4 pt-6">
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Me contacter
              </Button>
              <Button variant="outline">
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