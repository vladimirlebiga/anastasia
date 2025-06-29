'use client';
import { Container } from '@mui/material';
import React from 'react';
import {
  StyledH1,
  StyledWrapper,
  StyledP,
  StyledSection,
} from './Styled';

export const AdditionalServices = () => {
  return (
    <StyledSection>
      <Container>
        <StyledH1 variant='h2'>Additional services</StyledH1>
        <StyledWrapper>
          <StyledP variant='body1'></StyledP>
          <StyledP variant='body1'></StyledP>
          <StyledP variant='body1'></StyledP>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
