'use client';
import React from 'react';
import { Logo } from '../Logo/Logo';
import { StyledHeader } from './Styled';
import { Hero } from '../Hero/Hero';
import { Page } from '@/types/enum';
import { Nav } from '../Nav/Nav';
import { usePathname } from 'next/navigation';
import { useResponsive } from '@/contexts/ResponsiveContext';


export const Header = () => {
  const {isMobile} = useResponsive();
  const pathname = usePathname();
  const page = pathname.split('/')[2] as Page || Page.HOMEPAGE;
 
  return (
    <StyledHeader>
      <Logo />
      <Hero page={page} />
      {!isMobile && <Nav />}
    </StyledHeader>
  );
};
