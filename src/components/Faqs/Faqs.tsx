'use client';
import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import {
  StyledH1,
  StyledUl,
  StyledSection,
  StyledLi,
  StyledHiddenContainer,
  StyledP,
  StyledTextWrapper,
  StyledArrowWrapper,
} from './Styled';
import { FilledArrow } from '@/assets/icons/FilledArrow';

const config = [
  {
    title: 'faq1',
    textQuestion: 'HOW DO I RESERVE MY WEDDING DATE?',
    textAnswer:
      'To secure your date, I require a prepayment of €100. This amount is deducted from the total cost on your wedding day. Once the invoice is paid, your date is officially booked in my calendar.',
  },
  {
    title: 'faq2',
    textQuestion: 'WHAT HAPPENS IF WE DON\'T "CLICK" AT THE TRIAL?',
    textAnswer:
      'The trial is not only for testing the look, but also to ensure we feel aligned. If you feel it\'s not the right match, I respect your decision and return your prepayment. Your peace of mind matters most.',
  },
  {
    title: 'faq3',
    textQuestion: 'DO YOU USE PROFESSIONAL AND HYGIENIC PRODUCTS?',
    textAnswer:
      'Absolutely. I work only with high-end, professional cosmetics and follow strict hygiene protocols. All brushes and tools are carefully disinfected before each use. Additionally, I bring a full kit (40+ kg!) and often buy extra products tailored to your skin tone, hair type, or personal preferences — so your look is truly custom.',
  },
  {
    title: 'faq4',
    textQuestion: 'CAN I GET A REFUND IF I CANCEL?',
    textAnswer:
      'To secure your date, I require a prepayment of €100. This amount is deducted from the total cost on your wedding day. Once the invoice is paid, your date is officially booked in my calendar.',
  },
  {
    title: 'faq5',
    textQuestion: 'HOW LONG DO YOU STAY ON THE WEDDING DAY?',
    textAnswer:
      'My standard bridal package includes my presence until you\'re fully dressed and ready to walk out the door. However, many brides choose my *Full-Day Personal Beauty Assistant* service, where I stay with you throughout the entire day — for touch-ups, look changes, photos, and emotional support. This is the ultimate peace-of-mind option for brides who want to feel effortlessly flawless at every moment.',
  },
  {
    title: 'faq6',
    textQuestion: 'CAN YOU HELP ME CHOOSE THE RIGHT HAIRSTYLE AND MAKEUP?',
    textAnswer:
      'Yes, that\'s part of my signature approach. During the trial, I guide you through all options based on your dress, face shape, hair texture, and most importantly — how you want to feel. I\'m not here to impose trends, but to help you find the look that reflects you.',
  },
  {
    title: 'faq7',
    textQuestion: 'DO YOU TRAVEL TO OTHER CITIES OR COUNTRIES?',
    textAnswer:
      'Yes, I do. Travel and parking costs are calculated based on your wedding location. I\'m based in the Netherlands but often travel for destination weddings across Europe.',
  },
];

export const Faqs = () => {
  const [active, setActive] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
    faq7: false,
  });

  const handleToggle = (title: keyof typeof active) => {
    setActive((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section>
      <StyledSection>
        <Container>
          <StyledH1 variant='h2'>FAQs</StyledH1>
          <StyledUl>
            {config.map((item) => (
              <StyledLi
                key={item.title}
                isActive={active[item.title as keyof typeof active]}
              >
                <StyledTextWrapper>
                <StyledP variant='body1'>{item.textQuestion}</StyledP>

                {active[item.title as keyof typeof active] && (
                  <StyledHiddenContainer>
                    <StyledP variant='body1'>{item.textAnswer}</StyledP>
                  </StyledHiddenContainer>
                )}
                </StyledTextWrapper>
                  <StyledArrowWrapper
                  onClick={() =>
                    handleToggle(item.title as keyof typeof active)
                  }
                  isActive={active[item.title as keyof typeof active]}
                >

                  <FilledArrow />
                </StyledArrowWrapper>
              </StyledLi>
            ))}
          </StyledUl>
        </Container>
      </StyledSection>
    </section>
  );
};
