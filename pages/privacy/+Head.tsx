import React from 'react';

const SITE_URL = 'https://naturalwashpets.it';
const title = 'Privacy Policy | Natural Wash Pets';
const description = 'Informativa privacy del sito Natural Wash Pets, in conformita al GDPR.';

export const Head: React.FC = () => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE_URL}/privacy`} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content="Natural Wash Pets" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}/privacy`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
