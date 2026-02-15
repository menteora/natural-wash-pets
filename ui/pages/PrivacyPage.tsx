
import React, { useEffect } from 'react';
import { STRINGS, BUSINESS_INFO } from '../../constants';
import { ArrowLeft } from 'lucide-react';
import { NavigationContract } from '../../core/navigationContract';

export const PrivacyPage: React.FC<{ navigation: NavigationContract }> = ({ navigation }) => {
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
        <h1 className="text-4xl font-serif font-bold text-natural-900 dark:text-white mb-4">{STRINGS.policies.privacyTitle}</h1>
        <p className="text-natural-400 text-sm mb-12">{STRINGS.policies.lastUpdated}</p>
        <div className="prose prose-natural dark:prose-invert max-w-none space-y-8 text-natural-700 dark:text-natural-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-natural-900 dark:text-white">1. Informazioni generali</h2>
            <p>Natural Wash Pets si impegna a proteggere la privacy dei propri utenti. La presente informativa descrive come raccogliamo e trattiamo i dati personali in conformità al GDPR (Regolamento UE 2016/679).</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-natural-900 dark:text-white">2. Titolare del trattamento</h2>
            <p>Il titolare del trattamento è {BUSINESS_INFO.name}, con sede in {BUSINESS_INFO.address}. Email di contatto: {BUSINESS_INFO.email}.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-natural-900 dark:text-white">3. Tipi di dati raccolti</h2>
            <p>Raccogliamo dati di navigazione tramite cookie tecnici e analitici (previo consenso). Non richiediamo la creazione di un account online sul presente sito vetrina.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-natural-900 dark:text-white">4. Diritti dell'interessato</h2>
            <p>Hai il diritto di accedere ai tuoi dati, chiederne la rettifica, la cancellazione o la limitazione del trattamento. Per esercitare i tuoi diritti, scrivi a {BUSINESS_INFO.email}.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
