"use client"

import { useLanguage } from "@/context/language-context"
import { Shield, Mail, Phone, MapPin } from "lucide-react"
import "../styles/footer.css"

export default function Footer() {
  const { translations } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <Shield className="footer-logo-icon" />
            <h2>CyberSentry</h2>
          </div>
          <p>{translations.footerTagline}</p>
        </div>

        <div className="footer-section">
          <h3>{translations.quickLinks}</h3>
          <ul className="footer-links">
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
        </div>

        <div className="footer-section">
          <h3>{translations.contactUs}</h3>
          <ul className="contact-info">
            <li>
              <Mail className="contact-icon" />
              <span>info@cybersentry.com</span>
            </li>
            <li>
              <Phone className="contact-icon" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li>
              <MapPin className="contact-icon" />
              <span>{translations.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 CyberSentry. {translations.allRightsReserved}</p>
      </div>
    </footer>
  )
}

