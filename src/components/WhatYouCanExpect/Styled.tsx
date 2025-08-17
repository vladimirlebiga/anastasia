import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  backgroundColor: isMobile ? '#FFFFFF' : '#E8D1C5',
  paddingBottom: '20px',
  paddingTop: isMobile ? '0' : '50px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
}));

export const StyledH2 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
}));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '0.25rem',
    width: '1.2rem',
    height: '1.2rem',
    backgroundImage: 'url(/icons/feather.svg)', // place your SVG in public/icons/
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));

export const StyledUl = styled('ul', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: 'flex',
  //   flexDirection: 'row',
    justifyContent: 'center',
  alignItems: 'center',
  margin: isMobile ? '10px 5px' : '30px 0',
  gap: isMobile ? '5px' : '30px',
}));

export const StyledLi = styled('li', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ url, isMobile }: { url: string, isMobile: boolean }) => ({
  maxWidth: '330px',
  width: '100%',
  height: isMobile ? '200px' : '500px',
  backgroundImage: `url(${url})`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '10px',
  marginBottom: isMobile ? '10px' : '0',
}));

export const StyledTextContainer = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: isMobile ? 'block' : 'grid',
  gridTemplateColumns:'1fr 120px 1fr',
  gridTemplateRows: '1fr 1fr 1fr 80px ',
//   columnGap: '120px',
  rowGap: '10px',
  backgroundColor: isMobile ? '#FFFFFF' : '#EEEEEE',
  borderRadius: isMobile ? '0' : '10px',
  padding: isMobile ? '10px' : '30px 100px 50px 30px',
}));

export const StyledButtonWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  gridArea: '4 / 1 / 5 / 4',
  marginTop: '30px',
}));

export const StyledImgWrapper = styled('div')(() => ({
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: '100%',
    // height: '100%',
}));

export const StyledFirstItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  gridArea: isMobile ? '1 / 1 / 2 / 2' : '1 / 1 / 2 / 2',
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '0.25rem',
    width: '1.2rem',
    height: '1.2rem',
    backgroundImage: 'url(/icons/feather.svg)', // place your SVG in public/icons/
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));

export const StyledSecondItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  gridArea: '2 / 1 / 3 / 2',
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '0.25rem',
    width: '1.2rem',
    height: '1.2rem',
    backgroundImage: 'url(/icons/feather.svg)', // place your SVG in public/icons/
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));

export const StyledThirdItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  gridArea: '3 / 1 / 4 / 2',
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '0.25rem',
    width: '1.2rem',
    height: '1.2rem',
    backgroundImage: 'url(/icons/feather.svg)', // place your SVG in public/icons/
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));

export const StyledFourthItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  gridArea: '1 / 3 / 2 / 4',
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '0.25rem',
    width: '1.2rem',
    height: '1.2rem',
    backgroundImage: 'url(/icons/feather.svg)', // place your SVG in public/icons/
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));

export const StyledFifthItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  gridArea: '2 / 3 / 3 / 4',
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '0.25rem',
    width: '1.2rem',
    height: '1.2rem',
    backgroundImage: 'url(/icons/feather.svg)', // place your SVG in public/icons/
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));

export const StyledSixthItem = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  gridArea: '3 / 3 / 4 / 4',
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: 0,
    top: '0.25rem',
    width: '1.2rem',
    height: '1.2rem',
    backgroundImage: 'url(/icons/feather.svg)', // place your SVG in public/icons/
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  },
}));

// export const StyledImg = styled('img')(() => ({
//   // maxWidth: '414px',
//   // width: '100%',
//   // maxHeight: '528px',
//   borderRadius: '10px',
//   objectFit: 'cover',
//   objectPosition: 'center',
// }));
