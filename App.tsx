
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Info } from './components/Info';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { PrivacyPolicy, CookiePolicy } from './components/Policies';
import { CookieBanner } from './components/CookieBanner';
import { GoogleAnalytics } from './components/GoogleAnalytics';
import { AppContextType, View } from './types';
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
  const [view, setView] = useState<View>('home');
  const [cookiesAccepted, setCookiesAcceptedState] = useState<boolean | null>(() => {
    const saved = localStorage.getItem('cookiesAccepted');
    return saved !== null ? JSON.parse(saved) : null;
  });

  const setCookiesAccepted = (val: boolean) => {
    setCookiesAcceptedState(val);
    localStorage.setItem('cookiesAccepted', JSON.stringify(val));
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode, view, setView, cookiesAccepted, setCookiesAccepted }}>
      <div className="min-h-screen bg-natural-50 dark:bg-zinc-950 smooth-transition overflow-x-hidden font-sans">
        <GoogleAnalytics accepted={!!cookiesAccepted} />
        <Nav />
        
        <main>
          {view === 'home' && (
            <>
              <Hero />
              <Info />
              <Features />
              <Testimonials />
              <Faq />
            </>
          )}
          {view === 'privacy' && <PrivacyPolicy />}
          {view === 'cookie' && <CookiePolicy />}
        </main>

        <Footer />
        <CookieBanner />
        
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
