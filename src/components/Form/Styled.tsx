import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledSection = styled('section')(() => ({
  paddingTop: '50px',
  paddingBottom: '50px',
}));

export const StyledButtonWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '60px',
  maxWidth: '300px',
  margin: '0 auto',
}));

export const StyledFormWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  padding: '16px 0',
  width: '100%',
  maxWidth: '750px',
  margin: '0 auto',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  fontSize: '40px',
  color: '#000000',
  textAlign: 'center',
  marginBottom: '20px',
}));
