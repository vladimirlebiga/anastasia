import React from 'react'
import { StyledSection } from './Styled'
import { Container } from '@mui/material'
import { HeroText } from './HeroText/HeroText'
import { Page } from '@/types/enum'

const config = {
    [Page.HOMEPAGE]: {url:'/img/homepage/HomepageBackground.jpg'}
}


export const Hero = ({ page }: { page: string }) => {
    const { url } = config[page as keyof typeof config];
  return (
    <StyledSection url={url}>
       <Container>
        <HeroText page={Page.HOMEPAGE} />
       </Container>
    </StyledSection>
  )
}

