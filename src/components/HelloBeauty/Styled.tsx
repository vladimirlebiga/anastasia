import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<{ isMobile: boolean }>(({ isMobile }) => ({
    // backgroundColor: '#F5F5F5',
    paddingTop: '20px',
    paddingBottom: isMobile ? '10px' : '60px',
  }));

  export const StyledWrapper = styled('div', {
    shouldForwardProp: (prop) => prop !== 'isMobile',
  })<{ isMobile: boolean }>(({ isMobile }) => ({
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
    gridTemplateRows: isMobile ? 'repeat(11, 1fr)' : 'repeat(5, 1fr)',
    gap: isMobile ? '0' : '10%',
  }));

  export const StyledWrapperLeft = styled('div', {
    shouldForwardProp: (prop) => prop !== 'isMobile',
  })<{ isMobile: boolean }>(({ isMobile }) => ({
    gridArea: isMobile ? '2 / 1 / 7 / 2' : '1 / 1 / 6 / 2',
    width: isMobile ? '264px' : 'auto',
    height: isMobile ? '264px' : 'auto',
    margin: isMobile ? '0 auto' : '0',
    
  }));
  
  export const StyledWrapperRight = styled('div', {
    shouldForwardProp: (prop) => prop !== 'isMobile',
  })<{ isMobile: boolean }>(({ isMobile }) => ({
    gridArea: isMobile ? '8 / 1 / 12 / 2' : '2 / 2 / 6 / 3',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  }));

  export const StyledH1 = styled(Typography, {
    shouldForwardProp: (prop) => prop !== 'isMobile',
  })<{ isMobile: boolean }>(({ isMobile }) => ({
    gridArea: isMobile ? '1 / 1 / 2 / 2' : '1 / 2 / 2 / 3',
    fontFamily: 'Great Vibes',
    color: '#F49D6A',
    textAlign: 'left',
    fontSize: isMobile ? '40px !important' : '48px',
    margin: isMobile ? '0 auto' : '0',
}));

export const StyledP = styled(Typography)(() => ({
    fontFamily: 'Montserrat',
    color: '#000000',
  }));

  export const StyledImage = styled('img')(() => ({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
  }));

  export const StyledSpan = styled('span')(() => ({
    fontFamily: 'Montserrat',
    fontWeight: 500,
    color: '#000000',
  }));

  export const StyledButtonWrapper = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10px',
  }));
  