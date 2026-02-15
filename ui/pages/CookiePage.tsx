
import React, { useEffect } from 'react';
import { STRINGS } from '../../constants';
import { ArrowLeft } from 'lucide-react';
import { NavigationContract } from '../../core/navigationContract';

interface CookiePageProps {
  navigation: NavigationContract;
  onResetCookies: () => void;
}

export const CookiePage: React.FC<CookiePageProps> = ({ navigation, onResetCookies }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={navigation.goHome}
          className="flex items-center gap-2 text-natural-500 font-bold mb-8 hover:-translate-x-1 smooth-transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Torna alla Home
        </button>
        <h1 className="text-4xl font-serif font-bold text-natural-900 dark:text-white mb-4">{STRINGS.policies.cookieTitle}</h1>
        <p className="text-natural-400 text-sm mb-12">{STRINGS.policies.lastUpdated}</p>
        <div className="prose prose-natural dark:prose-invert max-w-none space-y-8 text-natural-700 dark:text-natural-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-natural-900 dark:text-white">Cosa sono i cookie</h2>
            <p>I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-natural-900 dark:text-white">Tipologie di cookie utilizzati</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li><strong>Cookie Tecnici:</strong> Necessari per il corretto funzionamento del sito. Non richiedono consenso.</li>
              <li><strong>Cookie Analitici (Google Analytics):</strong> Utilizzati per raccogliere informazioni in forma aggregata sul numero degli utenti e su come questi visitano il sito. Richiedono il tuo consenso.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-natural-900 dark:text-white">Gestione del consenso</h2>
            <p>Puoi modificare le tue preferenze in qualsiasi momento tramite questo pulsante:</p>
            <button 
              onClick={onResetCookies}
              className="mt-4 bg-natural-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-natural-600 smooth-transition"
            >
              Reset preferenze cookie
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};
