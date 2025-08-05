import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledHeroTextWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'services' && prop !== 'isMobile',
})(({ services, isMobile }: { services?: boolean; isMobile?: boolean }) => ({
  position: 'absolute',
  paddingTop: isMobile ? '5rem' : services ? '150px' : '300px', // Reduced from 100px/300px to move higher
  // top: services ? '50px' : '150px', // Alternative using top instead of paddingTop
  // bottom: services ? '0' : '200px',
  left: isMobile ? '5%' : '-10%',
  width: services ? '600px' : 'auto',
  zIndex: 100,
}));

export const StyledH1 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'services' && prop !== 'isMobile',
})(({ services, isMobile }: { services?: boolean; isMobile?: boolean }) => ({
  display: isMobile ? 'none' : 'block',
  fontSize: services ? '40px' : '64px',
  textAlign: services ? 'center' : 'left',
  marginBottom: services ? '20px' : '0',
  letterSpacing: services ? '2px' : '0',
}));

export const StyledH3 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'services' && prop !== 'isMobile'
})(({ services, isMobile }: { services?: boolean; isMobile?: boolean }) => ({
  display: isMobile ? 'none' : 'block',
  fontSize: services ? '40px' : '48px',
  textAlign: services ? 'center' : 'right',
  letterSpacing: services ? '1px' : '0',
  width: services ? '520px' : 'auto',
  paddingLeft: services ? '60px' : '0',
}));

export const StyledButtonContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '50px',
}));
