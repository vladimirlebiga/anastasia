'use client';
import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import {
  StyledWrapper,
  StyledSection,
  StyledUl,
  StyledLi,
  StyledH2,
  StyledTextList,
  StyledTextItem,
  StyledP,
  StyledP1,
  StyledImage,
  StyledHiddenContainer,
  StyleSpan,
  StyledArrowWrapper,
} from './Styled';
import { Arrow } from '../../assets/icons/Arrow';

const config = [
  {
    title: 'Accordion1',
    image: '/img/homepage/Homepage9.jpg',
    name: 'Basic',
    name2: 'Package',
    price: '€ 800',
    name3: "What you'll receive:",
    text: [
      'CONSULTATION',
      'TRIAL HAIR AND MAKEUP',
      'MAKEUP FOR OPEN-BODY PARTS',
      'MAKEUP FOR BRIDEGROOM',
      'GIFT BAG WITH TOUCH-UP ITEMS',
    ],
  },
  {
    title: 'Accordion2',
    image: '/img/homepage/Homepage10.jpg',
    name: 'Basic',
    spanName: ' +2guest',
    name2: 'Package',
    price: '€ 1000',
    name3: "What you'll receive:",
    text: [
      'SOFT MAKEUP&HAIRSTYLE FOR 2 GUESTS (MAX 1 HOUR FOR EACH)',
      'CONSULTATION',
      'TRIAL HAIR AND MAKEUP',
      'MAKEUP FOR OPEN-BODY PARTS',
      'MAKEUP FOR BRIDEGROOM',
      'GIFT BAG WITH TOUCH-UP ITEMS',
    ],
  },
  {
    title: 'Accordion3',
    image: '/img/homepage/Homepage11.jpg',
    name: 'Luxe',
    name2: 'Package',
    price: '€ 1200',
    name3: "What you'll receive:",
    text: [
      'PERSONAL BEAUTY ASSISTANT FOR 8 HOURS',
      'CONSULTATION',
      'TRIAL HAIR AND MAKEUP',
      'MAKEUP FOR OPEN-BODY PARTS',
      'MAKEUP FOR BRIDEGROOM',
      'GIFT BAG WITH TOUCH-UP ITEMS',
    ],
  },
  {
    title: 'Accordion4',
    image: '/img/homepage/Homepage12.png',
    name: '2 grooms',
    name2: 'Package',
    price: '€ 400',
    name3: "What you'll receive:",
    text: [
      'CONSULTATION',
      'MAKEUP FOR 2 GROOMS',
      'HAIRSTYLE FOR 2 GROOMS',
    ],
  },
];

export const AccordionSection = () => {
  const [active, setActive] = useState({
    Accordion1: false,
    Accordion2: false,
    Accordion3: false,
    Accordion4: false,
  });

  const handleToggle = (title: keyof typeof active) => {
    setActive((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <StyledSection>
      <Container maxWidth='xl'>
        <StyledWrapper>
          <StyledUl>
            {config.map((item) => (
              <StyledLi key={item.title} 
              isActive={active[item.title as keyof typeof active]}>
                <StyledImage src={item.image} alt={item.title} />
                <StyledH2 variant='h4'>
                  {item.name}
                  {item.spanName && <StyleSpan>{item.spanName}</StyleSpan>}
                </StyledH2>

                <StyledP1 variant='body1'>{item.name2}</StyledP1>
                <StyledP variant='h3'>{item.price}</StyledP>
                
                {active[item.title as keyof typeof active] && (
                  <StyledHiddenContainer>
                    <StyledTextList variant='body2'>{item.name3}</StyledTextList>
                    {item.text.map((text) => (
                      <StyledTextItem key={text} variant='body2'>{text}</StyledTextItem>
                    ))}
                  </StyledHiddenContainer>
                )}
                <StyledArrowWrapper
                  onClick={() =>
                    handleToggle(item.title as keyof typeof active)
                  }
                  isActive={active[item.title as keyof typeof active]}
                >
                  <Arrow />
                </StyledArrowWrapper>
              </StyledLi>
            ))}
          </StyledUl>
          <Button variant='contained'>Make A personal offer</Button>
        </StyledWrapper>
      </Container>
    </StyledSection>
  );
};
