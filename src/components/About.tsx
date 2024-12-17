import { User, Mail, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          À propos de moi
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
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
              par la virtualisation et l'automatisation réseau.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mon objectif est de me spécialiser dans ces domaines et d'obtenir des certifications
              reconnues comme CCNA et CCNP. Je suis constamment à la recherche de nouvelles
              opportunités d'apprentissage et de défis techniques.
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;