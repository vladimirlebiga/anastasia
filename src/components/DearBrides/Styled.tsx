import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const StyledSection = styled('section')(() => ({
  backgroundColor: '#E8D1C5',
  paddingBottom: '20px',
  paddingTop: '40px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'left',
}));

export const StyledH2 = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '136%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingBottom: '3rem',
  // paddingLeft: '2rem',
}));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontSize: '16px',
  lineHeight: '136%',
  paddingLeft: '2rem',
  paddingBottom: '1rem',
}));

export const StyledButtonWrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '40px',
  marginBottom: '40px',
}));

export const StyledButton = styled(Button)(() => ({
  //   width: '300px',
  paddingLeft: '60px',
  paddingRight: '60px',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr',
  gap: '10%',
  // backgroundColor: '#E8D1C5',
}));

export const StyledWrapperLeft = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  margin: '0 auto',
}));

export const StyledWrapperRight = styled('div')(() => ({

}));

export const StyledImgWrapper = styled('div')(() => ({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // width: '100%',
  // height: '100%',
}));

export const StyledImg = styled('img')(() => ({
  maxWidth: '414px',
  width: '100%',
  maxHeight: '520px',
  borderRadius: '10px',
  objectFit: 'cover',
  objectPosition: 'center',
}));
