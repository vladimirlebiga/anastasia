import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const StyledSection = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  backgroundColor: '#E8D1C5',
  paddingBottom: isMobile ? '0' : '20px',
  paddingTop: isMobile ? '0' : '40px',
}));

export const StyledH1 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Playfair Display',
  textTransform: 'uppercase',
  color: '#000000',
  textAlign: isMobile ? 'center' : 'left',
  margin: isMobile ? '0 50px' : '0',
}));

export const StyledH2 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  fontWeight: 500,
  fontSize: '16px',
  lineHeight: '136%',
  color: '#000000',
  textAlign: isMobile ? 'center' : 'left',
  position: 'relative',
  paddingBottom: isMobile ? '1rem' : '3rem',
   margin: isMobile ? '0 50px' : '0',
}));


export const StyledP = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  fontSize: '16px',
  lineHeight: '136%',
  paddingLeft: isMobile ? '0' : '2rem',
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

export const StyledWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: 'grid',
  gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr',
  gridTemplateRows: isMobile ? '1fr 1.5fr' : '1fr',
  gap: isMobile ? '0' : '10%',
}));

export const StyledWrapperLeft = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: isMobile ? 'center' : 'flex-start',
  justifyContent: 'flex-start',
  margin: '20px auto',
  gridArea: isMobile ? '2 / 1 / 3 / 2' : '1 / 1 / 2 / 2',
  padding: isMobile ? '0 20px' : '0',
}));

export const StyledWrapperRight = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  gridArea: isMobile ? '1 / 1 / 2 / 2' : '1 / 2 / 2 / 3',
}));

export const StyledImgWrapper = styled('div')(() => ({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // width: '100%',
  // height: '100%',
}));

export const StyledImg = styled('img', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  // maxWidth: '414px',
  width: '100%',
  maxHeight: isMobile ? '200px' : '520px',
  borderRadius: isMobile ? '0' : '10px',
  objectFit: 'cover',
  objectPosition: 'center',
}));
