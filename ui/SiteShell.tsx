
import React from 'react';
import { Nav } from '../components/Nav';
import { Footer } from '../components/Footer';
import { CookieBanner } from '../components/CookieBanner';
import { GoogleAnalytics } from '../components/GoogleAnalytics';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { NavigationContract } from '../core/navigationContract';

interface SiteShellProps {
  children: React.ReactNode;
  navigation: NavigationContract;
  darkMode: boolean;
  onToggleDarkMode: (val: boolean) => void;
  cookiesAccepted: boolean | null;
  onAcceptCookies: (val: boolean) => void;
  onOpenCookiePrefs: () => void;
}

export const SiteShell: React.FC<SiteShellProps> = ({
  children,
  navigation,
  darkMode,
  onToggleDarkMode,
  cookiesAccepted,
  onAcceptCookies,
  onOpenCookiePrefs
}) => {
  return (
    <div className="min-h-screen bg-natural-50 dark:bg-zinc-950 smooth-transition overflow-x-hidden font-sans">
      <GoogleAnalytics accepted={!!cookiesAccepted} />
      <Nav 
        navigation={navigation} 
        darkMode={darkMode} 
        onToggleDarkMode={onToggleDarkMode} 
      />
      
      <main>
        {children}
      </main>

      <Footer 
        navigation={navigation} 
        onOpenCookiePrefs={onOpenCookiePrefs} 
      />
      
      <CookieBanner 
        accepted={cookiesAccepted}
        onAccept={() => onAcceptCookies(true)}
        onReject={() => onAcceptCookies(false)}
        onOpenPrefs={onOpenCookiePrefs}
      />
      
      {/* Floating WhatsApp Button */}
      <a 
        href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 smooth-transition flex items-center justify-center group"
        aria-label="Chatta con noi su WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 smooth-transition whitespace-nowrap font-bold">
          Chatta con noi
        </span>
      </a>
    </div>
  );
};
