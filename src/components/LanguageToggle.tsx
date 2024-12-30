import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
    >
      {language === "fr" ? "EN" : "FR"}
    </Button>
  );
}