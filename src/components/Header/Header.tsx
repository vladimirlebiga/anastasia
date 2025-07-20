'use client';
import React from 'react';
import { Logo } from '../Logo/Logo';
import { StyledHeader } from './Styled';
import { Hero } from '../Hero/Hero';
import { Page } from '@/types/enum';
import { Nav } from '../Nav/Nav';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const page = pathname.split('/')[2] as Page || Page.HOMEPAGE;
  console.log(page);

 

  return (
    <StyledHeader>
      <Logo />
      <Hero page={page} />
      <Nav />
    </StyledHeader>
  );
};
