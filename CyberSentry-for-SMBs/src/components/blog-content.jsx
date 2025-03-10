"use client"

import { useLanguage } from "../context/language-context"
import { Lock, Server, AlertTriangle, Users } from "lucide-react"
import "../styles/blog-content.css"

export default function BlogContent() {
  const { translations } = useLanguage()

  return (
    <div className="blog-container">
      <section className="hero-section">
        <div className="hero-content">
          <h1>{translations.heroTitle}</h1>
          <p className="hero-subtitle">{translations.heroSubtitle}</p>
          <button className="cta-button">{translations.getStarted}</button>
        </div>
      </section>

      <section className="blog-section">
        <h2>{translations.latestArticles}</h2>

        <div className="blog-grid">
          <article className="blog-card">
            <div className="blog-icon">
              <Lock />
            </div>
            <h3>{translations.article1.title}</h3>
            <p>{translations.article1.excerpt}</p>
            <a href="#" className="read-more">
              {translations.readMore}
            </a>
          </article>

          <article className="blog-card">
            <div className="blog-icon">
              <Server />
            </div>
            <h3>{translations.article2.title}</h3>
            <p>{translations.article2.excerpt}</p>
            <a href="#" className="read-more">
              {translations.readMore}
            </a>
          </article>

          <article className="blog-card">
            <div className="blog-icon">
              <AlertTriangle />
            </div>
            <h3>{translations.article3.title}</h3>
            <p>{translations.article3.excerpt}</p>
            <a href="#" className="read-more">
              {translations.readMore}
            </a>
          </article>

          <article className="blog-card">
            <div className="blog-icon">
              <Users />
            </div>
            <h3>{translations.article4.title}</h3>
            <p>{translations.article4.excerpt}</p>
            <a href="#" className="read-more">
              {translations.readMore}
            </a>
          </article>
        </div>
      </section>

      <section className="featured-article">
        <h2>{translations.featuredArticle}</h2>
        <div className="featured-content">
          <div className="featured-image"></div>
          <div className="featured-text">
            <h3>{translations.featuredTitle}</h3>
            <p>{translations.featuredExcerpt}</p>
            <p>{translations.featuredContent}</p>
            <a href="#" className="read-more-btn">
              {translations.readFullArticle}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

