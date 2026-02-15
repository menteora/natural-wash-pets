import React from 'react';
import { SiteShell } from '../ui/SiteShell';
import { useCookieConsent } from '../core/useCookieConsent';
import { useThemeState } from '../core/useThemeState';
import { createVikeNavigation } from '../vike-adapter/createVikeNavigation';
import type { PageContext } from './types';

export const PageShell: React.FC<{ pageContext: PageContext; children: React.ReactNode }> = ({ children }) => {
  const navigation = createVikeNavigation();
  const { darkMode, setDarkMode } = useThemeState();
  const { cookiesAccepted, setCookiesAccepted } = useCookieConsent();

  return (
    <SiteShell
      navigation={navigation}
      darkMode={darkMode}
      onToggleDarkMode={setDarkMode}
      cookiesAccepted={cookiesAccepted}
      onAcceptCookies={setCookiesAccepted}
      onOpenCookiePrefs={navigation.goCookie}
    >
      {children}
    </SiteShell>
  );
};
