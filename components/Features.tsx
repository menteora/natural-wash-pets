
import React from 'react';
import { FEATURES, STRINGS } from '../constants';

export const Features: React.FC = () => {
  return (
    <section 
      id="features" 
      className="py-24 bg-natural-50 dark:bg-zinc-950 smooth-transition"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            id="features-heading"
            className="text-4xl font-serif font-bold text-natural-900 dark:text-white mb-4"
          >
            {STRINGS.features.title}
          </h2>
          <p className="text-natural-600 dark:text-natural-400">
            {STRINGS.features.description}
          </p>
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
        >
          {FEATURES.map((feature, index) => (
            <div 
              key={feature.id}
              role="listitem"
              tabIndex={0}
              aria-labelledby={`feature-title-${feature.id}`}
              className="group p-8 bg-white dark:bg-zinc-900 rounded-[2rem] border border-natural-100 dark:border-zinc-800 hover:border-natural-500 focus:border-natural-500 focus:outline-none focus:ring-4 focus:ring-natural-500/10 smooth-transition hover:shadow-2xl hover:shadow-natural-500/10 focus:shadow-2xl focus:shadow-natural-500/10 animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-14 h-14 bg-white dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 border border-natural-100 dark:border-zinc-700 group-hover:border-natural-500 group-hover:shadow-lg group-hover:shadow-natural-500/10 group-focus:border-natural-500 smooth-transition"
                aria-hidden="true"
              >
                <div className="text-natural-500 group-hover:animate-bounce-pulse group-focus:animate-bounce-pulse smooth-transition">
                  {feature.icon}
                </div>
              </div>
              <h3 
                id={`feature-title-${feature.id}`}
                className="text-xl font-bold text-natural-900 dark:text-white mb-3"
              >
                {feature.title}
              </h3>
              <p className="text-natural-600 dark:text-natural-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
