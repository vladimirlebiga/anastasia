'use client';
import React from 'react';
import { Button, Container } from '@mui/material';
import {
  StyledH2,
  StyledH3,
  StyledWrapper,
  StyledSection,
  StyledUl,
  StyledLi,
  StyledP,
} from './Styled';
import { ReceiveTheProposal } from '@/assets/icons/ReceiveTheProposal';
import { MakeItOfficial } from '@/assets/icons/MakeItOfficial';
import { ReachOut } from '@/assets/icons/ReachOut';
import { BridalPreviewExp } from '@/assets/icons/BridalPreviewExp';
import { WeddingDaySchedule } from '@/assets/icons/WeddingDaySchedule';
import { WeddingQuestionnaire } from '@/assets/icons/WeddingQuestionnaire';
import { DreamWeddingHair } from '@/assets/icons/DreamWeddingHair';
import { useResponsive } from '@/contexts/ResponsiveContext';
import { Services_one } from '@/assets/icons/Services_one';
import { Services_two } from '@/assets/icons/Services_two';
import { Services_seven } from '@/assets/icons/Services_seven';

const config = [
  {
    title: 'icon1',
    component: <Services_one />,
    text: 'Reach out',
    gridArea: '1 / 1 / 2 / 4',
    gridMobile: '1 / 1 / 2 / 6',
  },
  {
    title: 'icon2',
    component: <Services_two />,
    text: 'Receive the proposal',
    gridArea: '1 / 5 / 2 / 8',
    gridMobile: '1 / 6 / 2 / 11',
  },
  {
    title: 'icon3',
    component: <Services_two />,
    text: 'Make it official',
    gridArea: '1 / 9 / 2 / 12',
    gridMobile: '1 / 11 / 2 / 16',
  },
  {
    title: 'icon4',
    component: <Services_one />,
    text: 'Bridal preview experience',
    gridArea: '1 / 13 / 2 / 16',
    gridMobile: '2 / 1 / 3 / 6',
  },
  {
    title: 'icon5',
    component: <WeddingQuestionnaire />,
    text: 'Wedding questionaire',
    gridArea: '2 / 3 / 3 / 6',
    gridMobile: '2 / 6 / 3 / 11',
  },
  {
    title: 'icon6',
    component: <WeddingDaySchedule />,
    text: 'Wedding day schedule',
    gridArea: '2 / 7 / 3 / 10',
    gridMobile: '2 / 11 / 3 / 16',
  },
  {
    title: 'icon7',
    component: <Services_seven />,
    text: 'Dream wedding hair',
    gridArea: '2 / 11 / 3 / 14',
    gridMobile: '3 / 5 / 4 / 12',
  },
];

export const HairstylingExperience = () => {
  const { isMobile } = useResponsive();
  return (
    <StyledSection isMobile={isMobile}>
      <Container maxWidth='xl'>
        <StyledWrapper>
          <StyledH2 variant='h2' isMobile={isMobile}>
            let's make your bridal hairstyling experience easy and fun
          </StyledH2>
          <StyledH3 variant='h3' isMobile={isMobile}>here’s how it works</StyledH3>

          <StyledUl isMobile={isMobile}>
            {config.map((item) => (
              <StyledLi key={item.title} gridArea={item.gridArea} gridMobile={item.gridMobile} isMobile={isMobile}>
                {item.component}
                <StyledP variant='body2' isMobile={isMobile}>{item.text}</StyledP>
              </StyledLi>
            ))}
          </StyledUl>
          <Button variant='contained' href='/contact#form'>ok, let's do this</Button>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
