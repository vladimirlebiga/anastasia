'use client';
import React from 'react';
import { Button, Container } from '@mui/material';
import {
  StyledH2,
  StyledH3,
  StyledH4,
  StyledP,
  StyledWrapper,
  StyledSection,
  StyledUl,
  StyledLi,
  StyledLink,
  StyledSocialP,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

const config = [
  {
    text: 'instagram: ',
    textLink: 'wed_makeup_nl',
    link: 'https://www.instagram.com/wed_makeup_nl/',
    textDecoration: 'underline',
  },
  {
    text: 'email: ',
    textLink: 'info@bridepalette.com',
    link: 'mailto:info@bridepalette.com',
    textDecoration: 'none',
  },
  {
    text: 'phone: ',
    textLink: '+380 (0) 634 612 880',
    link: 'tel:+380634612880',
    textDecoration: 'none',
  },
];

export const BookBHCNow = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile}>
      <Container>
        <StyledWrapper isMobile={isMobile}>
          <StyledH2 variant='h2'>book now</StyledH2>
          <StyledH3 variant='h3'>check your date!</StyledH3>
          <StyledH4 variant='body1' isMobile={isMobile}>
            Book your dream wedding hair experience
          </StyledH4>
          <StyledP variant='body1' isMobile={isMobile}>
            Fill in the inquiry form below and I will be touch with the next
            steps.
          </StyledP>
          <StyledUl isMobile={isMobile}>
            {config.map((item) => (
              <StyledLi key={item.text} isMobile={isMobile}>
                <StyledSocialP variant='body1' isMobile={isMobile}>
                  {item.text}
                  <StyledLink target='_blank' rel='noopener noreferrer' href={item.link} decoration={item.textDecoration}>{item.textLink}</StyledLink>
                </StyledSocialP>
              </StyledLi>
            ))}
          </StyledUl>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
