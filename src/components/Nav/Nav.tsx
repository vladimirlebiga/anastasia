import React from 'react';
import { StyledNav, StyledUl, StyledLi, StyledLink } from './Styled';
import { Container } from '@mui/material';

const navItems = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Services',
    url: '/services',
  },
  {
    label: 'Portfolio',
    url: '/portfolio',
  },
  {
    label: 'FAQS',
    url: '/services/#faqs',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
];

export const Nav = () => {
  return (
    <Container>
    <StyledNav>
      <StyledUl>
        {navItems.map((item) => (
          <StyledLi key={item.label}>
            <StyledLink href={item.url}>{item.label}</StyledLink>
          </StyledLi>
        ))}
      </StyledUl>
    </StyledNav>
    </Container>
  );
};
