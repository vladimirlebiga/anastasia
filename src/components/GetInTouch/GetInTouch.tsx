'use client';
import React from 'react';
import { Container } from '@mui/material';
import {
  StyledH1,
  StyledP,
  StyledSection,
  StyledButtonWrapper,
  StyledWrapper,
  StyledWrapperRight,
  StyledButton,
  StyledImg,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const GetInTouch = () => {
  const { isMobile } = useResponsive();
  return (
    <section>
      <StyledSection>
      <Container maxWidth='xl' sx={{ padding: isMobile ? '0' : '0' }}>
          <StyledWrapper isMobile={isMobile}>
        
          
              <StyledImg isMobile={isMobile}>
              {isMobile && (
              <StyledH1 isMobile={isMobile} variant='h2'>get in touch</StyledH1>
              )}
              </StyledImg>
           
            <StyledWrapperRight>
              {!isMobile && (
              <StyledH1 isMobile={isMobile} variant='h2'>get in touch</StyledH1>
              )}
              <StyledP isMobile={isMobile} variant='body1'>
                Sit back and relax as you are guided through each step of your
                bridal hair experience. Be confident that you’ll never need to
                stress about your wedding day hair.
              </StyledP>
              <StyledButtonWrapper>
        <StyledButton variant='contained' href='/contact#form'>inquire now</StyledButton>
      </StyledButtonWrapper>
            </StyledWrapperRight>
          </StyledWrapper>
          </Container>
      </StyledSection>
      
    </section>
  );
};
