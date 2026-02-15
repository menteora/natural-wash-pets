
import React from 'react';
import { X } from 'lucide-react';
import { useApp } from '../App';

export const CookieBanner: React.FC = () => {
  const { cookiesAccepted, setCookiesAccepted, setView } = useApp();

  if (cookiesAccepted !== null) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="bg-white dark:bg-zinc-900 w-full max-w-4xl rounded-[2rem] shadow-2xl border border-natural-100 dark:border-zinc-800 p-6 sm:p-8 relative">
        <button 
          onClick={() => setCookiesAccepted(false)}
          className="absolute top-4 right-4 p-2 hover:bg-natural-50 dark:hover:bg-zinc-800 rounded-full smooth-transition text-natural-400"
          aria-label="Chiudi e rifiuta non tecnici"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-6">
          <h2 className="text-xl font-bold dark:text-white pr-8">Informativa sull'uso dei cookie</h2>
          <p className="text-natural-600 dark:text-natural-400 text-sm leading-relaxed">
            Il sito utilizza cookie tecnici e, previo tuo consenso, cookie di profilazione o altri strumenti di tracciamento per finalità statistiche. 
            Puoi chiudere il banner con la "X" in alto a destra per continuare la navigazione mantenendo le impostazioni di default (solo tecnici).
            Per maggiori dettagli consulta la nostra <button onClick={() => setView('cookie')} className="text-natural-500 underline font-bold">Cookie Policy</button>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button 
              onClick={() => setCookiesAccepted(true)}
              className="flex-1 bg-natural-500 text-white py-3 px-6 rounded-xl font-bold hover:bg-natural-600 smooth-transition"
            >
              Accetta tutti i cookie
            </button>
            <button 
              onClick={() => setView('cookie')}
              className="flex-1 bg-natural-50 dark:bg-zinc-800 text-natural-900 dark:text-white py-3 px-6 rounded-xl font-bold border border-natural-200 dark:border-zinc-700 hover:bg-natural-100 smooth-transition"
            >
              Personalizza o scopri di più
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
