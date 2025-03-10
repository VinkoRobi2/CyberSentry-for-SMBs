"use client";

import React, { createContext, useState, useContext, useEffect } from "react";
import translations from "../translations/index";

const LanguageContext = createContext(undefined);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");
  const availableLanguages = ["en", "de", "es", "hr", "pt", "hu"];

  useEffect(() => {
    // Comprobar si hay una preferencia de idioma guardada
    const savedLanguage = localStorage.getItem("preferredLanguage");
    if (savedLanguage && availableLanguages.includes(savedLanguage)) {
      setLanguage(savedLanguage);
    } else {
      // Detectar el idioma del navegador
      const browserLang = navigator.language.split("-")[0];
      if (availableLanguages.includes(browserLang)) {
        setLanguage(browserLang);
      }
    }
  }, []);

  useEffect(() => {
    // Guardar la preferencia de idioma y actualizar el atributo lang del documento
    localStorage.setItem("preferredLanguage", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    translations: translations[language] || translations.en,
    availableLanguages,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
