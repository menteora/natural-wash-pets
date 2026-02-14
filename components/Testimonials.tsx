
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS, STRINGS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-zinc-900 smooth-transition">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-natural-900 dark:text-white mb-4">
            {STRINGS.testimonials.title}
          </h2>
          <p className="text-natural-600 dark:text-natural-400">
            {STRINGS.testimonials.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <div 
              key={t.id}
              className="p-8 bg-natural-50 dark:bg-zinc-800 rounded-[2.5rem] relative overflow-hidden group animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-4 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-16 h-16 text-natural-500" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-lg text-natural-700 dark:text-natural-300 italic mb-8 relative z-10">
                "{t.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-natural-200 dark:bg-zinc-700 rounded-full flex items-center justify-center font-bold text-natural-500">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-natural-900 dark:text-white">{t.name}</h4>
                  <p className="text-sm text-natural-500">{t.pet}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
