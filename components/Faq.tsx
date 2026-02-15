
import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_DATA, STRINGS } from '../constants';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="py-24 bg-natural-50 dark:bg-zinc-950 smooth-transition scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-natural-100 dark:bg-natural-900/30 rounded-full text-natural-500 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Supporto</span>
              </div>
              <h2 className="text-4xl font-serif font-bold text-natural-900 dark:text-white leading-tight">
                Hai qualche <br />
                <span className="text-natural-500 italic">curiosità?</span>
              </h2>
              <p className="text-natural-600 dark:text-natural-400">
                {STRINGS.faq.description}
              </p>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-4">
            {FAQ_DATA.map((item) => (
              <div 
                key={item.id}
                className={`group rounded-3xl border smooth-transition overflow-hidden ${
                  openId === item.id 
                    ? 'bg-white dark:bg-zinc-900 border-natural-500 shadow-xl shadow-natural-500/5' 
                    : 'bg-white/50 dark:bg-zinc-900/50 border-natural-100 dark:border-zinc-800 hover:border-natural-300'
                }`}
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none"
                  aria-expanded={openId === item.id}
                >
                  <span className="text-lg font-bold text-natural-900 dark:text-white pr-8">
                    {item.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-natural-50 dark:bg-zinc-800 group-hover:bg-natural-100 smooth-transition ${
                    openId === item.id ? 'rotate-180 bg-natural-500 !text-white' : 'text-natural-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div className={`smooth-transition overflow-hidden ${
                  openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-8 sm:px-8 sm:pb-8 text-natural-600 dark:text-natural-400 leading-relaxed border-t border-natural-50 dark:border-zinc-800 pt-6">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
