
export type View = 'home' | 'privacy' | 'cookie';

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface AppContextType {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  view: View;
  setView: (val: View) => void;
  cookiesAccepted: boolean | null;
  setCookiesAccepted: (val: boolean) => void;
}
