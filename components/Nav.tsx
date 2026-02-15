
import React, { useState, useEffect } from 'react';
import { Sun, Moon, MapPin, Clock } from 'lucide-react';
import { useApp } from '../App';
import { BUSINESS_INFO } from '../constants';

export const Nav: React.FC = () => {
  const { darkMode, setDarkMode, setView, view } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${
      isScrolled 
        ? 'bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md py-4 shadow-sm' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => { setView('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 bg-natural-500 rounded-full flex items-center justify-center group-hover:scale-110 smooth-transition">
            <span className="text-white font-serif text-xl font-bold">N</span>
          </div>
          <span className="text-xl font-serif font-bold tracking-tight text-natural-900 dark:text-white hidden sm:block">
            Natural Wash <span className="text-natural-500">Pets</span>
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-natural-700 dark:text-natural-200 uppercase tracking-wider">
          <button onClick={() => scrollTo('info')} className="hover:text-natural-500 smooth-transition">Chi Siamo</button>
          <button onClick={() => scrollTo('features')} className="hover:text-natural-500 smooth-transition">Servizi</button>
          <button onClick={() => scrollTo('testimonials')} className="hover:text-natural-500 smooth-transition">Recensioni</button>
          <button onClick={() => scrollTo('faq')} className="hover:text-natural-500 smooth-transition">FAQ</button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
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
