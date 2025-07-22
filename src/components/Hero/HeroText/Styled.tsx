import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledHeroTextWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'services'
})(({services}: {services?: boolean}) => ({
    position: 'absolute',
    paddingTop: services ? '150px' : '300px', // Reduced from 100px/300px to move higher
    // top: services ? '50px' : '150px', // Alternative using top instead of paddingTop
    // bottom: services ? '0' : '200px',
    left: '-10%',
    width: services ? '600px' : 'auto',

}));

export const StyledH1 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'services'
})(({services}: {services?: boolean}) => ({
    fontSize: services ? '40px' : '64px',
    textAlign : services ? 'center' : 'left',
    marginBottom: services ? '20px' : '0',
    letterSpacing: services ? '2px' : '0',
}));

export const StyledH3 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'services'
})(({services}: {services?: boolean}) => ({
    fontSize: services ? '40px' : '48px',
    textAlign : services ? 'center' : 'right',
    letterSpacing: services ? '1px' : '0',
    width: services ? '520px' : 'auto',
    // // left: services ? '-20%' : '0',
    paddingLeft: services ? '60px' : '0',
  
}));

export const StyledButtonContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
}));
