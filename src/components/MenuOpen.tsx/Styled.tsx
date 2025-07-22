import { styled } from '@mui/material/styles';
import Link from 'next/link';

export const StyledMenu = styled('div')(() => ({
  position: 'fixed',
  top: '75px',
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
}));

export const StyledUl = styled('ul')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  padding: '30px',
  backgroundColor: 'white',
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


