
export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface AppContextType {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}
