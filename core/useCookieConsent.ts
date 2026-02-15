
import { useState } from 'react';

export const useCookieConsent = () => {
  const [cookiesAccepted, setCookiesAcceptedState] = useState<boolean | null>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('cookiesAccepted');
      return saved !== null ? JSON.parse(saved) : null;
    }
    return null;
  });

  const setCookiesAccepted = (val: boolean) => {
    setCookiesAcceptedState(val);
    localStorage.setItem('cookiesAccepted', JSON.stringify(val));
  };

  const resetCookies = () => {
    localStorage.removeItem('cookiesAccepted');
    window.location.reload();
  };

  return { cookiesAccepted, setCookiesAccepted, resetCookies };
};
