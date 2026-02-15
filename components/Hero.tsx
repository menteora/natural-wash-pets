
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { BUSINESS_INFO, STRINGS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 scroll-mt-28">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-natural-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-wood-500 rounded-full blur-3xl translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-natural-100 dark:bg-natural-900/30 rounded-full text-natural-600 dark:text-natural-400 text-sm font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Star className="w-4 h-4 fill-current" />
            <span>{STRINGS.hero.badge}</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-[1.1] dark:text-white">
            <span className="text-reveal-wrapper">
              <span className="inline-block animate-scale-in stagger-1">
                {STRINGS.hero.titlePart1}
              </span>
            </span>
            <span className="text-reveal-wrapper">
              <span className="inline-block animate-scale-in stagger-2 text-natural-500 italic animate-float">
                {STRINGS.hero.titlePart2}
              </span>
            </span>
          </h1>
          
          <p className="text-lg text-natural-700 dark:text-natural-300 max-w-xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 stagger-3">
            {STRINGS.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <a 
              href={BUSINESS_INFO.googleMapsUrl}
              className="group flex items-center justify-center gap-2 bg-natural-500 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-natural-600 smooth-transition shadow-xl shadow-natural-500/20 hover:scale-[1.02] active:scale-95"
            >
              {STRINGS.hero.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex flex-col justify-center px-4">
              <span className="text-sm font-medium text-natural-500 uppercase tracking-widest">{STRINGS.hero.status}</span>
              <span className="text-lg font-bold dark:text-white">{BUSINESS_INFO.hours}</span>
            </div>
          </div>
        </div>

        <div className="relative animate-in fade-in zoom-in duration-1000">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800" 
              alt="Happy dog washing" 
              className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-natural-900/60 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <span className="text-natural-500 font-bold text-xl">MB</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Magic Box Experience</h3>
                  <p className="text-sm opacity-80">Design monoblocco ergonomico</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white dark:bg-zinc-800 p-6 rounded-3xl shadow-xl animate-float">
             <div className="text-center">
                <span className="block text-3xl font-bold text-natural-500">100%</span>
                <span className="text-xs font-semibold text-natural-400 uppercase">Self Service</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
