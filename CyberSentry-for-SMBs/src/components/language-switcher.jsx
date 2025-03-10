"use client"

import { useLanguage } from "../context/language-context"
import { useState, useRef, useEffect } from "react"
import "../styles/language-switcher.css"

export default function LanguageSwitcher() {
  const { language, setLanguage, availableLanguages } = useLanguage()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (lang) => {
    setLanguage(lang)
    setDropdownOpen(false)
  }

  const getLanguageLabel = (code) => {
    const labels = {
      en: "English",
      de: "Deutsch",
      es: "Español",
      hr: "Hrvatski",
      pt: "Português",
      hu: "Magyar",
    }
    return labels[code] || code
  }

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
      >
        {getLanguageLabel(language)}
      </button>

      {dropdownOpen && (
        <ul className="language-dropdown">
          {availableLanguages.map((lang) => (
            <li key={lang}>
              <button
                className={`language-option ${lang === language ? "active" : ""}`}
                onClick={() => handleLanguageChange(lang)}
              >
                {getLanguageLabel(lang)}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

