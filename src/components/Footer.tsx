
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 bg-background/80 backdrop-blur-sm py-2 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center text-xs text-muted-foreground">
          <p>
            &copy; {currentYear} Yann FELIX. {language === "fr" ? "Tous droits réservés" : "All rights reserved"}.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
