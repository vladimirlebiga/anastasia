'use client';
import React from 'react';
import { Button, Container } from '@mui/material';
import {
  StyledH1,
  StyledH2,
  StyledH3,
  StyledP,
  StyledSpan,
  StyledWrapper,
  StyledSection,
} from './Styled';

export const PersonalStylist = () => {
  return (
    <StyledSection>
    <Container>
      <StyledWrapper>
        <StyledH1 variant='body2'>amsterdam / netherlands</StyledH1>
        <StyledH2 variant='h2'>Personal Stylist</StyledH2>
        <StyledH3 variant='h3'>for the modern bride</StyledH3>
        <StyledP variant='body2'>
          Anastasia is a <StyledSpan>worldwide</StyledSpan> personal bridal
          assistant based in Amsterdam, Netherland. Anastasia is known for her
          professional approach. You’ll get an on-trend hairstyle that is
          guaranteed to last all day and night!
        </StyledP>
        <Button variant='contained'>learn more</Button>
      </StyledWrapper>
    </Container>
    </StyledSection>
  );
};
