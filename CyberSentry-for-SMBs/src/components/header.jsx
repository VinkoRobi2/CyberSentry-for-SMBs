"use client"

import { useState } from "react"
import { useLanguage } from "../context/language-context"
import LanguageSwitcher from "./language-switcher"
import { Shield } from "lucide-react"
import "../styles/header.css"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { translations } = useLanguage()

  return (
    <header className="header">
      <div className="logo-container">
        <Shield className="logo-icon" />
        <h1 className="logo-text">CyberSentry</h1>
        <span className="logo-tagline">for SMBs</span>
      </div>

      <div className="nav-container">
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={translations.toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#home">{translations.home}</a>
            </li>
            <li>
              <a href="#services">{translations.services}</a>
            </li>
            <li>
              <a href="#about">{translations.about}</a>
            </li>
            <li>
              <a href="#blog">{translations.blog}</a>
            </li>
            <li>
              <a href="#contact">{translations.contact}</a>
            </li>
          </ul>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  )
}

