import React from 'react';
import { CookiePage } from '../../ui/pages/CookiePage';
import { createVikeNavigation } from '../../vike-adapter/createVikeNavigation';

const Page: React.FC = () => {
  const navigation = createVikeNavigation();

  const onResetCookies = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('cookiesAccepted');
    window.location.reload();
  };

  return <CookiePage navigation={navigation} onResetCookies={onResetCookies} />;
};

export default Page;
