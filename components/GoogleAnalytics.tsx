
import React, { useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

export const GoogleAnalytics: React.FC<{ accepted: boolean }> = ({ accepted }) => {
  useEffect(() => {
    if (!accepted) return;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${BUSINESS_INFO.gaId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${BUSINESS_INFO.gaId}');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [accepted]);

  return null;
};
