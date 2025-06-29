'use client';
import React from 'react';
import { Button, Container } from '@mui/material';
import {
  StyledH2,
  StyledH3,
  StyledP,
  StyledWrapper,
  StyledSection,
} from './Styled';

export const WeddingMorning = () => {
  return (
    <StyledSection>
      <Container>
        <StyledWrapper>
          <StyledH2 variant='h2'>on our wedding morning</StyledH2>
          <StyledH3 variant='h3'>consider the possibility</StyledH3>
          <StyledP variant='body1'>
            You can unwind and enjoy a worry-free wedding morning, knowing that
            your hair will turn out exactly as you imagined. Thanks to a bridal
            preview that addressed all your concerns month ago. Today, you can
            be completely confident in your hairstyle!
          </StyledP>
          <StyledP variant='body1'>
            You’ve chosen a hairstylist who carefully fine-tunes every detail of
            your hair and your bridesmaids'. No frizz is overlooked,
            guaranteeing hairstyles that will stay flawless from morning until
            night.
          </StyledP>
          <StyledP variant='body1'>
            You feel a sense of calm, knowing there's no need to hurry. Your
            stylist only takes one wedding per day, ensuring that you have their
            full attention throughout the entire process!
          </StyledP>
          <Button variant='contained'>lets's chat</Button>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
