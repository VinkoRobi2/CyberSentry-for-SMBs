"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "../context/language-context"
import "../styles/RansomwareArticle.css"

export default function RansomwareArticlePage() {
  const { translations, language } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const { ransomware } = translations

  useEffect(() => {
    setMounted(true)
    // Scroll to top when page loads
    window.scrollTo(0, 0)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="app-container">
      <main className="article-main">
        <div className="article-container">
          <div className="article-header">
            <a href="/" className="back-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {ransomware.backToHome}
            </a>
            <div className="article-meta">
              <div className="article-tags">
                <span className="tag">{ransomware.tags.security}</span>
                <span className="tag">{ransomware.tags.ransomware}</span>
                <span className="tag">{ransomware.tags.smb}</span>
              </div>
              <span className="publish-date">{ransomware.publishDate}</span>
            </div>
            <h1 className="article-title">{ransomware.title}</h1>
            <p className="article-subtitle">{ransomware.subtitle}</p>
          </div>

          <div className="article-content-wrapper">
            <aside className="table-of-contents">
              <div className="toc-sticky">
                <h3>{ransomware.tableOfContents}</h3>
                <ul>
                  <li>
                    <a href="#introduction">{ransomware.sections.introduction.title}</a>
                  </li>
                  <li>
                    <a href="#what-is">{ransomware.sections.whatIs?.title || "What is Ransomware?"}</a>
                  </li>
                  <li>
                    <a href="#why-target">{ransomware.sections.whyTarget.title}</a>
                  </li>
                  <li>
                    <a href="#prevention">{ransomware.sections.prevention.title}</a>
                  </li>
                  <li>
                    <a href="#backup">{ransomware.sections.backup.title}</a>
                  </li>
                  <li>
                    <a href="#training">{ransomware.sections.training.title}</a>
                  </li>
                  <li>
                    <a href="#response">{ransomware.sections.response.title}</a>
                  </li>
                  <li>
                    <a href="#conclusion">{ransomware.sections.conclusion.title}</a>
                  </li>
                </ul>

                <div className="share-article">
                  <p>{ransomware.share}</p>
                  <div className="social-icons">
                    <a href="#" aria-label="Share on Twitter">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </a>
                    <a href="#" aria-label="Share on Facebook">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="#" aria-label="Share on LinkedIn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <article className="article-content">
              <section id="introduction" className="article-section">
                <h2>{ransomware.sections.introduction.title}</h2>
                <p>{ransomware.sections.introduction.content1}</p>
                <p>{ransomware.sections.introduction.content2}</p>

                <div className="statistic-highlight">
                  <div className="statistic-number">300%</div>
                  <p>{ransomware.sections.introduction.statistic}</p>
                </div>
              </section>

              <section id="what-is" className="article-section">
                <h2>{ransomware.sections.whatIs?.title || "What is Ransomware?"}</h2>
                <p>{ransomware.sections.whatIs?.content1}</p>
                <p>{ransomware.sections.whatIs?.content2}</p>

                <div className="article-image">
                  <img src="/placeholder.svg?height=800&width=400" alt="Ransomware attack flow" />
                  <p className="image-caption">{ransomware.sections.whatIs?.imageCaption}</p>
                </div>

                <h3>{ransomware.sections.whatIs?.typesTitle}</h3>
                <div className="ransomware-types">
                  <div className="type-card">
                    <h4>{ransomware.sections.whatIs?.types.encryptor.name}</h4>
                    <p>{ransomware.sections.whatIs?.types.encryptor.description}</p>
                  </div>
                  <div className="type-card">
                    <h4>{ransomware.sections.whatIs?.types.locker.name}</h4>
                    <p>{ransomware.sections.whatIs?.types.locker.description}</p>
                  </div>
                  <div className="type-card">
                    <h4>{ransomware.sections.whatIs?.types.doxware.name}</h4>
                    <p>{ransomware.sections.whatIs?.types.doxware.description}</p>
                  </div>
                  <div className="type-card">
                    <h4>{ransomware.sections.whatIs?.types.raas.name}</h4>
                    <p>{ransomware.sections.whatIs?.types.raas.description}</p>
                  </div>
                </div>
              </section>

              <section id="why-target" className="article-section">
                <h2>{ransomware.sections.whyTarget.title}</h2>
                <p>{ransomware.sections.whyTarget.content1}</p>
                <p>{ransomware.sections.whyTarget.content2}</p>

                <div className="callout-box">
                  <h4>{ransomware.sections.whyTarget.calloutTitle}</h4>
                  <p>{ransomware.sections.whyTarget.calloutContent}</p>
                </div>

                <div className="reasons-grid">
                  <div className="reason-card">
                    <div className="reason-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.whyTarget.reasons.security.title}</h4>
                    <p>{ransomware.sections.whyTarget.reasons.security.description}</p>
                  </div>
                  <div className="reason-card">
                    <div className="reason-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.whyTarget.reasons.resources.title}</h4>
                    <p>{ransomware.sections.whyTarget.reasons.resources.description}</p>
                  </div>
                  <div className="reason-card">
                    <div className="reason-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.whyTarget.reasons.awareness.title}</h4>
                    <p>{ransomware.sections.whyTarget.reasons.awareness.description}</p>
                  </div>
                  <div className="reason-card">
                    <div className="reason-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="M12 16v.01"></path>
                        <path d="M6 12h12"></path>
                        <path d="M12 8v4"></path>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.whyTarget.reasons.payment.title}</h4>
                    <p>{ransomware.sections.whyTarget.reasons.payment.description}</p>
                  </div>
                </div>
              </section>

              <section id="prevention" className="article-section">
                <h2>{ransomware.sections.prevention.title}</h2>
                <p>{ransomware.sections.prevention.content1}</p>

                <div className="strategy-container">
                  <div className="strategy-card">
                    <h3>{ransomware.sections.prevention.strategies.updates.title}</h3>
                    <p>{ransomware.sections.prevention.strategies.updates.description}</p>
                    <div className="tips-box">
                      <h4>{ransomware.sections.prevention.tipsTitle}</h4>
                      <ul>
                        <li>{ransomware.sections.prevention.strategies.updates.tips.tip1}</li>
                        <li>{ransomware.sections.prevention.strategies.updates.tips.tip2}</li>
                        <li>{ransomware.sections.prevention.strategies.updates.tips.tip3}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="strategy-card">
                    <h3>{ransomware.sections.prevention.strategies.antivirus.title}</h3>
                    <p>{ransomware.sections.prevention.strategies.antivirus.description}</p>
                    <div className="tips-box">
                      <h4>{ransomware.sections.prevention.tipsTitle}</h4>
                      <ul>
                        <li>{ransomware.sections.prevention.strategies.antivirus.tips.tip1}</li>
                        <li>{ransomware.sections.prevention.strategies.antivirus.tips.tip2}</li>
                        <li>{ransomware.sections.prevention.strategies.antivirus.tips.tip3}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="strategy-card">
                    <h3>{ransomware.sections.prevention.strategies.firewall.title}</h3>
                    <p>{ransomware.sections.prevention.strategies.firewall.description}</p>
                    <div className="tips-box">
                      <h4>{ransomware.sections.prevention.tipsTitle}</h4>
                      <ul>
                        <li>{ransomware.sections.prevention.strategies.firewall.tips.tip1}</li>
                        <li>{ransomware.sections.prevention.strategies.firewall.tips.tip2}</li>
                        <li>{ransomware.sections.prevention.strategies.firewall.tips.tip3}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="strategy-card">
                    <h3>{ransomware.sections.prevention.strategies.email.title}</h3>
                    <p>{ransomware.sections.prevention.strategies.email.description}</p>
                    <div className="tips-box">
                      <h4>{ransomware.sections.prevention.tipsTitle}</h4>
                      <ul>
                        <li>{ransomware.sections.prevention.strategies.email.tips.tip1}</li>
                        <li>{ransomware.sections.prevention.strategies.email.tips.tip2}</li>
                        <li>{ransomware.sections.prevention.strategies.email.tips.tip3}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="backup" className="article-section">
                <h2>{ransomware.sections.backup.title}</h2>
                <p>{ransomware.sections.backup.content1}</p>
                <p>{ransomware.sections.backup.content2}</p>

                <h3>{ransomware.sections.backup.methodsTitle}</h3>
                <div className="methods-grid">
                  <div className="method-card">
                    <h4>{ransomware.sections.backup.methods.threeTwo.title}</h4>
                    <p>{ransomware.sections.backup.methods.threeTwo.description}</p>
                  </div>
                  <div className="method-card">
                    <h4>{ransomware.sections.backup.methods.offsite.title}</h4>
                    <p>{ransomware.sections.backup.methods.offsite.description}</p>
                  </div>
                  <div className="method-card">
                    <h4>{ransomware.sections.backup.methods.testing.title}</h4>
                    <p>{ransomware.sections.backup.methods.testing.description}</p>
                  </div>
                  <div className="method-card">
                    <h4>{ransomware.sections.backup.methods.encryption.title}</h4>
                    <p>{ransomware.sections.backup.methods.encryption.description}</p>
                  </div>
                </div>

                <div className="warning-box">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                  <div>
                    <h4>{ransomware.sections.backup.warningTitle}</h4>
                    <p>{ransomware.sections.backup.warningContent}</p>
                  </div>
                </div>
              </section>

              <section id="training" className="article-section">
                <h2>{ransomware.sections.training.title}</h2>
                <p>{ransomware.sections.training.content1}</p>
                <p>{ransomware.sections.training.content2}</p>

                <h3>{ransomware.sections.training.programTitle}</h3>
                <div className="steps-container">
                  <div className="step-item">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>{ransomware.sections.training.steps.awareness.title}</h4>
                      <p>{ransomware.sections.training.steps.awareness.description}</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>{ransomware.sections.training.steps.phishing.title}</h4>
                      <p>{ransomware.sections.training.steps.phishing.description}</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>{ransomware.sections.training.steps.passwords.title}</h4>
                      <p>{ransomware.sections.training.steps.passwords.description}</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>{ransomware.sections.training.steps.simulation.title}</h4>
                      <p>{ransomware.sections.training.steps.simulation.description}</p>
                    </div>
                  </div>
                  <div className="step-item">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h4>{ransomware.sections.training.steps.reporting.title}</h4>
                      <p>{ransomware.sections.training.steps.reporting.description}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="response" className="article-section">
                <h2>{ransomware.sections.response.title}</h2>
                <p>{ransomware.sections.response.content1}</p>

                <h3>{ransomware.sections.response.planTitle}</h3>
                <div className="response-steps">
                  <div className="response-step">
                    <div className="step-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="9" y1="3" x2="9" y2="21"></line>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.response.steps.isolate.title}</h4>
                    <p>{ransomware.sections.response.steps.isolate.description}</p>
                  </div>
                  <div className="response-step">
                    <div className="step-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.response.steps.identify.title}</h4>
                    <p>{ransomware.sections.response.steps.identify.description}</p>
                  </div>
                  <div className="response-step">
                    <div className="step-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.response.steps.report.title}</h4>
                    <p>{ransomware.sections.response.steps.report.description}</p>
                  </div>
                  <div className="response-step">
                    <div className="step-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="1 4 1 10 7 10"></polyline>
                        <polyline points="23 20 23 14 17 14"></polyline>
                        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.response.steps.recover.title}</h4>
                    <p>{ransomware.sections.response.steps.recover.description}</p>
                  </div>
                  <div className="response-step">
                    <div className="step-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                      </svg>
                    </div>
                    <h4>{ransomware.sections.response.steps.learn.title}</h4>
                    <p>{ransomware.sections.response.steps.learn.description}</p>
                  </div>
                </div>

                <div className="payment-question">
                  <h3>{ransomware.sections.response.paymentTitle}</h3>
                  <p>{ransomware.sections.response.paymentContent}</p>
                </div>
              </section>

              <section id="conclusion" className="article-section">
                <h2>{ransomware.sections.conclusion.title}</h2>
                <p>{ransomware.sections.conclusion.content1}</p>
                <p>{ransomware.sections.conclusion.content2}</p>

                <div className="cta-box">
                  <h3>{ransomware.sections.conclusion.ctaTitle}</h3>
                  <p>{ransomware.sections.conclusion.ctaContent}</p>
                  <button className="cta-button">{ransomware.sections.conclusion.ctaButton}</button>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
    </div>
  )
}

