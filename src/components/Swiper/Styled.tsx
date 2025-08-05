import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledItem = styled('div')(({height }: { height: string }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: height,
  // gap: isRound ? '0' : '10px',
}));

export const StyledImage = styled('img')(({ isRound, imgHeight, imgWidth }: { isRound: boolean, imgHeight: string, imgWidth: string }) => ({
  width: imgWidth,
  height: imgHeight,
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: isRound ? '100%' : '10px',
}));

export const StyledTextTitle = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  fontWeight: 400,
  lineHeight: '120%',
  color: '#F49D6A',
  fontSize: '40px !important',
}));

export const StyledText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile'
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'center',
  height: isMobile ? '120px' : '240px',
}));

export const StyledSwiperWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  '& .swiper-pagination-bullet-active': {
    backgroundColor: theme.palette.primary.dark,
  },
  '& .swiper-button-next, & .swiper-button-prev': {
    color: '#000000',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '50%',
    border: '2px solid #000000',
    width: '40px',
    height: '40px',
    top: '34%',
    transform: 'translateY(-50%)',
    zIndex: 9999,
    display: 'flex',
    '&::after': {
      fontSize: '20px',
      fontWeight: 'bold',
    },
  },
  '& .swiper-button-prev': {
    left: '10px',
  },
  '& .swiper-button-next': {
    right: '10px',
  },
}));
