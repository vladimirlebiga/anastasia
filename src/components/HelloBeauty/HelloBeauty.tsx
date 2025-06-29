import React from 'react';
import { Container } from '@mui/material';
import {
  StyledSection,
  StyledWrapper,
  StyledWrapperLeft,
  StyledWrapperRight,
  StyledImage,
  StyledH1,
  StyledP,
  StyledSpan,
} from './Styled';

export const HelloBeauty = () => {
  return (
    <StyledSection>
      <Container>
        <StyledWrapper>
          <StyledWrapperLeft>
            <StyledImage src='/img/aboutpage/hellobeauty.jpg' alt='hellobeauty' />
          </StyledWrapperLeft>
          <StyledWrapperRight>
            <StyledH1 variant='h2'>Hello, Beauty!</StyledH1>
            <StyledP variant='body1'>
              <StyledSpan>I'm Anastasiia,</StyledSpan> your bridal stylist.
              Originally from Ukraine, now call the Netherlands home.
            </StyledP>
            <StyledP variant='body1'>
              My mission is to craft more than just a beautiful image—I design a
              look that feels like you. A look that captures your essence,
              enhances your natural beauty, and makes you feel confident and
              radiant on your most important day. 
            </StyledP>
            <StyledP variant='body1'>
              My work has been featured in Vogue, brand campaigns, and across
              Pinterest, inspiring brides worldwide. I continuously invest in
              education and growth, staying ahead of trends while perfecting
              timeless elegance. 
            </StyledP>
          </StyledWrapperRight>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
