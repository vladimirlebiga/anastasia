'use client';
import React from 'react';
import { Container, Button } from '@mui/material';
import {
  StyledH1,
  StyledH2,
  StyledP,
  StyledUl,
  StyledLi,
  StyledSection,
  StyledTextContainer,
  StyledButtonWrapper,
  StyledImgWrapper,
  StyledFirstItem,
  StyledSecondItem,
  StyledThirdItem,
  StyledFourthItem,
  StyledFifthItem,
  StyledSixthItem,
} from './Styled';

const config = {
  hairstyles: [
    {
      title: 'Hairstyle 1',
      image: '/img/homepage/Homepage3.jpg',
    },
    {
      title: 'Hairstyle 2',
      image: '/img/homepage/Homepage4.jpg',
    },
    {
      title: 'Hairstyle 3',
      image: '/img/homepage/Homepage5.jpg',
    },
  ],
};

export const WhatYouCanExpect = () => {
  return (
    <section>
      <StyledSection>
        <Container>
          <StyledH1 variant='h2'>what you can expect</StyledH1>
          <StyledH2 variant='h2'>when working with me</StyledH2>
          <StyledTextContainer>
            <StyledFirstItem variant='body2'>
              You’re not just booking a stylist. You’re choosing a calm, loving
              presence who’ll care for you like someone from your inner circle.
            </StyledFirstItem>
            <StyledSecondItem variant='body2'>
              I arrive early, fully prepared, and with a peaceful energy that
              gently sets the tone for the entire morning. Brides often say: “It
              felt like you were my second mom — I didn’t even know I needed
              that.”  
            </StyledSecondItem>
            <StyledThirdItem variant='body2'>
              Every detail of your look is created with precision and love. I
              use top-tier professional products, refined techniques, and 12
              years of experience to ensure your hairstyle and makeup last
              beautifully — from the first photo to the last dance.
            </StyledThirdItem>
            <StyledFourthItem variant='body2'>
              Communication with me is always open and easy. You can ask
              anything, share your thoughts, or change your mind — I’ll listen
              and support you with care.  
            </StyledFourthItem>
            <StyledFifthItem variant='body2'>
              You’ll feel beautiful, calm, and completely yourself. And you’ll
              remember this morning not as stressful prep time — but as one of
              the happiest moments of your life.
            </StyledFifthItem>
            <StyledSixthItem variant='body2'>
              I work exclusively with brides and fully immerse myself in your
              day. My entire focus is on you — your comfort, your wishes, and
              the atmosphere we create together.  
            </StyledSixthItem>
            <StyledButtonWrapper>
              <Button variant='contained'>i'm here to help you</Button>
            </StyledButtonWrapper>
          </StyledTextContainer>
          <StyledImgWrapper>
            <StyledUl>
              {config.hairstyles.map((hairstyle) => (
                <StyledLi url={hairstyle.image} key={hairstyle.title} />
              ))}
            </StyledUl>
          </StyledImgWrapper>
        </Container>
      </StyledSection>
    </section>
  );
};
