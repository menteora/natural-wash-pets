
import React from 'react';
import { Hero } from '../../components/Hero';
import { Info } from '../../components/Info';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import { Faq } from '../../components/Faq';
import { TESTIMONIALS } from '../../constants';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Info />
      <Features />
      {TESTIMONIALS && TESTIMONIALS.length > 0 && <Testimonials />}
      <Faq />
    </>
  );
};
