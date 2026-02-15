import { navigate } from 'vike/client/router';
import type { NavigationContract } from '../core/navigationContract';

export const createVikeNavigation = (): NavigationContract => {
  return {
    goHome: () => {
      void navigate('/');
    },
    goPrivacy: () => {
      void navigate('/privacy');
    },
    goCookie: () => {
      void navigate('/cookie');
    },
    goSection: (sectionId: string) => {
      if (typeof window === 'undefined') return;

      if (window.location.pathname !== '/') {
        void navigate(`/#${sectionId}`);
        return;
      }

      const element = document.getElementById(sectionId);
      if (!element) return;

      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };
};
