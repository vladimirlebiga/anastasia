import React, { useRef, useState, useEffect } from 'react';
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
  hairstylesMobile: {
    navigation: false,
    slidesPerView: 2.3,
    centeredSlides: false,
    freeMode: false,
    spaceBetween: 10,
    loop: true,
    pagination: {
      clickable: true,
    },
    modules: [Pagination],
    height: '250px',
    imgHeight: '210px',
    imgWidth: '160px',
  },
  // hairstyles: {
  //   navigation: false,
  //   slidesPerView: 3,
  //   centeredSlides: false,
  //   freeMode: false,
  //   spaceBetween: 10,
  //   loop: true,
  //   pagination: {
  //     clickable: true,
  //   },
  //   modules: [Pagination],
  //   height: '250px',
  //   imgHeight: '350px',
  //   imgWidth: '480px',
  // },
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
    modules: [Navigation, Pagination],
    height: '450px',
    imgHeight: '230px',
    imgWidth: '230px',
  },
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
    modules: [Pagination, FreeMode],
    height: '580px',
    imgHeight: '260px',
    imgWidth: '260px',
  },
  processMobile: {
    navigation: false,
    slidesPerView: 1.5,
    centeredSlides: false,
    freeMode: false,
    spaceBetween: 10,
    loop: true,
    pagination: {
      clickable: true,
    },
    modules: [Pagination],
    height: '210px',
    imgHeight: '172px',
    imgWidth: '250px',
  },
  process: {
    navigation: false,
    slidesPerView: 2.3,
    centeredSlides: false,
    freeMode: false,
    spaceBetween: 0,
    loop: true,
    pagination: {
      clickable: true,
    },
    modules: [Pagination],
    height: '380px',
    imgHeight: '350px',
    imgWidth: '480px',
  },
};

export const SwiperComponent = ({
  config,
  id,
}: {
  config: any;
  id: keyof typeof swiperConfiguration;
}) => {
  const {
    slidesPerView,
    spaceBetween,
    freeMode,
    pagination,
    loop,
    centeredSlides,
    modules,
    navigation,
    height,
    imgHeight,
    imgWidth,
  } = swiperConfiguration[id];
  const { isMobile } = useResponsive();
  const swiperRef = useRef<any>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Force Swiper to update after component mounts
    const timer = setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
        // Only initialize navigation if it exists and navigation is enabled
        if (navigation && swiperRef.current.swiper.navigation) {
          swiperRef.current.swiper.navigation.init();
          swiperRef.current.swiper.navigation.update();
        }
      }
      setIsReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [navigation]);

  useEffect(() => {
    // Re-initialize when config or id changes
    if (isReady && swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.update();
      // Only initialize navigation if it exists and navigation is enabled
      if (navigation && swiperRef.current.swiper.navigation) {
        swiperRef.current.swiper.navigation.init();
        swiperRef.current.swiper.navigation.update();
      }
    }
  }, [config, id, isReady, navigation]);

  return (
    <StyledSwiperWrapper>
      <Swiper
        key={`${id}-${isReady}`}
        ref={swiperRef}
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
            <StyledItem height={height}>
              <StyledImage
                isRound={item.isRound}
                src={item.image}
                alt={item.title}
                imgHeight={imgHeight}
                imgWidth={imgWidth}
              />
              <StyledTextTitle variant='h2'>{item.textTitle}</StyledTextTitle>
              <StyledText variant='body2' isMobile={isMobile}>
                {item.text}
              </StyledText>
            </StyledItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperWrapper>
  );
};
