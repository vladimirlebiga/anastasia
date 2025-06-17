'use client';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const StyledNav = styled('nav')(() => ({

}));

export const StyledUl = styled('ul')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px',
  padding: '30px',

}));

export const StyledLi = styled('li')(() => ({
 
}));

export const StyledLink = styled(Link)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '120%',
  letterSpacing: '6%',
  color: 'black',
}));


