'use client';
import React from 'react';
import { Container } from '@mui/material';
import {
  StyledH1,
  StyledH2,
  StyledP,
  StyledSection,
  StyledButtonWrapper,
  StyledWrapper,
  StyledWrapperLeft,
  StyledWrapperRight,
  StyledButton,
  StyledImg,
} from './Styled';

export const DearBrides = () => {
  return (
    <section>
      <StyledSection>
        <Container>
          <StyledWrapper>
            <StyledWrapperLeft>
              <StyledH1 variant='h2'>dear brides</StyledH1>
              <StyledH2 variant='body1'>
                Please read the following information prior to filling out the
                booking form.
              </StyledH2>
              <StyledP variant='body1'>
                The earliest start time available for hair styling services is
                6.30 a.m.
              </StyledP>
              <StyledP variant='body1'>
                Minimum booking package is " The Intimate" required for Friday,
                Saturday and bookings; May-October.
              </StyledP>
              <StyledP variant='body1'>
                Travel is available up to 1,5 hours from Amsterdam. For longer
                travel distances, overnight accommodation may be required. 
              </StyledP>
              <StyledP variant='body1'>
                Bridal previews are only available after a booking is made and
                the retainer has been paid. Bridal previews are held in-studio,
                not on location, and are available on Mondays. They are
                exclusively for brides, not bridal party members or moms. 
              </StyledP>{' '}
            </StyledWrapperLeft>
            <StyledWrapperRight>
              <StyledImg src='/img/contact/dearbrides.png' alt='dear brides' />
            </StyledWrapperRight>
          </StyledWrapper>
        </Container>
      </StyledSection>
      <StyledButtonWrapper>
        <StyledButton variant='contained'>inquire now</StyledButton>
      </StyledButtonWrapper>
    </section>
  );
};
