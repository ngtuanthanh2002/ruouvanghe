"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey, Language } from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "vanghe_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("vi");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === "en" || savedLang === "vi") {
        setLangState(savedLang);
      }
    } catch {
      // localStorage unavailable or restricted
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // localStorage unavailable
    }
  };

  const toggleLang = () => {
    const nextLang: Language = lang === "vi" ? "en" : "vi";
    setLang(nextLang);
  };

  const t = (key: TranslationKey): string => {
    const dict = translations[lang] || translations.vi;
    return dict[key] || translations.vi[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
