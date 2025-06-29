import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({
  paddingTop: '50px',
  paddingBottom: '70px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
//   marginBottom: '60px',
}));

export const StyledH2 = styled(Typography)(() => ({
    fontFamily: 'Great Vibes',
    color: '#F49D6A',
    textAlign: 'center',
    textTransform: 'lowercase',
      marginBottom: '30px',
  }));

export const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '10px',
}));
