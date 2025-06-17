'use client';
import React from 'react';
import { SomeOf } from '@/components/SomeOf/SomeOf';
import { PersonalStylist } from '@/components/PersonalStylist/PersonalStylist';
import { TrustedBy } from '@/components/TrustedBy/TrustedBy';
import { BrideReviews } from '@/components/BrideReviews/BrideReviews';


export const HomePage = () => {

  return (
    <main>
      <PersonalStylist/>
      <TrustedBy/>
      <SomeOf/>
      <BrideReviews/>
    </main>
  );
};
