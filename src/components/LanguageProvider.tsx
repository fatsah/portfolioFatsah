"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { translations, Language, Translations } from "@/lib/translations";

const LanguageContext = createContext<{
  language: Language;
  t: Translations;
  toggleLanguage: () => void;
}>({
  language: "fr",
  t: translations.fr,
  toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const stored = localStorage.getItem("language") as Language | null;
    if (stored && (stored === "fr" || stored === "en")) {
      setLanguage(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "fr" ? "en" : "fr"));
  };

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
