import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  width: '100%',
  paddingBottom: isMobile ? '20px' : '100px',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  // maxWidth: '900px',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
}));

// export const StyledH1 = styled(Typography)(() => ({
//   fontFamily: 'Montserrat',
//   textTransform: 'uppercase',
//   fontWeight: 500,
//   color: '#000000',
//   textAlign: 'center',
//   marginBottom: '10px',
//   marginTop: '20px',
// }));

export const StyledH2 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Playfair Display',
  color: '#000000',
  textAlign: 'center',
  textTransform: 'uppercase',
  marginTop: isMobile ? '20px' : '0',
}));

export const StyledH3 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
  textTransform: 'lowercase',
}));

export const StyledP = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  fontStyle: isMobile ? 'normal' : 'italic',
  color: '#000000',
  lineHeight: 'auto',
  textAlign: isMobile ? 'left' : 'center',
  marginTop: '10px',
  marginBottom: isMobile ? '10px' : '30px',
  letterSpacing: '1px',
}));

export const StyledButtonWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  marginTop: isMobile ? '15px' : '0',
}));

