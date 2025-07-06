import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const StyledSection = styled('section')(() => ({
  backgroundColor: '#F5F5F5',
  paddingBottom: '20px',
  paddingTop: '50px',
}));

export const StyledH1 = styled(Typography)(() => ({
  fontFamily: 'Playfair Display',
//   textTransform: 'uppercase',
  color: '#000000',
  textAlign: 'center',
}));

export const StyledP = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontWeight: 400,
  lineHeight: '120%',
  color: '#000000',
  textAlign: 'left',
  position: 'relative',
  paddingLeft: '2rem',
}));

export const StyledUl = styled('ul')(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '30px 0',
  gap: '10px',
  listStyle: 'none',
  padding: 0,
}));

export const StyledLi = styled('li')<{ isActive: boolean }>(({ isActive }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 25px',
  maxWidth: '1085px',

}));

export const StyledHiddenContainer = styled('div')(() => ({
  marginTop: '15px',
  paddingTop: '15px',
//   borderTop: '1px solid #e0e0e0',
}));

export const StyledTextContainer = styled('div')(() => ({
 
}));

export const StyledArrowWrapper = styled('div')<{ isActive: boolean }>(({ isActive }) => ({
    right: '100px',
    top: '0',
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease',
}));

export const StyledTextWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}));




