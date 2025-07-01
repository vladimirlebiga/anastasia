import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({
    width: '100%',
    paddingBottom: '100px',
    // paddingTop: '60px',
  }));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  // textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
  marginBottom: '10px',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '2fr 1fr 1fr',
  gap: '20px',
  // alignItems: 'center',
  // justifyContent: 'center',
}));

export const StyledP1 = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  lineHeight: '180%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
}));

export const StyledP2 = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  lineHeight: '180%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  maxWidth: '100px',
}));

export const StyledP3 = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  lineHeight: '180%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
  maxWidth: '150px',
}));