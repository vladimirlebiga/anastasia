'use client'
import React from 'react'
import { StyledSection } from './Styled'
import { Container } from '@mui/material'
import { HeroText } from './HeroText/HeroText'
import { Page } from '@/types/enum'

const config = {
    [Page.HOMEPAGE]: {url:'/img/hero/img_1.jpg'},
    [Page.ABOUTPAGE]: {url:'/img/hero/img_2.jpg'},
    [Page.SERVICEPAGE]: {url:'/img/hero/img_3.jpg'},
    [Page.PORTFOLIOPAGE]: {url:'/img/hero/img_4.jpg'},
    [Page.CONTACTPAGE]: {url:'/img/hero/img_5.jpg'}
}

export const Hero = ({ page }: { page: string }) => {
  console.log(page,1);
    const { url } = config[page as keyof typeof config];
    console.log(url);

  return (
    <StyledSection url={url}>
       <Container>
        <HeroText page={page} />
       </Container>
    </StyledSection>
  )
}

