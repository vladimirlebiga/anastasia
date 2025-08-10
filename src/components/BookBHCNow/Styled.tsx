import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  width: '100%',
  paddingBottom: isMobile ? '20px' : '60px',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: 'flex',
  flexDirection: 'column',
  // maxWidth: '900px',
  alignItems: 'center',
  justifyContent: 'center',
  margin: isMobile ? '20px auto 0 auto' : '0 auto',
}));

export const StyledH2 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  color: '#000000',
  textAlign: 'center',
  textTransform: 'uppercase',
}));

export const StyledH3 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
  letterSpacing: '3px',
  textTransform: 'lowercase',
  width: '100%',
  display: 'block',
  marginLeft: '25%',
}));

export const StyledH4 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#000000',
    lineHeight: isMobile ? '20px' : '30px',
    textAlign: 'center',
    marginTop: isMobile ? '10px' : '30px',
    letterSpacing: '1px',
  }));

export const StyledP = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  color: '#000000',
  lineHeight: isMobile ? '20px' : '30px', 
  display: 'inline', // <-- Add this line
  letterSpacing: '1px',
  textAlign: 'center',
  margin: isMobile ? '0 30px' : '0',
}));

export const StyledSocialP = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  color: '#000000',
  lineHeight: isMobile ? '20px' : '40px', 
  display: 'inline', // <-- Add this line
  letterSpacing: '1px',
  textAlign: 'center',
}));

export const StyledUl = styled('ul', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: isMobile ? '10px' : '30px',
  maxWidth: '500px',
}));


export const StyledLi = styled('li', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  listStyle: 'disc',
  textAlign: 'left',
  // lineHeight: isMobile ? '10px' : '30px', 
}));

export const StyledLink = styled('a')(({ decoration }: { decoration: string }) => ({
  textDecoration: decoration,
  color: '#000000',
  
}));
