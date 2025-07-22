'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyledBox } from './Styled';
import { Container } from '@mui/material';
import { useResponsive } from '@/contexts/ResponsiveContext';
import MenuIcon from '@mui/icons-material/Menu';
import { useMenuOpen } from '@/contexts/MenuContext';

export const Logo = () => {
  const { isMobile } = useResponsive();
  const {setIsMenuOpen} = useMenuOpen();

  return (
    <Container>
      <StyledBox isMobile={isMobile}>
        <Link href='/'>
          <Image
            src='/img/homepage/Anastasia_Pyzhik.png'
            alt='logo'
            width={isMobile ? 200 : 530}
            height={isMobile ? 45 : 142}
          />
        </Link>
        {isMobile && <MenuIcon sx={{ color: '#B29584', fontSize: '30px' }} onClick={() => setIsMenuOpen(true)} />}
      </StyledBox>
    </Container>
  );
};
