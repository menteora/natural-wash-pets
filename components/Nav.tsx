
import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { BUSINESS_INFO, TESTIMONIALS } from '../constants';
import { NavigationContract } from '../core/navigationContract';

interface NavProps {
  navigation: NavigationContract;
  darkMode: boolean;
  onToggleDarkMode: (val: boolean) => void;
}

export const Nav: React.FC<NavProps> = ({ navigation, darkMode, onToggleDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
      isScrolled 
        ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={navigation.goHome}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-natural-500 rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
            <span className="text-white font-serif text-xl font-bold">S</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-natural-900 dark:text-white hidden sm:block">
            Shampetto
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-natural-700 dark:text-natural-200 uppercase tracking-wider">
          <button onClick={() => navigation.goSection('info')} className="hover:text-natural-500 smooth-transition">Chi Siamo</button>
          <button onClick={() => navigation.goSection('features')} className="hover:text-natural-500 smooth-transition">Servizi</button>
          {TESTIMONIALS && TESTIMONIALS.length > 0 && (
            <button onClick={() => navigation.goSection('testimonials')} className="hover:text-natural-500 smooth-transition">Recensioni</button>
          )}
          <button onClick={() => navigation.goSection('faq')} className="hover:text-natural-500 smooth-transition">FAQ</button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onToggleDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-natural-100 dark:hover:bg-zinc-800 smooth-transition"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-natural-500" />}
          </button>
          <a 
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block bg-natural-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-natural-600 smooth-transition shadow-lg shadow-natural-500/20"
          >
            Dove Siamo
          </a>
        </div>
      </div>
    </nav>
  );
};
