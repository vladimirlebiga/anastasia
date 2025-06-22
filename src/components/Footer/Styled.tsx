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
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
}));

export const StyledFooterLogo = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // maxWidth: '250px',
  width: '100%',
}));

export const StyledH1 = styled(Typography)(() => ({
  maxWidth: '250px',
  color: '#fff',
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
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
  // width: '100%',
  textTransform: 'uppercase',
  textAlign: 'left',
}));

export const StyledFooterMenuItemLink = styled(Link)(() => ({    
  color: '#fff',

  // textDecoration: 'none',
  // fontSize: '0.8rem',
}));

export const StyledFooterSocial = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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

export const StyledFooterSocialItemLink = styled('a')(() => ({  
  color: '#fff',
  textDecoration: 'none',
  fontSize: '0.8rem',
}));

export const StyledSocialText = styled(Typography)(() => ({
  color: '#fff',

}));

export const StyledIconWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20%',
  paddingTop: '30px',
}));

