'use client';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Link from 'next/link';

export const StyledFooter = styled('footer')(() => ({
  backgroundColor: '#8E7A74',
  padding: '80px 0 ',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const StyledParagraph = styled('p')(() => ({
  fontSize: '0.8rem',
  color: '#fff',
  textAlign: 'center',
  marginTop: '50px',
}));

export const StyledGridContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  textAlign: 'center',
  width: '100%',
}));

export const StyledFooterLogo = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // maxWidth: '250px',
  width: '100%',
}));

export const StyledH1 = styled(Typography)(() => ({
  maxWidth: '239px',
  color: '#fff',
  fontSize: '18px',
  fontFamily: 'Montserrat',
  fontWeight: '400',
  letterSpacing: '0.05em',
  marginTop: '10px',
  lineHeight: '30px',
}));

export const StyledFooterMenu = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '10px',
  maxWidth: '250px',
  width: '100%',
  margin: '0 auto',
}));

export const StyledFooterMenuItem = styled(Typography)(() => ({
  color: '#fff',
  fontSize: '18px',
  fontFamily: 'Montserrat',
  fontWeight: '500',
  textTransform: 'uppercase',
  textAlign: 'left',
  marginBottom: '20px',
  letterSpacing: '0.05em',
}));

export const StyledFooterMenuItemLink = styled(Link)(() => ({    
  color: '#fff',

  // textDecoration: 'none',
  // fontSize: '0.8rem',
}));

export const StyledFooterSocial = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
}));

export const StyledFooterSocialItem = styled('div')(() => ({  
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const StyledFooterSocialItemLink = styled('div')(() => ({  
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.8rem',
}));

export const StyledSocialText = styled(Typography)(() => ({
  color: '#fff',
  fontSize: '18px',
  fontFamily: 'Montserrat',
  fontWeight: '500',
  letterSpacing: '0.05em',
}));

export const StyledIconWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20%',
  paddingTop: '30px',
}));

