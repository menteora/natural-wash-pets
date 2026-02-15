
export interface NavigationContract {
  goHome: () => void;
  goPrivacy: () => void;
  goCookie: () => void;
  goSection: (sectionId: string) => void;
}
