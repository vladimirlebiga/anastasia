import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const StyledSection = styled('section')(() => ({
  backgroundColor: '#E8D1C5',
//   paddingBottom: '20px',
//   paddingTop: '40px',
}));

export const StyledH1 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
} )(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
  paddingTop: '70px',
  paddingBottom: '40px',
}));


export const StyledP = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
} )(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  fontSize: isMobile ? '16px' : '24px',
  lineHeight: '136%',
  paddingBottom: isMobile ? '0' : '1rem',
  paddingTop: isMobile ? '10px' : '0',
  textAlign: isMobile ? 'center' : 'left',
  paddingLeft: isMobile ? '30px' : '0',
  paddingRight: isMobile ? '30px' : '0',
}));

export const StyledButtonWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
  marginBottom: '40px',
}));

export const StyledButton = styled(Button)(() => ({
  //   width: '300px',
  paddingLeft: '60px',
  paddingRight: '60px',
}));

export const StyledWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
} )(({ isMobile }: { isMobile: boolean }) => ({
  display: 'grid',
  gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
  gridTemplateRows: isMobile ? '1fr 1fr' : '1fr',
  gap: isMobile ? '10px' : '60px',
  // backgroundColor: '#E8D1C5',
}));

// export const StyledWrapperLeft = styled('div')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-start',
//   justifyContent: 'flex-start',
//   margin: '0 auto',
// }));

export const StyledWrapperRight = styled('div')(() => ({

}));

export const StyledImgWrapper = styled('div')(() => ({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // width: '100%',
  // height: '100%',
}));

export const StyledImg = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
} )(({ isMobile }: { isMobile: boolean }) => ({
  backgroundImage: "url('/img/portfolio/get_in_touch.jpg')",
  backgroundPosition: isMobile ? 'center' : 'center',
  width: isMobile ? '100%' : '780px',
  height: isMobile ? '170px' : '520px',
  // maxWidth: '400px',
  borderRadius: isMobile ? '0' : '10px',
  objectFit: 'cover',
  objectPosition: 'center',
}));
