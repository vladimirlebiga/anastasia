import React from 'react';
import {
  StyledFooter,
  StyledParagraph,
  StyledFooterLogo,
  StyledGridContainer,
  StyledH1,
  StyledFooterMenu,
  StyledFooterMenuItem,
  StyledFooterMenuItemLink,
  StyledFooterSocial,
  StyledFooterSocialItem,
  StyledFooterSocialItemLink,
  StyledSocialText,
  StyledIconWrapper,
} from './Styled';
import { Container } from '@mui/material';
import { Union } from '@/assets/icons/Union';
import { InstagramIcon } from '@/assets/icons/InstagramIcon';
import { FacebookIcon } from '@/assets/icons/FacebookIcon';
import { TelegramIcon } from '@/assets/icons/TelegramIcon';


const config = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'FAQs',
    link: '/faqs',
  },
  {
    title: 'Services',
    link: '/services',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledGridContainer>
          <StyledFooterLogo>
            <Union />
            <StyledH1 variant='body1'>
              Bridal hairstyling for the modern bride
            </StyledH1>
          </StyledFooterLogo>
          <StyledFooterMenu>
            {config.map((item) => (
              <StyledFooterMenuItem variant='body1' key={item.title}>
                <StyledFooterMenuItemLink href={item.link}>
                  {item.title}
                </StyledFooterMenuItemLink>
              </StyledFooterMenuItem>
            ))}
          </StyledFooterMenu>
          <StyledFooterSocial>
            <StyledFooterSocialItem>
              <StyledFooterSocialItemLink>
                <StyledSocialText variant='body1'>
                  SERVING AMSTERDAM
                </StyledSocialText>
                <StyledIconWrapper>
                  <a href='https://t.me/Muachaos' target='_blank' rel='noopener noreferrer'>
                    <TelegramIcon />
                  </a>
                  <a href='https://www.facebook.com/PyzhikMakeup' target='_blank' rel='noopener noreferrer'>
                    <FacebookIcon />
                  </a>
                  <a href='https://www.instagram.com/wed_makeup_nl' target='_blank' rel='noopener noreferrer'>
                    <InstagramIcon />
                  </a>
                </StyledIconWrapper>
              </StyledFooterSocialItemLink>
            </StyledFooterSocialItem>
          </StyledFooterSocial>
        </StyledGridContainer>
        <StyledParagraph>
          &copy; 2025 Lebiga. All rights reserved.
        </StyledParagraph>
      </Container>
    </StyledFooter>
  );
};
