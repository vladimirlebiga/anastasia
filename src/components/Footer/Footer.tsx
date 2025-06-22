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
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';

const config = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Services',
    link: '/services',
  },
  {
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    title: 'FAQs',
    link: '/faqs',
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
                  <TelegramIcon />
                  <FacebookIcon />
                  <InstagramIcon />
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
