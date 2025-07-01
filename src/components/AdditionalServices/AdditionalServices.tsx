'use client';
import { Container } from '@mui/material';
import React from 'react';
import {
  StyledH1,
  StyledWrapper,
  StyledP1,
  StyledP2,
  StyledP3,
  StyledSection,
} from './Styled';

export const AdditionalServices = () => {
  return (
    <StyledSection>
      <Container>
        <StyledH1 variant='h2'>Additional services</StyledH1>
        <StyledWrapper>
          <StyledP1 variant='body1'>Personal beauty assistant Makeup/hairstyle for 1 guest</StyledP1>
          <StyledP2 variant='body1'>50€ 150€</StyledP2>
          <StyledP3 variant='body1'>per hour per hour</StyledP3>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
