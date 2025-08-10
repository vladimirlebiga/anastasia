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
  maxWidth: '1500px',
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
  padding: isMobile ? '0 40px' : '0',
}));

export const StyledH3 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
  textTransform: 'lowercase',
  marginBottom: isMobile ? '0' : '30px',
}));

export const StyledP = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  fontStyle: 'italic',
  color: '#000000',
  lineHeight: isMobile ? '20px' : '30px',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '30px',
  letterSpacing: '1px',
  maxWidth: '200px',
}));

export const StyledUl = styled('ul', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(15, 1fr)',
  gridTemplateRows: isMobile ? '1fr 1fr 1.5fr' : 'repeat(2, 1fr)',
  rowGap: isMobile ? '10px' : '30px',
  columnGap: isMobile ? '0' : '40px',
  marginBottom: isMobile ? '0' : '30px',
}));

export const StyledLi = styled('li')<{ gridArea: string; gridMobile: string; isMobile: boolean }>(
  ({ gridArea, gridMobile, isMobile }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: '40px',
    gridArea: isMobile ? gridMobile : gridArea,
    maxHeight: '300px',
  })
);
