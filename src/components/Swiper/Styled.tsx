import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';


export const StyledItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '562px',
  gap: '25px',
}));

export const StyledImage = styled('img')(() => ({
  width: '260px',
  height: '260px',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: '100%',
}));

export const StyledTextTitle = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  fontWeight: 400,
  lineHeight: '120%',
  color: '#F49D6A',
}));

export const StyledText = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  lineHeight: '136%',
  color: '#000000',
  flex: '1 1 50%',
  textAlign: 'center',
}));

export const StyledSwiperWrapper = styled('div')(({ theme }) => ({
  '& .swiper-pagination-bullet-active': {
    backgroundColor: theme.palette.primary.dark,
  },
}));
