import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({
  width: '100%',
  paddingBottom: '60px',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  // maxWidth: '900px',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
}));

export const StyledH2 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  color: '#000000',
  textAlign: 'center',
  textTransform: 'uppercase',
}));

export const StyledH3 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
  letterSpacing: '3px',
  textTransform: 'lowercase',
  width: '100%',
  display: 'block',
  marginLeft: '25%',
}));

export const StyledH4 = styled(Typography)(() => ({
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#000000',
    lineHeight: '30px',
    textAlign: 'center',
    marginTop: '30px',
    letterSpacing: '1px',
  }));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  color: '#000000',
  lineHeight: '30px',
  display: 'inline', // <-- Add this line
  letterSpacing: '1px',
}));

export const StyledUl = styled('ul')(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  maxWidth: '500px',
}));


export const StyledLi = styled('li')(() => ({
  listStyle: 'disc',
  textAlign: 'left',
}));

export const StyledLink = styled('a')(({ decoration }: { decoration: string }) => ({
  textDecoration: decoration,
  color: '#000000',
  
}));
