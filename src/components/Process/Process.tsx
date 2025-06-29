'use client';
import React from 'react';
import { SwiperComponent } from '../Swiper/Swiper';
import { Button, Container } from '@mui/material';
import { StyledSection, StyledH1, StyledH2, StyledWrapper } from './Styled';

const config = [

        {
            title: '1. Consultation',
            image: '/img/aboutpage/process1.jpg',
            isRound: false
        },
        {
            title: '2. Consultation',
            image: '/img/aboutpage/process2.jpg',
            isRound: false
        },
        {
            title: '3. Consultation',
            image: '/img/aboutpage/process3.jpg',
            isRound: false
        },
        {
            title: '4. Consultation',
            image: '/img/aboutpage/process1.jpg',
            isRound: false
        },
        {
            title: '5. Consultation',
            image: '/img/aboutpage/process2.jpg',
            isRound: false
        },
        {
            title: '6. Consultation',
            image: '/img/aboutpage/process3.jpg',
            isRound: false
        }
]
  

export const Process = () => {
    return (
        <StyledSection>
          <Container>
            <StyledH1 variant='h2'>process</StyledH1>
            <StyledH2 variant='h2'>my favorite part</StyledH2>
            <SwiperComponent config={config} id='review' />
            <StyledWrapper>
              <Button variant='contained'>let's work together</Button>
            </StyledWrapper>
          </Container>
        </StyledSection>
      );
};
