import React from 'react';
import { StyledSection, StyledH1, StyledWrapper } from './Styled';
import { Button, Container } from '@mui/material';
import { SwiperComponent } from '../Swiper/Swiper';

const config = [

    {
      title: 'Review 1',
      image: '/img/homepage/Homepage6.jpg',
      textTitle: 'Anna',
      text: 'Anastasia! OMG thank you so much for an AMAIZING wedding day hair and make-up. I have never felt more beautiful in my life. You truly worked some magic haha.',
    },
    {
      title: 'Review 2',
      image: '/img/homepage/Homepage7.jpg',
      textTitle: 'Reciel',
      text: 'My hair lasted ALLL NIGHTTTT - you’re the best. And everyone complimented my makeup, you made me really feel like a princess.',
    },
    {
      title: 'Review 3',
      image: '/img/homepage/Homepage8.jpg',
      textTitle: 'Jaqueline',
      text: 'INCREDIBLE TEAM AND STAFF AND YOU made my weekend!! I love you and your girls so much!!! Thank you, thank you, thank you!',
    },
    {
      title: 'Review 4',
      image: '/img/homepage/Homepage6.jpg',
      textTitle: 'Anna',
      text: 'Anastasia! OMG thank you so much for an AMAIZING wedding day hair and make-up. I have never felt more beautiful in my life. You truly worked some magic haha.',
    },
    {
      title: 'Review 5',
      image: '/img/homepage/Homepage7.jpg',
      textTitle: 'Reciel',
      text: 'My hair lasted ALLL NIGHTTTT - you’re the best. And everyone complimented my makeup, you made me really feel like a princess.',
    },
    {
      title: 'Review 6',
      image: '/img/homepage/Homepage8.jpg',
      textTitle: 'Jaqueline',
      text: 'INCREDIBLE TEAM AND STAFF AND YOU made my weekend!! I love you and your girls so much!!! Thank you, thank you, thank you!',
    },
  ];

export const BrideReviews = () => {
  return (
    <StyledSection>
      <Container>
        <StyledH1 variant='h2'>Bride Reviews</StyledH1>
        <SwiperComponent config={config} id='review' />
        <StyledWrapper>
          <Button variant='contained'>let's work together</Button>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
