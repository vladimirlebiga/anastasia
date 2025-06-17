'use client';
import React from 'react'
import { StyledH1, StyledH3, StyledHeroTextWrapper } from './Styled';

const config = {
    homepage: {
        title: 'bridal hair',
        description: 'for the modern bride',
    },
    servicespage: {
        title: 'turning brides past hair struggles around',
        description: 'with frizz free, long lasting buns and waves',
    },
    portfoliopage: {
        title: 'portfolio',
        description: 'gallery',
    },
    contactpage: {
        title: 'submit inquiry',
        description: 'get in touch',
    },
}



export const HeroText = ({ page }: { page: string }) => {
    const { title, description } = config[page as keyof typeof config];
  return (
    <StyledHeroTextWrapper>
        <StyledH1 variant='h1'>{title}</StyledH1>
        <StyledH3 variant='h6'>{description}</StyledH3>
    </StyledHeroTextWrapper>
  )
}