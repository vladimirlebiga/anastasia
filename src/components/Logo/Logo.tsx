import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StyledBox } from './Styled';
import { Container } from '@mui/material';

export const Logo = () => {
  return (
    <Container>
      <StyledBox>
        <Link href='/'>
          <Image
            src='/img/homepage/Anastasia_Pyzhik.png'
            alt='logo'
            width={530}
            height={142}
          />
        </Link>
      </StyledBox>
    </Container>
  );
};
