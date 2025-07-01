'use client';
import React from 'react';
import { Button, Container } from '@mui/material';
import {
  StyledH2,
  StyledH3,
  StyledWrapper,
  StyledSection,
  StyledIconGrid,
  StyledUl,
  StyledLi,
  StyledP,
} from './Styled';
import { ReceiveTheProposal } from '@/assets/icons/ReceiveTheProposal';
import { MakeItOfficial } from '@/assets/icons/MakeItOfficial';
import { ReachOut } from '@/assets/icons/ReachOut';
import { BridalPreviewExp } from '@/assets/icons/BridalPreviewExp';

const config = [
    {
        title: 'icon1',
        component: <ReachOut />,
        text: 'Reach out',
    },
    {
        title: 'icon2',
        component: <ReceiveTheProposal />,
        text: 'Receive the proposal',
    },
    {
        title: 'icon3',
        component: <MakeItOfficial />,
        text: 'Make it official',
    },
    {
        title: 'icon4',
        component: <BridalPreviewExp />,
        text: 'Bridal preview experience',
    },
    {
        title: 'icon5',
        component: '',
        text: 'Wedding questionaire',
    },
    {
        title: 'icon6',
        component: '',
        text: 'Wedding day schedule',
    },
    {
        title: 'icon7',
        component: '',
        text: 'Dream wedding hair',
    },
]

export const HairstylingExperience = () => {
  return (
    <StyledSection>
      <Container maxWidth='xl'>
        <StyledWrapper>
          <StyledH2 variant='h2'>let's make your bridal hairstyling experience easy and fun</StyledH2>
          <StyledH3 variant='h3'>here’s how it works</StyledH3>
          <StyledIconGrid>
            <StyledUl>
                {config.map((item) => (
                    <StyledLi key={item.title}>
                        {item.component}
                        <StyledP>{item.text}</StyledP>
                    </StyledLi>
                ))}
            </StyledUl>

          </StyledIconGrid>
          <Button variant='contained'>ok, let’s do this</Button>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};

