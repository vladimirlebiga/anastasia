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

export const GetInTouch = () => {
  return (
    <section>
      <StyledSection>
      <Container maxWidth='xl'>
          <StyledWrapper>
        
          
              <StyledImg/>
           
            <StyledWrapperRight>
              <StyledH1 variant='h2'>get in touch</StyledH1>
              <StyledP variant='body1'>
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
