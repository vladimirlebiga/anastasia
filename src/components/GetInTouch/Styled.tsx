import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const StyledSection = styled('section')(() => ({
  backgroundColor: '#E8D1C5',
//   paddingBottom: '20px',
//   paddingTop: '40px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
  paddingTop: '70px',
  paddingBottom: '40px',
}));


export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontSize: '24px',
  lineHeight: '136%',
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
  gridTemplateColumns: '1fr 1fr',
  gap: '60px',
  // backgroundColor: '#E8D1C5',
}));

// export const StyledWrapperLeft = styled('div')(() => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-start',
//   justifyContent: 'flex-start',
//   margin: '0 auto',
// }));

export const StyledWrapperRight = styled('div')(() => ({

}));

export const StyledImgWrapper = styled('div')(() => ({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // width: '100%',
  // height: '100%',
}));

export const StyledImg = styled('div')(() => ({
  backgroundImage: "url('/img/portfolio/get_in_touch.jpg')",
  width: '780px',
  height: '520px',
  borderRadius: '10px',
  objectFit: 'cover',
  objectPosition: 'center',
}));
