
import React from 'react';
import { MapPin, Clock, Info as InfoIcon, Navigation } from 'lucide-react';
import { BUSINESS_INFO, STRINGS } from '../constants';

export const Info: React.FC = () => {
  return (
    <section id="info" className="py-24 bg-white dark:bg-zinc-900 smooth-transition scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-serif font-bold text-natural-900 dark:text-white leading-tight">
              {STRINGS.info.title} <br />
              <span className="text-natural-500 italic">{STRINGS.info.titleItalic}</span>
            </h2>
            <p className="text-natural-700 dark:text-natural-300 text-lg leading-relaxed">
              {STRINGS.info.description}
            </p>
            
            <div className="grid gap-6 pt-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-natural-50 dark:bg-zinc-800 border border-natural-100 dark:border-zinc-700">
                <div className="p-3 bg-natural-500/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-natural-500" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">{STRINGS.info.strategicPos}</h4>
                  <p className="text-natural-600 dark:text-natural-400">{BUSINESS_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-natural-50 dark:bg-zinc-800 border border-natural-100 dark:border-zinc-700">
                <div className="p-3 bg-natural-500/10 rounded-xl">
                  <Clock className="w-6 h-6 text-natural-500" />
                </div>
                <div>
                  <h4 className="font-bold dark:text-white">{STRINGS.info.flexibleHours}</h4>
                  <p className="text-natural-600 dark:text-natural-400">Aperto tutti i giorni: {BUSINESS_INFO.hours}</p>
                </div>
              </div>
            </div>

            <a 
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-natural-500 font-bold hover:gap-3 smooth-transition"
            >
              <span>{STRINGS.info.directions}</span>
              <Navigation className="w-4 h-4" />
            </a>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative p-2 bg-natural-100 dark:bg-zinc-800 rounded-[2.5rem] overflow-hidden shadow-inner">
              <div className="aspect-video rounded-[2rem] overflow-hidden bg-zinc-200 dark:bg-zinc-700">
                <iframe 
                  title="Mappa Shampetto"
                  className="w-full h-full grayscale dark:invert dark:opacity-80 transition-all duration-700"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2855.981882654157!2d11.4111304!3d44.2794358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132ad5a363a033b9%3A0xc0f19d0840c96c4b!2sVia%20Idice%2C%2078%2C%2040050%20Monterenzio%20BO!5e0!3m2!1sit!2sit!4v1715800000000!5m2!1sit!2sit"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
