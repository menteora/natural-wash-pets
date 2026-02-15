
import { View } from '../types';
import { NavigationContract } from '../core/navigationContract';

export const createLegacyNavigation = (
  view: View,
  setView: (v: View) => void
): NavigationContract => {
  return {
    goHome: () => {
      setView('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    goPrivacy: () => {
      setView('privacy');
    },
    goCookie: () => {
      setView('cookie');
    },
    goSection: (sectionId: string) => {
      if (view !== 'home') {
        setView('home');
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }
    }
  };
};
