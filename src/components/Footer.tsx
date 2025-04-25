
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-background/80 backdrop-blur-sm py-2 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} Yann FELIX. {language === "fr" ? "Tous droits réservés" : "All rights reserved"}.
          </p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <span>
              {language === "fr" ? "Créé avec " : "Built with "} 
              <span className="text-primary">❤</span>
            </span>
            <div className="flex gap-2">
              <img 
                src="/lovable-uploads/c41845dc-caef-4e8f-9e72-c644b0d3f241.png" 
                alt="IUT Logo" 
                className="h-6 opacity-60 hover:opacity-100 transition-opacity"
              />
              <img 
                src="/lovable-uploads/1668b841-5164-4759-815b-1dff29b3892b.png" 
                alt="Department Logo" 
                className="h-6 opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
