"use client"
import BlogContent from "@/components/blog-content"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"
import "@/app/globals.css"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <main>
          <BlogContent />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

