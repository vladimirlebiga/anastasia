import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section', {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  width: '100%',
  marginTop: isMobile ? '20px' : '60px',
}));

export const StyledWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  //   marginTop: '20px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  textTransform: 'uppercase',
  fontWeight: 500,
  color: '#000000',
  textAlign: 'center',
  marginBottom: '10px',
  marginTop: '20px',
}));

export const StyledH2 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  textAlign: 'center',
  minHeight: isMobile ? '20px' : '76px',
}));

export const StyleSpan = styled('span')(
  ({ isMobile }: { isMobile: boolean }) => ({
    fontFamily: 'Great Vibes',
    fontSize: isMobile ? '20px' : '40px',
  })
);

export const StyledH3 = styled(Typography)(() => ({
  fontFamily: 'Great Vibes',
  color: '#F49D6A',
  textAlign: 'center',
  textTransform: 'lowercase',
}));

export const StyledP = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  //   fontStyle: 'italic',
  color: '#000000',
  lineHeight: '30px',
  textAlign: 'center',
  marginTop: isMobile ? '0' : '10px',
  marginBottom: isMobile ? '0' : '30px',
}));

export const StyledP1 = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})(({ isMobile }: { isMobile: boolean }) => ({
  fontFamily: 'Montserrat',
  textTransform: 'uppercase',
  color: 'rgba(0, 0, 0, 0.5)',
  letterSpacing: '3px',
  lineHeight: '30px',
  textAlign: 'center',
  marginTop: isMobile ? '0' : '10px',
  marginBottom: isMobile ? '0' : '30px',
}));

export const StyledUl = styled('ul')<{ isMobile: boolean }>(({ isMobile }) => ({
  display: 'grid',
  gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
  gap: '20px',
  width: '100%',
  marginBottom: '20px',
}));

export const StyledLi = styled('li')<{ isActive: boolean; isMobile: boolean }>(
  ({ isActive, isMobile }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: isMobile ? '300px' : isActive ? '1206px' : 'auto',
    borderRadius: '10px',
    border: '1px solid #AEA8A8',
    backgroundColor: '#F5F5F5',
    padding: '20px',
    alignItems: 'center',
  })
);

export const StyledImage = styled('img')<{ isMobile: boolean }>(
  ({ isMobile }) => ({
    width: '100%',
    height: isMobile ? '150px' : '230px',
    maxWidth: isMobile ? '150px' : '230px',
    marginBottom: '10px',
    borderRadius: '10px',
  })
);

export const StyledHiddenContainer = styled('div')({
  marginTop: '10px',
});

export const StyledTextList = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  textTransform: 'uppercase',
  fontWeight: 600,
  letterSpacing: '1px',
  color: '#000000',
  lineHeight: '30px',
  textAlign: 'center',
  paddingBottom: '10px',
  borderBottom: '2px solid #E8D1C5',
}));

export const StyledTextItem = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  color: '#000000',
  lineHeight: '30px',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '30px',
  borderBottom: '2px solid #E8D1C5',
  paddingBottom: '5px',
}));

export const StyledArrowWrapper = styled('div')<{ isActive: boolean, isMobile: boolean }>(
  ({ isActive, isMobile }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
    marginTop: isMobile ? '20px' : 'auto',
    paddingTop: isMobile ? '0' : '20px',
  })
);

