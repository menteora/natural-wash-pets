import React from 'react';

const SITE_URL = 'https://naturalwashpets.it';
const title = 'Natural Wash Pets | Lavaggio Cani Self-Service a Monterenzio';
const description = 'Lavaggio cani self-service a Monterenzio con tecnologia Magic Box di Pelomagia. Aperto tutti i giorni 08:30-20:30 in Via Idice 78.';

export const Head: React.FC = () => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE_URL}/`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Natural Wash Pets" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}/`} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  );
};
