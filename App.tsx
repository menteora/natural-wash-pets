
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Info } from './components/Info';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { AppContextType } from './types';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from './constants';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="min-h-screen bg-natural-50 dark:bg-zinc-950 smooth-transition overflow-x-hidden">
        <Nav />
        <main>
          <Hero />
          <Info />
          <Features />
          <Testimonials />
          <Faq />
        </main>
        <Footer />
        
        {/* Floating WhatsApp Button */}
        <a 
          href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 smooth-transition flex items-center justify-center group"
          aria-label="Chatta con noi su WhatsApp"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 smooth-transition whitespace-nowrap font-bold">
            Chatta con noi
          </span>
        </a>
      </div>
    </AppContext.Provider>
  );
};

export default App;
