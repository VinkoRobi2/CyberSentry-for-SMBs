import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import BlogContent from './components/blog-content';
import Footer from './components/footer';
import { LanguageProvider } from './context/language-context';
import RansomwareArticlePage from './blogs/RansomwareArticle'; // Asegúrate de que esta ruta sea la correcta
import './App.css';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<BlogContent />} />
            <Route path="/ransomware-article" element={<RansomwareArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
