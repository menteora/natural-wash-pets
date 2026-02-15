# Vike Adapter Guide (Static Site Generation - SSG)

Per migrare questo progetto su Vike come sito statico (SSG), segui questa guida. L'obiettivo è generare file HTML statici per ogni rotta, mantenendo l'interattività lato client (Dark Mode, Cookie Consent).

## Configurazione Vike (vite.config.js)

Assicurati di abilitare il prerendering nel tuo file di configurazione per ottenere un output puramente statico:

```javascript
// vite.config.js
import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'

export default {
  plugins: [
    react(),
    vike({
      prerender: true // Abilita la generazione statica di tutte le pagine
    })
  ]
}
```

## Mapping delle rotte (navigationContract)

In un contesto statico, i link puntano a URL reali che corrispondono alle cartelle/file generati.

```javascript
// Esempio di implementazione per Vike Client-side
import { navigate } from 'vike/client/router'

export const vikeNavigation = {
  goHome: () => navigate('/'),
  goPrivacy: () => navigate('/privacy'),
  goCookie: () => navigate('/cookie'),
  goSection: (id) => {
    // Se siamo già in home, scrolliamo. Altrimenti navighiamo all'ancora.
    if (window.location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
```

## Struttura delle Pagine

In Vike, ogni pagina sarà un file separato che esporta il componente dalla cartella `ui/pages/`:

- `pages/index/+Page.jsx` -> Importa ed esporta `HomePage`
- `pages/privacy/+Page.jsx` -> Importa ed esporta `PrivacyPage`
- `pages/cookie/+Page.jsx` -> Importa ed esporta `CookiePage`

## Composizione della Shell (+Layout.jsx)

Usa `SiteShell` nel file di layout globale (`/pages/+Layout.jsx`) per avvolgere tutte le pagine. 

Poiché è statico, `SiteShell` caricherà inizialmente con lo stato di default durante il prerendering, per poi idratarsi sul client recuperando le preferenze dell'utente da `localStorage` tramite gli hook `useThemeState` e `useCookieConsent`.

## Deployment

Eseguendo `vite build`, Vike genererà una cartella `dist/client` contenente:
- `index.html`
- `privacy/index.html`
- `cookie/index.html`
- Asset (JS/CSS)

Questi file possono essere ospitati su qualsiasi servizio di hosting statico (GitHub Pages, Netlify, Vercel, S3).
