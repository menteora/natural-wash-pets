
import React from 'react';
import { BUSINESS_INFO } from '../constants';
import { Instagram, Facebook, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-natural-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-natural-500 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-xl font-bold">N</span>
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight">
                Natural Wash <span className="text-natural-500">Pets</span>
              </span>
            </div>
            <p className="text-natural-300 max-w-sm mb-8">
              Il lavaggio self-service per cani più avanzato di Monterenzio. 
              Tecnologia, igiene e amore per i nostri amici a quattro zampe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-natural-500 smooth-transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-natural-500 smooth-transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={`mailto:${BUSINESS_INFO.email}`} className="p-3 bg-white/5 rounded-full hover:bg-natural-500 smooth-transition">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contatti</h4>
            <ul className="space-y-4 text-natural-400">
              <li>{BUSINESS_INFO.address}</li>
              <li>Aperto: {BUSINESS_INFO.hours}</li>
              <li>Sito: naturalwashpets.it</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Link Rapidi</h4>
            <ul className="space-y-4 text-natural-400">
              <li><a href="#info" className="hover:text-natural-500 smooth-transition">Dove siamo</a></li>
              <li><a href="#features" className="hover:text-natural-500 smooth-transition">Servizi</a></li>
              <li><a href="#faq" className="hover:text-natural-500 smooth-transition">Domande Frequenti</a></li>
              <li><a href={BUSINESS_INFO.googleMapsUrl} className="hover:text-natural-500 smooth-transition">Navigatore</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-natural-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Natural Wash Pets Monterenzio. Powered by Pelomagia Technology.</p>
        </div>
      </div>
    </footer>
  );
};
