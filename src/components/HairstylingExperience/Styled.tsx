import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({
  width: '100%',
  paddingBottom: '100px',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1500px',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
}));

// export const StyledH1 = styled(Typography)(() => ({
//   fontFamily: 'Montserrat',
//   textTransform: 'uppercase',
//   fontWeight: 500,
//   color: '#000000',
//   textAlign: 'center',
//   marginBottom: '10px',
//   marginTop: '20px',
// }));

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
  textTransform: 'lowercase',
  marginBottom: '30px',
}));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontStyle: 'italic',
  color: '#000000',
  lineHeight: '30px',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '30px',
  letterSpacing: '1px',
  maxWidth: '200px',
}));


export const StyledUl = styled('ul')(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(15, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  rowGap: '30px',
  columnGap: '40px',
  marginBottom: '30px',
}));

export const StyledLi = styled('li')<{ gridArea: string }>(({ gridArea }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  columnGap: '40px',
  gridArea: gridArea,
  maxHeight: '300px',
}));