import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isMobile'
})(({ isMobile }: { isMobile: boolean }) => ({
  paddingTop: isMobile ? '20px' : '50px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
  marginBottom: '60px',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
}));
