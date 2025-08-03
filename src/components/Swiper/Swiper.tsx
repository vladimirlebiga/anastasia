import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {
  StyledImage,
  StyledTextTitle,
  StyledText,
  StyledItem,
  StyledSwiperWrapper,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

const swiperConfiguration = {
  review: {
    navigation: false,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: false,
    freeMode: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    modules:[Pagination, FreeMode],
    height: '580px'
  },
  hairstyles: {
    navigation: false,
    slidesPerView: 2.3,
    centeredSlides: false,
    freeMode: false,
    spaceBetween: 10,
    loop: true,
    pagination: {
      clickable: true,
    },
    modules:[Pagination],
    height: '250px'
  },
     reviewMobile: {
     navigation: true,
     slidesPerView: 1,
     spaceBetween: 30,
     centeredSlides: false,
     freeMode: false,
     loop: true,
     pagination: {
       clickable: true,
     },
     modules:[Navigation, Pagination],
     height: '450px'
   }
};

export const SwiperComponent = ({
  config,
  id,
}: {
  config: any;
  id: keyof typeof swiperConfiguration;
}) => {
  const { slidesPerView, spaceBetween, freeMode, pagination, loop, centeredSlides, modules, navigation, height } =
    swiperConfiguration[id];
  const { isMobile } = useResponsive();
  return (
    <StyledSwiperWrapper>
      <Swiper
        navigation={navigation}
        slidesPerView={slidesPerView as number}
        spaceBetween={spaceBetween}
        freeMode={freeMode}
        pagination={pagination}
        loop={loop}
        centeredSlides={centeredSlides}
        modules={modules}
        className='mySwiper'
      >
        {config.map((item: any) => (
          <SwiperSlide key={item.title}>
            <StyledItem isRound={item.isRound} isMobile={isMobile} height={height}>
              <StyledImage isRound={item.isRound} src={item.image} alt={item.title} />
              <StyledTextTitle variant='h2'>{item.textTitle}</StyledTextTitle>
              <StyledText variant='body2' isMobile={isMobile}>{item.text}</StyledText>
            </StyledItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperWrapper>
  );
};
