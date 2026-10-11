"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  translations,
  TranslationKey,
  Language,
  LANGUAGES,
  LanguageOption,
} from "@/lib/translations";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (key: TranslationKey) => string;
  languages: LanguageOption[];
  currentLanguage: LanguageOption;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "vanghe_lang";
const VALID_LANGS: Language[] = ["vi", "en", "ru", "ko", "zh"];

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default language is Vietnamese ("vi")
  const [lang, setLangState] = useState<Language>("vi");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang && VALID_LANGS.includes(savedLang)) {
        setLangState(savedLang);
      }
    } catch {
      // localStorage unavailable or restricted
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Language) => {
    if (!VALID_LANGS.includes(newLang)) return;
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // localStorage unavailable
    }
  };

  const toggleLang = () => {
    const currentIndex = VALID_LANGS.indexOf(lang);
    const nextIndex = (currentIndex + 1) % VALID_LANGS.length;
    setLang(VALID_LANGS[nextIndex]);
  };

  const t = (key: TranslationKey): string => {
    const dict = translations[lang] || translations.vi;
    return dict[key] || translations.en?.[key] || translations.vi[key] || key;
  };

  const currentLanguage =
    LANGUAGES.find((item) => item.code === lang) || LANGUAGES[0];

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        languages: LANGUAGES,
        currentLanguage,
      }}
    >
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
