import { Button } from "@/components/ui/button";
import { GraduationCap, Github, Gitlab, Twitter, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/utils/translations";

const Hero = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
              <span className="text-primary">Yann FELIX</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              {getTranslation(language, "subtitle")}
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: "0.4s" }}>
              <Button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="gap-2"
              >
                <GraduationCap size={20} />
                {getTranslation(language, "learnMore")}
              </Button>
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: "0.6s" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://gitlab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Gitlab size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="flex-1 max-w-md animate-fadeIn" style={{ animationDelay: "0.8s" }}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              alt="Data Center"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;