
import React from 'react';
import { 
  Waves, 
  Wind, 
  ShieldCheck, 
  Leaf, 
  Clock, 
  MapPin, 
  CreditCard,
  Thermometer,
  MessageCircle,
  HelpCircle
} from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Shampetto",
  address: "Via Idice 78, 40050 Monterenzio (BO)",
  hours: "08:30 - 20:30",
  googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Via+Idice+78+40050+Monterenzio+BO",
  whatsapp: "+390123456789",
  email: "info@shampetto.it",
  gaId: "G-XXXXXXXXXX" // Placeholder per Google Analytics
};

export const STRINGS = {
  hero: {
    badge: "Toelettatura Self-Service Premium",
    titlePart1: "Puro benessere",
    titlePart2: "per il tuo pet",
    description: "Scopri Shampetto a Monterenzio. Tecnologia Magic Box di Pelomagia: una cabina innovativa, ecologica e professionale per lavare e asciugare il tuo cane in autonomia e sicurezza.",
    cta: "Vieni a trovarci",
    status: "Aperti oggi"
  },
  info: {
    title: "Dove la tecnologia incontra",
    titleItalic: "l'amore per gli animali",
    description: "Situato a Monterenzio, Shampetto offre un servizio di toelettatura self-service d'eccellenza. La nostra Magic Box è progettata per rendere il bagno un momento di relax per il tuo cane e di semplicità per te. Nessun appuntamento necessario, massima igiene garantita dopo ogni utilizzo.",
    strategicPos: "Posizione Strategica",
    flexibleHours: "Orari Flessibili",
    directions: "Indicazioni stradali"
  },
  features: {
    title: "Perché scegliere Shampetto?",
    description: "Utilizziamo esclusivamente la tecnologia Pelomagia per garantirti un risultato professionale comodamente in modalità self-service."
  },
  testimonials: {
    title: "Cosa dicono di noi",
    description: "Le storie di chi ha già provato la nostra Magic Box con i propri amici a quattro zampe."
  },
  faq: {
    title: "Domande Frequenti",
    description: "Tutto quello che c'è da sapere sulla tecnologia Magic Box e sul funzionamento del nostro centro."
  },
  policies: {
    privacyTitle: "Privacy Policy",
    cookieTitle: "Cookie Policy",
    lastUpdated: "Ultimo aggiornamento: Maggio 2024"
  }
};

export const FEATURES = [
  { id: 1, title: "Vasca Magic Box", description: "In acciaio inox AISI 304, con sponda amovibile per cani di grossa taglia. Ergonomica e spaziosa.", icon: <Waves className="w-6 h-6" /> },
  { id: 2, title: "Phön Ecologico", description: "Aria riscaldata a 45-50°C per asciugare senza scottare o elettrizzare il pelo. Due intensità regolabili.", icon: <Wind className="w-6 h-6" /> },
  { id: 3, title: "Sanificazione Ozono", description: "Opzione avanzata per igienizzare cute e pelo in profondità, eliminando batteri e cattivi odori.", icon: <ShieldCheck className="w-6 h-6" /> },
  { id: 4, title: "Eco Friendly", description: "Prodotti detergenti naturali e sistemi a basso consumo energetico (tecnologia Pelomagia).", icon: <Leaf className="w-6 h-6" /> },
  { id: 5, title: "Pagamenti Automatici", description: "Accetta monete, banconote e card RFID. Facile, veloce e completamente autonomo.", icon: <CreditCard className="w-6 h-6" /> },
  { id: 6, title: "Acqua Temperata", description: "Miscelatore professionale per garantire sempre la temperatura ideale per il benessere del cane.", icon: <Thermometer className="w-6 h-6" /> }
];

export const TESTIMONIALS = [];
// export const TESTIMONIALS = [
//  { id: 1, name: "Marco Rossi", pet: "Buddy (Golden Retriever)", text: "Esperienza fantastica! Buddy è enorme e di solito è un incubo fargli il bagno. La Magic Box è spaziosa e l'asciugatura è stata velocissima.", rating: 5 },
//  { id: 2, name: "Elena Bianchi", pet: "Luna (Beagle)", text: "Pulito, ordinato e facilissimo da usare. Adoro il fatto che non serva appuntamento. Torneremo sicuramente ogni settimana!", rating: 5 },
//  { id: 3, name: "Giulia Verdi", pet: "Toby (Meticcio)", text: "La sanificazione all'ozono è la svolta. Toby profuma di pulito per giorni e il pelo è morbidissimo. Consigliatissimo.", rating: 5 }
//];

export const FAQ_DATA = [
  { id: "faq-1", question: "La Magic Box è adatta anche a cani di grossa taglia?", answer: "Assolutamente sì. La cabina Magic Box ha dimensioni generose (234x214x234 cm) ed è dotata di una vasca professionale con sponda amovibile che permette l'ingresso agevole anche ai cani più grandi senza doverli sollevare." },
  { id: "faq-2", question: "Il phon può scottare la pelle del mio cane?", answer: "No, il Phön ecologico brevettato da Pelomagia riscalda l'aria a una temperatura costante di 45-50°C. È la temperatura ideale per un'asciugatura rapida ma sicura, che non elettrizza il pelo e rispetta la sensibilità della cute." },
  { id: "faq-3", question: "Come funzionano i pagamenti?", answer: "Il nostro centro è dotato di un quadro di comando elettronico che accetta monete, banconote e tessere RFID. Potete anche caricare il credito sulle nostre card elettroniche per accedere al servizio in totale autonomia." },
  { id: "faq-4", question: "È necessario prendere appuntamento?", answer: "No, Shampetto è un servizio self-service 100% autonomo. Potete venire quando preferite durante gli orari di apertura (08:30 - 20:30). L'accesso è controllato da un sistema apriporta temporizzato." },
  { id: "faq-5", question: "Cos'è il trattamento all'ozono?", answer: "È un optional avanzato che miscela ozono all'ossigeno durante il lavaggio. È ecologico ed estremamente efficace per una sanificazione profonda sia del pelo che della cute, eliminando parassiti, batteri e odori persistenti." },
  { id: "faq-6", question: "La cabina è sicura e igienica?", answer: "La sicurezza è la nostra priorità. La cabina è costruita con materiali ignifughi, pavimentazione antiscivolo e antifungina. Inoltre, un sistema di aspirazione a soffitto evita la dispersione dei peli e garantisce la massima igiene dopo ogni utilizzo." }
];
