import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({
  backgroundColor: '#F5F5F5',
//   paddingTop: '1px',
  paddingBottom: '20px',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr',
  gap: '10%',
}));

export const StyledWrapperLeft = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

export const StyledWrapperRight = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  fontWeight: 400,
  color: '#000000',
  textAlign: 'left',
  maxWidth: '500px',
//   marginBottom: '10px',
//   marginTop: '20px',
}));

export const StyledH2 = styled(Typography)(() => ({
    fontFamily: 'Great Vibes',
    color: '#F49D6A',
    textAlign: 'right',
    textTransform: 'lowercase',
}));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  color: '#000000',
}));

export const StyledPOrange = styled(Typography)(() => ({
    fontFamily: 'Great Vibes',
    fontSize: '32px',
    color: '#F49D6A',
  }));


export const StyleUL = styled('ul')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '10px',
}));    

export const StyledLi = styled('li')(() => ({
    fontFamily: 'Montserrat',
    color: '#000000',
    lineHeight: '120%',
}));

export const StyledImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '10px',
}));

export const StyledText = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
justifyContent: 'center',
alignItems: 'center',
}));



