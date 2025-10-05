import React from 'react';
import { StyledSection, StyledH1, StyledWrapper } from './Styled';
import { Button, Container } from '@mui/material';
import { SwiperComponent } from '../Swiper/Swiper';
import { useResponsive } from '@/contexts/ResponsiveContext';

const config = [

    {
      title: 'Review 1',
      image: '/img/homepage/Homepage_Anna.jpg',
      textTitle: 'Anna',
      text: 'Anastasia! OMG thank you so much for an AMAIZING wedding day hair and make-up. I have never felt more beautiful in my life. You truly worked some magic haha.',
      isRound: true,
    },
    {
      title: 'Review 2',
      image: '/img/homepage/Homepage_Reciel.jpg',
      textTitle: 'Reciel',
      text: 'My hair lasted ALLL NIGHTTTT - you’re the best. And everyone complimented my makeup, you made me really feel like a princess.',
      isRound: true
    },
    {
      title: 'Review 3',
      image: '/img/homepage/Homepage_Jaqueline.jpg',
      textTitle: 'Jaqueline',
      text: 'INCREDIBLE TEAM AND STAFF AND YOU made my weekend!! I love you and your girls so much!!! Thank you, thank you, thank you!',
      isRound: true
    },
    {
      title: 'Review 4',
      image: '/img/homepage/Homepage_Alexandra.png',
      textTitle: 'Alexandra',
      text: 'My dear Anastasiia, look how beautiful you make me look on the most important day of my life! Thank you so much for being there for me, for your support and love! It\'s clear to see that you love what you do and I\'m so extremely grateful that YOU could be there with me',
      isRound: true
    },
    {
      title: 'Review 5',
      image: '/img/homepage/Homepage_Aida.png',
      textTitle: 'Aida',
      text: 'Anastasia is an amazing person and a great professional who made my bridal morning just perfect. I\'m very happy with the whole experience and couldn\'t wish for a better bridal look. She also cheered me up and we had very nice conversation that helped me to release the stress. She even put last minute make-up touch on my groom, to make him look stunning as well. Definitely recommend Anastasia to all the brides! Thank you very much.',
      isRound: true
    },
    {
      title: 'Review 6',
      image: '/img/homepage/Homepage_Jenny.png',
      textTitle: 'Jenny',
      text: 'Hi Anastasia, Thank you so much for doing my hair and makeup - it was absolutely perfect! It stayed flawless the whole day, and even held up so well during the dancing. I felt amazing, thanks to you!',
      isRound: true
    },
    {
      title: 'Review 7',
      image: '/img/homepage/Homepage_Anastasia.png',
      textTitle: 'Anastasia',
      text: 'Hello my dear, the day was great and it was so much fun! Thank you so much for your amazing work!!! Nicole and me felt amazing and could all enjoy the day to its fullest! You are a star and great at what you do!!! Also big thanks for the help with the getting dressed and keeping me calm!! It was a pleasure to have you there.',
      isRound: true
    },
    {
      title: 'Review 8',
      image: '/img/homepage/Homepage_Sasha.png',
      textTitle: 'Sasha',
      text: 'Thank you very much for yesterday! It was a wonderful day for us that wouldn\'t have been possible without you!',
      isRound: true
    },
    {
      title: 'Review 9',
      image: '/img/homepage/Homepage_Karla.png',
      textTitle: 'Karla',
      text: 'Thank you so much for making me feel beautiful on my big day! You were calm, kind, and professional, even when things got hectic. I received so many compliments on my hair and makeup—thank you for being such an important part of our day! Best, Karla',
      isRound: true
    },
    {
      title: 'Review 10',
      image: '/img/homepage/Homepage_Juliet.png',
      textTitle: 'Juliet',
      text: 'Hello! Just wanted to say thanks again!! Everyone\'s hair and make up looked great and lasted all day and night. My sister is still wearing her wedding hair! Really appreciate all the input and attention to detail',
      isRound: true
    },
    {
      title: 'Review 11',
      image: '/img/homepage/Homepage_Grace.png',
      textTitle: 'Grace',
      text: 'You did everything for us and more, my mother was talking about you this morning, saying how kind and special you are. And everyone complimented my makeup, you made me really feel like a princess',
      isRound: true
    },
  ];

export const BrideReviews = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile}>
      <Container>
        <StyledH1 variant='h2'>Bride Reviews</StyledH1>
        <SwiperComponent config={config} id={isMobile ? 'reviewMobile' : 'review'} />
        <StyledWrapper>
          <Button variant='contained' href='/contact#form'>let's work together</Button>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
