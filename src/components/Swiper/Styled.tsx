import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledItem = styled('div')(({ isRound }: { isRound: boolean }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: isRound ? '562px' : '240px',
  gap: isRound ? '25px' : '10px',
}));

export const StyledImage = styled('img')(({ isRound }: { isRound: boolean }) => ({
  width: isRound ? '260px' : '350px',
  height: isRound ? '260px' : '200px',
  objectFit: 'cover',
  objectPosition: 'center',
  borderRadius: isRound ? '100%' : '10px',
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
