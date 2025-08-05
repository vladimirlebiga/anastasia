import React from 'react';
import { Container } from '@mui/material';
import {
  StyledSection,
  StyledWrapper,
  StyledH1,
  StyledH2,
  StyledImg,
} from './Styled';
import { useResponsive } from '@/contexts/ResponsiveContext';

const config = [
  {
    title: 'IMG_0001',
    url: '/img/portfolio/section_1.jpg',
    grid: '1 / 1 / 4 / 2',
    isTall: true
  },
  {
    title: 'IMG_0002',
    url: '/img/portfolio/section_2.jpg',
    grid: '5 / 1 / 8 / 2',
    isTall: true
  },
  {
    title: 'IMG_0003',
    url: '/img/portfolio/section_3.jpg',
    grid: '9 / 1 / 12 / 2',
    isTall: true
  },
  {
    title: 'IMG_0004',
    url: '/img/portfolio/section_4.jpg',
    grid: '13 / 1 / 14 / 2',
    isTall: false
  },
  {
    title: 'IMG_0005',
    url: '/img/portfolio/section_5.jpg',
    grid: '15 / 1 / 18 / 2',
    isTall: true
  },
  {
    title: 'IMG_0007',
    url: '/img/portfolio/section_7.jpg',
    grid: '19 / 1 / 20 / 2',
    isTall: true
  },
  {
    title: 'IMG_0008',
    url: '/img/portfolio/section_8.jpg',
    grid: '1 / 2 / 2 / 3',
    isTall: false
  },
  {
    title: 'IMG_0009',
    url: '/img/portfolio/section_9.jpg',
    grid: '3 / 2 / 6 / 3',
    isTall: true
  },
  {
    title: 'IMG_0010',
    url: '/img/portfolio/section_10.jpg',
    grid: '7 / 2 / 10 / 3',
    isTall: true
  },
  {
    title: 'IMG_0011',
    url: '/img/portfolio/section_11.jpg',
    grid: '11 / 2 / 14 / 3',
    isTall: true
  },
  {
    title: 'IMG_0012',
    url: '/img/portfolio/section_12.jpg',
    grid: '15 / 2 / 16 / 3',
    isTall: false
  },
  {
    title: 'IMG_0013',
    url: '/img/portfolio/section_13.jpg',
    grid: '17 / 2 / 20 / 3',
    isTall: true
  }
];

export const EveryBrideDeserves = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile}>
      <Container>
      <StyledH1 variant='h3'>every bride deserves</StyledH1>
      <StyledH2 variant='h3'>to fall in love with themselves</StyledH2>
        <StyledWrapper isMobile={isMobile}>
          {config.map((item) => (
            <StyledImg key={item.title} src={item.url} alt={item.title} grid={item.grid} isTall={item.isTall} />
          ))}
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
