
import React, { useEffect } from 'react';
import { useApp } from '../App';
import { STRINGS, BUSINESS_INFO } from '../constants';
import { ArrowLeft } from 'lucide-react';

const PolicyLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => {
  const { setView } = useApp();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-natural-500 font-bold mb-8 hover:-translate-x-1 smooth-transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Torna alla Home
        </button>
        <h1 className="text-4xl font-serif font-bold text-natural-900 dark:text-white mb-4">{title}</h1>
        <p className="text-natural-400 text-sm mb-12">{STRINGS.policies.lastUpdated}</p>
        <div className="prose prose-natural dark:prose-invert max-w-none space-y-8 text-natural-700 dark:text-natural-300 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

export const PrivacyPolicy: React.FC = () => (
  <PolicyLayout title={STRINGS.policies.privacyTitle}>
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
  </PolicyLayout>
);

export const CookiePolicy: React.FC = () => {
  const { setCookiesAccepted } = useApp();
  return (
    <PolicyLayout title={STRINGS.policies.cookieTitle}>
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
          onClick={() => {
            localStorage.removeItem('cookiesAccepted');
            window.location.reload();
          }}
          className="mt-4 bg-natural-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-natural-600 smooth-transition"
        >
          Reset preferenze cookie
        </button>
      </section>
    </PolicyLayout>
  );
};
