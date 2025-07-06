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

const config = [
  {
    title: 'icon1',
    component: <ReachOut />,
    text: 'Reach out',
    gridArea: '1 / 1 / 2 / 4',
  },
  {
    title: 'icon2',
    component: <ReceiveTheProposal />,
    text: 'Receive the proposal',
    gridArea: '1 / 5 / 2 / 8',
  },
  {
    title: 'icon3',
    component: <MakeItOfficial />,
    text: 'Make it official',
    gridArea: '1 / 9 / 2 / 12',
  },
  {
    title: 'icon4',
    component: <BridalPreviewExp />,
    text: 'Bridal preview experience',
    gridArea: '1 / 13 / 2 / 16',
  },
  {
    title: 'icon5',
    component: <WeddingQuestionnaire />,
    text: 'Wedding questionaire',
    gridArea: '2 / 3 / 3 / 6',
  },
  {
    title: 'icon6',
    component: <WeddingDaySchedule />,
    text: 'Wedding day schedule',
    gridArea: '2 / 7 / 3 / 10',
  },
  {
    title: 'icon7',
    component: <DreamWeddingHair />,
    text: 'Dream wedding hair',
    gridArea: '2 / 11 / 3 / 14',
  },
];

export const HairstylingExperience = () => {
  return (
    <StyledSection>
      <Container maxWidth='xl'>
        <StyledWrapper>
          <StyledH2 variant='h2'>
            let's make your bridal hairstyling experience easy and fun
          </StyledH2>
          <StyledH3 variant='h3'>here’s how it works</StyledH3>

          <StyledUl>
            {config.map((item) => (
              <StyledLi key={item.title} gridArea={item.gridArea}>
                {item.component}
                <StyledP>{item.text}</StyledP>
              </StyledLi>
            ))}
          </StyledUl>
          <Button variant='contained'>ok, let’s do this</Button>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
