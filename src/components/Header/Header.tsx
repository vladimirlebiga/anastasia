'use client';
import React from 'react';
import { Logo } from '../Logo/Logo';
import { StyledHeader } from './Styled';
import { Hero } from '../Hero/Hero';
import { Page } from '@/types/enum';
import { Nav } from '../Nav/Nav';

export const Header = () => {
 

  return (
    <StyledHeader>
      <Logo />
      <Hero page={Page.HOMEPAGE} />
      <Nav />
    </StyledHeader>
  );
};
