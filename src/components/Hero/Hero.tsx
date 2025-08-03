'use client'
import React from 'react'
import { StyledSection } from './Styled'
import { Container } from '@mui/material'
import { HeroText } from './HeroText/HeroText'
import { Page } from '@/types/enum'
import { useResponsive } from '@/contexts/ResponsiveContext'

const config = {
    [Page.HOMEPAGE]: {url:'/img/hero/Home1.png'},
    [Page.ABOUTPAGE]: {url:'/img/hero/About.png'},
    [Page.SERVICEPAGE]: {url:'/img/hero/Services2.png'},
    [Page.PORTFOLIOPAGE]: {url:'/img/hero/Portfolio.png'},
    [Page.CONTACTPAGE]: {url:'/img/hero/Contact.png'}
}

export const Hero = ({ page }: { page: string }) => {
  const { isMobile } = useResponsive();
    const { url } = config[page as keyof typeof config];
  return (
    <StyledSection url={url} isMobile={isMobile}>
       <Container>
        <HeroText page={page} />
       </Container>
    </StyledSection>
  )
}

