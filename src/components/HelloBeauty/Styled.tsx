import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const StyledSection = styled('section')(() => ({
    // backgroundColor: '#F5F5F5',
    paddingTop: '20px',
    paddingBottom: '60px',
  }));

  export const StyledWrapper = styled('div')(() => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1.5fr',
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
    fontFamily: 'Great Vibes',
    color: '#F49D6A',
    textAlign: 'left',
    // textTransform: 'lowercase',
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