'use client';
import React from 'react'
import { StyledMenu, StyledUl, StyledLi, StyledLink } from './Styled';
import { useMenuOpen } from '@/contexts/MenuContext';

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
      url: '/services#faqs',
    },
    {
      label: 'Contact',
      url: '/contact',
    },
  ];
  
  export const MenuOpen = () => {
    const {setIsMenuOpen} = useMenuOpen();
    return (

      <StyledMenu>
        <StyledUl>
          {navItems.map((item) => (
            <StyledLi key={item.label}>
              <StyledLink href={item.url} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </StyledLink>
            </StyledLi>
          ))}
        </StyledUl>
      </StyledMenu>

    );
  };
  