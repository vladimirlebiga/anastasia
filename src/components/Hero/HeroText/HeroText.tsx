'use client';
import React from 'react'
import { StyledH1, StyledH3, StyledHeroTextWrapper } from './Styled';
import { Button } from '@mui/material';
import { StyledButtonContainer } from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

const config = {
    home: {
        title: 'bridal hair',
        description: 'for the modern bride',
        services: false,
    },
    about: {
        title: '',
        description: '',
        services: false,
    },
    services: {
        title: 'turning brides past hair struggles around',
        description: 'with frizz free, long lasting buns and waves',
        services: true,
    },
    portfolio: {
        title: 'portfolio',
        description: 'gallery',
        services: false,
    },
    contact: {
        title: 'submit inquiry',
        description: 'get in touch',
        services: false,
    },
}



export const HeroText = ({ page }: { page: string }) => {
    const { isMobile } = useResponsive();
    const { title, description, services } = config[page as keyof typeof config];
  return (
    <StyledHeroTextWrapper services={services} isMobile={isMobile}>
        {isMobile && !services && (
            <>
            <StyledH1 variant='h1' services={services}>{title}</StyledH1>
            <StyledH3 variant='h6' services={services}>{description}</StyledH3>
            </>
        )}
        {services &&
        <StyledButtonContainer>
        {!isMobile && <Button variant='contained' href='/contact#form'>lets' work together</Button>}
        </StyledButtonContainer>}
    </StyledHeroTextWrapper>
  )
}