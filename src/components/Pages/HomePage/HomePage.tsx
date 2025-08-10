'use client';
import React from 'react';
import { SomeOf } from '@/components/SomeOf/SomeOf';
import { PersonalStylist } from '@/components/PersonalStylist/PersonalStylist';
import { TrustedBy } from '@/components/TrustedBy/TrustedBy';
import { BrideReviews } from '@/components/BrideReviews/BrideReviews';
import { AccordionSection } from '@/components/AccordionSection/AccordionSection';
import { useMenuOpen } from '@/contexts/MenuContext';
import { MenuOpen } from '@/components/MenuOpen.tsx/MenuOpen';
import { StyledButtonWrapper } from './Styled';
import { Button } from '@mui/material';
import { useResponsive } from '@/contexts/ResponsiveContext';
import { StyledH1 } from './Styled';

export const HomePage = () => {
  const {isMenuOpen} = useMenuOpen();
  const { isMobile } = useResponsive();
  return (
    <main>
      <PersonalStylist/>
      <TrustedBy/>
      <SomeOf/>
      <BrideReviews/>
      {isMobile && (
        <StyledH1 variant='h2'>Packages</StyledH1>
      )}
      <AccordionSection/>
      <StyledButtonWrapper isMobile={isMobile}>
         <Button variant='contained' href='/contact#form'>Make A personal offer</Button>
      </StyledButtonWrapper>
      {isMenuOpen && <MenuOpen />}
    </main>
  );
};
