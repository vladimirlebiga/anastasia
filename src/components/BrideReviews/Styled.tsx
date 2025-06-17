import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({

  paddingTop: '50px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
}));

export const StyledH2 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
}));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'center',
}));


export const StyledList = styled('ul')(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '50px',
    marginTop: '60px',
    marginBottom: '12px',
}));

export const StyledItem = styled('li')(() => ({
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

export const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


// export const StyledImg = styled('img')(() => ({
//   // maxWidth: '414px',
//   // width: '100%',
//   // maxHeight: '528px',
//   borderRadius: '10px',
//   objectFit: 'cover',
//   objectPosition: 'center',
// }));
