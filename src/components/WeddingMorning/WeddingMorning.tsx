'use client';
import React from 'react';
import { Button, Container } from '@mui/material';
import {
  StyledH2,
  StyledH3,
  StyledP,
  StyledWrapper,
  StyledSection,
  StyledButtonWrapper,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

export const WeddingMorning = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile}>
      <Container>
        <StyledWrapper>
          <StyledH2 variant='h2' isMobile={isMobile}>
            on our wedding morning
          </StyledH2>
          <StyledH3 variant='h3'>consider the possibility</StyledH3>
          <StyledP variant='body1' isMobile={isMobile}>
            You can unwind and enjoy a worry-free wedding morning, knowing that
            your hair will turn out exactly as you imagined. Thanks to a bridal
            preview that addressed all your concerns month ago. Today, you can
            be completely confident in your hairstyle!
          </StyledP>
          <StyledP variant='body1' isMobile={isMobile}>
            You’ve chosen a hairstylist who carefully fine-tunes every detail of
            your hair and your bridesmaids'. No frizz is overlooked,
            guaranteeing hairstyles that will stay flawless from morning until
            night.
          </StyledP>
          <StyledP variant='body1' isMobile={isMobile}>
            You feel a sense of calm, knowing there's no need to hurry. Your
            stylist only takes one wedding per day, ensuring that you have their
            full attention throughout the entire process!
          </StyledP>
          <StyledButtonWrapper isMobile={isMobile}>
            <Button variant='contained' href='/contact#form'>
              lets's chat
            </Button>
          </StyledButtonWrapper>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
