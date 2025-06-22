'use client';
import React from 'react';
import { SomeOf } from '@/components/SomeOf/SomeOf';
import { PersonalStylist } from '@/components/PersonalStylist/PersonalStylist';
import { TrustedBy } from '@/components/TrustedBy/TrustedBy';
import { BrideReviews } from '@/components/BrideReviews/BrideReviews';
import { AccordionSection } from '@/components/AccordionSection/AccordionSection';
import { Footer } from '@/components/Footer/Footer';

export const HomePage = () => {

  return (
    <main>
      <PersonalStylist/>
      <TrustedBy/>
      <SomeOf/>
      <BrideReviews/>
      <AccordionSection/>
      <Footer/>
    </main>
  );
};
