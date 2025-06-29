import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import {
  StyledImage,
  StyledTextTitle,
  StyledText,
  StyledItem,
  StyledSwiperWrapper,
} from './Styled';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const swiperConfiguration = {
  review: {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    pagination: {
      clickable: true,
    },
  },
};

export const SwiperComponent = ({
  config,
  id,
}: {
  config: any;
  id: keyof typeof swiperConfiguration;
}) => {
  const { slidesPerView, spaceBetween, freeMode, pagination, loop } =
    swiperConfiguration[id];
  return (
    <StyledSwiperWrapper>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        freeMode={freeMode}
        pagination={pagination}
        loop={loop}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {config.map((item: any) => (
          <SwiperSlide key={item.title}>
            <StyledItem isRound={item.isRound}>
              <StyledImage isRound={item.isRound} src={item.image} alt={item.title} />
              <StyledTextTitle variant='h2'>{item.textTitle}</StyledTextTitle>
              <StyledText variant='body2'>{item.text}</StyledText>
            </StyledItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperWrapper>
  );
};
