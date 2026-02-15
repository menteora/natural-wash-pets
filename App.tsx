
import React, { useState } from 'react';
import { SiteShell } from './ui/SiteShell';
import { HomePage } from './ui/pages/HomePage';
import { PrivacyPage } from './ui/pages/PrivacyPage';
import { CookiePage } from './ui/pages/CookiePage';
import { useThemeState } from './core/useThemeState';
import { useCookieConsent } from './core/useCookieConsent';
import { createLegacyNavigation } from './legacy/createLegacyNavigation';
import { View } from './types';

const App: React.FC = () => {
  const { darkMode, setDarkMode } = useThemeState();
  const { cookiesAccepted, setCookiesAccepted, resetCookies } = useCookieConsent();
  const [view, setView] = useState<View>('home');

  const navigation = createLegacyNavigation(view, setView);

  return (
    <SiteShell
      navigation={navigation}
      darkMode={darkMode}
      onToggleDarkMode={setDarkMode}
      cookiesAccepted={cookiesAccepted}
      onAcceptCookies={setCookiesAccepted}
      onOpenCookiePrefs={() => navigation.goCookie()}
    >
      {view === 'home' && <HomePage />}
      {view === 'privacy' && <PrivacyPage navigation={navigation} />}
      {view === 'cookie' && <CookiePage navigation={navigation} onResetCookies={resetCookies} />}
    </SiteShell>
  );
};

export default App;
