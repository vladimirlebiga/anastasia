'use client';
import React from 'react';
import { SomeOf } from '@/components/SomeOf/SomeOf';
import { PersonalStylist } from '@/components/PersonalStylist/PersonalStylist';
import { TrustedBy } from '@/components/TrustedBy/TrustedBy';
import { BrideReviews } from '@/components/BrideReviews/BrideReviews';
import { AccordionSection } from '@/components/AccordionSection/AccordionSection';
import { useMenuOpen } from '@/contexts/MenuContext';
import { MenuOpen } from '@/components/MenuOpen.tsx/MenuOpen';

export const HomePage = () => {
  const {isMenuOpen} = useMenuOpen();
  console.log(isMenuOpen);
  return (
    <main>
      <PersonalStylist/>
      <TrustedBy/>
      <SomeOf/>
      <BrideReviews/>
      <AccordionSection/>
      {isMenuOpen && <MenuOpen />}
    </main>
  );
};
