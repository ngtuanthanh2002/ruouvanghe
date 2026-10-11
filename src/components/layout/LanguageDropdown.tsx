"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LANGUAGES, Language } from "@/lib/translations";
import styles from "./LanguageDropdown.module.css";

interface LanguageDropdownProps {
  variant?: "header" | "mobile";
  onSelect?: () => void;
}

export default function LanguageDropdown({
  variant = "header",
  onSelect,
}: LanguageDropdownProps) {
  const { lang, setLang, currentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (selectedLang: Language) => {
    setLang(selectedLang);
    setIsOpen(false);
    if (onSelect) onSelect();
  };

  const isMobile = variant === "mobile";

  return (
    <div
      ref={dropdownRef}
      className={`${styles.dropdownContainer} ${isMobile ? styles.mobileContainer : ""}`}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${styles.triggerBtn} ${isOpen ? styles.triggerBtnOpen : ""} ${isMobile ? styles.mobileTriggerBtn : ""}`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Chọn ngôn ngữ / Select language"
      >
        <span className={styles.flagIcon}>{currentLanguage.flag}</span>
        <span className={styles.langText}>{currentLanguage.nativeLabel}</span>
        <span
          className={`${styles.caretIcon} ${isOpen ? styles.caretIconOpen : ""}`}
          aria-hidden="true"
        >
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m1 1 4 4 4-4" />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Danh sách ngôn ngữ"
          className={`${styles.dropdownMenu} ${isMobile ? styles.mobileDropdownMenu : ""}`}
        >
          {LANGUAGES.map((item) => {
            const isSelected = item.code === lang;
            return (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(item.code)}
                className={`${styles.dropdownItem} ${isSelected ? styles.dropdownItemActive : ""}`}
              >
                <div className={styles.itemLeft}>
                  <span className={styles.itemFlag}>{item.flag}</span>
                  <span className={styles.itemLabel}>{item.nativeLabel}</span>
                </div>
                {isSelected && (
                  <span className={styles.itemCheck} aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
