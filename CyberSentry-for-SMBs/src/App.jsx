import { useState, useEffect } from 'react'
import Header from '../src/components/header'
import BlogContent from '../src/components/blog-content'
import Footer from '../src/components/footer'
import { LanguageProvider } from '../src/context/language-context'
import './App.css'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

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

export default App