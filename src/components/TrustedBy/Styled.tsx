import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({
  backgroundColor: '#F5F5F5',
//   paddingTop: '1px',
  paddingBottom: '20px',
}));

export const StyledWrapper = styled('div')(({ isMobile }: { isMobile: boolean }) => ({
  display: isMobile ? 'flex' : 'grid',
  flexDirection: 'column',
  gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
  gap: '10%',
}));

export const StyledWrapperLeft = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

export const StyledWrapperRight = styled('div')(({ isMobile }: { isMobile: boolean }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  order: isMobile ? -1 : 2,
}));

export const StyledH1 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile'
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  fontWeight: 400,
  color: '#000000',
  textAlign: isMobile ? 'center' : 'left',
  maxWidth: '500px',
  padding: isMobile ? '0 80px' : '0',
//   marginBottom: '10px',
//   marginTop: '20px',
}));

export const StyledH2 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile'
})(({ isMobile }: { isMobile: boolean }) => ({
    fontFamily: 'Great Vibes',
    color: '#F49D6A',
    textAlign: isMobile ? 'center' : 'right',
    textTransform: 'lowercase',
}));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  color: '#000000',
}));

export const StyledPOrange = styled(Typography)(() => ({
    fontFamily: 'Great Vibes',
    fontSize: '32px',
    color: '#F49D6A',
  }));


export const StyleUL = styled('ul')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
}));    

export const StyledLi = styled('li')(() => ({
    fontFamily: 'Montserrat',
    color: '#000000',
    lineHeight: '120%',
}));

export const StyledImage = styled('img')(({ isMobile }: { isMobile: boolean }) => ({
  width: isMobile ? '258px' : '100%',
  height: isMobile ? '344px' : '100%',
  objectFit: 'cover',
  borderRadius: '10px',
  margin: isMobile ? '0 auto 20px auto' : '0',
  // paddingBottom: isMobile ? '20px' : '0',
}));

export const StyledText = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
justifyContent: 'center',
alignItems: 'center',
}));

export const StyledImgWrapper = styled('div')(({ isMobile }: { isMobile: boolean }) => ({
  position: 'relative',
  width: isMobile ? '258px' : '100%',
  height: isMobile ? '344px' : '100%',
  objectFit: 'cover',
  borderRadius: '10px',
  margin: isMobile ? '0 auto 20px auto' : '0',
  // paddingBottom: isMobile ? '20px' : '0',
  }));

export const StyledImgText = styled(Typography)(() => ({
  fontFamily: 'IM FELL Great Primer',
  fontSize: '32px',
  color: '#000000',
  backgroundColor: 'rgba(178 149 132 / 0.87)',
  position: 'absolute',
  textAlign: 'center',
  padding: '10px 20px',
  borderRadius: '10px',
  bottom: '0',
  left: '0',
  right: '0',
}));



