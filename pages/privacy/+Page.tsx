import React from 'react';
import { PrivacyPage } from '../../ui/pages/PrivacyPage';
import { createVikeNavigation } from '../../vike-adapter/createVikeNavigation';

const Page: React.FC = () => {
  const navigation = createVikeNavigation();
  return <PrivacyPage navigation={navigation} />;
};

export default Page;
