import { Button } from "@/components/ui/button";
import { useState } from "react";

export function LanguageToggle() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

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