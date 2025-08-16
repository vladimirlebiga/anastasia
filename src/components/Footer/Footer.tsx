'use client';
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
  StyledSocialTextTitle,
  StyledSocialTextTitleImg,
} from './Styled';
import { Container } from '@mui/material';
import { Union } from '@/assets/icons/Union';
import { InstagramIcon } from '@/assets/icons/InstagramIcon';
import { FacebookIcon } from '@/assets/icons/FacebookIcon';
import { TelegramIcon } from '@/assets/icons/TelegramIcon';
import { WhatsAppIcon } from '@/assets/icons/WhatsAppIcon';
import { useResponsive } from '@/contexts/ResponsiveContext';
import { usePathname } from 'next/navigation';

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
    link: '/services#faqs',
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
  const { isMobile } = useResponsive();
  const pathname = usePathname();
  const isPortfolio = pathname.includes('portfolio');
  return (
    <StyledFooter id='footer' isMobile={isMobile}>
        {isMobile && !isPortfolio && (
                <StyledSocialTextTitleImg isMobile={isMobile} />
              )}
      <Container>
        <StyledGridContainer>
          {!isMobile && (
            <StyledFooterLogo>
              <Union />
              <StyledH1 variant='body1'>
                Bridal hairstyling for the modern bride
              </StyledH1>
            </StyledFooterLogo>
          )}
          {!isMobile && (
            <StyledFooterMenu>
              {config.map((item) => (
                <StyledFooterMenuItem variant='body1' key={item.title}>
                  <StyledFooterMenuItemLink href={item.link}>
                    {item.title}
                  </StyledFooterMenuItemLink>
                </StyledFooterMenuItem>
              ))}
            </StyledFooterMenu>
          )}
          <StyledFooterSocial>
            <StyledFooterSocialItem>
            
              <StyledFooterSocialItemLink isMobile={isMobile}>
                {isMobile && (
                  <StyledSocialTextTitle variant='h2'>
                    LETS GET SOCIAL
                  </StyledSocialTextTitle>
                )}
                <StyledSocialText variant='body1' isMobile={isMobile}>
                  SERVING AMSTERDAM
                </StyledSocialText>
                <StyledIconWrapper isMobile={isMobile}>
                  <a
                    href='https://t.me/Muachaos'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <TelegramIcon />
                  </a>
                  <a
                    href='https://www.facebook.com/PyzhikMakeup'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href='https://www.instagram.com/wed_makeup_nl'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href='https://wa.me/380634612880'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <WhatsAppIcon />
                  </a>
                </StyledIconWrapper>
              </StyledFooterSocialItemLink>
            </StyledFooterSocialItem>
          </StyledFooterSocial>
        </StyledGridContainer>
        <StyledParagraph isMobile={isMobile}>
          &copy; 2025 Lebiga. All rights reserved.
        </StyledParagraph>
      </Container>
    </StyledFooter>
  );
};
