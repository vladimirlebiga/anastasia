import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  backgroundColor: '#F5F5F5',
  paddingBottom: isMobile ? '50px' : '100px',
}));

export const StyledWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  columnGap: isMobile ? '10px' : '30px',
  gridTemplateRows: isMobile
    ? '1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr 10px 1fr'
    : '1fr 30px 1fr 30px 1fr 30px 1fr 30px 1fr 30px 1fr 30px 1fr 30px 1fr 30px 1fr 30px 1fr',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  fontWeight: 400,
  color: '#000000',
  textAlign: 'center',
  paddingTop: '20px',
}));

export const StyledH2 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
  textTransform: 'lowercase',
  paddingBottom: '20px',
}));

export const StyledImg = styled('img')(
  ({ grid, isTall }: { grid: string; isTall: boolean }) => ({
    gridArea: grid,
    // height: isTall ? '790px' : '380px',
    height: '100%',
    width: '100%',
    maxWidth: '554px',
  })
);
